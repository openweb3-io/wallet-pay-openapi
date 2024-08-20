# \TransferApi

All URIs are relative to *https://api.wallet-pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1TransferCreate**](TransferApi.md#V1TransferCreate) | **Post** /api/v1/apps/{appId}/transfers | Create Transfer



## V1TransferCreate

> ResponseTransferOut V1TransferCreate(ctx, appId).TransferIn(transferIn).Execute()

Create Transfer



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
    transferIn := *openapiclient.NewTransferIn("7e5c8e13-0573-472e-9e34-fe779c618fcf", "USDT", "10000") // TransferIn | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.TransferApi.V1TransferCreate(context.Background(), appId).TransferIn(transferIn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TransferApi.V1TransferCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1TransferCreate`: ResponseTransferOut
    fmt.Fprintf(os.Stdout, "Response from `TransferApi.V1TransferCreate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**appId** | **string** | Specified the app id. | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1TransferCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **transferIn** | [**TransferIn**](TransferIn.md) |  | 

### Return type

[**ResponseTransferOut**](ResponseTransferOut.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

