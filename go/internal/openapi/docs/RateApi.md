# \RateApi

All URIs are relative to *https://api.wallet-pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1RateEstimate**](RateApi.md#V1RateEstimate) | **Get** /api/v1/rates/estimate | Estimate the amount of currency exchange.
[**V1RateGetRates**](RateApi.md#V1RateGetRates) | **Post** /api/v1/rates | Query exchange rates between different currencies. 



## V1RateEstimate

> ResponseEstimateOut V1RateEstimate(ctx).BaseCurrency(baseCurrency).ToCurrency(toCurrency).BaseAmount(baseAmount).Execute()

Estimate the amount of currency exchange.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    baseCurrency := "TON" // string | Specified the base currency that needs to be estimated
    toCurrency := "NOT" // string | Specify the target currency.
    baseAmount := "100" // string | Specify the amount of base currency that need to be estimated.

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.RateApi.V1RateEstimate(context.Background()).BaseCurrency(baseCurrency).ToCurrency(toCurrency).BaseAmount(baseAmount).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RateApi.V1RateEstimate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1RateEstimate`: ResponseEstimateOut
    fmt.Fprintf(os.Stdout, "Response from `RateApi.V1RateEstimate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1RateEstimateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseCurrency** | **string** | Specified the base currency that needs to be estimated | 
 **toCurrency** | **string** | Specify the target currency. | 
 **baseAmount** | **string** | Specify the amount of base currency that need to be estimated. | 

### Return type

[**ResponseEstimateOut**](ResponseEstimateOut.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1RateGetRates

> ResponseRatesOut V1RateGetRates(ctx).GetRatesIn(getRatesIn).Execute()

Query exchange rates between different currencies. 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    getRatesIn := *openapiclient.NewGetRatesIn([]openapiclient.CurrencyPair{*openapiclient.NewCurrencyPair("TON", "NOT")}) // GetRatesIn | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.RateApi.V1RateGetRates(context.Background()).GetRatesIn(getRatesIn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RateApi.V1RateGetRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1RateGetRates`: ResponseRatesOut
    fmt.Fprintf(os.Stdout, "Response from `RateApi.V1RateGetRates`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1RateGetRatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getRatesIn** | [**GetRatesIn**](GetRatesIn.md) |  | 

### Return type

[**ResponseRatesOut**](ResponseRatesOut.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

