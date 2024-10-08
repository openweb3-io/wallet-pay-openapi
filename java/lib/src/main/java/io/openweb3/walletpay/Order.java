package io.openweb3.walletpay;

import io.openweb3.walletpay.exceptions.ApiException;
import io.openweb3.walletpay.internal.api.OrderApi;
import io.openweb3.walletpay.models.OrderIn;
import io.openweb3.walletpay.models.OrderOut;
import io.openweb3.walletpay.models.ListResponseOrderOut;

public final class Order {
	private final OrderApi api;

	Order() {
		api = new OrderApi();
	}

	public ListResponseOrderOut list(final OrderListOptions options) throws ApiException {
		try {
			return api.v1OrderList(options.getSize(), 
			options.getPage(), options.getWalletId(), 
			options.getCurrency(), options.getStatus()).getData();
		} catch (io.openweb3.walletpay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

	public OrderOut create(final OrderIn orderIn) throws ApiException {
		return this.create(orderIn, new PostOptions());
	}

	public OrderOut create(final OrderIn orderIn, final PostOptions options) throws ApiException {
		try {
			return api.v1OrderCreate(orderIn).getData();
		} catch (io.openweb3.walletpay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}
	public OrderOut retrieve(final String idOrUid) throws ApiException {
		try {
			return api.v1OrderGet(idOrUid).getData();
		} catch (io.openweb3.walletpay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}
}