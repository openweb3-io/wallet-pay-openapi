/*
 * Wallet-Pay API Documentations
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package io.openweb3.walletpay.internal.api;

import io.openweb3.walletpay.internal.ApiException;
import io.openweb3.walletpay.models.ResponseError;
import io.openweb3.walletpay.models.ResponseTransferOut;
import io.openweb3.walletpay.models.TransferIn;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for TransferApi
 */
@Ignore
public class TransferApiTest {

    private final TransferApi api = new TransferApi();

    
    /**
     * Create Transfer
     *
     * Create a new transfer.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void v1TransferCreateTest() throws ApiException {
        TransferIn transferIn = null;
        ResponseTransferOut response = api.v1TransferCreate(transferIn);

        // TODO: test validations
    }
    
}
