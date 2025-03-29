import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { CurrenciesApiRequestFactory, CurrenciesApiResponseProcessor} from "../apis/CurrenciesApi";
export class ObservableCurrenciesApi {
    private requestFactory: CurrenciesApiRequestFactory;
    private responseProcessor: CurrenciesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CurrenciesApiRequestFactory,
        responseProcessor?: CurrenciesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CurrenciesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CurrenciesApiResponseProcessor();
    }

    /**
     * Retrieve a list of all available currencies.
     * List currencies
     * @param limit Number of records to return per page
     * @param rated Filter currencies by rated status
     * @param cursor Pagination cursor for fetching next page
     * @param appId Filter currencies by application ID
     */
    public v1CurrenciesList(limit: number, rated?: boolean, cursor?: string, appId?: string, _options?: Configuration): Observable<CursorPageCurrency> {
        const requestContextPromise = this.requestFactory.v1CurrenciesList(limit, rated, cursor, appId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1CurrenciesList(rsp)));
            }));
    }
 
    /**
     * Get currency info by currency code
     * Get Currency
     * @param code Currency code
     */
    public v1CurrenciesRetrieve(code: string, _options?: Configuration): Observable<Currency> {
        const requestContextPromise = this.requestFactory.v1CurrenciesRetrieve(code, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1CurrenciesRetrieve(rsp)));
            }));
    }
 
}

import { OrdersApiRequestFactory, OrdersApiResponseProcessor} from "../apis/OrdersApi";
export class ObservableOrdersApi {
    private requestFactory: OrdersApiRequestFactory;
    private responseProcessor: OrdersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OrdersApiRequestFactory,
        responseProcessor?: OrdersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OrdersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OrdersApiResponseProcessor();
    }

    /**
     * Create a new payment order
     * Create Order
     * @param createOrderRequest Order details
     */
    public v1OrdersCreate(createOrderRequest: CreateOrderRequest, _options?: Configuration): Observable<Order> {
        const requestContextPromise = this.requestFactory.v1OrdersCreate(createOrderRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrdersCreate(rsp)));
            }));
    }
 
    /**
     * Retrieve a list of orders with pagination
     * List Orders
     * @param page Page number for pagination, starting from 0
     * @param size Number of items per page
     * @param walletId Filter orders by wallet ID
     * @param currency Filter orders by currency
     * @param status Order status enum
     */
    public v1OrdersList(page: number, size: number, walletId?: string, currency?: string, status?: string, _options?: Configuration): Observable<PageOrder> {
        const requestContextPromise = this.requestFactory.v1OrdersList(page, size, walletId, currency, status, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrdersList(rsp)));
            }));
    }
 
    /**
     * Get order details by ID or UID
     * Retrieve Order
     * @param idOrUid Order ID or UID
     */
    public v1OrdersRetrieve(idOrUid: string, _options?: Configuration): Observable<Order> {
        const requestContextPromise = this.requestFactory.v1OrdersRetrieve(idOrUid, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrdersRetrieve(rsp)));
            }));
    }
 
}

import { RatesApiRequestFactory, RatesApiResponseProcessor} from "../apis/RatesApi";
export class ObservableRatesApi {
    private requestFactory: RatesApiRequestFactory;
    private responseProcessor: RatesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RatesApiRequestFactory,
        responseProcessor?: RatesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RatesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RatesApiResponseProcessor();
    }

    /**
     * Convert an amount from one currency to another using current exchange rates.
     * Estimate currency conversion
     * @param baseCurrency Source currency code
     * @param baseAmount Amount in source currency to convert
     * @param toCurrency Target currency code
     */
    public v1RatesEstimate(baseCurrency: string, baseAmount: string, toCurrency: string, _options?: Configuration): Observable<EstimateResponse> {
        const requestContextPromise = this.requestFactory.v1RatesEstimate(baseCurrency, baseAmount, toCurrency, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1RatesEstimate(rsp)));
            }));
    }
 
    /**
     * Get exchange rates for multiple currency pairs.
     * List exchange rates
     * @param getRatesRequest Currency pairs to get rates for
     */
    public v1RatesList(getRatesRequest: GetRatesRequest, _options?: Configuration): Observable<GetRatesResponse> {
        const requestContextPromise = this.requestFactory.v1RatesList(getRatesRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1RatesList(rsp)));
            }));
    }
 
}

