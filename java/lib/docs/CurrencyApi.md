# CurrencyApi

All URIs are relative to *https://api.wallet-pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1CurrencyFindByCode**](CurrencyApi.md#v1CurrencyFindByCode) | **GET** /api/v1/apps/currencies/{code} | Find currency by code
[**v1CurrencyList**](CurrencyApi.md#v1CurrencyList) | **GET** /api/v1/currencies | List currencies


<a name="v1CurrencyFindByCode"></a>
# **v1CurrencyFindByCode**
> CurrencyOut v1CurrencyFindByCode(code)

Find currency by code

Get specified currency.

### Example
```java
// Import classes:
import io.openweb3.walletpay.internal.ApiClient;
import io.openweb3.walletpay.internal.ApiException;
import io.openweb3.walletpay.internal.Configuration;
import io.openweb3.walletpay.internal.auth.*;
import io.openweb3.walletpay.internal.models.*;
import io.openweb3.walletpay.internal.api.CurrencyApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.wallet-pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    CurrencyApi apiInstance = new CurrencyApi(defaultClient);
    String code = "USDT"; // String | Specified currency code.
    try {
      CurrencyOut result = apiInstance.v1CurrencyFindByCode(code);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CurrencyApi#v1CurrencyFindByCode");
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
 **code** | **String**| Specified currency code. |

### Return type

[**CurrencyOut**](CurrencyOut.md)

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

<a name="v1CurrencyList"></a>
# **v1CurrencyList**
> ListResponseCurrencyOut v1CurrencyList(appId, size, page)

List currencies

List currencies.

### Example
```java
// Import classes:
import io.openweb3.walletpay.internal.ApiClient;
import io.openweb3.walletpay.internal.ApiException;
import io.openweb3.walletpay.internal.Configuration;
import io.openweb3.walletpay.internal.auth.*;
import io.openweb3.walletpay.internal.models.*;
import io.openweb3.walletpay.internal.api.CurrencyApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.wallet-pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    CurrencyApi apiInstance = new CurrencyApi(defaultClient);
    String appId = "app_12345xsfei"; // String | Specified the app id.
    Integer size = 20; // Integer | Limit the number of returned items
    Integer page = 0; // Integer | Specifying the page index
    try {
      ListResponseCurrencyOut result = apiInstance.v1CurrencyList(appId, size, page);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CurrencyApi#v1CurrencyList");
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
 **appId** | **String**| Specified the app id. | [optional]
 **size** | **Integer**| Limit the number of returned items | [optional] [default to 20]
 **page** | **Integer**| Specifying the page index | [optional] [default to 0]

### Return type

[**ListResponseCurrencyOut**](ListResponseCurrencyOut.md)

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
