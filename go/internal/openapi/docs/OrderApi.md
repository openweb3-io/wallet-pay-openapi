# \OrderApi

All URIs are relative to *https://api.wallet-pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1OrderCreate**](OrderApi.md#V1OrderCreate) | **Post** /api/v1/apps/{appId}/orders | Create Order
[**V1OrderGet**](OrderApi.md#V1OrderGet) | **Get** /api/v1/apps/{appId}/orders/{idOrUid} | Get order
[**V1OrderList**](OrderApi.md#V1OrderList) | **Get** /api/v1/apps/{appId}/orders | List Orders



## V1OrderCreate

> OrderOut V1OrderCreate(ctx, appId).OrderIn(orderIn).Execute()

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
    appId := "app_12345xsfei" // string | Specified the app id.
    orderIn := *openapiclient.NewOrderIn("USDT", "0.0012345") // OrderIn | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.OrderApi.V1OrderCreate(context.Background(), appId).OrderIn(orderIn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OrderApi.V1OrderCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1OrderCreate`: OrderOut
    fmt.Fprintf(os.Stdout, "Response from `OrderApi.V1OrderCreate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**appId** | **string** | Specified the app id. | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OrderCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **orderIn** | [**OrderIn**](OrderIn.md) |  | 

### Return type

[**OrderOut**](OrderOut.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1OrderGet

> OrderOut V1OrderGet(ctx, appId, idOrUid).Execute()

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
    appId := "app_12345xsfei" // string | Specified the app id.
    idOrUid := "11b9ca57-0559-403a-bf8e-7bd1a31aff45" // string | Specified the order id or order uid.

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.OrderApi.V1OrderGet(context.Background(), appId, idOrUid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OrderApi.V1OrderGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1OrderGet`: OrderOut
    fmt.Fprintf(os.Stdout, "Response from `OrderApi.V1OrderGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**appId** | **string** | Specified the app id. | 
**idOrUid** | **string** | Specified the order id or order uid. | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OrderGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**OrderOut**](OrderOut.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1OrderList

> ListResponseOrderOut V1OrderList(ctx, appId).Size(size).Page(page).WalletId(walletId).AccountId(accountId).Execute()

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
    appId := "app_12345xsfei" // string | Specified the app id.
    size := int32(100) // int32 | Limit the number of returned items (optional) (default to 20)
    page := int32(0) // int32 | Specifying the page index (optional) (default to 0)
    walletId := "wallet_id" // string | Optional wallet id (optional)
    accountId := "account_id" // string | Optional account id (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.OrderApi.V1OrderList(context.Background(), appId).Size(size).Page(page).WalletId(walletId).AccountId(accountId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OrderApi.V1OrderList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1OrderList`: ListResponseOrderOut
    fmt.Fprintf(os.Stdout, "Response from `OrderApi.V1OrderList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**appId** | **string** | Specified the app id. | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OrderListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **size** | **int32** | Limit the number of returned items | [default to 20]
 **page** | **int32** | Specifying the page index | [default to 0]
 **walletId** | **string** | Optional wallet id | 
 **accountId** | **string** | Optional account id | 

### Return type

[**ListResponseOrderOut**](ListResponseOrderOut.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