import { RefundsApiRequestFactory, RefundsApiResponseProcessor} from "../apis/RefundsApi";
export class ObservableRefundsApi {
    private requestFactory: RefundsApiRequestFactory;
    private responseProcessor: RefundsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RefundsApiRequestFactory,
        responseProcessor?: RefundsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RefundsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RefundsApiResponseProcessor();
    }

    /**
     * Create a new refund for an order
     * Create Refund
     * @param createRefundRequest Refund details
     */
    public v1RefundsCreate(createRefundRequest: CreateRefundRequest, _options?: Configuration): Observable<Refund> {
        const requestContextPromise = this.requestFactory.v1RefundsCreate(createRefundRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1RefundsCreate(rsp)));
            }));
    }
 
    /**
     * Retrieve a list of refunds with pagination
     * List Refunds
     * @param page Page number for pagination, starting from 0
     * @param size Number of items per page
     * @param orderId Filter refunds by order ID
     */
    public v1RefundsList(page: number, size: number, orderId?: string, _options?: Configuration): Observable<PageRefund> {
        const requestContextPromise = this.requestFactory.v1RefundsList(page, size, orderId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1RefundsList(rsp)));
            }));
    }
 
    /**
     * Get refund details by ID or UID
     * Retrieve Refund
     * @param idOrUid Refund ID or UID
     */
    public v1RefundsRetrieve(idOrUid: string, _options?: Configuration): Observable<Refund> {
        const requestContextPromise = this.requestFactory.v1RefundsRetrieve(idOrUid, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1RefundsRetrieve(rsp)));
            }));
    }
 
}

import { TransfersApiRequestFactory, TransfersApiResponseProcessor} from "../apis/TransfersApi";
export class ObservableTransfersApi {
    private requestFactory: TransfersApiRequestFactory;
    private responseProcessor: TransfersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TransfersApiRequestFactory,
        responseProcessor?: TransfersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TransfersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TransfersApiResponseProcessor();
    }

    /**
     * Transfer funds from merchant wallet to another wallet
     * Transfer Funds
     * @param transferRequest Transfer details
     */
    public v1TransfersTransfer(transferRequest: TransferRequest, _options?: Configuration): Observable<TransferResponse> {
        const requestContextPromise = this.requestFactory.v1TransfersTransfer(transferRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1TransfersTransfer(rsp)));
            }));
    }
 
}

import { WebhookEndpointsApiRequestFactory, WebhookEndpointsApiResponseProcessor} from "../apis/WebhookEndpointsApi";
export class ObservableWebhookEndpointsApi {
    private requestFactory: WebhookEndpointsApiRequestFactory;
    private responseProcessor: WebhookEndpointsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: WebhookEndpointsApiRequestFactory,
        responseProcessor?: WebhookEndpointsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WebhookEndpointsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WebhookEndpointsApiResponseProcessor();
    }

    /**
     * Create a new webhook endpoint for receiving event notifications
     * Create Webhook Endpoint
     * @param createEndpointRequest Webhook endpoint details
     */
    public v1WebhookEndpointsCreate(createEndpointRequest: CreateEndpointRequest, _options?: Configuration): Observable<Endpoint> {
        const requestContextPromise = this.requestFactory.v1WebhookEndpointsCreate(createEndpointRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1WebhookEndpointsCreate(rsp)));
            }));
    }
 
    /**
     * Delete a webhook endpoint by ID
     * Delete Webhook Endpoint
     * @param endpointId Webhook endpoint ID
     */
    public v1WebhookEndpointsDelete(endpointId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1WebhookEndpointsDelete(endpointId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1WebhookEndpointsDelete(rsp)));
            }));
    }
 
    /**
     * Retrieve a list of webhook endpoints with cursor-based pagination
     * List Webhook Endpoints
     * @param limit The limit of items per page
     * @param cursor The cursor for pagination
     */
    public v1WebhookEndpointsList(limit: number, cursor?: string, _options?: Configuration): Observable<CursorPageEndpoint> {
        const requestContextPromise = this.requestFactory.v1WebhookEndpointsList(limit, cursor, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1WebhookEndpointsList(rsp)));
            }));
    }
 
    /**
     * Get webhook endpoint details by ID
     * Retrieve Webhook Endpoint
     * @param endpointId Webhook endpoint ID
     */
    public v1WebhookEndpointsRetrieve(endpointId: string, _options?: Configuration): Observable<Endpoint> {
        const requestContextPromise = this.requestFactory.v1WebhookEndpointsRetrieve(endpointId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1WebhookEndpointsRetrieve(rsp)));
            }));
    }
 
}
