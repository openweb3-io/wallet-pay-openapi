package walletpay

import (
	"context"

	"github.com/openweb3-io/wallet-pay-openapi/go/internal/openapi"
)

type (
	ListResponseCurrencyOut = openapi.ListResponseCurrencyOut
	CurrencyOut             = openapi.CurrencyOut
)

type Currency struct {
	api *openapi.APIClient
}

type CurrencyListOptions struct {
	Size  *int32
	Page  *int32
	AppId *string
}

func (e *Currency) List(ctx context.Context, options *CurrencyListOptions) (*ListResponseCurrencyOut, error) {
	req := e.api.CurrencyApi.V1CurrencyList(ctx)
	if options != nil {
		if options.Size != nil {
			req = req.Size(*options.Size)
		}
		if options.Page != nil {
			req = req.Page(*options.Page)
		}
		if options.AppId != nil {
			req = req.AppId(*options.AppId)
		}
	}
	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	ret := ListResponseCurrencyOut(out.Data)
	return &ret, nil
}

func (e *Currency) FindByCode(ctx context.Context, code string) (*CurrencyOut, error) {
	req := e.api.CurrencyApi.V1CurrencyFindByCode(ctx, code)

	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	ret := CurrencyOut(out.Data)

	return &ret, nil
}
