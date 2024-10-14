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
    public v1CurrencyFindByCode(code: string, _options?: Configuration): Promise<ResponseCurrencyOut> {
        const result = this.api.v1CurrencyFindByCode(code, _options);
        return result.toPromise();
    }

    /**
     * List currencies.
     * List currencies
     * @param limit Limit the number of returned items
     * @param cursor Specifying the start cursor position
     * @param rated Specifying if currency supports fetching rates
     */
    public v1CurrencyList(limit?: number, cursor?: string, rated?: boolean, _options?: Configuration): Promise<ResponseListCurrencyOut> {
        const result = this.api.v1CurrencyList(limit, cursor, rated, _options);
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
     * @param orderIn 
     */
    public v1OrderCreate(orderIn: OrderIn, _options?: Configuration): Promise<ResponseOrderOut> {
        const result = this.api.v1OrderCreate(orderIn, _options);
        return result.toPromise();
    }

    /**
     * Get specified order.
     * Get order
     * @param idOrUid Specified the order id or order uid.
     */
    public v1OrderGet(idOrUid: string, _options?: Configuration): Promise<ResponseOrderOut> {
        const result = this.api.v1OrderGet(idOrUid, _options);
        return result.toPromise();
    }

    /**
     * List orders.
     * List Orders
     * @param size Limit the number of returned items
     * @param page Specifying the page index
     * @param walletId Optional wallet id
     * @param currency Optional currency code
     * @param status Optional order status
     */
    public v1OrderList(size?: number, page?: number, walletId?: string, currency?: string, status?: 'PENDING' | 'PAID' | 'EXPIRED' | 'FAILED' | 'COMPLETED', _options?: Configuration): Promise<ResponseListOrderOut> {
        const result = this.api.v1OrderList(size, page, walletId, currency, status, _options);
        return result.toPromise();
    }


}



import { ObservableRateApi } from './ObservableAPI';

import { RateApiRequestFactory, RateApiResponseProcessor} from "../apis/RateApi";
export class PromiseRateApi {
    private api: ObservableRateApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RateApiRequestFactory,
        responseProcessor?: RateApiResponseProcessor
    ) {
        this.api = new ObservableRateApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Estimate the amount of currency exchange.
     * Estimate the amount of currency exchange.
     * @param baseCurrency Specified the base currency that needs to be estimated
     * @param toCurrency Specify the target currency.
     * @param baseAmount Specify the amount of base currency that need to be estimated.
     */
    public v1RateEstimate(baseCurrency: string, toCurrency: string, baseAmount: string, _options?: Configuration): Promise<ResponseEstimateOut> {
        const result = this.api.v1RateEstimate(baseCurrency, toCurrency, baseAmount, _options);
        return result.toPromise();
    }

    /**
     * Query exchange rates between different currencies.
     * Query exchange rates between different currencies. 
     * @param getRatesIn 
     */
    public v1RateGetRates(getRatesIn: GetRatesIn, _options?: Configuration): Promise<ResponseRatesOut> {
        const result = this.api.v1RateGetRates(getRatesIn, _options);
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
     * @param refundIn 
     */
    public v1RefundCreate(refundIn: RefundIn, _options?: Configuration): Promise<ResponseRefundOut> {
        const result = this.api.v1RefundCreate(refundIn, _options);
        return result.toPromise();
    }

    /**
     * Get specified refund.
     * Get Refund
     * @param idOrUid Specified the refund id or refund uid.
     */
    public v1RefundGet(idOrUid: string, _options?: Configuration): Promise<ResponseRefundOut> {
        const result = this.api.v1RefundGet(idOrUid, _options);
        return result.toPromise();
    }

    /**
     * List refunds.
     * List Refunds
     * @param size Limit the number of returned items
     * @param page Specifying the page index
     * @param orderId Optional order id
     */
    public v1RefundList(size?: number, page?: number, orderId?: string, _options?: Configuration): Promise<ResponseListRefundOut> {
        const result = this.api.v1RefundList(size, page, orderId, _options);
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
     * @param transferIn 
     */
    public v1TransferCreate(transferIn: TransferIn, _options?: Configuration): Promise<ResponseTransferOut> {
        const result = this.api.v1TransferCreate(transferIn, _options);
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
    public v1EndpointCreate(endpointIn: EndpointIn, _options?: Configuration): Promise<ResponseEndpointOut> {
        const result = this.api.v1EndpointCreate(endpointIn, _options);
        return result.toPromise();
    }

    /**
     * delete the specified webhook endpoint.
     * Delete endpoint
     * @param endpointId Specified the endpoint id.
     */
    public v1EndpointDelete(endpointId: string, _options?: Configuration): Promise<ResponseEndpointOut> {
        const result = this.api.v1EndpointDelete(endpointId, _options);
        return result.toPromise();
    }

    /**
     * get the specified webhook endpoint.
     * Delete endpoint
     * @param endpointId Specified the endpoint id or endpoint uid.
     */
    public v1EndpointGet(endpointId: string, _options?: Configuration): Promise<ResponseEndpointOut> {
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
    public v1EndpointList(limit?: number, cursor?: string, ordering?: Ordering, _options?: Configuration): Promise<ResponseListEndpointOut> {
        const result = this.api.v1EndpointList(limit, cursor, ordering, _options);
        return result.toPromise();
    }


}



