# \WebhookEndpointApi

All URIs are relative to *https://api.wallet-pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1EndpointCreate**](WebhookEndpointApi.md#V1EndpointCreate) | **Post** /api/v1/webhooks/endpoints | Create endpoint
[**V1EndpointDelete**](WebhookEndpointApi.md#V1EndpointDelete) | **Delete** /api/v1/webhooks/endpoints/{endpointId} | Delete endpoint
[**V1EndpointGet**](WebhookEndpointApi.md#V1EndpointGet) | **Get** /api/v1/webhooks/endpoints/{endpointId} | Delete endpoint
[**V1EndpointList**](WebhookEndpointApi.md#V1EndpointList) | **Get** /api/v1/webhooks/endpoints | List endpoints



## V1EndpointCreate

> EndpointOut V1EndpointCreate(ctx).EndpointIn(endpointIn).Execute()

Create endpoint



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
    endpointIn := *openapiclient.NewEndpointIn([]string{"FilterTypes_example"}, "http://example.com/endpoint") // EndpointIn | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.WebhookEndpointApi.V1EndpointCreate(context.Background()).EndpointIn(endpointIn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `WebhookEndpointApi.V1EndpointCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EndpointCreate`: EndpointOut
    fmt.Fprintf(os.Stdout, "Response from `WebhookEndpointApi.V1EndpointCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1EndpointCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpointIn** | [**EndpointIn**](EndpointIn.md) |  | 

### Return type

[**EndpointOut**](EndpointOut.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EndpointDelete

> EndpointOut V1EndpointDelete(ctx, endpointId).Execute()

Delete endpoint



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
    endpointId := "wb_12345xsfei" // string | Specified the endpoint id.

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.WebhookEndpointApi.V1EndpointDelete(context.Background(), endpointId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `WebhookEndpointApi.V1EndpointDelete``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EndpointDelete`: EndpointOut
    fmt.Fprintf(os.Stdout, "Response from `WebhookEndpointApi.V1EndpointDelete`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**endpointId** | **string** | Specified the endpoint id. | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EndpointDeleteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**EndpointOut**](EndpointOut.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EndpointGet

> EndpointOut V1EndpointGet(ctx, endpointId).Execute()

Delete endpoint



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
    endpointId := "wb_12345xsfei" // string | Specified the endpoint id or endpoint uid.

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.WebhookEndpointApi.V1EndpointGet(context.Background(), endpointId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `WebhookEndpointApi.V1EndpointGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EndpointGet`: EndpointOut
    fmt.Fprintf(os.Stdout, "Response from `WebhookEndpointApi.V1EndpointGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**endpointId** | **string** | Specified the endpoint id or endpoint uid. | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EndpointGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**EndpointOut**](EndpointOut.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EndpointList

> ListResponseEndpointOut V1EndpointList(ctx).Limit(limit).Cursor(cursor).Ordering(ordering).Execute()

List endpoints



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
    ordering := openapiclient.Ordering("asc") // Ordering | The sorting order of the returned items (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.WebhookEndpointApi.V1EndpointList(context.Background()).Limit(limit).Cursor(cursor).Ordering(ordering).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `WebhookEndpointApi.V1EndpointList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EndpointList`: ListResponseEndpointOut
    fmt.Fprintf(os.Stdout, "Response from `WebhookEndpointApi.V1EndpointList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1EndpointListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Limit the number of returned items | [default to 20]
 **cursor** | **string** | Specifying the start cursor position | 
 **ordering** | [**Ordering**](Ordering.md) | The sorting order of the returned items | 

### Return type

[**ListResponseEndpointOut**](ListResponseEndpointOut.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

