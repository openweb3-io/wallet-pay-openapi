import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { CurrencyNetwork } from '../models/CurrencyNetwork';
import { CurrencyOut } from '../models/CurrencyOut';
import { CurrencyPair } from '../models/CurrencyPair';
import { EndpointIn } from '../models/EndpointIn';
import { EndpointOut } from '../models/EndpointOut';
import { EstimateOut } from '../models/EstimateOut';
import { GetRatesIn } from '../models/GetRatesIn';
import { ListResponseCurrencyOut } from '../models/ListResponseCurrencyOut';
import { ListResponseEndpointOut } from '../models/ListResponseEndpointOut';
import { ListResponseOrderOut } from '../models/ListResponseOrderOut';
import { ListResponseRefundOut } from '../models/ListResponseRefundOut';
import { OrderIn } from '../models/OrderIn';
import { OrderOut } from '../models/OrderOut';
import { Ordering } from '../models/Ordering';
import { RateData } from '../models/RateData';
import { RatesOut } from '../models/RatesOut';
import { RefundIn } from '../models/RefundIn';
import { RefundOut } from '../models/RefundOut';
import { ResponseCurrencyOut } from '../models/ResponseCurrencyOut';
import { ResponseEndpointOut } from '../models/ResponseEndpointOut';
import { ResponseError } from '../models/ResponseError';
import { ResponseEstimateOut } from '../models/ResponseEstimateOut';
import { ResponseListCurrencyOut } from '../models/ResponseListCurrencyOut';
import { ResponseListEndpointOut } from '../models/ResponseListEndpointOut';
import { ResponseListOrderOut } from '../models/ResponseListOrderOut';
import { ResponseListRefundOut } from '../models/ResponseListRefundOut';
import { ResponseOrderOut } from '../models/ResponseOrderOut';
import { ResponseRatesOut } from '../models/ResponseRatesOut';
import { ResponseRefundOut } from '../models/ResponseRefundOut';
import { ResponseTransferOut } from '../models/ResponseTransferOut';
import { TransferIn } from '../models/TransferIn';
import { TransferOut } from '../models/TransferOut';
import { WebhookMessage } from '../models/WebhookMessage';

import { ObservableCurrencyApi } from "./ObservableAPI";
import { CurrencyApiRequestFactory, CurrencyApiResponseProcessor} from "../apis/CurrencyApi";

export interface CurrencyApiV1CurrencyFindByCodeRequest {
    /**
     * Specified currency code.
     * @type string
     * @memberof CurrencyApiv1CurrencyFindByCode
     */
    code: string
}

export interface CurrencyApiV1CurrencyListRequest {
    /**
     * Limit the number of returned items
     * @type number
     * @memberof CurrencyApiv1CurrencyList
     */
    limit?: number
    /**
     * Specifying the start cursor position
     * @type string
     * @memberof CurrencyApiv1CurrencyList
     */
    cursor?: string
    /**
     * Specifying if currency supports fetching rates
     * @type boolean
     * @memberof CurrencyApiv1CurrencyList
     */
    rated?: boolean
}

export class ObjectCurrencyApi {
    private api: ObservableCurrencyApi

    public constructor(configuration: Configuration, requestFactory?: CurrencyApiRequestFactory, responseProcessor?: CurrencyApiResponseProcessor) {
        this.api = new ObservableCurrencyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get specified currency.
     * Find currency by code
     * @param param the request object
     */
    public v1CurrencyFindByCode(param: CurrencyApiV1CurrencyFindByCodeRequest, options?: Configuration): Promise<ResponseCurrencyOut> {
        return this.api.v1CurrencyFindByCode(param.code,  options).toPromise();
    }

    /**
     * List currencies.
     * List currencies
     * @param param the request object
     */
    public v1CurrencyList(param: CurrencyApiV1CurrencyListRequest, options?: Configuration): Promise<ResponseListCurrencyOut> {
        return this.api.v1CurrencyList(param.limit, param.cursor, param.rated,  options).toPromise();
    }

}

import { ObservableOrderApi } from "./ObservableAPI";
import { OrderApiRequestFactory, OrderApiResponseProcessor} from "../apis/OrderApi";

export interface OrderApiV1OrderCreateRequest {
    /**
     * 
     * @type OrderIn
     * @memberof OrderApiv1OrderCreate
     */
    orderIn: OrderIn
}

export interface OrderApiV1OrderGetRequest {
    /**
     * Specified the order id or order uid.
     * @type string
     * @memberof OrderApiv1OrderGet
     */
    idOrUid: string
}

export interface OrderApiV1OrderListRequest {
    /**
     * Limit the number of returned items
     * @type number
     * @memberof OrderApiv1OrderList
     */
    size?: number
    /**
     * Specifying the page index
     * @type number
     * @memberof OrderApiv1OrderList
     */
    page?: number
    /**
     * Optional wallet id
     * @type string
     * @memberof OrderApiv1OrderList
     */
    walletId?: string
    /**
     * Optional currency code
     * @type string
     * @memberof OrderApiv1OrderList
     */
    currency?: string
    /**
     * Optional order status
     * @type &#39;PENDING&#39; | &#39;PAID&#39; | &#39;EXPIRED&#39; | &#39;FAILED&#39; | &#39;COMPLETED&#39;
     * @memberof OrderApiv1OrderList
     */
    status?: 'PENDING' | 'PAID' | 'EXPIRED' | 'FAILED' | 'COMPLETED'
}

export class ObjectOrderApi {
    private api: ObservableOrderApi

