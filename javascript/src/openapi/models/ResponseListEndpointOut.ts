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

import { ListResponseEndpointOut } from './ListResponseEndpointOut';
import { HttpFile } from '../http/http';

export class ResponseListEndpointOut {
    'data': ListResponseEndpointOut;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "ListResponseEndpointOut",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ResponseListEndpointOut.attributeTypeMap;
    }
    
    public constructor() {
    }
}

