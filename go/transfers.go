package walletpay

import (
	"context"

	"github.com/openweb3-io/wallet-pay-openapi/go/internal/openapi"
)

type (
	TransferRequest  = openapi.TransferRequest
	TransferResponse = openapi.TransferResponse
)

type Transfers struct {
	api *openapi.APIClient
}

func (e *Transfers) Create(ctx context.Context, transferIn *TransferRequest) (*TransferResponse, error) {
	req := e.api.TransfersApi.V1TransfersTransfer(ctx)
	req = req.TransferRequest(openapi.TransferRequest(*transferIn))

	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	ret := TransferResponse(out)

	return &ret, nil
}
