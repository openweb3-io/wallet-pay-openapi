package walletpay

import (
	"context"

	"github.com/openweb3-io/wallet-pay-openapi/go/internal/openapi"
)

type (
	EstimateIn   = openapi.EstimateData
	EstimateOut  = openapi.EstimateOut
	RatesOut     = openapi.RatesOut
	GetRatesIn   = openapi.GetRatesIn
	CurrencyPair = openapi.CurrencyPair
)

type Rate struct {
	api *openapi.APIClient
}

type EstimateOptions struct {
	BaseCurrency string
	BaseAmount   string
	ToCurrency   string
}

func (e *Rate) Estimate(ctx context.Context, options *EstimateOptions) (*EstimateOut, error) {
	req := e.api.RateApi.V1RateEstimate(ctx)
	req = req.BaseCurrency(options.BaseCurrency)
	req = req.BaseAmount(options.BaseAmount)
	req = req.ToCurrency(options.ToCurrency)
	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	ret := EstimateOut(out.Data)
	return &ret, nil
}

func (e *Rate) GetRates(ctx context.Context, getRatesIn *GetRatesIn) (*RatesOut, error) {
	req := e.api.RateApi.V1RateGetRates(ctx)
	req = req.GetRatesIn(openapi.GetRatesIn(*getRatesIn))
	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	ret := RatesOut(out.Data)

	return &ret, nil
}
