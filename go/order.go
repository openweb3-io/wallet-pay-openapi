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
	Size      *int32
	Page      *int32
	WalletId  *string
	AccountId *string
}

func (e *Order) List(ctx context.Context, appId string, options *OrderListOptions) (*ListResponseOrderOut, error) {
	req := e.api.OrderApi.V1OrderList(ctx, appId)
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
		if options.AccountId != nil {
			req = req.AccountId(*options.AccountId)
		}
	}
	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	ret := ListResponseOrderOut(out)
	return &ret, nil
}

func (e *Order) Create(ctx context.Context, appId string, OrderIn *OrderIn) (*OrderOut, error) {
	return e.CreateWithOptions(ctx, appId, OrderIn, nil)
}

func (e *Order) CreateWithOptions(ctx context.Context, appId string, OrderIn *OrderIn, options *PostOptions) (*OrderOut, error) {
	req := e.api.OrderApi.V1OrderCreate(ctx, appId)
	req = req.OrderIn(openapi.OrderIn(*OrderIn))

	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	ret := OrderOut(out)
	return &ret, nil
}
