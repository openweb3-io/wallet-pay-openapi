package walletpay

import (
	"fmt"
	"io"
	"log"
	"net/http"
	"net/url"
	"strings"
	"time"

	"github.com/openweb3-io/wallet-pay-openapi/go/internal/openapi"
	"github.com/openweb3-io/wallet-pay-openapi/go/internal/version"
)

type (
	WalletPayOptions struct {
		Debug bool

		// Overrides the base URL (protocol + hostname) used for all requests sent by this walletpay client. (Useful for testing)
		ServerUrl  *url.URL
		HTTPClient *http.Client
	}
	WalletPay struct {
		Endpoint *Endpoint
		Order    *Order
	}
)

var defaultHTTPClient = &http.Client{
	Timeout: 60 * time.Second,
}

func New(apikey string, privateKey string, options *WalletPayOptions) *WalletPay {
	conf := openapi.NewConfiguration()
	conf.Scheme = "https"
	conf.Host = "api.webhook.openweb3.io"
	conf.HTTPClient = defaultHTTPClient
	conf.Middleware = func(req *http.Request) {
		requestTime := fmt.Sprintf("%d", time.Now().UnixMilli())
		req.Header.Set("X-Request-Time", requestTime)

		var dataToBeSignature string
		if strings.ToUpper(req.Method) == "POST" || strings.ToUpper(req.Method) == "PUT" {
			body, err := io.ReadAll(req.Body)
			if err != nil {
				log.Printf("Error reading body: %v", err)
			}
			dataToBeSignature = string(body)
		}
		dataToBeSignature = dataToBeSignature + req.URL.RequestURI() + requestTime

		signature, err := genSign([]byte(dataToBeSignature), []byte(privateKey))
		if err != nil {
			log.Printf("Error generating signature: %v", err)
		}

		req.Header.Set("X-Signature", signature)
	}

	if options != nil {
		conf.Debug = options.Debug
		if options.ServerUrl != nil {
			conf.Scheme = options.ServerUrl.Scheme
			conf.Host = options.ServerUrl.Host
		}
		if options.HTTPClient != nil {
			conf.HTTPClient = options.HTTPClient
		}
	}
	conf.AddDefaultHeader("x-api-key", apikey)
	conf.UserAgent = fmt.Sprintf("walletpay-libs/%s/go", version.Version)
	apiClient := openapi.NewAPIClient(conf)
	return &WalletPay{
		Endpoint: &Endpoint{
			api: apiClient,
		},
		Order: &Order{
			api: apiClient,
		},
	}
}