    public constructor(configuration: Configuration, requestFactory?: OrderApiRequestFactory, responseProcessor?: OrderApiResponseProcessor) {
        this.api = new ObservableOrderApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new order.
     * Create Order
     * @param param the request object
     */
    public v1OrderCreate(param: OrderApiV1OrderCreateRequest, options?: Configuration): Promise<ResponseOrderOut> {
        return this.api.v1OrderCreate(param.orderIn,  options).toPromise();
    }

    /**
     * Get specified order.
     * Get order
     * @param param the request object
     */
    public v1OrderGet(param: OrderApiV1OrderGetRequest, options?: Configuration): Promise<ResponseOrderOut> {
        return this.api.v1OrderGet(param.idOrUid,  options).toPromise();
    }

    /**
     * List orders.
     * List Orders
     * @param param the request object
     */
    public v1OrderList(param: OrderApiV1OrderListRequest, options?: Configuration): Promise<ResponseListOrderOut> {
        return this.api.v1OrderList(param.size, param.page, param.walletId, param.currency, param.status,  options).toPromise();
    }

}

import { ObservableRateApi } from "./ObservableAPI";
import { RateApiRequestFactory, RateApiResponseProcessor} from "../apis/RateApi";

export interface RateApiV1RateEstimateRequest {
    /**
     * Specified the base currency that needs to be estimated
     * @type string
     * @memberof RateApiv1RateEstimate
     */
    baseCurrency: string
    /**
     * Specify the target currency.
     * @type string
     * @memberof RateApiv1RateEstimate
     */
    toCurrency: string
    /**
     * Specify the amount of base currency that need to be estimated.
     * @type string
     * @memberof RateApiv1RateEstimate
     */
    baseAmount: string
}

export interface RateApiV1RateGetRatesRequest {
    /**
     * 
     * @type GetRatesIn
     * @memberof RateApiv1RateGetRates
     */
    getRatesIn: GetRatesIn
}

export class ObjectRateApi {
    private api: ObservableRateApi

    public constructor(configuration: Configuration, requestFactory?: RateApiRequestFactory, responseProcessor?: RateApiResponseProcessor) {
        this.api = new ObservableRateApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Estimate the amount of currency exchange.
     * Estimate the amount of currency exchange.
     * @param param the request object
     */
    public v1RateEstimate(param: RateApiV1RateEstimateRequest, options?: Configuration): Promise<ResponseEstimateOut> {
        return this.api.v1RateEstimate(param.baseCurrency, param.toCurrency, param.baseAmount,  options).toPromise();
    }

    /**
     * Query exchange rates between different currencies.
     * Query exchange rates between different currencies. 
     * @param param the request object
     */
    public v1RateGetRates(param: RateApiV1RateGetRatesRequest, options?: Configuration): Promise<ResponseRatesOut> {
        return this.api.v1RateGetRates(param.getRatesIn,  options).toPromise();
    }

}

import { ObservableRefundApi } from "./ObservableAPI";
import { RefundApiRequestFactory, RefundApiResponseProcessor} from "../apis/RefundApi";

export interface RefundApiV1RefundCreateRequest {
    /**
     * 
     * @type RefundIn
     * @memberof RefundApiv1RefundCreate
     */
    refundIn: RefundIn
}

export interface RefundApiV1RefundGetRequest {
    /**
     * Specified the refund id or refund uid.
     * @type string
     * @memberof RefundApiv1RefundGet
     */
    idOrUid: string
}

export interface RefundApiV1RefundListRequest {
    /**
     * Limit the number of returned items
     * @type number
     * @memberof RefundApiv1RefundList
     */
    size?: number
    /**
     * Specifying the page index
     * @type number
     * @memberof RefundApiv1RefundList
     */
    page?: number
    /**
     * Optional order id
     * @type string
     * @memberof RefundApiv1RefundList
     */
    orderId?: string
}

export class ObjectRefundApi {
    private api: ObservableRefundApi

