/*
 * Wallet-Pay API Documentations
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
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
import io.openweb3.walletpay.models.GetRatesIn;
import io.openweb3.walletpay.models.ResponseError;
import io.openweb3.walletpay.models.ResponseEstimateOut;
import io.openweb3.walletpay.models.ResponseRatesOut;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for RateApi
 */
@Ignore
public class RateApiTest {

    private final RateApi api = new RateApi();

    
    /**
     * Estimate the amount of currency exchange.
     *
     * Estimate the amount of currency exchange.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void v1RateEstimateTest() throws ApiException {
        String appId = null;
        String from = null;
        String toCurrency = null;
        String baseAmount = null;
        ResponseEstimateOut response = api.v1RateEstimate(appId, from, toCurrency, baseAmount);

        // TODO: test validations
    }
    
    /**
     * Query exchange rates between different currencies. 
     *
     * Query exchange rates between different currencies.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void v1RateGetRatesTest() throws ApiException {
        String appId = null;
        GetRatesIn getRatesIn = null;
        ResponseRatesOut response = api.v1RateGetRates(appId, getRatesIn);

        // TODO: test validations
    }
    
}