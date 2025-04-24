# \OrdersApi

All URIs are relative to *https://api.wallet-pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1OrdersCreate**](OrdersApi.md#V1OrdersCreate) | **Post** /api/v1/orders | Create Order
[**V1OrdersList**](OrdersApi.md#V1OrdersList) | **Get** /api/v1/orders | List Orders
[**V1OrdersRetrieve**](OrdersApi.md#V1OrdersRetrieve) | **Get** /api/v1/orders/{idOrUid} | Retrieve Order



## V1OrdersCreate

> Order V1OrdersCreate(ctx).CreateOrderRequest(createOrderRequest).Execute()

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
    createOrderRequest := *openapiclient.NewCreateOrderRequest("Amount_example", "Currency_example", "UserId_example") // CreateOrderRequest | Order details

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.OrdersApi.V1OrdersCreate(context.Background()).CreateOrderRequest(createOrderRequest).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OrdersApi.V1OrdersCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1OrdersCreate`: Order
    fmt.Fprintf(os.Stdout, "Response from `OrdersApi.V1OrdersCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1OrdersCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrderRequest** | [**CreateOrderRequest**](CreateOrderRequest.md) | Order details | 

### Return type

[**Order**](Order.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1OrdersList

> PageOrder V1OrdersList(ctx).Size(size).Page(page).WalletId(walletId).Currency(currency).UserId(userId).Status(status).Execute()

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
    size := int32(56) // int32 | Number of items per page
    page := int32(56) // int32 | Page number for pagination, starting from 0 (optional)
    walletId := "walletId_example" // string | Filter orders by wallet ID (optional)
    currency := "currency_example" // string | Filter orders by currency (optional)
    userId := "userId_example" // string | Filter orders by user who made the payment (optional)
    status := "status_example" // string | Order status enum (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.OrdersApi.V1OrdersList(context.Background()).Size(size).Page(page).WalletId(walletId).Currency(currency).UserId(userId).Status(status).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OrdersApi.V1OrdersList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1OrdersList`: PageOrder
    fmt.Fprintf(os.Stdout, "Response from `OrdersApi.V1OrdersList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1OrdersListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **int32** | Number of items per page | 
 **page** | **int32** | Page number for pagination, starting from 0 | 
 **walletId** | **string** | Filter orders by wallet ID | 
 **currency** | **string** | Filter orders by currency | 
 **userId** | **string** | Filter orders by user who made the payment | 
 **status** | **string** | Order status enum | 

### Return type

[**PageOrder**](PageOrder.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1OrdersRetrieve

> Order V1OrdersRetrieve(ctx, idOrUid).Execute()

Retrieve Order



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
    idOrUid := "idOrUid_example" // string | Order ID or UID

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.OrdersApi.V1OrdersRetrieve(context.Background(), idOrUid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OrdersApi.V1OrdersRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1OrdersRetrieve`: Order
    fmt.Fprintf(os.Stdout, "Response from `OrdersApi.V1OrdersRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**idOrUid** | **string** | Order ID or UID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OrdersRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Order**](Order.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

