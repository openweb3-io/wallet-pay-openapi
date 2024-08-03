// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { ResponseCurrencyOut } from '../models/ResponseCurrencyOut';
import { ResponseError } from '../models/ResponseError';
import { ResponseListCurrencyOut } from '../models/ResponseListCurrencyOut';

/**
 * no description
 */
export class CurrencyApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get specified currency.
     * Find currency by code
     * @param code Specified currency code.
     */
    public async v1CurrencyFindByCode(code: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError('Required parameter code was null or undefined when calling v1CurrencyFindByCode.');
        }


        // Path Params
        const localVarPath = '/api/v1/apps/currencies/{code}'
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));

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
     * List currencies.
     * List currencies
     * @param appId Specified the app id.
     * @param size Limit the number of returned items
     * @param page Specifying the page index
     */
    public async v1CurrencyList(appId?: string, size?: number, page?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/api/v1/currencies';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")
        const randomId = Math.floor(Math.random() * Math.pow(2, 32))
        requestContext.setHeaderParam("pay-req-id", randomId.toString())

        // Query Params
        if (appId !== undefined) {
            requestContext.setQueryParam("app_id", ObjectSerializer.serialize(appId, "string", ""));
        }
        if (size !== undefined) {
            requestContext.setQueryParam("size", ObjectSerializer.serialize(size, "number", "uint64"));
        }
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
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

export class CurrencyApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1CurrencyFindByCode
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1CurrencyFindByCode(response: ResponseContext): Promise<ResponseCurrencyOut > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);

        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ResponseCurrencyOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseCurrencyOut", ""
            ) as ResponseCurrencyOut;
            return body;
        }
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: ResponseCurrencyOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseCurrencyOut", ""
            ) as ResponseCurrencyOut;
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
            const body: ResponseCurrencyOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseCurrencyOut", ""
            ) as ResponseCurrencyOut;
            return body;
        }

        let body = await response.body.text();
        throw new ApiException<string>(response.httpStatusCode, body);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1CurrencyList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1CurrencyList(response: ResponseContext): Promise<ResponseListCurrencyOut > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);

        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ResponseListCurrencyOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseListCurrencyOut", ""
            ) as ResponseListCurrencyOut;
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
            const body: ResponseListCurrencyOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseListCurrencyOut", ""
            ) as ResponseListCurrencyOut;
            return body;
        }

        let body = await response.body.text();
        throw new ApiException<string>(response.httpStatusCode, body);
    }

}
