# CurrenciesApi

All URIs are relative to *https://api.wallet-pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1CurrenciesList**](CurrenciesApi.md#v1CurrenciesList) | **GET** /api/v1/currencies | List currencies
[**v1CurrenciesRetrieve**](CurrenciesApi.md#v1CurrenciesRetrieve) | **GET** /api/v1/currencies/{code} | Get Currency


<a name="v1CurrenciesList"></a>
# **v1CurrenciesList**
> CursorPageCurrency v1CurrenciesList(limit, cursor, appId, rated)

List currencies

Retrieve a list of all available currencies.

### Example
```java
// Import classes:
import io.openweb3.walletpay.internal.ApiClient;
import io.openweb3.walletpay.internal.ApiException;
import io.openweb3.walletpay.internal.Configuration;
import io.openweb3.walletpay.internal.auth.*;
import io.openweb3.walletpay.internal.models.*;
import io.openweb3.walletpay.internal.api.CurrenciesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.wallet-pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    CurrenciesApi apiInstance = new CurrenciesApi(defaultClient);
    Integer limit = 56; // Integer | The number of items to return per page.
    String cursor = "cursor_example"; // String | The cursor to use for pagination.
    String appId = "appId_example"; // String | Filter currencies by application ID
    Boolean rated = true; // Boolean | Filter currencies by rated status
    try {
      CursorPageCurrency result = apiInstance.v1CurrenciesList(limit, cursor, appId, rated);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CurrenciesApi#v1CurrenciesList");
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
 **limit** | **Integer**| The number of items to return per page. |
 **cursor** | **String**| The cursor to use for pagination. | [optional]
 **appId** | **String**| Filter currencies by application ID | [optional]
 **rated** | **Boolean**| Filter currencies by rated status | [optional]

### Return type

[**CursorPageCurrency**](CursorPageCurrency.md)

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

<a name="v1CurrenciesRetrieve"></a>
# **v1CurrenciesRetrieve**
> Currency v1CurrenciesRetrieve(code)

Get Currency

Get currency info by currency code

### Example
```java
// Import classes:
import io.openweb3.walletpay.internal.ApiClient;
import io.openweb3.walletpay.internal.ApiException;
import io.openweb3.walletpay.internal.Configuration;
import io.openweb3.walletpay.internal.auth.*;
import io.openweb3.walletpay.internal.models.*;
import io.openweb3.walletpay.internal.api.CurrenciesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.wallet-pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    CurrenciesApi apiInstance = new CurrenciesApi(defaultClient);
    String code = "code_example"; // String | Currency code
    try {
      Currency result = apiInstance.v1CurrenciesRetrieve(code);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CurrenciesApi#v1CurrenciesRetrieve");
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
 **code** | **String**| Currency code |

### Return type

[**Currency**](Currency.md)

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

