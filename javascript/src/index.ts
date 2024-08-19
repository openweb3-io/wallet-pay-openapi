import {
  ServerConfiguration,
  Configuration,
  createConfiguration,
  OrderApi,
  OrderIn,
  OrderOut,
  ListResponseOrderOut,
  CurrencyOut,
  CurrencyApi,
  ListResponseCurrencyOut,
  Middleware,
  RequestContext,
  ResponseContext,
  WebhookEndpointApi,
  EndpointIn,
  EndpointOut,
  Ordering,
  ListResponseEndpointOut,
  TransferApi,
  TransferIn,
  TransferOut,
  RefundApi,
  RefundIn,
  RefundOut,
  ListResponseRefundOut,
} from "./openapi/index";
export * from "./openapi/models/all";
export * from "./openapi/apis/exception";
import { createHash } from "crypto";

const VERSION = "0.2.0";

class UserAgentMiddleware implements Middleware {
  public pre(context: RequestContext): Promise<RequestContext> {
    context.setHeaderParam("User-Agent", `walletpay-libs/${VERSION}/javascript`);
    return Promise.resolve(context);
  }

  public post(context: ResponseContext): Promise<ResponseContext> {
    return Promise.resolve(context);
  }
}

function hmacSha256(data: string, secret: string): string {
  const hmac = createHash("sha256").update(data).update(secret).digest("hex");
  return hmac;
}

class SignatureMiddleware implements Middleware {
  public constructor(private privateKey: string) {}

  public pre(context: RequestContext): Promise<RequestContext> {
    const timestamp = new Date().toString();
    context.setHeaderParam("x-request-time", timestamp);

    // TODO: 计算签名
    let source = "";
    const method = context.getHttpMethod();
    if (method === "POST" || method === "PUT") {
      source += context.getBody()?.toString();
    }
    const url = new URL(context.getUrl());
    source += url.pathname;
    source += timestamp;

    const sign = hmacSha256(source, this.privateKey);
    context.setHeaderParam("x-signature", sign);

    return Promise.resolve(context);
  }

  public post(context: ResponseContext): Promise<ResponseContext> {
    return Promise.resolve(context);
  }
}

export interface walletpayOptions {
  debug?: boolean;
  serverUrl?: string;
}

export class walletpay {
  public readonly _configuration: Configuration;
  public readonly Order: Order;
  public readonly Endpoint: Endpoint;
  public readonly Currency: Currency;
  public readonly Transfer: Transfer;

  public constructor(apikey: string, privateKey: string, options: walletpayOptions = {}) {
    const baseUrl: string = options.serverUrl ?? "https://api.wallet-pay.openweb3.io";

    const baseServer = new ServerConfiguration<any>(baseUrl, {});

    const config = createConfiguration({
      baseServer,
      promiseMiddleware: [new UserAgentMiddleware(), new SignatureMiddleware(privateKey)],
      authMethods: {
        ApiKeyAuth: apikey,
      },
    });

    this._configuration = config;
    this.Order = new Order(config);
    this.Endpoint = new Endpoint(config);
    this.Currency = new Currency(config);
    this.Transfer = new Transfer(config);
  }
}
export interface PostOptions {
  idempotencyKey?: string;
}

interface ListOptions {
  page?: number;
  size?: number;
}

export interface OrderListOptions extends ListOptions {
  channel?: string;
  chain?: string;
}

class Order {
  private readonly api: OrderApi;

  public constructor(config: Configuration) {
    this.api = new OrderApi(config);
  }

  public async list(appId: string, options?: OrderListOptions): Promise<ListResponseOrderOut> {
    return (await this.api.v1OrderList({ appId, ...options })).data;
  }

  public async create(appId: string, orderIn: OrderIn, options?: PostOptions): Promise<OrderOut> {
    return (await this.api.v1OrderCreate({ appId, orderIn, ...options })).data;
  }
}

export interface CurrencyListOptions extends ListOptions {
  rated?: boolean;
}

class Currency {
  private readonly api: CurrencyApi;

  public constructor(config: Configuration) {
    this.api = new CurrencyApi(config);
  }

  public async list(appId: string, options?: CurrencyListOptions): Promise<ListResponseCurrencyOut> {
    return (await this.api.v1CurrencyList({ appId, ...options })).data;
  }

  public async findByCode(appId:string, code: string): Promise<CurrencyOut> {
    return (await this.api.v1CurrencyFindByCode({appId, code})).data
  }
}

class Transfer {
  private readonly api: TransferApi;

  public constructor(config: Configuration) {
    this.api = new TransferApi(config);
  }

  public async create(appId:string, transferIn: TransferIn, options?: PostOptions): Promise<TransferOut> {
    return (await this.api.v1TransferCreate({ appId, transferIn, ...options })).data;
  }
}

export interface EndpointListOptions {
  ordering?: Ordering;
  cursor?: string;
  limit?: number;
}

class Endpoint {
  private readonly api: WebhookEndpointApi;

  public constructor(config: Configuration) {
    this.api = new WebhookEndpointApi(config);
  }

  public async create(appId:string, endpointIn: EndpointIn, options?: PostOptions): Promise<EndpointOut> {
    return (await this.api.v1EndpointCreate({ appId, endpointIn, ...options })).data;
  }

  public async delete(appId: string, endpointId: string): Promise<EndpointOut> {
    return (await this.api.v1EndpointDelete({ appId, endpointId })).data;
  }

  public async get(appId: string, endpointId: string): Promise<EndpointOut> {
    return (await this.api.v1EndpointGet({ appId, endpointId })).data;
  }

  public async list(appId:string, options?: EndpointListOptions): Promise<ListResponseEndpointOut> {
    return (await this.api.v1EndpointList({ appId, ...options })).data;
  }
}

export interface RefundListOptions extends ListOptions {
  orderId?: string;
}

class Refund {
  private readonly api: RefundApi;

  public constructor(config: Configuration) {
    this.api = new RefundApi(config);
  }

  public async list(appId: string, options?: RefundListOptions): Promise<ListResponseRefundOut> {
    return (await this.api.v1RefundList({ appId, ...options })).data;
  }

  public async create(appId: string, refundIn: RefundIn, options?: PostOptions): Promise<RefundOut> {
    return (await this.api.v1RefundCreate({ appId, refundIn, ...options })).data;
  }

  public async get(appId: string, idOrUid: string): Promise<RefundOut> {
    return (await this.api.v1RefundGet({ appId, idOrUid })).data;
  }
}