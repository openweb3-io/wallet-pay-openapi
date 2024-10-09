package walletpay

import (
	"context"

	"github.com/openweb3-io/wallet-pay-openapi/go/internal/openapi"
)

type (
	ListResponseOrderOut = openapi.ListResponseOrderOut
	OrderIn              = openapi.OrderIn
	OrderOut             = openapi.OrderOut
)

type Order struct {
	api *openapi.APIClient
}

type OrderListOptions struct {
	Size     *int32
	Page     *int32
	WalletId *string
	Status   *string
	Currency *string
}

func (e *Order) List(ctx context.Context, options *OrderListOptions) (*ListResponseOrderOut, error) {
	req := e.api.OrderApi.V1OrderList(ctx)
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
	ret := ListResponseOrderOut(out.Data)
	return &ret, nil
}

func (e *Order) Create(ctx context.Context, orderIn *OrderIn) (*OrderOut, error) {
	return e.CreateWithOptions(ctx, orderIn, nil)
}

func (e *Order) CreateWithOptions(ctx context.Context, orderIn *OrderIn, options *PostOptions) (*OrderOut, error) {
	req := e.api.OrderApi.V1OrderCreate(ctx)
	req = req.OrderIn(openapi.OrderIn(*orderIn))

	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	ret := OrderOut(out.Data)
	return &ret, nil
}

func (e *Order) Get(ctx context.Context, orderId string) (*OrderOut, error) {
	req := e.api.OrderApi.V1OrderGet(ctx, orderId)

	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	ret := OrderOut(out.Data)

	return &ret, nil
}
