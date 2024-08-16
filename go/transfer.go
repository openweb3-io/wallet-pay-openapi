package walletpay

import (
	"context"

	"github.com/openweb3-io/wallet-pay-openapi/go/internal/openapi"
)

type (
	TransferIn  = openapi.TransferIn
	TransferOut = openapi.TransferOut
)

type Transfer struct {
	api *openapi.APIClient
}

func (e *Transfer) Transfer(ctx context.Context, appId string, transferIn *TransferIn) (*TransferOut, error) {
	req := e.api.TransferApi.V1TransferCreate(ctx, appId)
	req.TransferIn(openapi.TransferIn(*transferIn))

	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	ret := TransferOut(out.Data)

	return &ret, nil
}
