package walletpay

import (
	"context"

	"github.com/openweb3-io/wallet-pay-openapi/go/internal/openapi"
)

type (
	ListOrderOut = openapi.PageOrder
	OrderIn      = openapi.CreateOrderRequest
	OrderOut     = openapi.Order
)

type Orders struct {
	api *openapi.APIClient
}

type OrderListOptions struct {
	Size     *int32
	Page     *int32
	WalletId *string
	Status   *string
	Currency *string
}

func (e *Orders) List(ctx context.Context, options *OrderListOptions) (*ListOrderOut, error) {
	req := e.api.OrdersApi.V1OrdersList(ctx)
	if options != nil {
		if options.Size != nil {
			req = req.Size(*options.Size)
		}
		if options.Page != nil {
			req = req.Page(*options.Page)
		}
		if options.WalletId != nil {
			req = req.WalletId(*options.WalletId)
		}
		if options.Status != nil {
			req = req.Status(*options.Status)
		}
		if options.Currency != nil {
			req = req.Currency(*options.Currency)
		}
	}
	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	ret := ListOrderOut(out)
	return &ret, nil
}

func (e *Orders) Create(ctx context.Context, orderIn *OrderIn) (*OrderOut, error) {
	return e.CreateWithOptions(ctx, orderIn, nil)
}

func (e *Orders) CreateWithOptions(ctx context.Context, orderIn *OrderIn, options *PostOptions) (*OrderOut, error) {
	req := e.api.OrdersApi.V1OrdersCreate(ctx)
	req = req.CreateOrderRequest(openapi.CreateOrderRequest(*orderIn))

	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	ret := OrderOut(out)
	return &ret, nil
}

func (e *Orders) Get(ctx context.Context, orderId string) (*OrderOut, error) {
	req := e.api.OrdersApi.V1OrdersRetrieve(ctx, orderId)

	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	ret := OrderOut(out)

	return &ret, nil
}
