import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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
     * @param appId Specified the app id.
     * @param code Specified currency code.
     */
    public v1CurrencyFindByCode(appId: string, code: string, _options?: Configuration): Observable<ResponseCurrencyOut> {
        const requestContextPromise = this.requestFactory.v1CurrencyFindByCode(appId, code, _options);

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
     * @param appId Specified the app id.
     * @param limit Limit the number of returned items
     * @param cursor Specifying the start cursor position
     * @param rated Specifying if currency supports fetching rates
     */
    public v1CurrencyList(appId: string, limit?: number, cursor?: string, rated?: boolean, _options?: Configuration): Observable<ResponseListCurrencyOut> {
        const requestContextPromise = this.requestFactory.v1CurrencyList(appId, limit, cursor, rated, _options);

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
     * @param appId Specified the app id.
     * @param orderIn 
     */
    public v1OrderCreate(appId: string, orderIn: OrderIn, _options?: Configuration): Observable<ResponseOrderOut> {
        const requestContextPromise = this.requestFactory.v1OrderCreate(appId, orderIn, _options);

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
     * @param appId Specified the app id.
     * @param idOrUid Specified the order id or order uid.
     */
    public v1OrderGet(appId: string, idOrUid: string, _options?: Configuration): Observable<ResponseOrderOut> {
        const requestContextPromise = this.requestFactory.v1OrderGet(appId, idOrUid, _options);

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
     * @param appId Specified the app id.
     * @param size Limit the number of returned items
     * @param page Specifying the page index
     * @param walletId Optional wallet id
     * @param currency Optional currency code
     * @param status Optional order status
     */
    public v1OrderList(appId: string, size?: number, page?: number, walletId?: string, currency?: string, status?: 'PENDING' | 'PAID' | 'EXPIRED' | 'FAILED' | 'COMPLETED', _options?: Configuration): Observable<ResponseListOrderOut> {
        const requestContextPromise = this.requestFactory.v1OrderList(appId, size, page, walletId, currency, status, _options);

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
     * @param appId Specified the app id.
     * @param refundIn 
     */
    public v1RefundCreate(appId: string, refundIn: RefundIn, _options?: Configuration): Observable<ResponseRefundOut> {
        const requestContextPromise = this.requestFactory.v1RefundCreate(appId, refundIn, _options);

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
     * @param appId Specified the app id.
     * @param idOrUid Specified the refund id or refund uid.
     */
    public v1RefundGet(appId: string, idOrUid: string, _options?: Configuration): Observable<ResponseRefundOut> {
        const requestContextPromise = this.requestFactory.v1RefundGet(appId, idOrUid, _options);

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
     * @param appId Specified the app id.
     * @param size Limit the number of returned items
     * @param page Specifying the page index
     * @param orderId Optional order id
     */
    public v1RefundList(appId: string, size?: number, page?: number, orderId?: string, _options?: Configuration): Observable<ResponseListRefundOut> {
        const requestContextPromise = this.requestFactory.v1RefundList(appId, size, page, orderId, _options);

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
     * @param appId Specified the app id.
     * @param transferIn 
     */
    public v1TransferCreate(appId: string, transferIn: TransferIn, _options?: Configuration): Observable<ResponseTransferOut> {
        const requestContextPromise = this.requestFactory.v1TransferCreate(appId, transferIn, _options);

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
     * @param appId Specified the app id.
     * @param endpointIn 
     */
    public v1EndpointCreate(appId: string, endpointIn: EndpointIn, _options?: Configuration): Observable<ResponseEndpointOut> {
        const requestContextPromise = this.requestFactory.v1EndpointCreate(appId, endpointIn, _options);

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
     * @param appId Specified the app id.
     * @param endpointId Specified the endpoint id.
     */
    public v1EndpointDelete(appId: string, endpointId: string, _options?: Configuration): Observable<ResponseEndpointOut> {
        const requestContextPromise = this.requestFactory.v1EndpointDelete(appId, endpointId, _options);

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
     * @param appId Specified the app id.
     * @param endpointId Specified the endpoint id or endpoint uid.
     */
    public v1EndpointGet(appId: string, endpointId: string, _options?: Configuration): Observable<ResponseEndpointOut> {
        const requestContextPromise = this.requestFactory.v1EndpointGet(appId, endpointId, _options);

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
     * @param appId Specified the app id.
     * @param limit Limit the number of returned items
     * @param cursor Specifying the start cursor position
     * @param ordering The sorting order of the returned items
     */
    public v1EndpointList(appId: string, limit?: number, cursor?: string, ordering?: Ordering, _options?: Configuration): Observable<ResponseListEndpointOut> {
        const requestContextPromise = this.requestFactory.v1EndpointList(appId, limit, cursor, ordering, _options);

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
