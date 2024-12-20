/**
 * Wallet-Pay API Documentations
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CurrencyNetwork } from './CurrencyNetwork';
import { HttpFile } from '../http/http';

export class CurrencyOut {
    /**
    * Currency code
    */
    'code': string;
    /**
    * Currency symbol
    */
    'symbol': string;
    /**
    * Currency logo url
    */
    'logo': string;
    /**
    * Currency name
    */
    'name': string;
    /**
    * Is it posible to deposit on blockchain
    */
    'canDeposit': boolean;
    /**
    * Is it posible to withdraw to blockchain
    */
    'canWithdraw': boolean;
    /**
    * Is it posible to transfer in custody wallet
    */
    'canTransfer': boolean;
    /**
    * Big integer string representation. The min amount to deposit.
    */
    'minDepositAmount': string;
    /**
    * Big integer string representation. The min amount to withdraw.
    */
    'minWithdrawAmount': string;
    /**
    * Big integer string representation. The max amount to withdraw.
    */
    'maxWithdrawAmount': string;
    /**
    * Currency precision
    */
    'precision': number;
    /**
    * Currency decimals
    */
    'decimals': number;
    'networks'?: Array<CurrencyNetwork>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "code",
            "baseName": "code",
            "type": "string",
            "format": ""
        },
        {
            "name": "symbol",
            "baseName": "symbol",
            "type": "string",
            "format": ""
        },
        {
            "name": "logo",
            "baseName": "logo",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "canDeposit",
            "baseName": "can_deposit",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "canWithdraw",
            "baseName": "can_withdraw",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "canTransfer",
            "baseName": "can_transfer",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "minDepositAmount",
            "baseName": "min_deposit_amount",
            "type": "string",
            "format": ""
        },
        {
            "name": "minWithdrawAmount",
            "baseName": "min_withdraw_amount",
            "type": "string",
            "format": ""
        },
        {
            "name": "maxWithdrawAmount",
            "baseName": "max_withdraw_amount",
            "type": "string",
            "format": ""
        },
        {
            "name": "precision",
            "baseName": "precision",
            "type": "number",
            "format": ""
        },
        {
            "name": "decimals",
            "baseName": "decimals",
            "type": "number",
            "format": ""
        },
        {
            "name": "networks",
            "baseName": "networks",
            "type": "Array<CurrencyNetwork>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CurrencyOut.attributeTypeMap;
    }
    
    public constructor() {
    }
}

