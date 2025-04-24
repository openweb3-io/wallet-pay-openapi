# RatesApi

All URIs are relative to *https://api.wallet-pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1RatesEstimate**](RatesApi.md#v1RatesEstimate) | **GET** /api/v1/rates/estimate | Estimate currency conversion
[**v1RatesList**](RatesApi.md#v1RatesList) | **POST** /api/v1/rates | List exchange rates


<a name="v1RatesEstimate"></a>
# **v1RatesEstimate**
> EstimateResponse v1RatesEstimate(baseAmount, toCurrency, baseCurrency)

Estimate currency conversion

Convert an amount from one currency to another using current exchange rates.

### Example
```java
// Import classes:
import io.openweb3.walletpay.internal.ApiClient;
import io.openweb3.walletpay.internal.ApiException;
import io.openweb3.walletpay.internal.Configuration;
import io.openweb3.walletpay.internal.auth.*;
import io.openweb3.walletpay.internal.models.*;
import io.openweb3.walletpay.internal.api.RatesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.wallet-pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    RatesApi apiInstance = new RatesApi(defaultClient);
    String baseAmount = "baseAmount_example"; // String | Amount in source currency to convert
    String toCurrency = "toCurrency_example"; // String | Target currency code
    String baseCurrency = "baseCurrency_example"; // String | Source currency code
    try {
      EstimateResponse result = apiInstance.v1RatesEstimate(baseAmount, toCurrency, baseCurrency);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RatesApi#v1RatesEstimate");
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
 **baseAmount** | **String**| Amount in source currency to convert |
 **toCurrency** | **String**| Target currency code |
 **baseCurrency** | **String**| Source currency code |

### Return type

[**EstimateResponse**](EstimateResponse.md)

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

<a name="v1RatesList"></a>
# **v1RatesList**
> GetRatesResponse v1RatesList(getRatesRequest)

List exchange rates

Get exchange rates for multiple currency pairs.

### Example
```java
// Import classes:
import io.openweb3.walletpay.internal.ApiClient;
import io.openweb3.walletpay.internal.ApiException;
import io.openweb3.walletpay.internal.Configuration;
import io.openweb3.walletpay.internal.auth.*;
import io.openweb3.walletpay.internal.models.*;
import io.openweb3.walletpay.internal.api.RatesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.wallet-pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    RatesApi apiInstance = new RatesApi(defaultClient);
    GetRatesRequest getRatesRequest = new GetRatesRequest(); // GetRatesRequest | Currency pairs to get rates for
    try {
      GetRatesResponse result = apiInstance.v1RatesList(getRatesRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RatesApi#v1RatesList");
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
 **getRatesRequest** | [**GetRatesRequest**](GetRatesRequest.md)| Currency pairs to get rates for |

### Return type

[**GetRatesResponse**](GetRatesResponse.md)

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
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

