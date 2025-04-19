# \CurrenciesApi

All URIs are relative to *https://api.wallet-pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1CurrenciesList**](CurrenciesApi.md#V1CurrenciesList) | **Get** /api/v1/currencies | List currencies
[**V1CurrenciesRetrieve**](CurrenciesApi.md#V1CurrenciesRetrieve) | **Get** /api/v1/currencies/{code} | Get Currency



## V1CurrenciesList

> CursorPageCurrency V1CurrenciesList(ctx).Limit(limit).Cursor(cursor).AppId(appId).Rated(rated).Execute()

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
    limit := int32(56) // int32 | The number of items to return per page.
    cursor := "cursor_example" // string | The cursor to use for pagination. (optional)
    appId := "appId_example" // string | Filter currencies by application ID (optional)
    rated := true // bool | Filter currencies by rated status (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.CurrenciesApi.V1CurrenciesList(context.Background()).Limit(limit).Cursor(cursor).AppId(appId).Rated(rated).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CurrenciesApi.V1CurrenciesList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1CurrenciesList`: CursorPageCurrency
    fmt.Fprintf(os.Stdout, "Response from `CurrenciesApi.V1CurrenciesList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1CurrenciesListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | The number of items to return per page. | 
 **cursor** | **string** | The cursor to use for pagination. | 
 **appId** | **string** | Filter currencies by application ID | 
 **rated** | **bool** | Filter currencies by rated status | 

### Return type

[**CursorPageCurrency**](CursorPageCurrency.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1CurrenciesRetrieve

> Currency V1CurrenciesRetrieve(ctx, code).Execute()

Get Currency



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
    code := "code_example" // string | Currency code

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.CurrenciesApi.V1CurrenciesRetrieve(context.Background(), code).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CurrenciesApi.V1CurrenciesRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1CurrenciesRetrieve`: Currency
    fmt.Fprintf(os.Stdout, "Response from `CurrenciesApi.V1CurrenciesRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**code** | **string** | Currency code | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1CurrenciesRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Currency**](Currency.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

