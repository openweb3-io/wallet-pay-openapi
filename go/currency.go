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
	Cursor *string
	Limit  int32
	Rated  *bool
}

func (e *Currency) List(ctx context.Context, appId string, options *CurrencyListOptions) (*ListResponseCurrencyOut, error) {
	req := e.api.CurrencyApi.V1CurrencyList(ctx, appId)
	if options != nil {
		if options.Cursor != nil {
			req = req.Cursor(*options.Cursor)
		}
		if options.Rated != nil {
			req = req.Rated(*options.Rated)
		}
		req.Limit(options.Limit)
	}
	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	ret := ListResponseCurrencyOut(out.Data)
	return &ret, nil
}

func (e *Currency) FindByCode(ctx context.Context, appId, code string) (*CurrencyOut, error) {
	req := e.api.CurrencyApi.V1CurrencyFindByCode(ctx, appId, code)

	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	ret := CurrencyOut(out.Data)

	return &ret, nil
}
