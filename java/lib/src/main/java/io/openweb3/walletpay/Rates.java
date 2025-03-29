package io.openweb3.walletpay;

import io.openweb3.walletpay.exceptions.ApiException;
import io.openweb3.walletpay.internal.api.RatesApi;
import io.openweb3.walletpay.models.EstimateResponse;
import io.openweb3.walletpay.models.GetRatesRequest;
import io.openweb3.walletpay.models.GetRatesResponse;

public final class Rates {
	private final RatesApi api;

	Rates() {
		api = new RatesApi();
	}

	public EstimateResponse estimate(final RatesOptions options) throws ApiException {
		try {
			return api.v1RatesEstimate(options.getBaseCurrency(), options.getBaseAmount(), options.getToCurrency());
		} catch (io.openweb3.walletpay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

	public GetRatesResponse getRates(final GetRatesRequest ratesIn) throws ApiException {
		try {
			return api.v1RatesList(ratesIn);
		} catch (io.openweb3.walletpay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}
}
