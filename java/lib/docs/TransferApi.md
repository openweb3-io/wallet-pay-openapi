# TransferApi

All URIs are relative to *https://api.wallet-pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1TransferCreate**](TransferApi.md#v1TransferCreate) | **POST** /api/v1/apps/{appId}/transfers | Create Transfer


<a name="v1TransferCreate"></a>
# **v1TransferCreate**
> ResponseTransferOut v1TransferCreate(appId, transferIn)

Create Transfer

Create a new transfer.

### Example
```java
// Import classes:
import io.openweb3.walletpay.internal.ApiClient;
import io.openweb3.walletpay.internal.ApiException;
import io.openweb3.walletpay.internal.Configuration;
import io.openweb3.walletpay.internal.auth.*;
import io.openweb3.walletpay.internal.models.*;
import io.openweb3.walletpay.internal.api.TransferApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.wallet-pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    TransferApi apiInstance = new TransferApi(defaultClient);
    String appId = "app_12345xsfei"; // String | Specified the app id.
    TransferIn transferIn = new TransferIn(); // TransferIn | 
    try {
      ResponseTransferOut result = apiInstance.v1TransferCreate(appId, transferIn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TransferApi#v1TransferCreate");
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
 **transferIn** | [**TransferIn**](TransferIn.md)|  |

### Return type

[**ResponseTransferOut**](ResponseTransferOut.md)

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

