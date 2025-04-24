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

import { ObservableCurrenciesApi } from "./ObservableAPI";
import { CurrenciesApiRequestFactory, CurrenciesApiResponseProcessor} from "../apis/CurrenciesApi";

export interface CurrenciesApiV1CurrenciesListRequest {
    /**
     * The number of items to return per page.
     * @type number
     * @memberof CurrenciesApiv1CurrenciesList
     */
    limit: number
    /**
     * The cursor to use for pagination.
     * @type string
     * @memberof CurrenciesApiv1CurrenciesList
     */
    cursor?: string
    /**
     * Filter currencies by application ID
     * @type string
     * @memberof CurrenciesApiv1CurrenciesList
     */
    appId?: string
    /**
     * Filter currencies by rated status
     * @type boolean
     * @memberof CurrenciesApiv1CurrenciesList
     */
    rated?: boolean
}

export interface CurrenciesApiV1CurrenciesRetrieveRequest {
    /**
     * Currency code
     * @type string
     * @memberof CurrenciesApiv1CurrenciesRetrieve
     */
    code: string
}

export class ObjectCurrenciesApi {
    private api: ObservableCurrenciesApi

    public constructor(configuration: Configuration, requestFactory?: CurrenciesApiRequestFactory, responseProcessor?: CurrenciesApiResponseProcessor) {
        this.api = new ObservableCurrenciesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve a list of all available currencies.
     * List currencies
     * @param param the request object
     */
    public v1CurrenciesList(param: CurrenciesApiV1CurrenciesListRequest, options?: Configuration): Promise<CursorPageCurrency> {
        return this.api.v1CurrenciesList(param.limit, param.cursor, param.appId, param.rated,  options).toPromise();
    }

    /**
     * Get currency info by currency code
     * Get Currency
     * @param param the request object
     */
    public v1CurrenciesRetrieve(param: CurrenciesApiV1CurrenciesRetrieveRequest, options?: Configuration): Promise<Currency> {
        return this.api.v1CurrenciesRetrieve(param.code,  options).toPromise();
    }

}

import { ObservableOrdersApi } from "./ObservableAPI";
import { OrdersApiRequestFactory, OrdersApiResponseProcessor} from "../apis/OrdersApi";

export interface OrdersApiV1OrdersCreateRequest {
    /**
     * Order details
     * @type CreateOrderRequest
     * @memberof OrdersApiv1OrdersCreate
     */
    createOrderRequest: CreateOrderRequest
}

export interface OrdersApiV1OrdersListRequest {
    /**
     * Page number for pagination, starting from 0
     * @type number
     * @memberof OrdersApiv1OrdersList
     */
    page: number
    /**
     * Number of items per page
     * @type number
     * @memberof OrdersApiv1OrdersList
     */
    size: number
    /**
     * Filter orders by currency
     * @type string
     * @memberof OrdersApiv1OrdersList
     */
    currency?: string
    /**
     * Filter orders by user who made the payment
     * @type string
     * @memberof OrdersApiv1OrdersList
     */
    userId?: string
    /**
     * Order status enum
     * @type string
     * @memberof OrdersApiv1OrdersList
     */
    status?: string
    /**
     * Filter orders by wallet ID
     * @type string
     * @memberof OrdersApiv1OrdersList
     */
    walletId?: string
}

export interface OrdersApiV1OrdersRetrieveRequest {
    /**
     * Order ID or UID
     * @type string
     * @memberof OrdersApiv1OrdersRetrieve
     */
    idOrUid: string
}

export class ObjectOrdersApi {
    private api: ObservableOrdersApi

