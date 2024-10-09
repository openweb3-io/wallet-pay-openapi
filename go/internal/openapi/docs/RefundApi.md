# \RefundApi

All URIs are relative to *https://api.wallet-pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1RefundCreate**](RefundApi.md#V1RefundCreate) | **Post** /api/v1/refunds | Create Refund
[**V1RefundGet**](RefundApi.md#V1RefundGet) | **Get** /api/v1/refunds/{idOrUid} | Get Refund
[**V1RefundList**](RefundApi.md#V1RefundList) | **Get** /api/v1/refunds | List Refunds



## V1RefundCreate

> ResponseRefundOut V1RefundCreate(ctx).RefundIn(refundIn).Execute()

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
    refundIn := *openapiclient.NewRefundIn("fdcefb20-1994-417a-8c6a-0648b841c266", "123450000") // RefundIn | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.RefundApi.V1RefundCreate(context.Background()).RefundIn(refundIn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RefundApi.V1RefundCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1RefundCreate`: ResponseRefundOut
    fmt.Fprintf(os.Stdout, "Response from `RefundApi.V1RefundCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1RefundCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refundIn** | [**RefundIn**](RefundIn.md) |  | 

### Return type

[**ResponseRefundOut**](ResponseRefundOut.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1RefundGet

> ResponseRefundOut V1RefundGet(ctx, idOrUid).Execute()

Get Refund



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
    idOrUid := "11b9ca57-0559-403a-bf8e-7bd1a31aff45" // string | Specified the refund id or refund uid.

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.RefundApi.V1RefundGet(context.Background(), idOrUid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RefundApi.V1RefundGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1RefundGet`: ResponseRefundOut
    fmt.Fprintf(os.Stdout, "Response from `RefundApi.V1RefundGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**idOrUid** | **string** | Specified the refund id or refund uid. | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1RefundGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ResponseRefundOut**](ResponseRefundOut.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1RefundList

> ResponseListRefundOut V1RefundList(ctx).Size(size).Page(page).OrderId(orderId).Execute()

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
    size := int32(100) // int32 | Limit the number of returned items (optional) (default to 20)
    page := int32(0) // int32 | Specifying the page index (optional) (default to 0)
    orderId := "923be366-51d1-447f-a0e8-db4c75dffae5" // string | Optional order id (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.RefundApi.V1RefundList(context.Background()).Size(size).Page(page).OrderId(orderId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RefundApi.V1RefundList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1RefundList`: ResponseListRefundOut
    fmt.Fprintf(os.Stdout, "Response from `RefundApi.V1RefundList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1RefundListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **int32** | Limit the number of returned items | [default to 20]
 **page** | **int32** | Specifying the page index | [default to 0]
 **orderId** | **string** | Optional order id | 

### Return type

[**ResponseListRefundOut**](ResponseListRefundOut.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

