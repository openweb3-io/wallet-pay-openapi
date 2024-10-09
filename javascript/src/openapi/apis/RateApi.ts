// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { GetRatesIn } from '../models/GetRatesIn';
import { ResponseError } from '../models/ResponseError';
import { ResponseEstimateOut } from '../models/ResponseEstimateOut';
import { ResponseRatesOut } from '../models/ResponseRatesOut';

/**
 * no description
 */
export class RateApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Estimate the amount of currency exchange.
     * Estimate the amount of currency exchange.
     * @param from Specified the base currency that needs to be estimated
     * @param toCurrency Specify the target currency.
     * @param baseAmount Specify the amount of base currency that need to be estimated.
     */
    public async v1RateEstimate(from: string, toCurrency: string, baseAmount: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'from' is not null or undefined
        if (from === null || from === undefined) {
            throw new RequiredError('Required parameter from was null or undefined when calling v1RateEstimate.');
        }


        // verify required parameter 'toCurrency' is not null or undefined
        if (toCurrency === null || toCurrency === undefined) {
            throw new RequiredError('Required parameter toCurrency was null or undefined when calling v1RateEstimate.');
        }


        // verify required parameter 'baseAmount' is not null or undefined
        if (baseAmount === null || baseAmount === undefined) {
            throw new RequiredError('Required parameter baseAmount was null or undefined when calling v1RateEstimate.');
        }


        // Path Params
        const localVarPath = '/api/v1/rates/estimate';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")
        const randomId = Math.floor(Math.random() * Math.pow(2, 32))
        requestContext.setHeaderParam("pay-req-id", randomId.toString())

        // Query Params
        if (from !== undefined) {
            requestContext.setQueryParam("from", ObjectSerializer.serialize(from, "string", ""));
        }
        if (toCurrency !== undefined) {
            requestContext.setQueryParam("to_currency", ObjectSerializer.serialize(toCurrency, "string", ""));
        }
        if (baseAmount !== undefined) {
            requestContext.setQueryParam("base_amount", ObjectSerializer.serialize(baseAmount, "string", ""));
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

    /**
     * Query exchange rates between different currencies.
     * Query exchange rates between different currencies. 
     * @param getRatesIn 
     */
    public async v1RateGetRates(getRatesIn: GetRatesIn, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'getRatesIn' is not null or undefined
        if (getRatesIn === null || getRatesIn === undefined) {
            throw new RequiredError('Required parameter getRatesIn was null or undefined when calling v1RateGetRates.');
        }


        // Path Params
        const localVarPath = '/api/v1/rates';

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
            ObjectSerializer.serialize(getRatesIn, "GetRatesIn", ""),
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

}

export class RateApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1RateEstimate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1RateEstimate(response: ResponseContext): Promise<ResponseEstimateOut > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);

        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ResponseEstimateOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseEstimateOut", ""
            ) as ResponseEstimateOut;
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
            const body: ResponseEstimateOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseEstimateOut", ""
            ) as ResponseEstimateOut;
            return body;
        }

        let body = await response.body.text();
        throw new ApiException<string>(response.httpStatusCode, body);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1RateGetRates
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1RateGetRates(response: ResponseContext): Promise<ResponseRatesOut > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);

        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ResponseRatesOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseRatesOut", ""
            ) as ResponseRatesOut;
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
            const body: ResponseRatesOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseRatesOut", ""
            ) as ResponseRatesOut;
            return body;
        }

        let body = await response.body.text();
        throw new ApiException<string>(response.httpStatusCode, body);
    }

}
