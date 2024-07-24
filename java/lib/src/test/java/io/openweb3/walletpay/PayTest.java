package io.openweb3.walletpay;

import org.junit.Test;
import io.openweb3.walletpay.*;
import io.openweb3.walletpay.models.*;
import java.io.*;
import java.nio.charset.StandardCharsets;

public class PayTest {

    @Test
    public void testPay() throws Exception {
        // create order
        final String apikey = "YOUR APIKEY";
        final String privateKeyPath = "./res/your_rsa_private_key.pem";
        final String appId = "YOUR APP ID";

        Pay pay = new Pay(apikey, privateKeyPath);
        final OrderOut orderInfo = pay.getOrder().create(appId,
            new OrderIn().amount("0.187").currency("ton")
        );
        System.out.println("orderInfo: " + orderInfo);


        // verify webhook
        final String publicKeyPath = "./res/wallet_public_key.pem";
        final String payloadDataPath = "./res/webhook_post_data.json";
        final String signaturePath = "./res/webhook_x_signature.txt";

        // 该数据请从 request 中获取原始 POST 请求数据, 以下仅作为示例
        final String payload = getStringFromFile(payloadDataPath);
        System.out.println("payload: " + payload);

        // 签名数据请从 request 的 header 中获取, 默认的 key 为 x-signature (请忽略大小写, 建议自己做格式化)
        final String signature = getStringFromFile(signaturePath);

        Webhook webhook = new Webhook(publicKeyPath);
        boolean ok = webhook.verify(payload, signature);
        System.out.println("verify " + (ok ? "success" : "fail"));
    }

    private static String getStringFromFile(String filePath) throws Exception {
        FileInputStream in = new FileInputStream(filePath);
        InputStreamReader inReader = new InputStreamReader(in, StandardCharsets.UTF_8);
        BufferedReader bf = new BufferedReader(inReader);
        StringBuilder sb = new StringBuilder();
        String line;
        do {
            line = bf.readLine();
            if (line != null) {
                if (sb.length() != 0) {
                    sb.append("\n");
                }
                sb.append(line);
            }
        } while (line != null);

        return sb.toString();
    }
}
