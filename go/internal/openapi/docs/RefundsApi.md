# \RefundsApi

All URIs are relative to *https://api.wallet-pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1RefundsCreate**](RefundsApi.md#V1RefundsCreate) | **Post** /api/v1/refunds | Create Refund
[**V1RefundsList**](RefundsApi.md#V1RefundsList) | **Get** /api/v1/refunds | List Refunds
[**V1RefundsRetrieve**](RefundsApi.md#V1RefundsRetrieve) | **Get** /api/v1/refunds/{idOrUid} | Retrieve Refund



## V1RefundsCreate

> Refund V1RefundsCreate(ctx).CreateRefundRequest(createRefundRequest).Execute()

Create Refund



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
    createRefundRequest := *openapiclient.NewCreateRefundRequest("Amount_example", "OrderId_example") // CreateRefundRequest | Refund details

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.RefundsApi.V1RefundsCreate(context.Background()).CreateRefundRequest(createRefundRequest).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RefundsApi.V1RefundsCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1RefundsCreate`: Refund
    fmt.Fprintf(os.Stdout, "Response from `RefundsApi.V1RefundsCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1RefundsCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createRefundRequest** | [**CreateRefundRequest**](CreateRefundRequest.md) | Refund details | 

### Return type

[**Refund**](Refund.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1RefundsList

> PageRefund V1RefundsList(ctx).Page(page).Size(size).OrderId(orderId).Execute()

List Refunds



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
    page := int32(56) // int32 | Page number for pagination, starting from 0
    size := int32(56) // int32 | Number of items per page
    orderId := "orderId_example" // string | Filter refunds by order ID (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.RefundsApi.V1RefundsList(context.Background()).Page(page).Size(size).OrderId(orderId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RefundsApi.V1RefundsList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1RefundsList`: PageRefund
    fmt.Fprintf(os.Stdout, "Response from `RefundsApi.V1RefundsList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1RefundsListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int32** | Page number for pagination, starting from 0 | 
 **size** | **int32** | Number of items per page | 
 **orderId** | **string** | Filter refunds by order ID | 

### Return type

[**PageRefund**](PageRefund.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1RefundsRetrieve

> Refund V1RefundsRetrieve(ctx, idOrUid).Execute()

Retrieve Refund



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
    idOrUid := "idOrUid_example" // string | Refund ID or UID

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.RefundsApi.V1RefundsRetrieve(context.Background(), idOrUid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RefundsApi.V1RefundsRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1RefundsRetrieve`: Refund
    fmt.Fprintf(os.Stdout, "Response from `RefundsApi.V1RefundsRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**idOrUid** | **string** | Refund ID or UID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1RefundsRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Refund**](Refund.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

