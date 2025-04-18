import {
  ServerConfiguration,
  Configuration,
  createConfiguration,
  OrdersApi,
  CreateOrderRequest,
  Order,
  PageOrder,
  Currency,
  CurrenciesApi,
  CursorPageCurrency,
  Middleware,
  RequestContext,
  ResponseContext,
  WebhookEndpointsApi,
  CreateEndpointRequest,
  Endpoint,
  CursorPageEndpoint,
  TransfersApi,
  TransferRequest,
  TransferResponse,
  RatesApi,
  GetRatesRequest,
  GetRatesResponse,
  EstimateResponse,
  RefundsApi,
  CreateRefundRequest,
  Refund,
  PageRefund,
} from "./openapi/index";
export * from "./openapi/models/all";
export * from "./openapi/apis/exception";
import { createHash, createVerify, constants } from "crypto";
import * as nacl from "tweetnacl";

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

function signEd25519(data: string, secret: string): string {
  const hash = createHash("sha256");
  hash.update(Buffer.from(data, "utf-8"));
  const hashBuffer = hash.digest();
  const keyPair = nacl.sign.keyPair.fromSeed(Buffer.from(secret, "hex"));
  const signedData = nacl.sign.detached(hashBuffer, keyPair.secretKey);
  const sign = Buffer.from(signedData).toString("hex");
  return sign;
}

class SignatureMiddleware implements Middleware {
  public constructor(private secret: string) {}

  public pre(context: RequestContext): Promise<RequestContext> {
    const timestamp = new Date().getTime().toString();
    context.setHeaderParam("x-request-time", timestamp);

    let source = "";
    source += context.getBody()?.toString() || "";
    const url = new URL(context.getUrl());
    source += url.pathname + url.search;
    source += timestamp;

    const sign = signEd25519(source, this.secret);
    context.setHeaderParam("x-signature", sign);

    return Promise.resolve(context);
  }

  public post(context: ResponseContext): Promise<ResponseContext> {
    return Promise.resolve(context);
  }
}

export interface ApiClientOptions {
  debug?: boolean;
  serverUrl?: string;
}

export class ApiClient {
  public readonly _configuration: Configuration;
  public readonly Orders: Orders;
  public readonly Endpoints: Endpoints;
  public readonly Currencies: Currencies;
  public readonly Transfers: Transfers;
  public readonly Rates: Rates;
  public readonly Refunds: Refunds;

  public constructor(apiKey: string, secret: string, options: ApiClientOptions) {
    const baseUrl: string = options.serverUrl ?? "https://api.wallet-pay.openweb3.io";

    const baseServer = new ServerConfiguration<any>(baseUrl, {});

    const config = createConfiguration({
      baseServer,
      promiseMiddleware: [new UserAgentMiddleware(), new SignatureMiddleware(secret)],
      authMethods: {
        ApiKeyAuth: apiKey,
      },
    });

    this._configuration = config;
    this.Orders = new Orders(config);
    this.Endpoints = new Endpoints(config);
    this.Currencies = new Currencies(config);
    this.Transfers = new Transfers(config);
    this.Rates = new Rates(config);
    this.Refunds = new Refunds(config);
  }
}
export interface PostOptions {
  idempotencyKey?: string;
}

interface ListOptions {
  page: number;
  size: number;
}

export interface OrderListOptions extends ListOptions {
  walletId?: string;
  currency?: string;
  status?: "PENDING" | "PAID" | "EXPIRED" | "FAILED" | "COMPLETED";
}

class Orders {
  private readonly api: OrdersApi;

  public constructor(config: Configuration) {
    this.api = new OrdersApi(config);
  }

  public async list(options: OrderListOptions): Promise<PageOrder> {
    return await this.api.v1OrdersList({ ...options });
  }

  public async create(
    createOrderRequest: CreateOrderRequest,
    options?: PostOptions
  ): Promise<Order> {
    return await this.api.v1OrdersCreate({ createOrderRequest, ...options });
  }
}

