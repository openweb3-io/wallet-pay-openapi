/*
 * WalletPay API Documentation
 * This is a custody wallet pay service openapi server.
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
import io.openweb3.walletpay.models.Error;
import io.openweb3.walletpay.models.TransferRequest;
import io.openweb3.walletpay.models.TransferResponse;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for TransfersApi
 */
@Ignore
public class TransfersApiTest {

    private final TransfersApi api = new TransfersApi();

    
    /**
     * Transfer Funds
     *
     * Transfer funds from merchant wallet to another wallet
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void v1TransfersTransferTest() throws ApiException {
        TransferRequest transferRequest = null;
        TransferResponse response = api.v1TransfersTransfer(transferRequest);

        // TODO: test validations
    }
    
}
