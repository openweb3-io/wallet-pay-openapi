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

export class OrderOut {
    /**
    * The order's ID
    */
    'id': string;
    /**
    * The order's UID
    */
    'uid'?: string;
    /**
    * Currency code
    */
    'currency': string;
    /**
    * Big integer string representation, whose meaning is the value of absolute floating-point number multiplied by the corresponding decimals of the cryptocurrency.
    */
    'amount': string;
    /**
    * The order's creator
    */
    'userId'?: string;
    /**
    * wallet id
    */
    'walletId'?: string;
    /**
    * Optional order notes
    */
    'note'?: string;
    'metadata'?: { [key: string]: string; };
    /**
    * The expiration seconds
    */
    'expiration'?: number;
    /**
    * The order's status
    */
    'status': OrderOutStatusEnum;
    /**
    * The message when order failed
    */
    'failedMessage'?: string;
    /**
    * The order's creation time
    */
    'createdAt': Date;
    /**
    * The order's paid time
    */
    'payedAt'?: Date;
    /**
    * The order's expiration time
    */
    'expiredAt'?: Date;
    /**
    * The order's failure time
    */
    'failedAt'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "uid",
            "baseName": "uid",
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
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "walletId",
            "baseName": "wallet_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "note",
            "baseName": "note",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "expiration",
            "baseName": "expiration",
            "type": "number",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "OrderOutStatusEnum",
            "format": ""
        },
        {
            "name": "failedMessage",
            "baseName": "failed_message",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "payedAt",
            "baseName": "payed_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "expiredAt",
            "baseName": "expired_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "failedAt",
            "baseName": "failed_at",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return OrderOut.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type OrderOutStatusEnum = "PENDING" | "PAID" | "FAILED" | "EXPIRED" | "COMPLETED" ;