    public constructor(configuration: Configuration, requestFactory?: OrdersApiRequestFactory, responseProcessor?: OrdersApiResponseProcessor) {
        this.api = new ObservableOrdersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new payment order
     * Create Order
     * @param param the request object
     */
    public v1OrdersCreate(param: OrdersApiV1OrdersCreateRequest, options?: Configuration): Promise<Order> {
        return this.api.v1OrdersCreate(param.createOrderRequest,  options).toPromise();
    }

    /**
     * Retrieve a list of orders with pagination
     * List Orders
     * @param param the request object
     */
    public v1OrdersList(param: OrdersApiV1OrdersListRequest, options?: Configuration): Promise<PageOrder> {
        return this.api.v1OrdersList(param.page, param.size, param.currency, param.userId, param.status, param.walletId,  options).toPromise();
    }

    /**
     * Get order details by ID or UID
     * Retrieve Order
     * @param param the request object
     */
    public v1OrdersRetrieve(param: OrdersApiV1OrdersRetrieveRequest, options?: Configuration): Promise<Order> {
        return this.api.v1OrdersRetrieve(param.idOrUid,  options).toPromise();
    }

}

import { ObservableRatesApi } from "./ObservableAPI";
import { RatesApiRequestFactory, RatesApiResponseProcessor} from "../apis/RatesApi";

export interface RatesApiV1RatesEstimateRequest {
    /**
     * Amount in source currency to convert
     * @type string
     * @memberof RatesApiv1RatesEstimate
     */
    baseAmount: string
    /**
     * Target currency code
     * @type string
     * @memberof RatesApiv1RatesEstimate
     */
    toCurrency: string
    /**
     * Source currency code
     * @type string
     * @memberof RatesApiv1RatesEstimate
     */
    baseCurrency: string
}

export interface RatesApiV1RatesListRequest {
    /**
     * Currency pairs to get rates for
     * @type GetRatesRequest
     * @memberof RatesApiv1RatesList
     */
    getRatesRequest: GetRatesRequest
}

export class ObjectRatesApi {
    private api: ObservableRatesApi

    public constructor(configuration: Configuration, requestFactory?: RatesApiRequestFactory, responseProcessor?: RatesApiResponseProcessor) {
        this.api = new ObservableRatesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Convert an amount from one currency to another using current exchange rates.
     * Estimate currency conversion
     * @param param the request object
     */
    public v1RatesEstimate(param: RatesApiV1RatesEstimateRequest, options?: Configuration): Promise<EstimateResponse> {
        return this.api.v1RatesEstimate(param.baseAmount, param.toCurrency, param.baseCurrency,  options).toPromise();
    }

    /**
     * Get exchange rates for multiple currency pairs.
     * List exchange rates
     * @param param the request object
     */
    public v1RatesList(param: RatesApiV1RatesListRequest, options?: Configuration): Promise<GetRatesResponse> {
        return this.api.v1RatesList(param.getRatesRequest,  options).toPromise();
    }

}

import { ObservableRefundsApi } from "./ObservableAPI";
import { RefundsApiRequestFactory, RefundsApiResponseProcessor} from "../apis/RefundsApi";

export interface RefundsApiV1RefundsCreateRequest {
    /**
     * Refund details
     * @type CreateRefundRequest
     * @memberof RefundsApiv1RefundsCreate
     */
    createRefundRequest: CreateRefundRequest
}

export interface RefundsApiV1RefundsListRequest {
    /**
     * Page number for pagination, starting from 0
     * @type number
     * @memberof RefundsApiv1RefundsList
     */
    page: number
    /**
     * Number of items per page
     * @type number
     * @memberof RefundsApiv1RefundsList
     */
    size: number
    /**
     * Filter refunds by order ID
     * @type string
     * @memberof RefundsApiv1RefundsList
     */
    orderId?: string
}

export interface RefundsApiV1RefundsRetrieveRequest {
    /**
     * Refund ID or UID
     * @type string
     * @memberof RefundsApiv1RefundsRetrieve
     */
    idOrUid: string
}

export class ObjectRefundsApi {
    private api: ObservableRefundsApi

    public constructor(configuration: Configuration, requestFactory?: RefundsApiRequestFactory, responseProcessor?: RefundsApiResponseProcessor) {
        this.api = new ObservableRefundsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new refund for an order
     * Create Refund
     * @param param the request object
     */
    public v1RefundsCreate(param: RefundsApiV1RefundsCreateRequest, options?: Configuration): Promise<Refund> {
        return this.api.v1RefundsCreate(param.createRefundRequest,  options).toPromise();
    }

    /**
     * Retrieve a list of refunds with pagination
     * List Refunds
     * @param param the request object
     */
    public v1RefundsList(param: RefundsApiV1RefundsListRequest, options?: Configuration): Promise<PageRefund> {
        return this.api.v1RefundsList(param.page, param.size, param.orderId,  options).toPromise();
    }

    /**
     * Get refund details by ID or UID
     * Retrieve Refund
     * @param param the request object
     */
    public v1RefundsRetrieve(param: RefundsApiV1RefundsRetrieveRequest, options?: Configuration): Promise<Refund> {
        return this.api.v1RefundsRetrieve(param.idOrUid,  options).toPromise();
    }

}

import { ObservableTransfersApi } from "./ObservableAPI";
import { TransfersApiRequestFactory, TransfersApiResponseProcessor} from "../apis/TransfersApi";

export interface TransfersApiV1TransfersTransferRequest {
    /**
     * Transfer details
     * @type TransferRequest
     * @memberof TransfersApiv1TransfersTransfer
     */
    transferRequest: TransferRequest
}

export class ObjectTransfersApi {
    private api: ObservableTransfersApi

