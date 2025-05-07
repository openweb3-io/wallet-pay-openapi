package io.openweb3.walletpay;

import io.openweb3.walletpay.exceptions.ApiException;
import io.openweb3.walletpay.internal.api.CurrenciesApi;
import io.openweb3.walletpay.models.Currency;
import io.openweb3.walletpay.models.CursorPageCurrency;

public final class Currencies {
	private final CurrenciesApi api;

	Currencies() {
		api = new CurrenciesApi();
	}

	public CursorPageCurrency list(final CurrencyListOptions options) throws ApiException {
		try {
			return api.v1CurrenciesList(options.getLimit(), options.getCursor(), options.getAppId(), options.getRated());
		} catch (io.openweb3.walletpay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

	// find by code
	public Currency findByCode(final String code) throws ApiException {
		try {
			return api.v1CurrenciesRetrieve(code);
		} catch (io.openweb3.walletpay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}
}
