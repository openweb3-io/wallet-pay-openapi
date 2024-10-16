import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { CurrencyApiRequestFactory, CurrencyApiResponseProcessor} from "../apis/CurrencyApi";
export class ObservableCurrencyApi {
    private requestFactory: CurrencyApiRequestFactory;
    private responseProcessor: CurrencyApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CurrencyApiRequestFactory,
        responseProcessor?: CurrencyApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CurrencyApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CurrencyApiResponseProcessor();
    }

    /**
     * Get specified currency.
     * Find currency by code
     * @param code Specified currency code.
     */
    public v1CurrencyFindByCode(code: string, _options?: Configuration): Observable<ResponseCurrencyOut> {
        const requestContextPromise = this.requestFactory.v1CurrencyFindByCode(code, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1CurrencyFindByCode(rsp)));
            }));
    }
 
    /**
     * List currencies.
     * List currencies
     * @param limit Limit the number of returned items
     * @param cursor Specifying the start cursor position
     * @param rated Specifying if currency supports fetching rates
     */
    public v1CurrencyList(limit?: number, cursor?: string, rated?: boolean, _options?: Configuration): Observable<ResponseListCurrencyOut> {
        const requestContextPromise = this.requestFactory.v1CurrencyList(limit, cursor, rated, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1CurrencyList(rsp)));
            }));
    }
 
}

import { OrderApiRequestFactory, OrderApiResponseProcessor} from "../apis/OrderApi";
export class ObservableOrderApi {
    private requestFactory: OrderApiRequestFactory;
    private responseProcessor: OrderApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OrderApiRequestFactory,
        responseProcessor?: OrderApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OrderApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OrderApiResponseProcessor();
    }

    /**
     * Create a new order.
     * Create Order
     * @param orderIn 
     */
    public v1OrderCreate(orderIn: OrderIn, _options?: Configuration): Observable<ResponseOrderOut> {
        const requestContextPromise = this.requestFactory.v1OrderCreate(orderIn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrderCreate(rsp)));
            }));
    }
 
    /**
     * Get specified order.
     * Get order
     * @param idOrUid Specified the order id or order uid.
     */
    public v1OrderGet(idOrUid: string, _options?: Configuration): Observable<ResponseOrderOut> {
        const requestContextPromise = this.requestFactory.v1OrderGet(idOrUid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrderGet(rsp)));
            }));
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
    public v1OrderList(size?: number, page?: number, walletId?: string, currency?: string, status?: 'PENDING' | 'PAID' | 'EXPIRED' | 'FAILED' | 'COMPLETED', _options?: Configuration): Observable<ResponseListOrderOut> {
        const requestContextPromise = this.requestFactory.v1OrderList(size, page, walletId, currency, status, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrderList(rsp)));
            }));
    }
 
}

import { RateApiRequestFactory, RateApiResponseProcessor} from "../apis/RateApi";
export class ObservableRateApi {
    private requestFactory: RateApiRequestFactory;
    private responseProcessor: RateApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RateApiRequestFactory,
        responseProcessor?: RateApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RateApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RateApiResponseProcessor();
    }

    /**
     * Estimate the amount of currency exchange.
     * Estimate the amount of currency exchange.
     * @param baseCurrency Specified the base currency that needs to be estimated
     * @param toCurrency Specify the target currency.
     * @param baseAmount Specify the amount of base currency that need to be estimated.
     */
    public v1RateEstimate(baseCurrency: string, toCurrency: string, baseAmount: string, _options?: Configuration): Observable<ResponseEstimateOut> {
        const requestContextPromise = this.requestFactory.v1RateEstimate(baseCurrency, toCurrency, baseAmount, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1RateEstimate(rsp)));
            }));
    }
 
    /**
     * Query exchange rates between different currencies.
     * Query exchange rates between different currencies. 
     * @param getRatesIn 
     */
    public v1RateGetRates(getRatesIn: GetRatesIn, _options?: Configuration): Observable<ResponseRatesOut> {
        const requestContextPromise = this.requestFactory.v1RateGetRates(getRatesIn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1RateGetRates(rsp)));
            }));
    }
 
}

