import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { CreateEndpointRequest } from '../models/CreateEndpointRequest';
import { CreateOrderRequest } from '../models/CreateOrderRequest';
import { CreateRefundRequest } from '../models/CreateRefundRequest';
import { Currency } from '../models/Currency';
import { CurrencyNetwork } from '../models/CurrencyNetwork';
import { CurrencyPair } from '../models/CurrencyPair';
import { CursorPageCurrency } from '../models/CursorPageCurrency';
import { CursorPageEndpoint } from '../models/CursorPageEndpoint';
import { Endpoint } from '../models/Endpoint';
import { EstimateResponse } from '../models/EstimateResponse';
import { GetRatesRequest } from '../models/GetRatesRequest';
import { GetRatesResponse } from '../models/GetRatesResponse';
import { ModelError } from '../models/ModelError';
import { Order } from '../models/Order';
import { PageOrder } from '../models/PageOrder';
import { PageRefund } from '../models/PageRefund';
import { Rate } from '../models/Rate';
import { Refund } from '../models/Refund';
import { TransferRequest } from '../models/TransferRequest';
import { TransferResponse } from '../models/TransferResponse';
import { ObservableCurrenciesApi } from './ObservableAPI';

import { CurrenciesApiRequestFactory, CurrenciesApiResponseProcessor} from "../apis/CurrenciesApi";
export class PromiseCurrenciesApi {
    private api: ObservableCurrenciesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CurrenciesApiRequestFactory,
        responseProcessor?: CurrenciesApiResponseProcessor
    ) {
        this.api = new ObservableCurrenciesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve a list of all available currencies.
     * List currencies
     * @param limit The number of items to return per page.
     * @param cursor The cursor to use for pagination.
     * @param appId Filter currencies by application ID
     * @param rated Filter currencies by rated status
     */
    public v1CurrenciesList(limit: number, cursor?: string, appId?: string, rated?: boolean, _options?: Configuration): Promise<CursorPageCurrency> {
        const result = this.api.v1CurrenciesList(limit, cursor, appId, rated, _options);
        return result.toPromise();
    }

    /**
     * Get currency info by currency code
     * Get Currency
     * @param code Currency code
     */
    public v1CurrenciesRetrieve(code: string, _options?: Configuration): Promise<Currency> {
        const result = this.api.v1CurrenciesRetrieve(code, _options);
        return result.toPromise();
    }


}



import { ObservableOrdersApi } from './ObservableAPI';

