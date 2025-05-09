/*
 * WalletPay API Documentation
 * This is a custody wallet pay service openapi server.
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package io.openweb3.walletpay.internal.api;

import io.openweb3.walletpay.internal.ApiException;
import io.openweb3.walletpay.models.Error;
import io.openweb3.walletpay.models.EstimateResponse;
import io.openweb3.walletpay.models.GetRatesRequest;
import io.openweb3.walletpay.models.GetRatesResponse;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for RatesApi
 */
@Ignore
public class RatesApiTest {

    private final RatesApi api = new RatesApi();

    
    /**
     * Estimate currency conversion
     *
     * Convert an amount from one currency to another using current exchange rates.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void v1RatesEstimateTest() throws ApiException {
        String baseCurrency = null;
        String baseAmount = null;
        String toCurrency = null;
        EstimateResponse response = api.v1RatesEstimate(baseCurrency, baseAmount, toCurrency);

        // TODO: test validations
    }
    
    /**
     * List exchange rates
     *
     * Get exchange rates for multiple currency pairs.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void v1RatesListTest() throws ApiException {
        GetRatesRequest getRatesRequest = null;
        GetRatesResponse response = api.v1RatesList(getRatesRequest);

        // TODO: test validations
    }
    
}
