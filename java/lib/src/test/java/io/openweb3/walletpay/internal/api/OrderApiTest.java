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
import io.openweb3.walletpay.models.OrderIn;
import io.openweb3.walletpay.models.ResponseError;
import io.openweb3.walletpay.models.ResponseListOrderOut;
import io.openweb3.walletpay.models.ResponseOrderOut;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for OrderApi
 */
@Ignore
public class OrderApiTest {

    private final OrderApi api = new OrderApi();

    
    /**
     * Create Order
     *
     * Create a new order.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void v1OrderCreateTest() throws ApiException {
        String appId = null;
        OrderIn orderIn = null;
        ResponseOrderOut response = api.v1OrderCreate(appId, orderIn);

        // TODO: test validations
    }
    
    /**
     * Get order
     *
     * Get specified order.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void v1OrderGetTest() throws ApiException {
        String appId = null;
        String idOrUid = null;
        ResponseOrderOut response = api.v1OrderGet(appId, idOrUid);

        // TODO: test validations
    }
    
    /**
     * List Orders
     *
     * List orders.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void v1OrderListTest() throws ApiException {
        String appId = null;
        Integer size = null;
        Integer page = null;
        String walletId = null;
        String status = null;
        String currency = null;
        ResponseListOrderOut response = api.v1OrderList(appId, size, page, walletId, currency, status);

        // TODO: test validations
    }
    
}
