import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { CurrencyOut } from '../models/CurrencyOut';
import { EndpointIn } from '../models/EndpointIn';
import { EndpointOut } from '../models/EndpointOut';
import { ListResponseCurrencyOut } from '../models/ListResponseCurrencyOut';
import { ListResponseEndpointOut } from '../models/ListResponseEndpointOut';
import { ListResponseOrderOut } from '../models/ListResponseOrderOut';
import { ListResponseRefundOut } from '../models/ListResponseRefundOut';
import { OrderIn } from '../models/OrderIn';
import { OrderOut } from '../models/OrderOut';
import { Ordering } from '../models/Ordering';
import { RefundIn } from '../models/RefundIn';
import { RefundOut } from '../models/RefundOut';
import { ResponseCurrencyOut } from '../models/ResponseCurrencyOut';
import { ResponseEndpointOut } from '../models/ResponseEndpointOut';
import { ResponseError } from '../models/ResponseError';
import { ResponseListCurrencyOut } from '../models/ResponseListCurrencyOut';
import { ResponseListEndpointOut } from '../models/ResponseListEndpointOut';
import { ResponseListOrderOut } from '../models/ResponseListOrderOut';
import { ResponseListRefundOut } from '../models/ResponseListRefundOut';
import { ResponseOrderOut } from '../models/ResponseOrderOut';
import { ResponseRefundOut } from '../models/ResponseRefundOut';
import { ResponseTransferOut } from '../models/ResponseTransferOut';
import { TransferIn } from '../models/TransferIn';
import { TransferOut } from '../models/TransferOut';
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
     * @param appId Specified the app id.
     * @param code Specified currency code.
     */
    public v1CurrencyFindByCode(appId: string, code: string, _options?: Configuration): Promise<ResponseCurrencyOut> {
        const result = this.api.v1CurrencyFindByCode(appId, code, _options);
        return result.toPromise();
    }

    /**
     * List currencies.
     * List currencies
     * @param appId Specified the app id.
     * @param limit Limit the number of returned items
     * @param cursor Specifying the start cursor position
     * @param rated Specifying if currency supports fetching rates
     */
    public v1CurrencyList(appId: string, limit?: number, cursor?: string, rated?: boolean, _options?: Configuration): Promise<ResponseListCurrencyOut> {
        const result = this.api.v1CurrencyList(appId, limit, cursor, rated, _options);
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
    public v1OrderCreate(appId: string, orderIn: OrderIn, _options?: Configuration): Promise<ResponseOrderOut> {
        const result = this.api.v1OrderCreate(appId, orderIn, _options);
        return result.toPromise();
    }

    /**
     * Get specified order.
     * Get order
     * @param appId Specified the app id.
     * @param idOrUid Specified the order id or order uid.
     */
    public v1OrderGet(appId: string, idOrUid: string, _options?: Configuration): Promise<ResponseOrderOut> {
        const result = this.api.v1OrderGet(appId, idOrUid, _options);
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
    public v1OrderList(appId: string, size?: number, page?: number, walletId?: string, accountId?: string, _options?: Configuration): Promise<ResponseListOrderOut> {
        const result = this.api.v1OrderList(appId, size, page, walletId, accountId, _options);
        return result.toPromise();
    }


}



import { ObservableRefundApi } from './ObservableAPI';

import { RefundApiRequestFactory, RefundApiResponseProcessor} from "../apis/RefundApi";
export class PromiseRefundApi {
    private api: ObservableRefundApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RefundApiRequestFactory,
        responseProcessor?: RefundApiResponseProcessor
    ) {
        this.api = new ObservableRefundApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a refund.
     * Create Refund
     * @param appId Specified the app id.
     * @param refundIn 
     */
    public v1RefundCreate(appId: string, refundIn: RefundIn, _options?: Configuration): Promise<ResponseRefundOut> {
        const result = this.api.v1RefundCreate(appId, refundIn, _options);
        return result.toPromise();
    }

    /**
     * Get specified refund.
     * Get Refund
     * @param appId Specified the app id.
     * @param idOrUid Specified the refund id or refund uid.
     */
    public v1RefundGet(appId: string, idOrUid: string, _options?: Configuration): Promise<ResponseRefundOut> {
        const result = this.api.v1RefundGet(appId, idOrUid, _options);
        return result.toPromise();
    }

    /**
     * List refunds.
     * List Refunds
     * @param appId Specified the app id.
     * @param size Limit the number of returned items
     * @param page Specifying the page index
     * @param orderId Optional order id
     */
    public v1RefundList(appId: string, size?: number, page?: number, orderId?: string, _options?: Configuration): Promise<ResponseListRefundOut> {
        const result = this.api.v1RefundList(appId, size, page, orderId, _options);
        return result.toPromise();
    }


}



import { ObservableTransferApi } from './ObservableAPI';

import { TransferApiRequestFactory, TransferApiResponseProcessor} from "../apis/TransferApi";
export class PromiseTransferApi {
    private api: ObservableTransferApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TransferApiRequestFactory,
        responseProcessor?: TransferApiResponseProcessor
    ) {
        this.api = new ObservableTransferApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new transfer.
     * Create Transfer
     * @param appId Specified the app id.
     * @param transferIn 
     */
    public v1TransferCreate(appId: string, transferIn: TransferIn, _options?: Configuration): Promise<ResponseTransferOut> {
        const result = this.api.v1TransferCreate(appId, transferIn, _options);
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
     * @param appId Specified the app id.
     * @param endpointIn 
     */
    public v1EndpointCreate(appId: string, endpointIn: EndpointIn, _options?: Configuration): Promise<ResponseEndpointOut> {
        const result = this.api.v1EndpointCreate(appId, endpointIn, _options);
        return result.toPromise();
    }

    /**
     * delete the specified webhook endpoint.
     * Delete endpoint
     * @param appId Specified the app id.
     * @param endpointId Specified the endpoint id.
     */
    public v1EndpointDelete(appId: string, endpointId: string, _options?: Configuration): Promise<ResponseEndpointOut> {
        const result = this.api.v1EndpointDelete(appId, endpointId, _options);
        return result.toPromise();
    }

    /**
     * get the specified webhook endpoint.
     * Delete endpoint
     * @param appId Specified the app id.
     * @param endpointId Specified the endpoint id or endpoint uid.
     */
    public v1EndpointGet(appId: string, endpointId: string, _options?: Configuration): Promise<ResponseEndpointOut> {
        const result = this.api.v1EndpointGet(appId, endpointId, _options);
        return result.toPromise();
    }

    /**
     * List endpoints.
     * List endpoints
     * @param appId Specified the app id.
     * @param limit Limit the number of returned items
     * @param cursor Specifying the start cursor position
     * @param ordering The sorting order of the returned items
     */
    public v1EndpointList(appId: string, limit?: number, cursor?: string, ordering?: Ordering, _options?: Configuration): Promise<ResponseListEndpointOut> {
        const result = this.api.v1EndpointList(appId, limit, cursor, ordering, _options);
        return result.toPromise();
    }


}