export interface CurrencyListOptions {
  cursor?: string;
  limit: number;
  rated?: boolean;
}

class Currencies {
  private readonly api: CurrenciesApi;

  public constructor(config: Configuration) {
    this.api = new CurrenciesApi(config);
  }

  public async list(options: CurrencyListOptions): Promise<CursorPageCurrency> {
    return await this.api.v1CurrenciesList({ ...options });
  }

  public async findByCode(code: string): Promise<Currency> {
    return await this.api.v1CurrenciesRetrieve({ code });
  }
}

interface EstimateOptions {
  baseCurrency: string;
  toCurrency: string;
  baseAmount: string;
}

class Rates {
  private readonly api: RatesApi;

  public constructor(config: Configuration) {
    this.api = new RatesApi(config);
  }

  public async estimate(options: EstimateOptions): Promise<EstimateResponse> {
    return await this.api.v1RatesEstimate({ ...options });
  }

  public async getRates(getRatesRequest: GetRatesRequest): Promise<GetRatesResponse> {
    return await this.api.v1RatesList({ getRatesRequest });
  }
}

class Transfers {
  private readonly api: TransfersApi;

  public constructor(config: Configuration) {
    this.api = new TransfersApi(config);
  }

  public async transfer(
    transferRequest: TransferRequest,
    options?: PostOptions
  ): Promise<TransferResponse> {
    return await this.api.v1TransfersTransfer({ transferRequest, ...options });
  }
}

export interface EndpointListOptions {
  cursor?: string;
  limit: number;
}

class Endpoints {
  private readonly api: WebhookEndpointsApi;

  public constructor(config: Configuration) {
    this.api = new WebhookEndpointsApi(config);
  }

  public async create(
    createEndpointRequest: CreateEndpointRequest,
    options?: PostOptions
  ): Promise<Endpoint> {
    return await this.api.v1WebhookEndpointsCreate({ createEndpointRequest, ...options });
  }

  public async delete(endpointId: string) {
    await this.api.v1WebhookEndpointsDelete({ endpointId });
  }

  public async retrieve(endpointId: string): Promise<Endpoint> {
    return await this.api.v1WebhookEndpointsRetrieve({ endpointId });
  }

  public async list(options: EndpointListOptions): Promise<CursorPageEndpoint> {
    return await this.api.v1WebhookEndpointsList({ ...options });
  }
}

export interface RefundListOptions extends ListOptions {
  orderId?: string;
}

class Refunds {
  private readonly api: RefundsApi;

  public constructor(config: Configuration) {
    this.api = new RefundsApi(config);
  }

  public async list(options: RefundListOptions): Promise<PageRefund> {
    return await this.api.v1RefundsList({ ...options });
  }

  public async create(
    createRefundRequest: CreateRefundRequest,
    options?: PostOptions
  ): Promise<Refund> {
    return await this.api.v1RefundsCreate({ createRefundRequest, ...options });
  }

  public async retrieve(idOrUid: string): Promise<Refund> {
    return await this.api.v1RefundsRetrieve({ idOrUid });
  }
}

export class WebhookClient {
  private readonly publicKey: string;

  public constructor(publicKey: string) {
    this.publicKey = publicKey;
  }

  public async verify(payload: string, signature: string): Promise<boolean> {
    try {
      // convert payload to buffer
      const payloadBuffer = Buffer.from(payload);
      // convert signature to buffer
      const signatureBuffer = Buffer.from(signature, "base64");
      // create verify object, using pkcs#1 format public key
      const verify = createVerify("sha256");
      verify.update(payloadBuffer);

      // verify signature
      const isValid = verify.verify(
        {
          key: this.publicKey,
          padding: constants.RSA_PKCS1_PADDING,
        },
        signatureBuffer
      );

      return isValid;
    } catch (error) {
      console.error("verify signature error:", error);
      return false;
    }
  }
}
