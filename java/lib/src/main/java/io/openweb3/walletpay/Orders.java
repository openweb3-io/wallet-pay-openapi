package io.openweb3.walletpay;

import io.openweb3.walletpay.exceptions.ApiException;
import io.openweb3.walletpay.internal.api.OrdersApi;
import io.openweb3.walletpay.models.CreateOrderRequest;
import io.openweb3.walletpay.models.Order;
import io.openweb3.walletpay.models.PageOrder;

public final class Orders {
	private final OrdersApi api;

	Orders() {
		api = new OrdersApi();
	}

	public PageOrder list(final OrderListOptions options) throws ApiException {
		try {
			return api.v1OrdersList(options.getSize(),options.getPage(),
			 options.getWalletId(),
			options.getCurrency(), options.getUserId(), options.getStatus(), options.getCreator());
		} catch (io.openweb3.walletpay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

	public Order create(final CreateOrderRequest orderIn) throws ApiException {
		return this.create(orderIn, new PostOptions());
	}

	public Order create(final CreateOrderRequest orderIn, final PostOptions options) throws ApiException {
		try {
			return api.v1OrdersCreate(orderIn);
		} catch (io.openweb3.walletpay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}
	public Order retrieve(final String idOrUid) throws ApiException {
		try {
			return api.v1OrdersRetrieve(idOrUid);
		} catch (io.openweb3.walletpay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}
}