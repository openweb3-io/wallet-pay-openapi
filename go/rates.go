package walletpay

import (
	"context"

	"github.com/openweb3-io/wallet-pay-openapi/go/internal/openapi"
)

type (
	EstimateResponse = openapi.EstimateResponse
	GetRatesRequest  = openapi.GetRatesRequest
	GetRatesResponse = openapi.GetRatesResponse
	CurrencyPair     = openapi.CurrencyPair
)

type Rates struct {
	api *openapi.APIClient
}

type EstimateOptions struct {
	BaseCurrency string
	BaseAmount   string
	ToCurrency   string
}

func (e *Rates) Estimate(ctx context.Context, options *EstimateOptions) (*EstimateResponse, error) {
	req := e.api.RatesApi.V1RatesEstimate(ctx)
	req = req.BaseCurrency(options.BaseCurrency)
	req = req.BaseAmount(options.BaseAmount)
	req = req.ToCurrency(options.ToCurrency)
	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	ret := EstimateResponse(out)
	return &ret, nil
}

func (e *Rates) GetRates(ctx context.Context, getRatesIn *GetRatesRequest) (*GetRatesResponse, error) {
	req := e.api.RatesApi.V1RatesList(ctx)
	req = req.GetRatesRequest(openapi.GetRatesRequest(*getRatesIn))
	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	ret := GetRatesResponse(out)

	return &ret, nil
}
