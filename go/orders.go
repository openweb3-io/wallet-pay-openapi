package walletpay

import (
	"context"

	"github.com/openweb3-io/wallet-pay-openapi/go/internal/openapi"
)

type (
	PageOrder          = openapi.PageOrder
	CreateOrderRequest = openapi.CreateOrderRequest
	Order              = openapi.Order
)

type Orders struct {
	api *openapi.APIClient
}

type OrderListOptions struct {
	Size     int32
	Page     int32
	WalletId *string
	Status   *string
	Currency *string
	UserId   *string
}

func (e *Orders) List(ctx context.Context, options *OrderListOptions) (*PageOrder, error) {
	req := e.api.OrdersApi.V1OrdersList(ctx)
	if options != nil {
		req = req.Page(options.Page)
		req = req.Size(options.Size)
		if options.WalletId != nil {
			req = req.WalletId(*options.WalletId)
		}
		if options.Status != nil {
			req = req.Status(*options.Status)
		}
		if options.Currency != nil {
			req = req.Currency(*options.Currency)
		}
		if options.UserId != nil {
			req = req.UserId(*options.UserId)
		}
	}
	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	ret := PageOrder(out)
	return &ret, nil
}

func (e *Orders) Create(ctx context.Context, orderIn *CreateOrderRequest) (*Order, error) {
	return e.CreateWithOptions(ctx, orderIn, nil)
}

func (e *Orders) CreateWithOptions(ctx context.Context, orderIn *CreateOrderRequest, options *PostOptions) (*Order, error) {
	req := e.api.OrdersApi.V1OrdersCreate(ctx)
	req = req.CreateOrderRequest(openapi.CreateOrderRequest(*orderIn))

	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	ret := Order(out)
	return &ret, nil
}

func (e *Orders) Get(ctx context.Context, orderId string) (*Order, error) {
	req := e.api.OrdersApi.V1OrdersRetrieve(ctx, orderId)

	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	ret := Order(out)

	return &ret, nil
}
