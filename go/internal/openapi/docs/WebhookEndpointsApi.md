# \WebhookEndpointsApi

All URIs are relative to *https://api.wallet-pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1WebhookEndpointsCreate**](WebhookEndpointsApi.md#V1WebhookEndpointsCreate) | **Post** /api/v1/webhooks/endpoints | Create Webhook Endpoint
[**V1WebhookEndpointsDelete**](WebhookEndpointsApi.md#V1WebhookEndpointsDelete) | **Delete** /api/v1/webhooks/endpoints/{endpointId} | Delete Webhook Endpoint
[**V1WebhookEndpointsList**](WebhookEndpointsApi.md#V1WebhookEndpointsList) | **Get** /api/v1/webhooks/endpoints | List Webhook Endpoints
[**V1WebhookEndpointsRetrieve**](WebhookEndpointsApi.md#V1WebhookEndpointsRetrieve) | **Get** /api/v1/webhooks/endpoints/{endpointId} | Retrieve Webhook Endpoint



## V1WebhookEndpointsCreate

> Endpoint V1WebhookEndpointsCreate(ctx).CreateEndpointRequest(createEndpointRequest).Execute()

Create Webhook Endpoint



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
    createEndpointRequest := *openapiclient.NewCreateEndpointRequest([]string{"FilterTypes_example"}, "Url_example") // CreateEndpointRequest | Webhook endpoint details

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.WebhookEndpointsApi.V1WebhookEndpointsCreate(context.Background()).CreateEndpointRequest(createEndpointRequest).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `WebhookEndpointsApi.V1WebhookEndpointsCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1WebhookEndpointsCreate`: Endpoint
    fmt.Fprintf(os.Stdout, "Response from `WebhookEndpointsApi.V1WebhookEndpointsCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1WebhookEndpointsCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createEndpointRequest** | [**CreateEndpointRequest**](CreateEndpointRequest.md) | Webhook endpoint details | 

### Return type

[**Endpoint**](Endpoint.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1WebhookEndpointsDelete

> V1WebhookEndpointsDelete(ctx, endpointId).Execute()

Delete Webhook Endpoint



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
    endpointId := "endpointId_example" // string | Webhook endpoint ID

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.WebhookEndpointsApi.V1WebhookEndpointsDelete(context.Background(), endpointId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `WebhookEndpointsApi.V1WebhookEndpointsDelete``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**endpointId** | **string** | Webhook endpoint ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1WebhookEndpointsDeleteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

 (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1WebhookEndpointsList

> CursorPageEndpoint V1WebhookEndpointsList(ctx).Limit(limit).Cursor(cursor).Execute()

List Webhook Endpoints



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
    limit := int32(56) // int32 | The limit of items per page
    cursor := "cursor_example" // string | The cursor for pagination (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.WebhookEndpointsApi.V1WebhookEndpointsList(context.Background()).Limit(limit).Cursor(cursor).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `WebhookEndpointsApi.V1WebhookEndpointsList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1WebhookEndpointsList`: CursorPageEndpoint
    fmt.Fprintf(os.Stdout, "Response from `WebhookEndpointsApi.V1WebhookEndpointsList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1WebhookEndpointsListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | The limit of items per page | 
 **cursor** | **string** | The cursor for pagination | 

### Return type

[**CursorPageEndpoint**](CursorPageEndpoint.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1WebhookEndpointsRetrieve

> Endpoint V1WebhookEndpointsRetrieve(ctx, endpointId).Execute()

Retrieve Webhook Endpoint



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
    endpointId := "endpointId_example" // string | Webhook endpoint ID

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.WebhookEndpointsApi.V1WebhookEndpointsRetrieve(context.Background(), endpointId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `WebhookEndpointsApi.V1WebhookEndpointsRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1WebhookEndpointsRetrieve`: Endpoint
    fmt.Fprintf(os.Stdout, "Response from `WebhookEndpointsApi.V1WebhookEndpointsRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**endpointId** | **string** | Webhook endpoint ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1WebhookEndpointsRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Endpoint**](Endpoint.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

