# \RatesApi

All URIs are relative to *https://api.wallet-pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1RatesEstimate**](RatesApi.md#V1RatesEstimate) | **Get** /api/v1/rates/estimate | Estimate currency conversion
[**V1RatesList**](RatesApi.md#V1RatesList) | **Post** /api/v1/rates | List exchange rates



## V1RatesEstimate

> EstimateResponse V1RatesEstimate(ctx).BaseAmount(baseAmount).ToCurrency(toCurrency).BaseCurrency(baseCurrency).Execute()

Estimate currency conversion



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
    baseAmount := "baseAmount_example" // string | Amount in source currency to convert
    toCurrency := "toCurrency_example" // string | Target currency code
    baseCurrency := "baseCurrency_example" // string | Source currency code

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.RatesApi.V1RatesEstimate(context.Background()).BaseAmount(baseAmount).ToCurrency(toCurrency).BaseCurrency(baseCurrency).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatesApi.V1RatesEstimate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1RatesEstimate`: EstimateResponse
    fmt.Fprintf(os.Stdout, "Response from `RatesApi.V1RatesEstimate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1RatesEstimateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseAmount** | **string** | Amount in source currency to convert | 
 **toCurrency** | **string** | Target currency code | 
 **baseCurrency** | **string** | Source currency code | 

### Return type

[**EstimateResponse**](EstimateResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1RatesList

> GetRatesResponse V1RatesList(ctx).GetRatesRequest(getRatesRequest).Execute()

List exchange rates



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
    getRatesRequest := *openapiclient.NewGetRatesRequest([]openapiclient.CurrencyPair{*openapiclient.NewCurrencyPair("BaseCurrency_example", "ToCurrency_example")}) // GetRatesRequest | Currency pairs to get rates for

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.RatesApi.V1RatesList(context.Background()).GetRatesRequest(getRatesRequest).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatesApi.V1RatesList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1RatesList`: GetRatesResponse
    fmt.Fprintf(os.Stdout, "Response from `RatesApi.V1RatesList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1RatesListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getRatesRequest** | [**GetRatesRequest**](GetRatesRequest.md) | Currency pairs to get rates for | 

### Return type

[**GetRatesResponse**](GetRatesResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

