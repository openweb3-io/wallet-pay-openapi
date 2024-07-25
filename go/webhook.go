package walletpay

import (
	"encoding/base64"
	"fmt"
)

var base64enc = base64.StdEncoding

type Webhook struct {
	publicKey string
}

var (
	errRequiredHeaders     = fmt.Errorf("Missing Required Headers")
	errInvalidHeaders      = fmt.Errorf("Invalid Signature Headers")
	errNoMatchingSignature = fmt.Errorf("No matching signature found")
	errMessageTooOld       = fmt.Errorf("Message timestamp too old")
	errMessageTooNew       = fmt.Errorf("Message timestamp too new")
)

func NewWebhook(publicKey string) (*Webhook, error) {
	return &Webhook{
		publicKey: publicKey,
	}, nil
}

// Verify validates the payload against the walletpay signature headers
// using the webhooks public key.
//
// Returns an error if the body or headers are missing/unreadable
// or if the signature doesn't match.
func (wh *Webhook) Verify(payload []byte, signature string) error {
	return verify([]byte(payload), []byte(wh.publicKey), signature)
}
