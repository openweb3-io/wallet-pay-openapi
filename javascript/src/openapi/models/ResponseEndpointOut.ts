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

export class ResponseEndpointOut {
    'data': EndpointOut;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "EndpointOut",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ResponseEndpointOut.attributeTypeMap;
    }
    
    public constructor() {
    }
}
