package io.openweb3.walletpay;

import java.net.http.HttpHeaders;
import java.nio.charset.StandardCharsets;
import java.security.InvalidKeyException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;
import java.util.Optional;
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

import java.io.*;
import java.security.KeyFactory;
import java.security.PublicKey;
import java.security.Signature;
import java.security.SignatureException;
import java.security.spec.X509EncodedKeySpec;

import io.openweb3.walletpay.exceptions.VerificationException;

public final class Webhook {
    private final String publicKeyPath;

	public Webhook(final String publicKeyPath) {
        this.publicKeyPath = publicKeyPath;
	}

	public boolean verify(final String payload, final String signature) throws VerificationException {
		try {
			return verifyData(payload, signature, this.getPubKey());
		} catch (Exception e) {
			throw new VerificationException("Signature verify failed");
		}
	}

    private static boolean verifyData(String dataString, String signatureString, PublicKey publicKey)
            throws NoSuchAlgorithmException, InvalidKeyException, SignatureException, UnsupportedEncodingException {
        signatureString = signatureString.replace("[\r\n]", "");
        byte[] signatureBytes = Base64.getDecoder().decode(signatureString);
        Signature signature = Signature.getInstance("SHA256withRSA");
        signature.initVerify(publicKey);
        signature.update(dataString.getBytes(StandardCharsets.UTF_8));
        return signature.verify(signatureBytes);
    }

    private PublicKey getPubKey() throws Exception {
        String pubKeyString = Utils.getStringFromFile(this.publicKeyPath);
        pubKeyString = pubKeyString.replaceAll("(-+BEGIN PUBLIC KEY-+\\r?\\n|-+END PUBLIC KEY-+\\r?\\n?|\\r|\\n)", "");
        byte[] keyBytes = Base64.getDecoder().decode(pubKeyString.getBytes(StandardCharsets.UTF_8));

        // generate public key
        X509EncodedKeySpec spec = new X509EncodedKeySpec(keyBytes);
        KeyFactory keyFactory = KeyFactory.getInstance("RSA");

        return keyFactory.generatePublic(spec);
    }
}
