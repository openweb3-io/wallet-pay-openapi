package io.openweb3.walletpay;

public final class WalletPayClientOptions {
	private static final String DEFAULT_URL = "https://api.wallet-pay.openweb3.io";

	private boolean debug = false;
	private String serverUrl = DEFAULT_URL;

	private String apiKey;
	private String privateKey;

	public WalletPayClientOptions() {
	}

	public WalletPayClientOptions debug(final boolean debug) {
		this.debug = debug;
		return this;
	}

	public WalletPayClientOptions serverUrl(final String serverUrl) {
		this.serverUrl = serverUrl;
		return this;
	}

	public WalletPayClientOptions apiKey(final String apiKey) {
		this.apiKey = apiKey;
		return this;
	}

	public WalletPayClientOptions privateKey(final String privateKey) {
		this.privateKey = privateKey;
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

	public void setPrivateKey(final String privateKey) {
		this.privateKey = privateKey;
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

	public String getPrivateKey() {
		return privateKey;
	}
}