import { OrdersApiRequestFactory, OrdersApiResponseProcessor} from "../apis/OrdersApi";
export class PromiseOrdersApi {
    private api: ObservableOrdersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OrdersApiRequestFactory,
        responseProcessor?: OrdersApiResponseProcessor
    ) {
        this.api = new ObservableOrdersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new payment order
     * Create Order
     * @param createOrderRequest Order details
     */
    public v1OrdersCreate(createOrderRequest: CreateOrderRequest, _options?: Configuration): Promise<Order> {
        const result = this.api.v1OrdersCreate(createOrderRequest, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a list of orders with pagination
     * List Orders
     * @param size Number of items per page
     * @param page Page number for pagination, starting from 0
     * @param walletId Filter orders by wallet ID
     * @param currency Filter orders by currency
     * @param userId Filter orders by user who made the payment
     * @param status Order status enum
     * @param creator Filter orders by creator
     */
    public v1OrdersList(size: number, page?: number, walletId?: string, currency?: string, userId?: string, status?: string, creator?: string, _options?: Configuration): Promise<PageOrder> {
        const result = this.api.v1OrdersList(size, page, walletId, currency, userId, status, creator, _options);
        return result.toPromise();
    }

    /**
     * Get order details by ID or UID
     * Retrieve Order
     * @param idOrUid Order ID or UID
     */
    public v1OrdersRetrieve(idOrUid: string, _options?: Configuration): Promise<Order> {
        const result = this.api.v1OrdersRetrieve(idOrUid, _options);
        return result.toPromise();
    }


}



import { ObservableRatesApi } from './ObservableAPI';

import { RatesApiRequestFactory, RatesApiResponseProcessor} from "../apis/RatesApi";
export class PromiseRatesApi {
    private api: ObservableRatesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RatesApiRequestFactory,
        responseProcessor?: RatesApiResponseProcessor
    ) {
        this.api = new ObservableRatesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Convert an amount from one currency to another using current exchange rates.
     * Estimate currency conversion
     * @param baseCurrency Source currency code
     * @param baseAmount Amount in source currency to convert
     * @param toCurrency Target currency code
     */
    public v1RatesEstimate(baseCurrency: string, baseAmount: string, toCurrency: string, _options?: Configuration): Promise<EstimateResponse> {
        const result = this.api.v1RatesEstimate(baseCurrency, baseAmount, toCurrency, _options);
        return result.toPromise();
    }

    /**
     * Get exchange rates for multiple currency pairs.
     * List exchange rates
     * @param getRatesRequest Currency pairs to get rates for
     */
    public v1RatesList(getRatesRequest: GetRatesRequest, _options?: Configuration): Promise<GetRatesResponse> {
        const result = this.api.v1RatesList(getRatesRequest, _options);
        return result.toPromise();
    }


}



import { ObservableRefundsApi } from './ObservableAPI';

import { RefundsApiRequestFactory, RefundsApiResponseProcessor} from "../apis/RefundsApi";
export class PromiseRefundsApi {
    private api: ObservableRefundsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RefundsApiRequestFactory,
        responseProcessor?: RefundsApiResponseProcessor
    ) {
        this.api = new ObservableRefundsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new refund for an order
     * Create Refund
     * @param createRefundRequest Refund details
     */
    public v1RefundsCreate(createRefundRequest: CreateRefundRequest, _options?: Configuration): Promise<Refund> {
        const result = this.api.v1RefundsCreate(createRefundRequest, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a list of refunds with pagination
     * List Refunds
     * @param size Number of items per page
     * @param page Page number for pagination, starting from 0
     * @param orderId Filter refunds by order ID
     */
    public v1RefundsList(size: number, page?: number, orderId?: string, _options?: Configuration): Promise<PageRefund> {
        const result = this.api.v1RefundsList(size, page, orderId, _options);
        return result.toPromise();
    }

    /**
     * Get refund details by ID or UID
     * Retrieve Refund
     * @param idOrUid Refund ID or UID
     */
    public v1RefundsRetrieve(idOrUid: string, _options?: Configuration): Promise<Refund> {
        const result = this.api.v1RefundsRetrieve(idOrUid, _options);
        return result.toPromise();
    }


}



import { ObservableTransfersApi } from './ObservableAPI';

import { TransfersApiRequestFactory, TransfersApiResponseProcessor} from "../apis/TransfersApi";
export class PromiseTransfersApi {
    private api: ObservableTransfersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TransfersApiRequestFactory,
        responseProcessor?: TransfersApiResponseProcessor
    ) {
        this.api = new ObservableTransfersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Transfer funds from merchant wallet to another wallet
     * Transfer Funds
     * @param transferRequest Transfer details
     */
    public v1TransfersTransfer(transferRequest: TransferRequest, _options?: Configuration): Promise<TransferResponse> {
        const result = this.api.v1TransfersTransfer(transferRequest, _options);
        return result.toPromise();
    }


}



import { ObservableWebhookEndpointsApi } from './ObservableAPI';

import { WebhookEndpointsApiRequestFactory, WebhookEndpointsApiResponseProcessor} from "../apis/WebhookEndpointsApi";
export class PromiseWebhookEndpointsApi {
    private api: ObservableWebhookEndpointsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WebhookEndpointsApiRequestFactory,
        responseProcessor?: WebhookEndpointsApiResponseProcessor
    ) {
        this.api = new ObservableWebhookEndpointsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new webhook endpoint for receiving event notifications
     * Create Webhook Endpoint
     * @param createEndpointRequest Webhook endpoint details
     */
    public v1WebhookEndpointsCreate(createEndpointRequest: CreateEndpointRequest, _options?: Configuration): Promise<Endpoint> {
        const result = this.api.v1WebhookEndpointsCreate(createEndpointRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete a webhook endpoint by ID
     * Delete Webhook Endpoint
     * @param endpointId Webhook endpoint ID
     */
    public v1WebhookEndpointsDelete(endpointId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1WebhookEndpointsDelete(endpointId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a list of webhook endpoints with cursor-based pagination
     * List Webhook Endpoints
     * @param limit The number of items to return per page.
     * @param cursor The cursor to use for pagination.
     */
    public v1WebhookEndpointsList(limit: number, cursor?: string, _options?: Configuration): Promise<CursorPageEndpoint> {
        const result = this.api.v1WebhookEndpointsList(limit, cursor, _options);
        return result.toPromise();
    }

    /**
     * Get webhook endpoint details by ID
     * Retrieve Webhook Endpoint
     * @param endpointId Webhook endpoint ID
     */
    public v1WebhookEndpointsRetrieve(endpointId: string, _options?: Configuration): Promise<Endpoint> {
        const result = this.api.v1WebhookEndpointsRetrieve(endpointId, _options);
        return result.toPromise();
    }


}



