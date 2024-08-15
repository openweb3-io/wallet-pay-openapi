package io.openweb3.walletpay;

import io.openweb3.walletpay.exceptions.ApiException;
import io.openweb3.walletpay.internal.api.CurrencyApi;
import io.openweb3.walletpay.models.CurrencyOut;
import io.openweb3.walletpay.models.ListResponseCurrencyOut;

public final class Currency {
	private final CurrencyApi api;

	Currency() {
		api = new CurrencyApi();
	}

	public ListResponseCurrencyOut list(final String appId, final CurrencyListOptions options) throws ApiException {
		try {
			return api.v1CurrencyList(appId, options.getSize(), options.getPage(), options.getRated()).getData();
		} catch (io.openweb3.walletpay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

	// find by code
	public CurrencyOut findByCode(final String appId, final String code) throws ApiException {
		try {
			return api.v1CurrencyFindByCode(appId, code).getData();
		} catch (io.openweb3.walletpay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}
}
