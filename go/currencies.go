package walletpay

import (
	"context"

	"github.com/openweb3-io/wallet-pay-openapi/go/internal/openapi"
)

type (
	CursorPageCurrency = openapi.CursorPageCurrency
	Currency           = openapi.Currency
)

type Currencies struct {
	api *openapi.APIClient
}

type CurrencyListOptions struct {
	Cursor *string
	Limit  *int32
	Rated  *bool
}

func (e *Currencies) List(ctx context.Context, options *CurrencyListOptions) (*CursorPageCurrency, error) {
	req := e.api.CurrenciesApi.V1CurrenciesList(ctx)
	if options != nil {
		if options.Cursor != nil {
			req = req.Cursor(*options.Cursor)
		}
		if options.Rated != nil {
			req = req.Rated(*options.Rated)
		}
		if options.Limit != nil {
			req = req.Limit(*options.Limit)
		}
	}
	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}

	ret := CursorPageCurrency(out)
	return &ret, nil
}

func (e *Currencies) FindByCode(ctx context.Context, code string) (*Currency, error) {
	req := e.api.CurrenciesApi.V1CurrenciesRetrieve(ctx, code)

	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	ret := Currency(out)
	return &ret, nil
}
