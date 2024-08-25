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

// Rates struct for Rates
type Rates struct {
	Rates []RateData `json:"rates"`
}

// NewRates instantiates a new Rates object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRates(rates []RateData) *Rates {
	this := Rates{}
	this.Rates = rates
	return &this
}

// NewRatesWithDefaults instantiates a new Rates object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRatesWithDefaults() *Rates {
	this := Rates{}
	return &this
}

// GetRates returns the Rates field value
func (o *Rates) GetRates() []RateData {
	if o == nil {
		var ret []RateData
		return ret
	}

	return o.Rates
}

// GetRatesOk returns a tuple with the Rates field value
// and a boolean to check if the value has been set.
func (o *Rates) GetRatesOk() (*[]RateData, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Rates, true
}

// SetRates sets field value
func (o *Rates) SetRates(v []RateData) {
	o.Rates = v
}

func (o Rates) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["rates"] = o.Rates
	}
	return json.Marshal(toSerialize)
}

type NullableRates struct {
	value *Rates
	isSet bool
}

func (v NullableRates) Get() *Rates {
	return v.value
}

func (v *NullableRates) Set(val *Rates) {
	v.value = val
	v.isSet = true
}

func (v NullableRates) IsSet() bool {
	return v.isSet
}

func (v *NullableRates) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRates(val *Rates) *NullableRates {
	return &NullableRates{value: val, isSet: true}
}

func (v NullableRates) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRates) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

