package io.openweb3.walletpay;

import io.openweb3.walletpay.internal.ApiClient;
import io.openweb3.walletpay.internal.ApiCallback;
import io.openweb3.walletpay.internal.Configuration;
import io.openweb3.walletpay.internal.ProgressResponseBody;
import io.openweb3.walletpay.internal.auth.ApiKeyAuth;
import okhttp3.*;
import okio.Buffer;
import org.jetbrains.annotations.NotNull;

import java.io.*;
import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.security.*;
import java.security.interfaces.RSAPrivateKey;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.PKCS8EncodedKeySpec;
import java.util.Base64;

import io.openweb3.walletpay.exceptions.SigningException;
import java.io.IOException;

public final class WalletPayClient {
	public static final String VERSION = "0.2.0";
	private final Order order;
	private final Endpoint endpoint;
	private final Currency currency;
	private final Transfer transfer;
	private final Rate  rate;
	// private final Refund refund;

	public WalletPayClient(final WalletPayClientOptions options) throws Exception {
		OkHttpClient.Builder builder = new OkHttpClient.Builder();
        builder.addNetworkInterceptor(getProgressInterceptor());
		builder.addInterceptor(new Interceptor() {
			@NotNull
			@Override
			public Response intercept(@NotNull Chain chain) throws IOException {
				Request originalRequest = chain.request();
				Request.Builder builder = originalRequest.newBuilder();

				String timestamp = String.format("%d",System.currentTimeMillis());
				builder.header("x-request-time",timestamp);

				String path = originalRequest.url().encodedPath();
				String query = originalRequest.url().encodedQuery();
				String uri = path;
                if (query != null && !query.isEmpty()) {
					uri += "?" + query;
				}

				String body = "";
				if (originalRequest.body() != null) {
					RequestBody oldBody = originalRequest.body();
					Buffer buffer = new Buffer();
					oldBody.writeTo(buffer);
					body = buffer.readUtf8();

					// 重新构建 RequestBody
					RequestBody newRequestBody = RequestBody.create(body, oldBody.contentType());
					builder.method(originalRequest.method(), newRequestBody);
				}

				// 计算请求的 SHA-256 签名
				String signature = null;
				try {
					String content = String.format("%s%s%s", body, uri, timestamp);
					signature = Utils.signWithEd25519(options.getPrivateKey(), content);
				} catch (SigningException e) {
					throw new RuntimeException(e);
				}
                if (signature != null) {
					// 将签名添加到请求头
					builder.header("x-signature", signature);
				}

				Request newRequest = builder.build();
				return chain.proceed(newRequest);
			}
		});

		OkHttpClient httpClient = builder.build();

		ApiClient apiClient = new ApiClient(httpClient);
		apiClient.setBasePath(options.getServerUrl());
		apiClient.setUserAgent(String.format("pay-libs/%s/java", VERSION));
		ApiKeyAuth apiKeyAuth = (ApiKeyAuth) apiClient.getAuthentication("ApiKeyAuth");
		apiKeyAuth.setApiKey(options.getApiKey());

		Configuration.setDefaultApiClient(apiClient);

		this.order = new Order();
		this.endpoint = new Endpoint();
		this.currency = new Currency();
		this.transfer = new Transfer();
		this.rate = new Rate();
		// this.refund = new Refund();
	}

	private Interceptor getProgressInterceptor() {
		return new Interceptor() {
			@NotNull
			@Override
			public Response intercept(@NotNull Interceptor.Chain chain) throws IOException {
				final Request request = chain.request();
				final Response originalResponse = chain.proceed(request);
				if (request.tag() instanceof ApiCallback) {
					final ApiCallback callback = (ApiCallback) request.tag();
					return originalResponse.newBuilder()
							.body(new ProgressResponseBody(originalResponse.body(), callback))
							.build();
				}
				return originalResponse;
			}
		};
	}

	public Order getOrder() {
		return order;
	}

	public Endpoint getEndpoint() {
		return endpoint;
	}

	public Currency getCurrency() {
		return currency;
	}

	public Transfer getTransfer() {
		return transfer;
	}

	public Rate getRate() {
		return rate;
	}

	// public Refund getRefund() {
	// 	return refund;
	// }
}
