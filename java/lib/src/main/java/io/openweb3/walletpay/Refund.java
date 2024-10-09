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

	public ListResponseRefundOut list(final RefundListOptions options) throws ApiException {
		try {
			return api.v1RefundList(options.getSize(), 
			options.getPage(), options.getOrderId()).getData();
		} catch (io.openweb3.walletpay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

	public RefundOut create(final RefundIn refundIn) throws ApiException {
		return this.create(refundIn, new PostOptions());
	}

	public RefundOut create(final RefundIn refundIn, final PostOptions options) throws ApiException {
		try {
			return api.v1RefundCreate(refundIn).getData();
		} catch (io.openweb3.walletpay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}
	public RefundOut retrieve(final String idOrUid) throws ApiException {
		try {
			return api.v1RefundGet(idOrUid).getData();
		} catch (io.openweb3.walletpay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}
}