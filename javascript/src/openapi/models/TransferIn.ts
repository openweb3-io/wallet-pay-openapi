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

import { HttpFile } from '../http/http';

export class TransferIn {
    /**
    * the target wallet id
    */
    'toWalletId': string;
    /**
    * currency code
    */
    'currency': string;
    /**
    * big integer string representation
    */
    'amount': string;
    /**
    * auto commit, default is true
    */
    'autoCommit'?: boolean;
    /**
    * transfer description
    */
    'description'?: string;
    /**
    * transfer tags
    */
    'tags'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "toWalletId",
            "baseName": "to_wallet_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string",
            "format": ""
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "string",
            "format": ""
        },
        {
            "name": "autoCommit",
            "baseName": "auto_commit",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TransferIn.attributeTypeMap;
    }
    
    public constructor() {
    }
}

