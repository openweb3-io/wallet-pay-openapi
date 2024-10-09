// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { OrderIn } from '../models/OrderIn';
import { ResponseError } from '../models/ResponseError';
import { ResponseListOrderOut } from '../models/ResponseListOrderOut';
import { ResponseOrderOut } from '../models/ResponseOrderOut';

/**
 * no description
 */
export class OrderApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create a new order.
     * Create Order
     * @param orderIn 
     */
    public async v1OrderCreate(orderIn: OrderIn, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orderIn' is not null or undefined
        if (orderIn === null || orderIn === undefined) {
            throw new RequiredError('Required parameter orderIn was null or undefined when calling v1OrderCreate.');
        }


        // Path Params
        const localVarPath = '/api/v1/orders';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")
        const randomId = Math.floor(Math.random() * Math.pow(2, 32))
        requestContext.setHeaderParam("pay-req-id", randomId.toString())

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(orderIn, "OrderIn", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get specified order.
     * Get order
     * @param idOrUid Specified the order id or order uid.
     */
    public async v1OrderGet(idOrUid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'idOrUid' is not null or undefined
        if (idOrUid === null || idOrUid === undefined) {
            throw new RequiredError('Required parameter idOrUid was null or undefined when calling v1OrderGet.');
        }


        // Path Params
        const localVarPath = '/api/v1/orders/{idOrUid}'
            .replace('{' + 'idOrUid' + '}', encodeURIComponent(String(idOrUid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")
        const randomId = Math.floor(Math.random() * Math.pow(2, 32))
        requestContext.setHeaderParam("pay-req-id", randomId.toString())

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async v1OrderList(size?: number, page?: number, walletId?: string, currency?: string, status?: 'PENDING' | 'PAID' | 'EXPIRED' | 'FAILED' | 'COMPLETED', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;






        // Path Params
        const localVarPath = '/api/v1/orders';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")
        const randomId = Math.floor(Math.random() * Math.pow(2, 32))
        requestContext.setHeaderParam("pay-req-id", randomId.toString())

        // Query Params
        if (size !== undefined) {
            requestContext.setQueryParam("size", ObjectSerializer.serialize(size, "number", "uint64"));
        }
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }
        if (walletId !== undefined) {
            requestContext.setQueryParam("wallet_id", ObjectSerializer.serialize(walletId, "string", ""));
        }
        if (currency !== undefined) {
            requestContext.setQueryParam("currency", ObjectSerializer.serialize(currency, "string", ""));
        }
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "'PENDING' | 'PAID' | 'EXPIRED' | 'FAILED' | 'COMPLETED'", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class OrderApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1OrderCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1OrderCreate(response: ResponseContext): Promise<ResponseOrderOut > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);

        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ResponseOrderOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseOrderOut", ""
            ) as ResponseOrderOut;
            return body;
        }
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ResponseOrderOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseOrderOut", ""
            ) as ResponseOrderOut;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(400, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(401, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(404, body);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(409, body);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(429, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(500, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ResponseOrderOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseOrderOut", ""
            ) as ResponseOrderOut;
            return body;
        }

        let body = await response.body.text();
        throw new ApiException<string>(response.httpStatusCode, body);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1OrderGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1OrderGet(response: ResponseContext): Promise<ResponseOrderOut > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);

        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ResponseOrderOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseOrderOut", ""
            ) as ResponseOrderOut;
            return body;
        }
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ResponseOrderOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseOrderOut", ""
            ) as ResponseOrderOut;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(401, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(404, body);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(409, body);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(429, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(500, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ResponseOrderOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseOrderOut", ""
            ) as ResponseOrderOut;
            return body;
        }

        let body = await response.body.text();
        throw new ApiException<string>(response.httpStatusCode, body);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1OrderList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1OrderList(response: ResponseContext): Promise<ResponseListOrderOut > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);

        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ResponseListOrderOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseListOrderOut", ""
            ) as ResponseListOrderOut;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(401, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(404, body);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(409, body);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(429, body);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ResponseError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseError", ""
            ) as ResponseError;
            throw new ApiException<ResponseError>(500, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ResponseListOrderOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseListOrderOut", ""
            ) as ResponseListOrderOut;
            return body;
        }

        let body = await response.body.text();
        throw new ApiException<string>(response.httpStatusCode, body);
    }

}
