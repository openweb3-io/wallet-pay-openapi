package walletpay

import (
	"bytes"
	"encoding/hex"
	"fmt"
	"io"
	"log"
	"net/http"
	"net/url"
	"strings"
	"time"

	"github.com/openweb3-io/wallet-pay-openapi/go/internal/openapi"
	"github.com/openweb3-io/wallet-pay-openapi/go/internal/signature"
	"github.com/openweb3-io/wallet-pay-openapi/go/internal/version"
)

type (
	ApiClientOptions struct {
		Debug bool

		ApiKey string
		Secret string

		// Overrides the base URL (protocol + hostname) used for all requests sent by this walletpay client. (Useful for testing)
		ServerUrl  *url.URL
		HTTPClient *http.Client
	}
	ApiClient struct {
		Endpoints  *Endpoints
		Orders     *Orders
		Currencies *Currencies
		Rates      *Rates
		Transfers  *Transfers
		Refunds    *Refunds
	}
)

var defaultHTTPClient = &http.Client{
	Timeout: 60 * time.Second,
}

func New(options *ApiClientOptions) *ApiClient {
	conf := openapi.NewConfiguration()
	conf.Scheme = "https"
	conf.Host = "api.wallet-pay.openweb3.io"
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
			saveBody := body
			savecl := req.ContentLength
			defer func() {
				// 在中间件处理结束后，需要主动重新把body设置回去
				req.Body = io.NopCloser(bytes.NewBuffer(saveBody))
				req.ContentLength = savecl
			}()

			dataToBeSignature = string(body)
		}
		dataToBeSignature = dataToBeSignature + req.URL.RequestURI() + requestTime

		signer := signature.Get(signature.SigningMethodEd25519)
		priKey, err := hex.DecodeString(options.Secret + options.ApiKey)
		if err != nil {
			log.Printf("Error decoding private key: %v", err)
		}
		signature, err := signer.Sign(priKey, []byte(dataToBeSignature))
		if err != nil {
			log.Printf("Error generating signature: %v", err)
		}

		req.Header.Set("X-Signature", hex.EncodeToString(signature))
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
	conf.AddDefaultHeader("x-api-key", options.ApiKey)
	conf.UserAgent = fmt.Sprintf("walletpay-libs/%s/go", version.Version)
	apiClient := openapi.NewAPIClient(conf)
	return &ApiClient{
		Endpoints: &Endpoints{
			api: apiClient,
		},
		Orders: &Orders{
			api: apiClient,
		},
		Currencies: &Currencies{
			api: apiClient,
		},
		Transfers: &Transfers{
			api: apiClient,
		},
		Rates: &Rates{
			api: apiClient,
		},
		Refunds: &Refunds{
			api: apiClient,
		},
	}
}
