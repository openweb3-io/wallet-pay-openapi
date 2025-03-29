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
import io.openweb3.walletpay.models.CreateEndpointRequest;
import io.openweb3.walletpay.models.CursorPageEndpoint;
import io.openweb3.walletpay.models.Endpoint;
import io.openweb3.walletpay.models.Error;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for WebhookEndpointsApi
 */
@Ignore
public class WebhookEndpointsApiTest {

    private final WebhookEndpointsApi api = new WebhookEndpointsApi();

    
    /**
     * Create Webhook Endpoint
     *
     * Create a new webhook endpoint for receiving event notifications
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void v1WebhookEndpointsCreateTest() throws ApiException {
        CreateEndpointRequest createEndpointRequest = null;
        Endpoint response = api.v1WebhookEndpointsCreate(createEndpointRequest);

        // TODO: test validations
    }
    
    /**
     * Delete Webhook Endpoint
     *
     * Delete a webhook endpoint by ID
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void v1WebhookEndpointsDeleteTest() throws ApiException {
        String endpointId = null;
        api.v1WebhookEndpointsDelete(endpointId);

        // TODO: test validations
    }
    
    /**
     * List Webhook Endpoints
     *
     * Retrieve a list of webhook endpoints with cursor-based pagination
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void v1WebhookEndpointsListTest() throws ApiException {
        Integer limit = null;
        String cursor = null;
        CursorPageEndpoint response = api.v1WebhookEndpointsList(limit, cursor);

        // TODO: test validations
    }
    
    /**
     * Retrieve Webhook Endpoint
     *
     * Get webhook endpoint details by ID
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void v1WebhookEndpointsRetrieveTest() throws ApiException {
        String endpointId = null;
        Endpoint response = api.v1WebhookEndpointsRetrieve(endpointId);

        // TODO: test validations
    }
    
}
