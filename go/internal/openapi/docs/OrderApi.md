# \OrderApi

All URIs are relative to *https://api.wallet-pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1OrderCreate**](OrderApi.md#V1OrderCreate) | **Post** /api/v1/orders | Create Order
[**V1OrderGet**](OrderApi.md#V1OrderGet) | **Get** /api/v1/orders/{idOrUid} | Get order
[**V1OrderList**](OrderApi.md#V1OrderList) | **Get** /api/v1/orders | List Orders



## V1OrderCreate

> ResponseOrderOut V1OrderCreate(ctx).OrderIn(orderIn).Execute()

Create Order



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
    orderIn := *openapiclient.NewOrderIn("USDT", "12345000") // OrderIn | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.OrderApi.V1OrderCreate(context.Background()).OrderIn(orderIn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OrderApi.V1OrderCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1OrderCreate`: ResponseOrderOut
    fmt.Fprintf(os.Stdout, "Response from `OrderApi.V1OrderCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1OrderCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderIn** | [**OrderIn**](OrderIn.md) |  | 

### Return type

[**ResponseOrderOut**](ResponseOrderOut.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1OrderGet

> ResponseOrderOut V1OrderGet(ctx, idOrUid).Execute()

Get order



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
    idOrUid := "11b9ca57-0559-403a-bf8e-7bd1a31aff45" // string | Specified the order id or order uid.

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.OrderApi.V1OrderGet(context.Background(), idOrUid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OrderApi.V1OrderGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1OrderGet`: ResponseOrderOut
    fmt.Fprintf(os.Stdout, "Response from `OrderApi.V1OrderGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**idOrUid** | **string** | Specified the order id or order uid. | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OrderGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ResponseOrderOut**](ResponseOrderOut.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1OrderList

> ResponseListOrderOut V1OrderList(ctx).Size(size).Page(page).WalletId(walletId).Currency(currency).Status(status).Execute()

List Orders



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
    size := int32(100) // int32 | Limit the number of returned items (optional) (default to 20)
    page := int32(0) // int32 | Specifying the page index (optional) (default to 0)
    walletId := "wallet_id" // string | Optional wallet id (optional)
    currency := "USDT" // string | Optional currency code (optional)
    status := "PENDING" // string | Optional order status (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.OrderApi.V1OrderList(context.Background()).Size(size).Page(page).WalletId(walletId).Currency(currency).Status(status).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OrderApi.V1OrderList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1OrderList`: ResponseListOrderOut
    fmt.Fprintf(os.Stdout, "Response from `OrderApi.V1OrderList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1OrderListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **int32** | Limit the number of returned items | [default to 20]
 **page** | **int32** | Specifying the page index | [default to 0]
 **walletId** | **string** | Optional wallet id | 
 **currency** | **string** | Optional currency code | 
 **status** | **string** | Optional order status | 

### Return type

[**ResponseListOrderOut**](ResponseListOrderOut.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

