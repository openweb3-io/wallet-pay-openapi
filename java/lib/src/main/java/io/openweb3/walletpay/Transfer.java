package io.openweb3.walletpay;

import io.openweb3.walletpay.exceptions.ApiException;
import io.openweb3.walletpay.internal.api.TransferApi;
import io.openweb3.walletpay.models.TransferIn;
import io.openweb3.walletpay.models.TransferOut;

public final class Transfer {
	private final TransferApi api;

	Transfer() {
		api = new TransferApi();
	}

	public TransferOut transfer(final String appId, final TransferIn TransferIn) throws ApiException {
		return this.transfer(appId, TransferIn, new PostOptions());
	}

	public TransferOut transfer(final String appId, final TransferIn TransferIn, final PostOptions options) throws ApiException {
		try {
			return api.v1TransferCreate(appId, TransferIn).getData();
		} catch (io.openweb3.walletpay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}
}