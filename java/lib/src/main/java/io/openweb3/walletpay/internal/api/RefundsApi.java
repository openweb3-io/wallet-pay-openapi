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


import io.openweb3.walletpay.models.CreateRefundRequest;
import io.openweb3.walletpay.models.Error;
import io.openweb3.walletpay.models.PageRefund;
import io.openweb3.walletpay.models.Refund;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class RefundsApi {
    private ApiClient localVarApiClient;

    public RefundsApi() {
        this(Configuration.getDefaultApiClient());
    }

    public RefundsApi(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return localVarApiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    /**
     * Build call for v1RefundsCreate
     * @param createRefundRequest Refund details (required)
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
    public okhttp3.Call v1RefundsCreateCall(CreateRefundRequest createRefundRequest, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = createRefundRequest;

        // create path and map variables
        String localVarPath = "/api/v1/refunds";

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
    private okhttp3.Call v1RefundsCreateValidateBeforeCall(CreateRefundRequest createRefundRequest, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'createRefundRequest' is set
        if (createRefundRequest == null) {
            throw new ApiException("Missing the required parameter 'createRefundRequest' when calling v1RefundsCreate(Async)");
        }
        

        okhttp3.Call localVarCall = v1RefundsCreateCall(createRefundRequest, _callback);
        return localVarCall;

    }

    /**
     * Create Refund
     * Create a new refund for an order
     * @param createRefundRequest Refund details (required)
     * @return Refund
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
    public Refund v1RefundsCreate(CreateRefundRequest createRefundRequest) throws ApiException {
        ApiResponse<Refund> localVarResp = v1RefundsCreateWithHttpInfo(createRefundRequest);
        return localVarResp.getData();
    }

    /**
     * Create Refund
     * Create a new refund for an order
     * @param createRefundRequest Refund details (required)
     * @return ApiResponse&lt;Refund&gt;
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
    public ApiResponse<Refund> v1RefundsCreateWithHttpInfo(CreateRefundRequest createRefundRequest) throws ApiException {
        okhttp3.Call localVarCall = v1RefundsCreateValidateBeforeCall(createRefundRequest, null);
        Type localVarReturnType = new TypeToken<Refund>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Create Refund (asynchronously)
     * Create a new refund for an order
     * @param createRefundRequest Refund details (required)
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
    public okhttp3.Call v1RefundsCreateAsync(CreateRefundRequest createRefundRequest, final ApiCallback<Refund> _callback) throws ApiException {

        okhttp3.Call localVarCall = v1RefundsCreateValidateBeforeCall(createRefundRequest, _callback);
        Type localVarReturnType = new TypeToken<Refund>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for v1RefundsList
     * @param size Number of items per page (required)
     * @param page Page number for pagination, starting from 0 (optional)
     * @param orderId Filter refunds by order ID (optional)
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
    public okhttp3.Call v1RefundsListCall(Integer size, Integer page, String orderId, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/api/v1/refunds";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        if (page != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("page", page));
        }

        if (size != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("size", size));
        }

        if (orderId != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("order_id", orderId));
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
    private okhttp3.Call v1RefundsListValidateBeforeCall(Integer size, Integer page, String orderId, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'size' is set
        if (size == null) {
            throw new ApiException("Missing the required parameter 'size' when calling v1RefundsList(Async)");
        }
        

        okhttp3.Call localVarCall = v1RefundsListCall(size, page, orderId, _callback);
        return localVarCall;

    }

    /**
     * List Refunds
     * Retrieve a list of refunds with pagination
     * @param size Number of items per page (required)
     * @param page Page number for pagination, starting from 0 (optional)
     * @param orderId Filter refunds by order ID (optional)
     * @return PageRefund
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
    public PageRefund v1RefundsList(Integer size, Integer page, String orderId) throws ApiException {
        ApiResponse<PageRefund> localVarResp = v1RefundsListWithHttpInfo(size, page, orderId);
        return localVarResp.getData();
    }

    /**
     * List Refunds
     * Retrieve a list of refunds with pagination
     * @param size Number of items per page (required)
     * @param page Page number for pagination, starting from 0 (optional)
     * @param orderId Filter refunds by order ID (optional)
     * @return ApiResponse&lt;PageRefund&gt;
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
    public ApiResponse<PageRefund> v1RefundsListWithHttpInfo(Integer size, Integer page, String orderId) throws ApiException {
        okhttp3.Call localVarCall = v1RefundsListValidateBeforeCall(size, page, orderId, null);
        Type localVarReturnType = new TypeToken<PageRefund>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * List Refunds (asynchronously)
     * Retrieve a list of refunds with pagination
     * @param size Number of items per page (required)
     * @param page Page number for pagination, starting from 0 (optional)
     * @param orderId Filter refunds by order ID (optional)
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
    public okhttp3.Call v1RefundsListAsync(Integer size, Integer page, String orderId, final ApiCallback<PageRefund> _callback) throws ApiException {

        okhttp3.Call localVarCall = v1RefundsListValidateBeforeCall(size, page, orderId, _callback);
        Type localVarReturnType = new TypeToken<PageRefund>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for v1RefundsRetrieve
     * @param idOrUid Refund ID or UID (required)
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
    public okhttp3.Call v1RefundsRetrieveCall(String idOrUid, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/api/v1/refunds/{idOrUid}"
            .replaceAll("\\{" + "idOrUid" + "\\}", localVarApiClient.escapeString(idOrUid.toString()));

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
    private okhttp3.Call v1RefundsRetrieveValidateBeforeCall(String idOrUid, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'idOrUid' is set
        if (idOrUid == null) {
            throw new ApiException("Missing the required parameter 'idOrUid' when calling v1RefundsRetrieve(Async)");
        }
        

        okhttp3.Call localVarCall = v1RefundsRetrieveCall(idOrUid, _callback);
        return localVarCall;

    }

    /**
     * Retrieve Refund
     * Get refund details by ID or UID
     * @param idOrUid Refund ID or UID (required)
     * @return Refund
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
    public Refund v1RefundsRetrieve(String idOrUid) throws ApiException {
        ApiResponse<Refund> localVarResp = v1RefundsRetrieveWithHttpInfo(idOrUid);
        return localVarResp.getData();
    }

    /**
     * Retrieve Refund
     * Get refund details by ID or UID
     * @param idOrUid Refund ID or UID (required)
     * @return ApiResponse&lt;Refund&gt;
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
    public ApiResponse<Refund> v1RefundsRetrieveWithHttpInfo(String idOrUid) throws ApiException {
        okhttp3.Call localVarCall = v1RefundsRetrieveValidateBeforeCall(idOrUid, null);
        Type localVarReturnType = new TypeToken<Refund>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Retrieve Refund (asynchronously)
     * Get refund details by ID or UID
     * @param idOrUid Refund ID or UID (required)
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
    public okhttp3.Call v1RefundsRetrieveAsync(String idOrUid, final ApiCallback<Refund> _callback) throws ApiException {

        okhttp3.Call localVarCall = v1RefundsRetrieveValidateBeforeCall(idOrUid, _callback);
        Type localVarReturnType = new TypeToken<Refund>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
}
