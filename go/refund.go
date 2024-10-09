package walletpay

import (
	"context"

	"github.com/openweb3-io/wallet-pay-openapi/go/internal/openapi"
)

type (
	ListResponseRefundOut = openapi.ListResponseRefundOut
	RefundIn              = openapi.RefundIn
	RefundOut             = openapi.RefundOut
)

type Refund struct {
	api *openapi.APIClient
}

type RefundListOptions struct {
	Size    *int32
	Page    *int32
	OrderId *string
}

func (e *Refund) List(ctx context.Context, options *RefundListOptions) (*ListResponseRefundOut, error) {
	req := e.api.RefundApi.V1RefundList(ctx)
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
	ret := ListResponseRefundOut(out.Data)
	return &ret, nil
}

func (e *Refund) Create(ctx context.Context, refundIn *RefundIn) (*RefundOut, error) {
	return e.CreateWithOptions(ctx, refundIn, nil)
}

func (e *Refund) CreateWithOptions(ctx context.Context, refundIn *RefundIn, options *PostOptions) (*RefundOut, error) {
	req := e.api.RefundApi.V1RefundCreate(ctx)
	req = req.RefundIn(openapi.RefundIn(*refundIn))

	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	ret := RefundOut(out.Data)
	return &ret, nil
}

func (e *Refund) Get(ctx context.Context, orderId string) (*RefundOut, error) {
	req := e.api.RefundApi.V1RefundGet(ctx, orderId)

	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	ret := RefundOut(out.Data)

	return &ret, nil
}
