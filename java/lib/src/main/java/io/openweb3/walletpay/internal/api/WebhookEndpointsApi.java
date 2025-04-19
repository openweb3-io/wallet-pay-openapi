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

import io.openweb3.walletpay.internal.ApiCallback;
import io.openweb3.walletpay.internal.ApiClient;
import io.openweb3.walletpay.internal.ApiException;
import io.openweb3.walletpay.internal.ApiResponse;
import io.openweb3.walletpay.internal.Configuration;
import io.openweb3.walletpay.internal.Pair;
import io.openweb3.walletpay.internal.ProgressRequestBody;
import io.openweb3.walletpay.internal.ProgressResponseBody;

import com.google.gson.reflect.TypeToken;

import java.io.IOException;


import io.openweb3.walletpay.models.CreateEndpointRequest;
import io.openweb3.walletpay.models.CursorPageEndpoint;
import io.openweb3.walletpay.models.Endpoint;
import io.openweb3.walletpay.models.Error;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class WebhookEndpointsApi {
    private ApiClient localVarApiClient;

    public WebhookEndpointsApi() {
        this(Configuration.getDefaultApiClient());
    }

    public WebhookEndpointsApi(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return localVarApiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    /**
     * Build call for v1WebhookEndpointsCreate
     * @param createEndpointRequest Webhook endpoint details (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad Request </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> Unauthorized </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Internal Server Error </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v1WebhookEndpointsCreateCall(CreateEndpointRequest createEndpointRequest, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = createEndpointRequest;

        // create path and map variables
        String localVarPath = "/api/v1/webhooks/endpoints";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            "application/json"
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] { "ApiKeyAuth" };
        return localVarApiClient.buildCall(localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call v1WebhookEndpointsCreateValidateBeforeCall(CreateEndpointRequest createEndpointRequest, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'createEndpointRequest' is set
        if (createEndpointRequest == null) {
            throw new ApiException("Missing the required parameter 'createEndpointRequest' when calling v1WebhookEndpointsCreate(Async)");
        }
        

        okhttp3.Call localVarCall = v1WebhookEndpointsCreateCall(createEndpointRequest, _callback);
        return localVarCall;

    }

    /**
     * Create Webhook Endpoint
     * Create a new webhook endpoint for receiving event notifications
     * @param createEndpointRequest Webhook endpoint details (required)
     * @return Endpoint
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad Request </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> Unauthorized </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Internal Server Error </td><td>  -  </td></tr>
     </table>
     */
    public Endpoint v1WebhookEndpointsCreate(CreateEndpointRequest createEndpointRequest) throws ApiException {
        ApiResponse<Endpoint> localVarResp = v1WebhookEndpointsCreateWithHttpInfo(createEndpointRequest);
        return localVarResp.getData();
    }

    /**
     * Create Webhook Endpoint
     * Create a new webhook endpoint for receiving event notifications
     * @param createEndpointRequest Webhook endpoint details (required)
     * @return ApiResponse&lt;Endpoint&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad Request </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> Unauthorized </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Internal Server Error </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<Endpoint> v1WebhookEndpointsCreateWithHttpInfo(CreateEndpointRequest createEndpointRequest) throws ApiException {
        okhttp3.Call localVarCall = v1WebhookEndpointsCreateValidateBeforeCall(createEndpointRequest, null);
        Type localVarReturnType = new TypeToken<Endpoint>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Create Webhook Endpoint (asynchronously)
     * Create a new webhook endpoint for receiving event notifications
     * @param createEndpointRequest Webhook endpoint details (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad Request </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> Unauthorized </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Internal Server Error </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v1WebhookEndpointsCreateAsync(CreateEndpointRequest createEndpointRequest, final ApiCallback<Endpoint> _callback) throws ApiException {

        okhttp3.Call localVarCall = v1WebhookEndpointsCreateValidateBeforeCall(createEndpointRequest, _callback);
        Type localVarReturnType = new TypeToken<Endpoint>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for v1WebhookEndpointsDelete
     * @param endpointId Webhook endpoint ID (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad Request </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> Unauthorized </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Not Found </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Internal Server Error </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v1WebhookEndpointsDeleteCall(String endpointId, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/api/v1/webhooks/endpoints/{endpointId}"
            .replaceAll("\\{" + "endpointId" + "\\}", localVarApiClient.escapeString(endpointId.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] { "ApiKeyAuth" };
        return localVarApiClient.buildCall(localVarPath, "DELETE", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call v1WebhookEndpointsDeleteValidateBeforeCall(String endpointId, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'endpointId' is set
        if (endpointId == null) {
            throw new ApiException("Missing the required parameter 'endpointId' when calling v1WebhookEndpointsDelete(Async)");
        }
        

        okhttp3.Call localVarCall = v1WebhookEndpointsDeleteCall(endpointId, _callback);
        return localVarCall;

    }

    /**
     * Delete Webhook Endpoint
     * Delete a webhook endpoint by ID
     * @param endpointId Webhook endpoint ID (required)
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad Request </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> Unauthorized </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Not Found </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Internal Server Error </td><td>  -  </td></tr>
     </table>
     */
    public void v1WebhookEndpointsDelete(String endpointId) throws ApiException {
        v1WebhookEndpointsDeleteWithHttpInfo(endpointId);
    }

    /**
     * Delete Webhook Endpoint
     * Delete a webhook endpoint by ID
     * @param endpointId Webhook endpoint ID (required)
     * @return ApiResponse&lt;Void&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad Request </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> Unauthorized </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Not Found </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Internal Server Error </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<Void> v1WebhookEndpointsDeleteWithHttpInfo(String endpointId) throws ApiException {
        okhttp3.Call localVarCall = v1WebhookEndpointsDeleteValidateBeforeCall(endpointId, null);
        return localVarApiClient.execute(localVarCall);
    }

    /**
     * Delete Webhook Endpoint (asynchronously)
     * Delete a webhook endpoint by ID
     * @param endpointId Webhook endpoint ID (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad Request </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> Unauthorized </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Not Found </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Internal Server Error </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v1WebhookEndpointsDeleteAsync(String endpointId, final ApiCallback<Void> _callback) throws ApiException {

        okhttp3.Call localVarCall = v1WebhookEndpointsDeleteValidateBeforeCall(endpointId, _callback);
        localVarApiClient.executeAsync(localVarCall, _callback);
        return localVarCall;
    }
    /**
     * Build call for v1WebhookEndpointsList
     * @param limit The number of items to return per page. (required)
     * @param cursor The cursor to use for pagination. (optional)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad Request </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> Unauthorized </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Internal Server Error </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v1WebhookEndpointsListCall(Integer limit, String cursor, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/api/v1/webhooks/endpoints";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        if (cursor != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("cursor", cursor));
        }

        if (limit != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("limit", limit));
        }

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] { "ApiKeyAuth" };
        return localVarApiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call v1WebhookEndpointsListValidateBeforeCall(Integer limit, String cursor, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'limit' is set
        if (limit == null) {
            throw new ApiException("Missing the required parameter 'limit' when calling v1WebhookEndpointsList(Async)");
        }
        

        okhttp3.Call localVarCall = v1WebhookEndpointsListCall(limit, cursor, _callback);
        return localVarCall;

    }

    /**
     * List Webhook Endpoints
     * Retrieve a list of webhook endpoints with cursor-based pagination
     * @param limit The number of items to return per page. (required)
     * @param cursor The cursor to use for pagination. (optional)
     * @return CursorPageEndpoint
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad Request </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> Unauthorized </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Internal Server Error </td><td>  -  </td></tr>
     </table>
     */
    public CursorPageEndpoint v1WebhookEndpointsList(Integer limit, String cursor) throws ApiException {
        ApiResponse<CursorPageEndpoint> localVarResp = v1WebhookEndpointsListWithHttpInfo(limit, cursor);
        return localVarResp.getData();
    }

    /**
     * List Webhook Endpoints
     * Retrieve a list of webhook endpoints with cursor-based pagination
     * @param limit The number of items to return per page. (required)
     * @param cursor The cursor to use for pagination. (optional)
     * @return ApiResponse&lt;CursorPageEndpoint&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad Request </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> Unauthorized </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Internal Server Error </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<CursorPageEndpoint> v1WebhookEndpointsListWithHttpInfo(Integer limit, String cursor) throws ApiException {
        okhttp3.Call localVarCall = v1WebhookEndpointsListValidateBeforeCall(limit, cursor, null);
        Type localVarReturnType = new TypeToken<CursorPageEndpoint>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * List Webhook Endpoints (asynchronously)
     * Retrieve a list of webhook endpoints with cursor-based pagination
     * @param limit The number of items to return per page. (required)
     * @param cursor The cursor to use for pagination. (optional)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad Request </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> Unauthorized </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Internal Server Error </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v1WebhookEndpointsListAsync(Integer limit, String cursor, final ApiCallback<CursorPageEndpoint> _callback) throws ApiException {

        okhttp3.Call localVarCall = v1WebhookEndpointsListValidateBeforeCall(limit, cursor, _callback);
        Type localVarReturnType = new TypeToken<CursorPageEndpoint>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for v1WebhookEndpointsRetrieve
     * @param endpointId Webhook endpoint ID (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad Request </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> Unauthorized </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Not Found </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Internal Server Error </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v1WebhookEndpointsRetrieveCall(String endpointId, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/api/v1/webhooks/endpoints/{endpointId}"
            .replaceAll("\\{" + "endpointId" + "\\}", localVarApiClient.escapeString(endpointId.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] { "ApiKeyAuth" };
        return localVarApiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call v1WebhookEndpointsRetrieveValidateBeforeCall(String endpointId, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'endpointId' is set
        if (endpointId == null) {
            throw new ApiException("Missing the required parameter 'endpointId' when calling v1WebhookEndpointsRetrieve(Async)");
        }
        

        okhttp3.Call localVarCall = v1WebhookEndpointsRetrieveCall(endpointId, _callback);
        return localVarCall;

    }

    /**
     * Retrieve Webhook Endpoint
     * Get webhook endpoint details by ID
     * @param endpointId Webhook endpoint ID (required)
     * @return Endpoint
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad Request </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> Unauthorized </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Not Found </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Internal Server Error </td><td>  -  </td></tr>
     </table>
     */
    public Endpoint v1WebhookEndpointsRetrieve(String endpointId) throws ApiException {
        ApiResponse<Endpoint> localVarResp = v1WebhookEndpointsRetrieveWithHttpInfo(endpointId);
        return localVarResp.getData();
    }

    /**
     * Retrieve Webhook Endpoint
     * Get webhook endpoint details by ID
     * @param endpointId Webhook endpoint ID (required)
     * @return ApiResponse&lt;Endpoint&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad Request </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> Unauthorized </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Not Found </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Internal Server Error </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<Endpoint> v1WebhookEndpointsRetrieveWithHttpInfo(String endpointId) throws ApiException {
        okhttp3.Call localVarCall = v1WebhookEndpointsRetrieveValidateBeforeCall(endpointId, null);
        Type localVarReturnType = new TypeToken<Endpoint>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Retrieve Webhook Endpoint (asynchronously)
     * Get webhook endpoint details by ID
     * @param endpointId Webhook endpoint ID (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
        <tr><td> 400 </td><td> Bad Request </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> Unauthorized </td><td>  -  </td></tr>
        <tr><td> 404 </td><td> Not Found </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> Internal Server Error </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call v1WebhookEndpointsRetrieveAsync(String endpointId, final ApiCallback<Endpoint> _callback) throws ApiException {

        okhttp3.Call localVarCall = v1WebhookEndpointsRetrieveValidateBeforeCall(endpointId, _callback);
        Type localVarReturnType = new TypeToken<Endpoint>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
}
