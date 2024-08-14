package walletpay

import (
	"context"
	"time"

	"github.com/openweb3-io/wallet-pay-openapi/go/internal/openapi"
)

type (
	ListResponseEndpointOut = openapi.ListResponseEndpointOut
	EndpointIn              = openapi.EndpointIn
	EndpointOut             = openapi.EndpointOut
	Ordering                = openapi.Ordering
)

type Endpoint struct {
	api *openapi.APIClient
}

type EndpointListOptions struct {
	Limit    *int32
	Cursor   *string
	Ordering *Ordering
}

type EndpointStatsOptions struct {
	Since *time.Time
	Until *time.Time
}

func (e *Endpoint) List(ctx context.Context, appId string, options *EndpointListOptions) (*ListResponseEndpointOut, error) {
	req := e.api.WebhookEndpointApi.V1EndpointList(ctx, appId)
	if options != nil {
		if options.Limit != nil {
			req = req.Limit(*options.Limit)
		}
		if options.Cursor != nil {
			req = req.Cursor(*options.Cursor)
		}
		if options.Ordering != nil {
			req = req.Ordering(*options.Ordering)
		}
	}
	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	ret := ListResponseEndpointOut(out.Data)
	return &ret, nil
}

func (e *Endpoint) Create(ctx context.Context, appId string, endpointIn *EndpointIn) (*EndpointOut, error) {
	return e.CreateWithOptions(ctx, appId, endpointIn, nil)
}

func (e *Endpoint) CreateWithOptions(ctx context.Context, appId string, endpointIn *EndpointIn, options *PostOptions) (*EndpointOut, error) {
	req := e.api.WebhookEndpointApi.V1EndpointCreate(ctx, appId)
	req = req.EndpointIn(openapi.EndpointIn(*endpointIn))

	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	ret := EndpointOut(out.Data)
	return &ret, nil
}

func (e *Endpoint) Get(ctx context.Context, appId, endpointId string) (*EndpointOut, error) {
	req := e.api.WebhookEndpointApi.V1EndpointGet(ctx, appId, endpointId)

	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	ret := EndpointOut(out.Data)

	return &ret, nil
}

func (e *Endpoint) Delete(ctx context.Context, appId, endpointId string) (*EndpointOut, error) {
	req := e.api.WebhookEndpointApi.V1EndpointDelete(ctx, appId, endpointId)
	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}

	ret := EndpointOut(out.Data)

	return &ret, nil
}
