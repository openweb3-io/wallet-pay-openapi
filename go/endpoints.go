package walletpay

import (
	"context"
	"time"

	"github.com/openweb3-io/wallet-pay-openapi/go/internal/openapi"
)

type (
	ListEndpointOut = openapi.CursorPageEndpoint
	EndpointIn      = openapi.CreateEndpointRequest
	EndpointOut     = openapi.Endpoint
)

type Endpoints struct {
	api *openapi.APIClient
}

type EndpointListOptions struct {
	Limit  int32
	Cursor *string
}

type EndpointStatsOptions struct {
	Since *time.Time
	Until *time.Time
}

func (e *Endpoints) List(ctx context.Context, options *EndpointListOptions) (*ListEndpointOut, error) {
	req := e.api.WebhookEndpointsApi.V1WebhookEndpointsList(ctx)
	if options != nil {
		req = req.Limit(options.Limit)
		if options.Cursor != nil {
			req = req.Cursor(*options.Cursor)
		}
	}
	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	ret := ListEndpointOut(out)
	return &ret, nil
}

func (e *Endpoints) Create(ctx context.Context, endpointIn *EndpointIn) (*EndpointOut, error) {
	return e.CreateWithOptions(ctx, endpointIn, nil)
}

func (e *Endpoints) CreateWithOptions(ctx context.Context, endpointIn *EndpointIn, options *PostOptions) (*EndpointOut, error) {
	req := e.api.WebhookEndpointsApi.V1WebhookEndpointsCreate(ctx)
	req = req.CreateEndpointRequest(openapi.CreateEndpointRequest(*endpointIn))

	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	ret := EndpointOut(out)
	return &ret, nil
}

func (e *Endpoints) Get(ctx context.Context, endpointId string) (*EndpointOut, error) {
	req := e.api.WebhookEndpointsApi.V1WebhookEndpointsRetrieve(ctx, endpointId)

	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	ret := EndpointOut(out)

	return &ret, nil
}

func (e *Endpoints) Delete(ctx context.Context, endpointId string) error {
	req := e.api.WebhookEndpointsApi.V1WebhookEndpointsDelete(ctx, endpointId)
	res, err := req.Execute()
	if err != nil {
		return wrapError(err, res)
	}

	return nil
}
