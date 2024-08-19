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
    private final String publicKey;

	public Webhook(final String publicKey) {
        this.publicKey = publicKey;
	}

	public boolean verify(final String payload, final String signature) throws VerificationException {
        try {
			return Utils.verify(payload, signature, this.publicKey);
		} catch (Exception e) {
			throw new VerificationException(e.getMessage());
		}
	}
}
