package walletpay

type WebhookClient struct {
	publicKey string
}

func NewWebhookClient(publicKey string) (*WebhookClient, error) {
	return &WebhookClient{
		publicKey: publicKey,
	}, nil
}

// Verify validates the payload against the walletpay signature headers
// using the webhooks public key.
//
// Returns an error if the body or headers are missing/unreadable
// or if the signature doesn't match.
func (wh *WebhookClient) Verify(payload []byte, signature string) error {
	return verify([]byte(payload), []byte(wh.publicKey), signature)
}
