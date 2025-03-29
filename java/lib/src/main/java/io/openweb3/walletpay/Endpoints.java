package io.openweb3.walletpay;

import io.openweb3.walletpay.exceptions.ApiException;
import io.openweb3.walletpay.internal.api.WebhookEndpointsApi;
import io.openweb3.walletpay.models.CreateEndpointRequest;
import io.openweb3.walletpay.models.CursorPageEndpoint;
import io.openweb3.walletpay.models.Endpoint;

public final class Endpoints {
	private final WebhookEndpointsApi api;

	Endpoints() {
		api = new WebhookEndpointsApi();
	}

	public CursorPageEndpoint list(final EndpointListOptions options) throws ApiException {
		try {
			return api.v1WebhookEndpointsList(options.getLimit(),  options.getCursor());
		} catch (io.openweb3.walletpay.internal.ApiException e) {
            throw new RuntimeException(e);
        }
    }

	public Endpoint create(final CreateEndpointRequest endpointIn) throws ApiException {
		return this.create(endpointIn, new PostOptions());
	}

	public Endpoint create(final CreateEndpointRequest endpointIn, final PostOptions options) throws ApiException {
		try {
			return api.v1WebhookEndpointsCreate(endpointIn);
		} catch (io.openweb3.walletpay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

	// delete
	public Endpoint retrieve(final String endpointId) throws ApiException {
		try {
			return api.v1WebhookEndpointsRetrieve(endpointId);
		} catch (io.openweb3.walletpay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

	// delete
	public void delete(final String endpointId) throws ApiException {
		try {
			api.v1WebhookEndpointsDelete(endpointId);
		} catch (io.openweb3.walletpay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

}
