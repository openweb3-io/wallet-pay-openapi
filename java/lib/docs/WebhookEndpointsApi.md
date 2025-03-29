# WebhookEndpointsApi

All URIs are relative to *https://api.wallet-pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1WebhookEndpointsCreate**](WebhookEndpointsApi.md#v1WebhookEndpointsCreate) | **POST** /api/v1/webhooks/endpoints | Create Webhook Endpoint
[**v1WebhookEndpointsDelete**](WebhookEndpointsApi.md#v1WebhookEndpointsDelete) | **DELETE** /api/v1/webhooks/endpoints/{endpointId} | Delete Webhook Endpoint
[**v1WebhookEndpointsList**](WebhookEndpointsApi.md#v1WebhookEndpointsList) | **GET** /api/v1/webhooks/endpoints | List Webhook Endpoints
[**v1WebhookEndpointsRetrieve**](WebhookEndpointsApi.md#v1WebhookEndpointsRetrieve) | **GET** /api/v1/webhooks/endpoints/{endpointId} | Retrieve Webhook Endpoint


<a name="v1WebhookEndpointsCreate"></a>
# **v1WebhookEndpointsCreate**
> Endpoint v1WebhookEndpointsCreate(createEndpointRequest)

Create Webhook Endpoint

Create a new webhook endpoint for receiving event notifications

### Example
```java
// Import classes:
import io.openweb3.walletpay.internal.ApiClient;
import io.openweb3.walletpay.internal.ApiException;
import io.openweb3.walletpay.internal.Configuration;
import io.openweb3.walletpay.internal.auth.*;
import io.openweb3.walletpay.internal.models.*;
import io.openweb3.walletpay.internal.api.WebhookEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.wallet-pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    WebhookEndpointsApi apiInstance = new WebhookEndpointsApi(defaultClient);
    CreateEndpointRequest createEndpointRequest = new CreateEndpointRequest(); // CreateEndpointRequest | Webhook endpoint details
    try {
      Endpoint result = apiInstance.v1WebhookEndpointsCreate(createEndpointRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling WebhookEndpointsApi#v1WebhookEndpointsCreate");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createEndpointRequest** | [**CreateEndpointRequest**](CreateEndpointRequest.md)| Webhook endpoint details |

### Return type

[**Endpoint**](Endpoint.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**500** | Internal Server Error |  -  |

<a name="v1WebhookEndpointsDelete"></a>
# **v1WebhookEndpointsDelete**
> v1WebhookEndpointsDelete(endpointId)

Delete Webhook Endpoint

Delete a webhook endpoint by ID

### Example
```java
// Import classes:
import io.openweb3.walletpay.internal.ApiClient;
import io.openweb3.walletpay.internal.ApiException;
import io.openweb3.walletpay.internal.Configuration;
import io.openweb3.walletpay.internal.auth.*;
import io.openweb3.walletpay.internal.models.*;
import io.openweb3.walletpay.internal.api.WebhookEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.wallet-pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    WebhookEndpointsApi apiInstance = new WebhookEndpointsApi(defaultClient);
    String endpointId = "endpointId_example"; // String | Webhook endpoint ID
    try {
      apiInstance.v1WebhookEndpointsDelete(endpointId);
    } catch (ApiException e) {
      System.err.println("Exception when calling WebhookEndpointsApi#v1WebhookEndpointsDelete");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpointId** | **String**| Webhook endpoint ID |

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

<a name="v1WebhookEndpointsList"></a>
# **v1WebhookEndpointsList**
> CursorPageEndpoint v1WebhookEndpointsList(limit, cursor)

List Webhook Endpoints

Retrieve a list of webhook endpoints with cursor-based pagination

### Example
```java
// Import classes:
import io.openweb3.walletpay.internal.ApiClient;
import io.openweb3.walletpay.internal.ApiException;
import io.openweb3.walletpay.internal.Configuration;
import io.openweb3.walletpay.internal.auth.*;
import io.openweb3.walletpay.internal.models.*;
import io.openweb3.walletpay.internal.api.WebhookEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.wallet-pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    WebhookEndpointsApi apiInstance = new WebhookEndpointsApi(defaultClient);
    Integer limit = 56; // Integer | The limit of items per page
    String cursor = "cursor_example"; // String | The cursor for pagination
    try {
      CursorPageEndpoint result = apiInstance.v1WebhookEndpointsList(limit, cursor);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling WebhookEndpointsApi#v1WebhookEndpointsList");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Integer**| The limit of items per page |
 **cursor** | **String**| The cursor for pagination | [optional]

### Return type

[**CursorPageEndpoint**](CursorPageEndpoint.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**500** | Internal Server Error |  -  |

<a name="v1WebhookEndpointsRetrieve"></a>
# **v1WebhookEndpointsRetrieve**
> Endpoint v1WebhookEndpointsRetrieve(endpointId)

Retrieve Webhook Endpoint

Get webhook endpoint details by ID

### Example
```java
// Import classes:
import io.openweb3.walletpay.internal.ApiClient;
import io.openweb3.walletpay.internal.ApiException;
import io.openweb3.walletpay.internal.Configuration;
import io.openweb3.walletpay.internal.auth.*;
import io.openweb3.walletpay.internal.models.*;
import io.openweb3.walletpay.internal.api.WebhookEndpointsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.wallet-pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    WebhookEndpointsApi apiInstance = new WebhookEndpointsApi(defaultClient);
    String endpointId = "endpointId_example"; // String | Webhook endpoint ID
    try {
      Endpoint result = apiInstance.v1WebhookEndpointsRetrieve(endpointId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling WebhookEndpointsApi#v1WebhookEndpointsRetrieve");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpointId** | **String**| Webhook endpoint ID |

### Return type

[**Endpoint**](Endpoint.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

