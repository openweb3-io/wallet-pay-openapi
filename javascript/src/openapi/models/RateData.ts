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

import { CurrencyPair } from './CurrencyPair';
import { HttpFile } from '../http/http';

export class RateData {
    'pair': CurrencyPair;
    /**
    * The current exchange rate for the specified pair
    */
    'rate': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pair",
            "baseName": "pair",
            "type": "CurrencyPair",
            "format": ""
        },
        {
            "name": "rate",
            "baseName": "rate",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RateData.attributeTypeMap;
    }
    
    public constructor() {
    }
}

