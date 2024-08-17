package io.openweb3.walletpay;

import io.openweb3.walletpay.exceptions.ApiException;
import io.openweb3.walletpay.internal.api.RefundApi;
import io.openweb3.walletpay.models.RefundIn;
import io.openweb3.walletpay.models.RefundOut;
import io.openweb3.walletpay.models.ListResponseRefundOut;

public final class Refund {
	private final RefundApi api;

	Refund() {
		api = new RefundApi();
	}

	public ListResponseRefundOut list(final String appId, final RefundListOptions options) throws ApiException {
		try {
			return api.v1RefundList(appId, options.getSize(), 
			options.getPage(), options.getOrderId()).getData();
		} catch (io.openweb3.walletpay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

	public RefundOut create(final String appId, final RefundIn RefundIn) throws ApiException {
		return this.create(appId, RefundIn, new PostOptions());
	}

	public RefundOut create(final String appId, final RefundIn RefundIn, final PostOptions options) throws ApiException {
		try {
			return api.v1RefundCreate(appId, RefundIn).getData();
		} catch (io.openweb3.walletpay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}
	public RefundOut retrieve(final String appId, final String idOrUid) throws ApiException {
		try {
			return api.v1RefundGet(appId, idOrUid).getData();
		} catch (io.openweb3.walletpay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}
}