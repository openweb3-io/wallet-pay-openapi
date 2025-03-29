package io.openweb3.walletpay;

public final class ApiClientOptions {
	private static final String DEFAULT_URL = "https://api.wallet-pay.openweb3.io";

	private boolean debug = false;
	private String serverUrl = DEFAULT_URL;

	private String apiKey;
	private String secret;

	public ApiClientOptions() {
	}

	public ApiClientOptions debug(final boolean debug) {
		this.debug = debug;
		return this;
	}

	public ApiClientOptions serverUrl(final String serverUrl) {
		this.serverUrl = serverUrl;
		return this;
	}

	public ApiClientOptions apiKey(final String apiKey) {
		this.apiKey = apiKey;
		return this;
	}

	public ApiClientOptions privateKey(final String privateKey) {
		this.secret = privateKey;
		return this;
	}

	public void setDebug(final boolean debug) {
		this.debug = debug;
	}

	public void setServerUrl(final String serverUrl) {
		this.serverUrl = serverUrl;
	}

	public void setApiKey(final String apiKey) {
		this.apiKey = apiKey;
	}

	public void setSecret(final String secret) {
		this.secret = secret;
	}

	public boolean getDebug() {
		return debug;
	}

	public String getServerUrl() {
		return serverUrl;
	}

	public String getApiKey() {
		return apiKey;
	}

	public String getSecret() {
		return secret;
	}
}
