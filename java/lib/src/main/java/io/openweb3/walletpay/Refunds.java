package io.openweb3.walletpay;

import io.openweb3.walletpay.exceptions.ApiException;
import io.openweb3.walletpay.internal.api.RefundsApi;
import io.openweb3.walletpay.models.CreateRefundRequest;
import io.openweb3.walletpay.models.PageRefund;
import io.openweb3.walletpay.models.Refund;

public final class Refunds {
    private final RefundsApi api;

    Refunds() {
        api = new RefundsApi();
    }

    public PageRefund list(final RefundListOptions options) throws ApiException {
        try {
            return api.v1RefundsList(options.getPage(), options.getSize(), options.getOrderId());
        } catch (io.openweb3.walletpay.internal.ApiException e) {
            throw Utils.WrapInternalApiException(e);
        }
    }

    public Refund create(final CreateRefundRequest refundIn) throws ApiException {
        return this.create(refundIn, new PostOptions());
    }

    public Refund create(final CreateRefundRequest refundIn, final PostOptions options) throws ApiException {
        try {
            return api.v1RefundsCreate(refundIn);
        } catch (io.openweb3.walletpay.internal.ApiException e) {
            throw Utils.WrapInternalApiException(e);
        }
    }

    public Refund retrieve(final String idOrUid) throws ApiException {
        try {
            return api.v1RefundsRetrieve(idOrUid);
        } catch (io.openweb3.walletpay.internal.ApiException e) {
            throw Utils.WrapInternalApiException(e);
        }
    }
}