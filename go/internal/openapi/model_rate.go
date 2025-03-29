/*
 * WalletPay API Documentation
 *
 * This is a custody wallet pay service openapi server.
 *
 * API version: 1.0
 */

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
)

// Rate struct for Rate
type Rate struct {
	Pair *CurrencyPair `json:"pair,omitempty"`
	// Exchange rate value
	Rate float32 `json:"rate"`
}

// NewRate instantiates a new Rate object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRate(rate float32) *Rate {
	this := Rate{}
	this.Rate = rate
	return &this
}

// NewRateWithDefaults instantiates a new Rate object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRateWithDefaults() *Rate {
	this := Rate{}
	return &this
}

// GetPair returns the Pair field value if set, zero value otherwise.
func (o *Rate) GetPair() CurrencyPair {
	if o == nil || o.Pair == nil {
		var ret CurrencyPair
		return ret
	}
	return *o.Pair
}

// GetPairOk returns a tuple with the Pair field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Rate) GetPairOk() (*CurrencyPair, bool) {
	if o == nil || o.Pair == nil {
		return nil, false
	}
	return o.Pair, true
}

// HasPair returns a boolean if a field has been set.
func (o *Rate) HasPair() bool {
	if o != nil && o.Pair != nil {
		return true
	}

	return false
}

// SetPair gets a reference to the given CurrencyPair and assigns it to the Pair field.
func (o *Rate) SetPair(v CurrencyPair) {
	o.Pair = &v
}

// GetRate returns the Rate field value
func (o *Rate) GetRate() float32 {
	if o == nil {
		var ret float32
		return ret
	}

	return o.Rate
}

// GetRateOk returns a tuple with the Rate field value
// and a boolean to check if the value has been set.
func (o *Rate) GetRateOk() (*float32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Rate, true
}

// SetRate sets field value
func (o *Rate) SetRate(v float32) {
	o.Rate = v
}

func (o Rate) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.Pair != nil {
		toSerialize["pair"] = o.Pair
	}
	if true {
		toSerialize["rate"] = o.Rate
	}
	return json.Marshal(toSerialize)
}

type NullableRate struct {
	value *Rate
	isSet bool
}

func (v NullableRate) Get() *Rate {
	return v.value
}

func (v *NullableRate) Set(val *Rate) {
	v.value = val
	v.isSet = true
}

func (v NullableRate) IsSet() bool {
	return v.isSet
}

func (v *NullableRate) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRate(val *Rate) *NullableRate {
	return &NullableRate{value: val, isSet: true}
}

func (v NullableRate) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRate) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


