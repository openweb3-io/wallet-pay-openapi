# OrderApi

All URIs are relative to *https://api.wallet-pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1OrderCreate**](OrderApi.md#v1OrderCreate) | **POST** /api/v1/apps/{appId}/orders | Create Order
[**v1OrderGet**](OrderApi.md#v1OrderGet) | **GET** /api/v1/apps/{appId}/orders/{idOrUid} | Get order
[**v1OrderList**](OrderApi.md#v1OrderList) | **GET** /api/v1/apps/{appId}/orders | List Orders


<a name="v1OrderCreate"></a>
# **v1OrderCreate**
> ResponseOrderOut v1OrderCreate(appId, orderIn)

Create Order

Create a new order.

### Example
```java
// Import classes:
import io.openweb3.walletpay.internal.ApiClient;
import io.openweb3.walletpay.internal.ApiException;
import io.openweb3.walletpay.internal.Configuration;
import io.openweb3.walletpay.internal.auth.*;
import io.openweb3.walletpay.internal.models.*;
import io.openweb3.walletpay.internal.api.OrderApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.wallet-pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    OrderApi apiInstance = new OrderApi(defaultClient);
    String appId = "app_12345xsfei"; // String | Specified the app id.
    OrderIn orderIn = new OrderIn(); // OrderIn | 
    try {
      ResponseOrderOut result = apiInstance.v1OrderCreate(appId, orderIn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrderApi#v1OrderCreate");
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
 **appId** | **String**| Specified the app id. |
 **orderIn** | [**OrderIn**](OrderIn.md)|  |

### Return type

[**ResponseOrderOut**](ResponseOrderOut.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | OK |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**429** | Too Many Requests |  -  |
**500** | Too Many Requests |  -  |

<a name="v1OrderGet"></a>
# **v1OrderGet**
> ResponseOrderOut v1OrderGet(appId, idOrUid)

Get order

Get specified order.

### Example
```java
// Import classes:
import io.openweb3.walletpay.internal.ApiClient;
import io.openweb3.walletpay.internal.ApiException;
import io.openweb3.walletpay.internal.Configuration;
import io.openweb3.walletpay.internal.auth.*;
import io.openweb3.walletpay.internal.models.*;
import io.openweb3.walletpay.internal.api.OrderApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.wallet-pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    OrderApi apiInstance = new OrderApi(defaultClient);
    String appId = "app_12345xsfei"; // String | Specified the app id.
    String idOrUid = "11b9ca57-0559-403a-bf8e-7bd1a31aff45"; // String | Specified the order id or order uid.
    try {
      ResponseOrderOut result = apiInstance.v1OrderGet(appId, idOrUid);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrderApi#v1OrderGet");
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
 **appId** | **String**| Specified the app id. |
 **idOrUid** | **String**| Specified the order id or order uid. |

### Return type

[**ResponseOrderOut**](ResponseOrderOut.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**201** |  |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

<a name="v1OrderList"></a>
# **v1OrderList**
> ResponseListOrderOut v1OrderList(appId, size, page, walletId, currency, status)

List Orders

List orders.

### Example
```java
// Import classes:
import io.openweb3.walletpay.internal.ApiClient;
import io.openweb3.walletpay.internal.ApiException;
import io.openweb3.walletpay.internal.Configuration;
import io.openweb3.walletpay.internal.auth.*;
import io.openweb3.walletpay.internal.models.*;
import io.openweb3.walletpay.internal.api.OrderApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.wallet-pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    OrderApi apiInstance = new OrderApi(defaultClient);
    String appId = "app_12345xsfei"; // String | Specified the app id.
    Integer size = 20; // Integer | Limit the number of returned items
    Integer page = 0; // Integer | Specifying the page index
    String walletId = "wallet_id"; // String | Optional wallet id
    String currency = "USDT"; // String | Optional currency code
    String status = "PENDING"; // String | Optional order status
    try {
      ResponseListOrderOut result = apiInstance.v1OrderList(appId, size, page, walletId, currency, status);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrderApi#v1OrderList");
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
 **appId** | **String**| Specified the app id. |
 **size** | **Integer**| Limit the number of returned items | [optional] [default to 20]
 **page** | **Integer**| Specifying the page index | [optional] [default to 0]
 **walletId** | **String**| Optional wallet id | [optional]
 **currency** | **String**| Optional currency code | [optional]
 **status** | **String**| Optional order status | [optional] [enum: PENDING, PAID, EXPIRED, FAILED, COMPLETED]

### Return type

[**ResponseListOrderOut**](ResponseListOrderOut.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

