package walletpay

import (
	"context"

	"github.com/openweb3-io/wallet-pay-openapi/go/internal/openapi"
)

type (
	ListRefundOut = openapi.PageRefund
	RefundIn      = openapi.CreateRefundRequest
	RefundOut     = openapi.Refund
)

type Refunds struct {
	api *openapi.APIClient
}

type RefundListOptions struct {
	Size    *int32
	Page    *int32
	OrderId *string
}

func (e *Refunds) List(ctx context.Context, options *RefundListOptions) (*ListRefundOut, error) {
	req := e.api.RefundsApi.V1RefundsList(ctx)
	if options != nil {
		if options.Size != nil {
			req = req.Size(*options.Size)
		}
		if options.Page != nil {
			req = req.Page(*options.Page)
		}
		if options.OrderId != nil {
			req = req.OrderId(*options.OrderId)
		}
	}
	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	ret := ListRefundOut(out)
	return &ret, nil
}

func (e *Refunds) Create(ctx context.Context, refundIn *RefundIn) (*RefundOut, error) {
	return e.CreateWithOptions(ctx, refundIn, nil)
}

func (e *Refunds) CreateWithOptions(ctx context.Context, refundIn *RefundIn, options *PostOptions) (*RefundOut, error) {
	req := e.api.RefundsApi.V1RefundsCreate(ctx)
	req = req.CreateRefundRequest(openapi.CreateRefundRequest(*refundIn))

	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	ret := RefundOut(out)
	return &ret, nil
}

func (e *Refunds) Get(ctx context.Context, orderId string) (*RefundOut, error) {
	req := e.api.RefundsApi.V1RefundsRetrieve(ctx, orderId)

	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	ret := RefundOut(out)

	return &ret, nil
}
