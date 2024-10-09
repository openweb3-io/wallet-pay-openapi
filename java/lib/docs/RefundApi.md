# RefundApi

All URIs are relative to *https://api.wallet-pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1RefundCreate**](RefundApi.md#v1RefundCreate) | **POST** /api/v1/refunds | Create Refund
[**v1RefundGet**](RefundApi.md#v1RefundGet) | **GET** /api/v1/refunds/{idOrUid} | Get Refund
[**v1RefundList**](RefundApi.md#v1RefundList) | **GET** /api/v1/refunds | List Refunds


<a name="v1RefundCreate"></a>
# **v1RefundCreate**
> ResponseRefundOut v1RefundCreate(refundIn)

Create Refund

Create a refund.

### Example
```java
// Import classes:
import io.openweb3.walletpay.internal.ApiClient;
import io.openweb3.walletpay.internal.ApiException;
import io.openweb3.walletpay.internal.Configuration;
import io.openweb3.walletpay.internal.auth.*;
import io.openweb3.walletpay.internal.models.*;
import io.openweb3.walletpay.internal.api.RefundApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.wallet-pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    RefundApi apiInstance = new RefundApi(defaultClient);
    RefundIn refundIn = new RefundIn(); // RefundIn | 
    try {
      ResponseRefundOut result = apiInstance.v1RefundCreate(refundIn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RefundApi#v1RefundCreate");
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
 **refundIn** | [**RefundIn**](RefundIn.md)|  |

### Return type

[**ResponseRefundOut**](ResponseRefundOut.md)

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

<a name="v1RefundGet"></a>
# **v1RefundGet**
> ResponseRefundOut v1RefundGet(idOrUid)

Get Refund

Get specified refund.

### Example
```java
// Import classes:
import io.openweb3.walletpay.internal.ApiClient;
import io.openweb3.walletpay.internal.ApiException;
import io.openweb3.walletpay.internal.Configuration;
import io.openweb3.walletpay.internal.auth.*;
import io.openweb3.walletpay.internal.models.*;
import io.openweb3.walletpay.internal.api.RefundApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.wallet-pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    RefundApi apiInstance = new RefundApi(defaultClient);
    String idOrUid = "11b9ca57-0559-403a-bf8e-7bd1a31aff45"; // String | Specified the refund id or refund uid.
    try {
      ResponseRefundOut result = apiInstance.v1RefundGet(idOrUid);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RefundApi#v1RefundGet");
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
 **idOrUid** | **String**| Specified the refund id or refund uid. |

### Return type

[**ResponseRefundOut**](ResponseRefundOut.md)

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

<a name="v1RefundList"></a>
# **v1RefundList**
> ResponseListRefundOut v1RefundList(size, page, orderId)

List Refunds

List refunds.

### Example
```java
// Import classes:
import io.openweb3.walletpay.internal.ApiClient;
import io.openweb3.walletpay.internal.ApiException;
import io.openweb3.walletpay.internal.Configuration;
import io.openweb3.walletpay.internal.auth.*;
import io.openweb3.walletpay.internal.models.*;
import io.openweb3.walletpay.internal.api.RefundApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.wallet-pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    RefundApi apiInstance = new RefundApi(defaultClient);
    Integer size = 20; // Integer | Limit the number of returned items
    Integer page = 0; // Integer | Specifying the page index
    String orderId = "923be366-51d1-447f-a0e8-db4c75dffae5"; // String | Optional order id
    try {
      ResponseListRefundOut result = apiInstance.v1RefundList(size, page, orderId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RefundApi#v1RefundList");
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
 **size** | **Integer**| Limit the number of returned items | [optional] [default to 20]
 **page** | **Integer**| Specifying the page index | [optional] [default to 0]
 **orderId** | **String**| Optional order id | [optional]

### Return type

[**ResponseListRefundOut**](ResponseListRefundOut.md)

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

