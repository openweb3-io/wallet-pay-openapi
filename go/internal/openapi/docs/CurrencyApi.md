# \CurrencyApi

All URIs are relative to *https://api.wallet-pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1CurrencyFindByCode**](CurrencyApi.md#V1CurrencyFindByCode) | **Get** /api/v1/currencies/{code} | Find currency by code
[**V1CurrencyList**](CurrencyApi.md#V1CurrencyList) | **Get** /api/v1/currencies | List currencies



## V1CurrencyFindByCode

> ResponseCurrencyOut V1CurrencyFindByCode(ctx, code).Execute()

Find currency by code



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
    code := "USDT" // string | Specified currency code.

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.CurrencyApi.V1CurrencyFindByCode(context.Background(), code).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CurrencyApi.V1CurrencyFindByCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1CurrencyFindByCode`: ResponseCurrencyOut
    fmt.Fprintf(os.Stdout, "Response from `CurrencyApi.V1CurrencyFindByCode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**code** | **string** | Specified currency code. | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1CurrencyFindByCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ResponseCurrencyOut**](ResponseCurrencyOut.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1CurrencyList

> ResponseListCurrencyOut V1CurrencyList(ctx).Limit(limit).Cursor(cursor).Rated(rated).Execute()

List currencies



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
    limit := int32(100) // int32 | Limit the number of returned items (optional) (default to 20)
    cursor := "cursor_example" // string | Specifying the start cursor position (optional)
    rated := true // bool | Specifying if currency supports fetching rates (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.CurrencyApi.V1CurrencyList(context.Background()).Limit(limit).Cursor(cursor).Rated(rated).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CurrencyApi.V1CurrencyList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1CurrencyList`: ResponseListCurrencyOut
    fmt.Fprintf(os.Stdout, "Response from `CurrencyApi.V1CurrencyList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1CurrencyListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Limit the number of returned items | [default to 20]
 **cursor** | **string** | Specifying the start cursor position | 
 **rated** | **bool** | Specifying if currency supports fetching rates | 

### Return type

[**ResponseListCurrencyOut**](ResponseListCurrencyOut.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

