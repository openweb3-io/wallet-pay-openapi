import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { CurrencyOut } from '../models/CurrencyOut';
import { EndpointIn } from '../models/EndpointIn';
import { EndpointOut } from '../models/EndpointOut';
import { HttpErrorOut } from '../models/HttpErrorOut';
import { ListResponseCurrencyOut } from '../models/ListResponseCurrencyOut';
import { ListResponseEndpointOut } from '../models/ListResponseEndpointOut';
import { ListResponseOrderOut } from '../models/ListResponseOrderOut';
import { OrderIn } from '../models/OrderIn';
import { OrderOut } from '../models/OrderOut';
import { Ordering } from '../models/Ordering';
import { WebhookMessage } from '../models/WebhookMessage';
import { ObservableCurrencyApi } from './ObservableAPI';

import { CurrencyApiRequestFactory, CurrencyApiResponseProcessor} from "../apis/CurrencyApi";
export class PromiseCurrencyApi {
    private api: ObservableCurrencyApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CurrencyApiRequestFactory,
        responseProcessor?: CurrencyApiResponseProcessor
    ) {
        this.api = new ObservableCurrencyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get specified currency.
     * Find currency by code
     * @param code Specified currency code.
     */
    public v1CurrencyFindByCode(code: string, _options?: Configuration): Promise<CurrencyOut> {
        const result = this.api.v1CurrencyFindByCode(code, _options);
        return result.toPromise();
    }

    /**
     * List currencies.
     * List currencies
     * @param appId Specified the app id.
     * @param size Limit the number of returned items
     * @param page Specifying the page index
     */
    public v1CurrencyList(appId?: string, size?: number, page?: number, _options?: Configuration): Promise<ListResponseCurrencyOut> {
        const result = this.api.v1CurrencyList(appId, size, page, _options);
        return result.toPromise();
    }


}



import { ObservableOrderApi } from './ObservableAPI';

import { OrderApiRequestFactory, OrderApiResponseProcessor} from "../apis/OrderApi";
export class PromiseOrderApi {
    private api: ObservableOrderApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OrderApiRequestFactory,
        responseProcessor?: OrderApiResponseProcessor
    ) {
        this.api = new ObservableOrderApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new order.
     * Create Order
     * @param appId Specified the app id.
     * @param orderIn 
     */
    public v1OrderCreate(appId: string, orderIn: OrderIn, _options?: Configuration): Promise<OrderOut> {
        const result = this.api.v1OrderCreate(appId, orderIn, _options);
        return result.toPromise();
    }

    /**
     * Get specified order.
     * Get order
     * @param appId Specified the app id.
     * @param orderId Specified the order id or order uid.
     */
    public v1OrderGet(appId: string, orderId: string, _options?: Configuration): Promise<OrderOut> {
        const result = this.api.v1OrderGet(appId, orderId, _options);
        return result.toPromise();
    }

    /**
     * List orders.
     * List Orders
     * @param appId Specified the app id.
     * @param size Limit the number of returned items
     * @param page Specifying the page index
     * @param walletId Optional wallet id
     * @param accountId Optional account id
     */
    public v1OrderList(appId: string, size?: number, page?: number, walletId?: string, accountId?: string, _options?: Configuration): Promise<ListResponseOrderOut> {
        const result = this.api.v1OrderList(appId, size, page, walletId, accountId, _options);
        return result.toPromise();
    }


}



import { ObservableWebhookEndpointApi } from './ObservableAPI';

import { WebhookEndpointApiRequestFactory, WebhookEndpointApiResponseProcessor} from "../apis/WebhookEndpointApi";
export class PromiseWebhookEndpointApi {
    private api: ObservableWebhookEndpointApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WebhookEndpointApiRequestFactory,
        responseProcessor?: WebhookEndpointApiResponseProcessor
    ) {
        this.api = new ObservableWebhookEndpointApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a webhook endpoint.
     * Create endpoint
     * @param endpointIn 
     */
    public v1EndpointCreate(endpointIn: EndpointIn, _options?: Configuration): Promise<EndpointOut> {
        const result = this.api.v1EndpointCreate(endpointIn, _options);
        return result.toPromise();
    }

    /**
     * delete the specified webhook endpoint.
     * Delete endpoint
     * @param endpointId Specified the endpoint id.
     */
    public v1EndpointDelete(endpointId: string, _options?: Configuration): Promise<EndpointOut> {
        const result = this.api.v1EndpointDelete(endpointId, _options);
        return result.toPromise();
    }

    /**
     * get the specified webhook endpoint.
     * Delete endpoint
     * @param endpointId Specified the endpoint id or endpoint uid.
     */
    public v1EndpointGet(endpointId: string, _options?: Configuration): Promise<EndpointOut> {
        const result = this.api.v1EndpointGet(endpointId, _options);
        return result.toPromise();
    }

    /**
     * List endpoints.
     * List endpoints
     * @param limit Limit the number of returned items
     * @param cursor Specifying the start cursor position
     * @param ordering The sorting order of the returned items
     */
    public v1EndpointList(limit?: number, cursor?: string, ordering?: Ordering, _options?: Configuration): Promise<ListResponseEndpointOut> {
        const result = this.api.v1EndpointList(limit, cursor, ordering, _options);
        return result.toPromise();
    }


}



