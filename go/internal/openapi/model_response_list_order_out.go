/*
 * Wallet-Pay API Documentations
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.0
 */

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
)

// ResponseListOrderOut struct for ResponseListOrderOut
type ResponseListOrderOut struct {
	Data ListResponseOrderOut `json:"data"`
}

// NewResponseListOrderOut instantiates a new ResponseListOrderOut object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewResponseListOrderOut(data ListResponseOrderOut) *ResponseListOrderOut {
	this := ResponseListOrderOut{}
	this.Data = data
	return &this
}

// NewResponseListOrderOutWithDefaults instantiates a new ResponseListOrderOut object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewResponseListOrderOutWithDefaults() *ResponseListOrderOut {
	this := ResponseListOrderOut{}
	return &this
}

// GetData returns the Data field value
func (o *ResponseListOrderOut) GetData() ListResponseOrderOut {
	if o == nil {
		var ret ListResponseOrderOut
		return ret
	}

	return o.Data
}

// GetDataOk returns a tuple with the Data field value
// and a boolean to check if the value has been set.
func (o *ResponseListOrderOut) GetDataOk() (*ListResponseOrderOut, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Data, true
}

// SetData sets field value
func (o *ResponseListOrderOut) SetData(v ListResponseOrderOut) {
	o.Data = v
}

func (o ResponseListOrderOut) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["data"] = o.Data
	}
	return json.Marshal(toSerialize)
}

type NullableResponseListOrderOut struct {
	value *ResponseListOrderOut
	isSet bool
}

func (v NullableResponseListOrderOut) Get() *ResponseListOrderOut {
	return v.value
}

func (v *NullableResponseListOrderOut) Set(val *ResponseListOrderOut) {
	v.value = val
	v.isSet = true
}

func (v NullableResponseListOrderOut) IsSet() bool {
	return v.isSet
}

func (v *NullableResponseListOrderOut) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableResponseListOrderOut(val *ResponseListOrderOut) *NullableResponseListOrderOut {
	return &NullableResponseListOrderOut{value: val, isSet: true}
}

func (v NullableResponseListOrderOut) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableResponseListOrderOut) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


