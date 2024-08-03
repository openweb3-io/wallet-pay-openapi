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

import { EndpointOut } from './EndpointOut';
import { HttpFile } from '../http/http';

export class ListResponseEndpointOut {
    'items': Array<EndpointOut>;
    'prevCursor'?: string;
    'nextCursor'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<EndpointOut>",
            "format": ""
        },
        {
            "name": "prevCursor",
            "baseName": "prev_cursor",
            "type": "string",
            "format": ""
        },
        {
            "name": "nextCursor",
            "baseName": "next_cursor",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListResponseEndpointOut.attributeTypeMap;
    }
    
    public constructor() {
    }
}