    public constructor(configuration: Configuration, requestFactory?: RefundApiRequestFactory, responseProcessor?: RefundApiResponseProcessor) {
        this.api = new ObservableRefundApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a refund.
     * Create Refund
     * @param param the request object
     */
    public v1RefundCreate(param: RefundApiV1RefundCreateRequest, options?: Configuration): Promise<ResponseRefundOut> {
        return this.api.v1RefundCreate(param.refundIn,  options).toPromise();
    }

    /**
     * Get specified refund.
     * Get Refund
     * @param param the request object
     */
    public v1RefundGet(param: RefundApiV1RefundGetRequest, options?: Configuration): Promise<ResponseRefundOut> {
        return this.api.v1RefundGet(param.idOrUid,  options).toPromise();
    }

    /**
     * List refunds.
     * List Refunds
     * @param param the request object
     */
    public v1RefundList(param: RefundApiV1RefundListRequest, options?: Configuration): Promise<ResponseListRefundOut> {
        return this.api.v1RefundList(param.size, param.page, param.orderId,  options).toPromise();
    }

}

import { ObservableTransferApi } from "./ObservableAPI";
import { TransferApiRequestFactory, TransferApiResponseProcessor} from "../apis/TransferApi";

export interface TransferApiV1TransferCreateRequest {
    /**
     * 
     * @type TransferIn
     * @memberof TransferApiv1TransferCreate
     */
    transferIn: TransferIn
}

export class ObjectTransferApi {
    private api: ObservableTransferApi

    public constructor(configuration: Configuration, requestFactory?: TransferApiRequestFactory, responseProcessor?: TransferApiResponseProcessor) {
        this.api = new ObservableTransferApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new transfer.
     * Create Transfer
     * @param param the request object
     */
    public v1TransferCreate(param: TransferApiV1TransferCreateRequest, options?: Configuration): Promise<ResponseTransferOut> {
        return this.api.v1TransferCreate(param.transferIn,  options).toPromise();
    }

}

import { ObservableWebhookEndpointApi } from "./ObservableAPI";
import { WebhookEndpointApiRequestFactory, WebhookEndpointApiResponseProcessor} from "../apis/WebhookEndpointApi";

export interface WebhookEndpointApiV1EndpointCreateRequest {
    /**
     * 
     * @type EndpointIn
     * @memberof WebhookEndpointApiv1EndpointCreate
     */
    endpointIn: EndpointIn
}

export interface WebhookEndpointApiV1EndpointDeleteRequest {
    /**
     * Specified the endpoint id.
     * @type string
     * @memberof WebhookEndpointApiv1EndpointDelete
     */
    endpointId: string
}

export interface WebhookEndpointApiV1EndpointGetRequest {
    /**
     * Specified the endpoint id or endpoint uid.
     * @type string
     * @memberof WebhookEndpointApiv1EndpointGet
     */
    endpointId: string
}

export interface WebhookEndpointApiV1EndpointListRequest {
    /**
     * Limit the number of returned items
     * @type number
     * @memberof WebhookEndpointApiv1EndpointList
     */
    limit?: number
    /**
     * Specifying the start cursor position
     * @type string
     * @memberof WebhookEndpointApiv1EndpointList
     */
    cursor?: string
    /**
     * The sorting order of the returned items
     * @type Ordering
     * @memberof WebhookEndpointApiv1EndpointList
     */
    ordering?: Ordering
}

export class ObjectWebhookEndpointApi {
    private api: ObservableWebhookEndpointApi

    public constructor(configuration: Configuration, requestFactory?: WebhookEndpointApiRequestFactory, responseProcessor?: WebhookEndpointApiResponseProcessor) {
        this.api = new ObservableWebhookEndpointApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a webhook endpoint.
     * Create endpoint
     * @param param the request object
     */
    public v1EndpointCreate(param: WebhookEndpointApiV1EndpointCreateRequest, options?: Configuration): Promise<ResponseEndpointOut> {
        return this.api.v1EndpointCreate(param.endpointIn,  options).toPromise();
    }

    /**
     * delete the specified webhook endpoint.
     * Delete endpoint
     * @param param the request object
     */
    public v1EndpointDelete(param: WebhookEndpointApiV1EndpointDeleteRequest, options?: Configuration): Promise<ResponseEndpointOut> {
        return this.api.v1EndpointDelete(param.endpointId,  options).toPromise();
    }

    /**
     * get the specified webhook endpoint.
     * Delete endpoint
     * @param param the request object
     */
    public v1EndpointGet(param: WebhookEndpointApiV1EndpointGetRequest, options?: Configuration): Promise<ResponseEndpointOut> {
        return this.api.v1EndpointGet(param.endpointId,  options).toPromise();
    }

    /**
     * List endpoints.
     * List endpoints
     * @param param the request object
     */
    public v1EndpointList(param: WebhookEndpointApiV1EndpointListRequest, options?: Configuration): Promise<ResponseListEndpointOut> {
        return this.api.v1EndpointList(param.limit, param.cursor, param.ordering,  options).toPromise();
    }

}
