package io.openweb3.walletpay;

import io.openweb3.walletpay.exceptions.ApiException;
import io.openweb3.walletpay.internal.api.TransfersApi;
import io.openweb3.walletpay.models.TransferRequest;
import io.openweb3.walletpay.models.TransferResponse;

public final class Transfers {
	private final TransfersApi api;

	Transfers() {
		api = new TransfersApi();
	}

	public TransferResponse create(final TransferRequest transferIn) throws ApiException {
		return this.create(transferIn, new PostOptions());
	}

	public TransferResponse create(final TransferRequest transferIn, final PostOptions options) throws ApiException {
		try {
			return api.v1TransfersTransfer(transferIn);
		} catch (io.openweb3.walletpay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}
}