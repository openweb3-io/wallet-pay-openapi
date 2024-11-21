package io.openweb3.walletpay;

import io.openweb3.walletpay.exceptions.ApiException;
import io.openweb3.walletpay.internal.api.RateApi;
import io.openweb3.walletpay.models.RatesOut;
import io.openweb3.walletpay.models.EstimateOut;
import io.openweb3.walletpay.models.GetRatesIn;

public final class Rate {
	private final RateApi api;

	Rate() {
		api = new RateApi();
	}

	public EstimateOut estimate(final RatesOptions options) throws ApiException {
		try {
			return api.v1RateEstimate(options.getBaseCurrency(), options.getToCurrency(), options.getBaseAmount()).getData();
		} catch (io.openweb3.walletpay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

	public RatesOut getRates(final GetRatesIn ratesIn) throws ApiException {
		try {
			return api.v1RateGetRates(ratesIn).getData();
		} catch (io.openweb3.walletpay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}
}