    public constructor(configuration: Configuration, requestFactory?: TransfersApiRequestFactory, responseProcessor?: TransfersApiResponseProcessor) {
        this.api = new ObservableTransfersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Transfer funds from merchant wallet to another wallet
     * Transfer Funds
     * @param param the request object
     */
    public v1TransfersTransfer(param: TransfersApiV1TransfersTransferRequest, options?: Configuration): Promise<TransferResponse> {
        return this.api.v1TransfersTransfer(param.transferRequest,  options).toPromise();
    }

}

import { ObservableWebhookEndpointsApi } from "./ObservableAPI";
import { WebhookEndpointsApiRequestFactory, WebhookEndpointsApiResponseProcessor} from "../apis/WebhookEndpointsApi";

export interface WebhookEndpointsApiV1WebhookEndpointsCreateRequest {
    /**
     * Webhook endpoint details
     * @type CreateEndpointRequest
     * @memberof WebhookEndpointsApiv1WebhookEndpointsCreate
     */
    createEndpointRequest: CreateEndpointRequest
}

export interface WebhookEndpointsApiV1WebhookEndpointsDeleteRequest {
    /**
     * Webhook endpoint ID
     * @type string
     * @memberof WebhookEndpointsApiv1WebhookEndpointsDelete
     */
    endpointId: string
}

export interface WebhookEndpointsApiV1WebhookEndpointsListRequest {
    /**
     * The number of items to return per page.
     * @type number
     * @memberof WebhookEndpointsApiv1WebhookEndpointsList
     */
    limit: number
    /**
     * The cursor to use for pagination.
     * @type string
     * @memberof WebhookEndpointsApiv1WebhookEndpointsList
     */
    cursor?: string
}

export interface WebhookEndpointsApiV1WebhookEndpointsRetrieveRequest {
    /**
     * Webhook endpoint ID
     * @type string
     * @memberof WebhookEndpointsApiv1WebhookEndpointsRetrieve
     */
    endpointId: string
}

export class ObjectWebhookEndpointsApi {
    private api: ObservableWebhookEndpointsApi

    public constructor(configuration: Configuration, requestFactory?: WebhookEndpointsApiRequestFactory, responseProcessor?: WebhookEndpointsApiResponseProcessor) {
        this.api = new ObservableWebhookEndpointsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new webhook endpoint for receiving event notifications
     * Create Webhook Endpoint
     * @param param the request object
     */
    public v1WebhookEndpointsCreate(param: WebhookEndpointsApiV1WebhookEndpointsCreateRequest, options?: Configuration): Promise<Endpoint> {
        return this.api.v1WebhookEndpointsCreate(param.createEndpointRequest,  options).toPromise();
    }

    /**
     * Delete a webhook endpoint by ID
     * Delete Webhook Endpoint
     * @param param the request object
     */
    public v1WebhookEndpointsDelete(param: WebhookEndpointsApiV1WebhookEndpointsDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.v1WebhookEndpointsDelete(param.endpointId,  options).toPromise();
    }

    /**
     * Retrieve a list of webhook endpoints with cursor-based pagination
     * List Webhook Endpoints
     * @param param the request object
     */
    public v1WebhookEndpointsList(param: WebhookEndpointsApiV1WebhookEndpointsListRequest, options?: Configuration): Promise<CursorPageEndpoint> {
        return this.api.v1WebhookEndpointsList(param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Get webhook endpoint details by ID
     * Retrieve Webhook Endpoint
     * @param param the request object
     */
    public v1WebhookEndpointsRetrieve(param: WebhookEndpointsApiV1WebhookEndpointsRetrieveRequest, options?: Configuration): Promise<Endpoint> {
        return this.api.v1WebhookEndpointsRetrieve(param.endpointId,  options).toPromise();
    }

}