import { RefundApiRequestFactory, RefundApiResponseProcessor} from "../apis/RefundApi";
export class ObservableRefundApi {
    private requestFactory: RefundApiRequestFactory;
    private responseProcessor: RefundApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RefundApiRequestFactory,
        responseProcessor?: RefundApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RefundApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RefundApiResponseProcessor();
    }

    /**
     * Create a refund.
     * Create Refund
     * @param refundIn 
     */
    public v1RefundCreate(refundIn: RefundIn, _options?: Configuration): Observable<ResponseRefundOut> {
        const requestContextPromise = this.requestFactory.v1RefundCreate(refundIn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1RefundCreate(rsp)));
            }));
    }
 
    /**
     * Get specified refund.
     * Get Refund
     * @param idOrUid Specified the refund id or refund uid.
     */
    public v1RefundGet(idOrUid: string, _options?: Configuration): Observable<ResponseRefundOut> {
        const requestContextPromise = this.requestFactory.v1RefundGet(idOrUid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1RefundGet(rsp)));
            }));
    }
 
    /**
     * List refunds.
     * List Refunds
     * @param size Limit the number of returned items
     * @param page Specifying the page index
     * @param orderId Optional order id
     */
    public v1RefundList(size?: number, page?: number, orderId?: string, _options?: Configuration): Observable<ResponseListRefundOut> {
        const requestContextPromise = this.requestFactory.v1RefundList(size, page, orderId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1RefundList(rsp)));
            }));
    }
 
}

import { TransferApiRequestFactory, TransferApiResponseProcessor} from "../apis/TransferApi";
export class ObservableTransferApi {
    private requestFactory: TransferApiRequestFactory;
    private responseProcessor: TransferApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TransferApiRequestFactory,
        responseProcessor?: TransferApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TransferApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TransferApiResponseProcessor();
    }

    /**
     * Create a new transfer.
     * Create Transfer
     * @param transferIn 
     */
    public v1TransferCreate(transferIn: TransferIn, _options?: Configuration): Observable<ResponseTransferOut> {
        const requestContextPromise = this.requestFactory.v1TransferCreate(transferIn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1TransferCreate(rsp)));
            }));
    }
 
}

import { WebhookEndpointApiRequestFactory, WebhookEndpointApiResponseProcessor} from "../apis/WebhookEndpointApi";
export class ObservableWebhookEndpointApi {
    private requestFactory: WebhookEndpointApiRequestFactory;
    private responseProcessor: WebhookEndpointApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: WebhookEndpointApiRequestFactory,
        responseProcessor?: WebhookEndpointApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WebhookEndpointApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WebhookEndpointApiResponseProcessor();
    }

    /**
     * Create a webhook endpoint.
     * Create endpoint
     * @param endpointIn 
     */
    public v1EndpointCreate(endpointIn: EndpointIn, _options?: Configuration): Observable<ResponseEndpointOut> {
        const requestContextPromise = this.requestFactory.v1EndpointCreate(endpointIn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1EndpointCreate(rsp)));
            }));
    }
 
    /**
     * delete the specified webhook endpoint.
     * Delete endpoint
     * @param endpointId Specified the endpoint id.
     */
    public v1EndpointDelete(endpointId: string, _options?: Configuration): Observable<ResponseEndpointOut> {
        const requestContextPromise = this.requestFactory.v1EndpointDelete(endpointId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1EndpointDelete(rsp)));
            }));
    }
 
    /**
     * get the specified webhook endpoint.
     * Delete endpoint
     * @param endpointId Specified the endpoint id or endpoint uid.
     */
    public v1EndpointGet(endpointId: string, _options?: Configuration): Observable<ResponseEndpointOut> {
        const requestContextPromise = this.requestFactory.v1EndpointGet(endpointId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1EndpointGet(rsp)));
            }));
    }
 
    /**
     * List endpoints.
     * List endpoints
     * @param limit Limit the number of returned items
     * @param cursor Specifying the start cursor position
     * @param ordering The sorting order of the returned items
     */
    public v1EndpointList(limit?: number, cursor?: string, ordering?: Ordering, _options?: Configuration): Observable<ResponseListEndpointOut> {
        const requestContextPromise = this.requestFactory.v1EndpointList(limit, cursor, ordering, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1EndpointList(rsp)));
            }));
    }
 
}
