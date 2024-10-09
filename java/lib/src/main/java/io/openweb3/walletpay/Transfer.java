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

	public TransferOut create(final TransferIn transferIn) throws ApiException {
		return this.create(transferIn, new PostOptions());
	}

	public TransferOut create(final TransferIn transferIn, final PostOptions options) throws ApiException {
		try {
			return api.v1TransferCreate(transferIn).getData();
		} catch (io.openweb3.walletpay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}
}