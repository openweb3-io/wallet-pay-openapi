# RateApi

All URIs are relative to *https://api.wallet-pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1RateEstimate**](RateApi.md#v1RateEstimate) | **GET** /api/v1/rates/estimate | Estimate the amount of currency exchange.
[**v1RateGetRates**](RateApi.md#v1RateGetRates) | **POST** /api/v1/rates | Query exchange rates between different currencies. 


<a name="v1RateEstimate"></a>
# **v1RateEstimate**
> ResponseEstimateOut v1RateEstimate(from, toCurrency, baseAmount)

Estimate the amount of currency exchange.

Estimate the amount of currency exchange.

### Example
```java
// Import classes:
import io.openweb3.walletpay.internal.ApiClient;
import io.openweb3.walletpay.internal.ApiException;
import io.openweb3.walletpay.internal.Configuration;
import io.openweb3.walletpay.internal.auth.*;
import io.openweb3.walletpay.internal.models.*;
import io.openweb3.walletpay.internal.api.RateApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.wallet-pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    RateApi apiInstance = new RateApi(defaultClient);
    String from = "TON"; // String | Specified the base currency that needs to be estimated
    String toCurrency = "NOT"; // String | Specify the target currency.
    String baseAmount = "100"; // String | Specify the amount of base currency that need to be estimated.
    try {
      ResponseEstimateOut result = apiInstance.v1RateEstimate(from, toCurrency, baseAmount);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RateApi#v1RateEstimate");
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
 **from** | **String**| Specified the base currency that needs to be estimated |
 **toCurrency** | **String**| Specify the target currency. |
 **baseAmount** | **String**| Specify the amount of base currency that need to be estimated. |

### Return type

[**ResponseEstimateOut**](ResponseEstimateOut.md)

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

<a name="v1RateGetRates"></a>
# **v1RateGetRates**
> ResponseRatesOut v1RateGetRates(getRatesIn)

Query exchange rates between different currencies. 

Query exchange rates between different currencies.

### Example
```java
// Import classes:
import io.openweb3.walletpay.internal.ApiClient;
import io.openweb3.walletpay.internal.ApiException;
import io.openweb3.walletpay.internal.Configuration;
import io.openweb3.walletpay.internal.auth.*;
import io.openweb3.walletpay.internal.models.*;
import io.openweb3.walletpay.internal.api.RateApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.wallet-pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    RateApi apiInstance = new RateApi(defaultClient);
    GetRatesIn getRatesIn = new GetRatesIn(); // GetRatesIn | 
    try {
      ResponseRatesOut result = apiInstance.v1RateGetRates(getRatesIn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RateApi#v1RateGetRates");
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
 **getRatesIn** | [**GetRatesIn**](GetRatesIn.md)|  |

### Return type

[**ResponseRatesOut**](ResponseRatesOut.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**429** | Too Many Requests |  -  |
**500** | Too Many Requests |  -  |

