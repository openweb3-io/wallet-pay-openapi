# \TransfersApi

All URIs are relative to *https://api.wallet-pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1TransfersTransfer**](TransfersApi.md#V1TransfersTransfer) | **Post** /api/v1/transfers | Transfer Funds



## V1TransfersTransfer

> TransferResponse V1TransfersTransfer(ctx).TransferRequest(transferRequest).Execute()

Transfer Funds



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
    transferRequest := *openapiclient.NewTransferRequest("Amount_example", "Currency_example", "ToWalletId_example") // TransferRequest | Transfer details

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.TransfersApi.V1TransfersTransfer(context.Background()).TransferRequest(transferRequest).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TransfersApi.V1TransfersTransfer``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1TransfersTransfer`: TransferResponse
    fmt.Fprintf(os.Stdout, "Response from `TransfersApi.V1TransfersTransfer`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1TransfersTransferRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferRequest** | [**TransferRequest**](TransferRequest.md) | Transfer details | 

### Return type

[**TransferResponse**](TransferResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

