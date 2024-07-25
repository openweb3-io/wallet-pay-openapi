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

import { AnyType } from './AnyType';
import { HttpFile } from '../http/http';

/**
* The request body of the webhook POST request.
*/
export class WebhookMessage {
    /**
    * Message event type
    */
    'eventType'?: string;
    /**
    * Message content
    */
    'payload'?: { [key: string]: AnyType; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "eventType",
            "baseName": "event_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "payload",
            "baseName": "payload",
            "type": "{ [key: string]: AnyType; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WebhookMessage.attributeTypeMap;
    }
    
    public constructor() {
    }
}

