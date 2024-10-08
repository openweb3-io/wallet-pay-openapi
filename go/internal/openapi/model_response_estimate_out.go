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

// ResponseEstimateOut struct for ResponseEstimateOut
type ResponseEstimateOut struct {
	Data EstimateOut `json:"data"`
}

// NewResponseEstimateOut instantiates a new ResponseEstimateOut object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewResponseEstimateOut(data EstimateOut) *ResponseEstimateOut {
	this := ResponseEstimateOut{}
	this.Data = data
	return &this
}

// NewResponseEstimateOutWithDefaults instantiates a new ResponseEstimateOut object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewResponseEstimateOutWithDefaults() *ResponseEstimateOut {
	this := ResponseEstimateOut{}
	return &this
}

// GetData returns the Data field value
func (o *ResponseEstimateOut) GetData() EstimateOut {
	if o == nil {
		var ret EstimateOut
		return ret
	}

	return o.Data
}

// GetDataOk returns a tuple with the Data field value
// and a boolean to check if the value has been set.
func (o *ResponseEstimateOut) GetDataOk() (*EstimateOut, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Data, true
}

// SetData sets field value
func (o *ResponseEstimateOut) SetData(v EstimateOut) {
	o.Data = v
}

func (o ResponseEstimateOut) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["data"] = o.Data
	}
	return json.Marshal(toSerialize)
}

type NullableResponseEstimateOut struct {
	value *ResponseEstimateOut
	isSet bool
}

func (v NullableResponseEstimateOut) Get() *ResponseEstimateOut {
	return v.value
}

func (v *NullableResponseEstimateOut) Set(val *ResponseEstimateOut) {
	v.value = val
	v.isSet = true
}

func (v NullableResponseEstimateOut) IsSet() bool {
	return v.isSet
}

func (v *NullableResponseEstimateOut) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableResponseEstimateOut(val *ResponseEstimateOut) *NullableResponseEstimateOut {
	return &NullableResponseEstimateOut{value: val, isSet: true}
}

func (v NullableResponseEstimateOut) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableResponseEstimateOut) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


