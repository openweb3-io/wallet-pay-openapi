import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { CurrencyOut } from '../models/CurrencyOut';
import { EndpointIn } from '../models/EndpointIn';
import { EndpointOut } from '../models/EndpointOut';
import { ListResponseCurrencyOut } from '../models/ListResponseCurrencyOut';
import { ListResponseEndpointOut } from '../models/ListResponseEndpointOut';
import { ListResponseOrderOut } from '../models/ListResponseOrderOut';
import { OrderIn } from '../models/OrderIn';
import { OrderOut } from '../models/OrderOut';
import { Ordering } from '../models/Ordering';
import { ResponseCurrencyOut } from '../models/ResponseCurrencyOut';
import { ResponseEndpointOut } from '../models/ResponseEndpointOut';
import { ResponseError } from '../models/ResponseError';
import { ResponseListCurrencyOut } from '../models/ResponseListCurrencyOut';
import { ResponseListEndpointOut } from '../models/ResponseListEndpointOut';
import { ResponseListOrderOut } from '../models/ResponseListOrderOut';
import { ResponseOrderOut } from '../models/ResponseOrderOut';
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
     * Specified the app id.
     * @type string
     * @memberof CurrencyApiv1CurrencyList
     */
    appId?: string
    /**
     * Limit the number of returned items
     * @type number
     * @memberof CurrencyApiv1CurrencyList
     */
    size?: number
    /**
     * Specifying the page index
     * @type number
     * @memberof CurrencyApiv1CurrencyList
     */
    page?: number
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
        return this.api.v1CurrencyList(param.appId, param.size, param.page,  options).toPromise();
    }

}

import { ObservableOrderApi } from "./ObservableAPI";
import { OrderApiRequestFactory, OrderApiResponseProcessor} from "../apis/OrderApi";

export interface OrderApiV1OrderCreateRequest {
    /**
     * Specified the app id.
     * @type string
     * @memberof OrderApiv1OrderCreate
     */
    appId: string
    /**
     * 
     * @type OrderIn
     * @memberof OrderApiv1OrderCreate
     */
    orderIn: OrderIn
}

export interface OrderApiV1OrderGetRequest {
    /**
     * Specified the app id.
     * @type string
     * @memberof OrderApiv1OrderGet
     */
    appId: string
    /**
     * Specified the order id or order uid.
     * @type string
     * @memberof OrderApiv1OrderGet
     */
    idOrUid: string
}

export interface OrderApiV1OrderListRequest {
    /**
     * Specified the app id.
     * @type string
     * @memberof OrderApiv1OrderList
     */
    appId: string
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
     * Optional account id
     * @type string
     * @memberof OrderApiv1OrderList
     */
    accountId?: string
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
        return this.api.v1OrderCreate(param.appId, param.orderIn,  options).toPromise();
    }

    /**
     * Get specified order.
     * Get order
     * @param param the request object
     */
    public v1OrderGet(param: OrderApiV1OrderGetRequest, options?: Configuration): Promise<ResponseOrderOut> {
        return this.api.v1OrderGet(param.appId, param.idOrUid,  options).toPromise();
    }

    /**
     * List orders.
     * List Orders
     * @param param the request object
     */
    public v1OrderList(param: OrderApiV1OrderListRequest, options?: Configuration): Promise<ResponseListOrderOut> {
        return this.api.v1OrderList(param.appId, param.size, param.page, param.walletId, param.accountId,  options).toPromise();
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
