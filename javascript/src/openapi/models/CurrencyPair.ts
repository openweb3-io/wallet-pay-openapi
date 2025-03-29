/**
 * WalletPay API Documentation
 * This is a custody wallet pay service openapi server.
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Currency pair for this rate
*/
export class CurrencyPair {
    /**
    * Source currency code
    */
    'baseCurrency': string;
    /**
    * Target currency code
    */
    'toCurrency': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "baseCurrency",
            "baseName": "base_currency",
            "type": "string",
            "format": ""
        },
        {
            "name": "toCurrency",
            "baseName": "to_currency",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CurrencyPair.attributeTypeMap;
    }
    
    public constructor() {
    }
}

