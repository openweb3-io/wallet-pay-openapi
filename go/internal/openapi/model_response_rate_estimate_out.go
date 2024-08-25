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

// ResponseRateEstimateOut struct for ResponseRateEstimateOut
type ResponseRateEstimateOut struct {
	// The base currency.
	From string `json:"from"`
	// The base currency amount.
	BaseAmount int32 `json:"base_amount"`
	// The target currency
	ToCurrency string `json:"to_currency"`
	// The estimated amount in the target currency
	ToAmount int32 `json:"to_amount"`
	// The conversion rate from the base currency to the target currency.
	Rate float32 `json:"rate"`
}

// NewResponseRateEstimateOut instantiates a new ResponseRateEstimateOut object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewResponseRateEstimateOut(from string, baseAmount int32, toCurrency string, toAmount int32, rate float32) *ResponseRateEstimateOut {
	this := ResponseRateEstimateOut{}
	this.From = from
	this.BaseAmount = baseAmount
	this.ToCurrency = toCurrency
	this.ToAmount = toAmount
	this.Rate = rate
	return &this
}

// NewResponseRateEstimateOutWithDefaults instantiates a new ResponseRateEstimateOut object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewResponseRateEstimateOutWithDefaults() *ResponseRateEstimateOut {
	this := ResponseRateEstimateOut{}
	return &this
}

// GetFrom returns the From field value
func (o *ResponseRateEstimateOut) GetFrom() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.From
}

// GetFromOk returns a tuple with the From field value
// and a boolean to check if the value has been set.
func (o *ResponseRateEstimateOut) GetFromOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.From, true
}

// SetFrom sets field value
func (o *ResponseRateEstimateOut) SetFrom(v string) {
	o.From = v
}

// GetBaseAmount returns the BaseAmount field value
func (o *ResponseRateEstimateOut) GetBaseAmount() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.BaseAmount
}

// GetBaseAmountOk returns a tuple with the BaseAmount field value
// and a boolean to check if the value has been set.
func (o *ResponseRateEstimateOut) GetBaseAmountOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.BaseAmount, true
}

// SetBaseAmount sets field value
func (o *ResponseRateEstimateOut) SetBaseAmount(v int32) {
	o.BaseAmount = v
}

// GetToCurrency returns the ToCurrency field value
func (o *ResponseRateEstimateOut) GetToCurrency() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.ToCurrency
}

// GetToCurrencyOk returns a tuple with the ToCurrency field value
// and a boolean to check if the value has been set.
func (o *ResponseRateEstimateOut) GetToCurrencyOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.ToCurrency, true
}

// SetToCurrency sets field value
func (o *ResponseRateEstimateOut) SetToCurrency(v string) {
	o.ToCurrency = v
}

// GetToAmount returns the ToAmount field value
func (o *ResponseRateEstimateOut) GetToAmount() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.ToAmount
}

// GetToAmountOk returns a tuple with the ToAmount field value
// and a boolean to check if the value has been set.
func (o *ResponseRateEstimateOut) GetToAmountOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.ToAmount, true
}

// SetToAmount sets field value
func (o *ResponseRateEstimateOut) SetToAmount(v int32) {
	o.ToAmount = v
}

// GetRate returns the Rate field value
func (o *ResponseRateEstimateOut) GetRate() float32 {
	if o == nil {
		var ret float32
		return ret
	}

	return o.Rate
}

// GetRateOk returns a tuple with the Rate field value
// and a boolean to check if the value has been set.
func (o *ResponseRateEstimateOut) GetRateOk() (*float32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Rate, true
}

// SetRate sets field value
func (o *ResponseRateEstimateOut) SetRate(v float32) {
	o.Rate = v
}

func (o ResponseRateEstimateOut) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["from"] = o.From
	}
	if true {
		toSerialize["base_amount"] = o.BaseAmount
	}
	if true {
		toSerialize["to_currency"] = o.ToCurrency
	}
	if true {
		toSerialize["to_amount"] = o.ToAmount
	}
	if true {
		toSerialize["rate"] = o.Rate
	}
	return json.Marshal(toSerialize)
}

type NullableResponseRateEstimateOut struct {
	value *ResponseRateEstimateOut
	isSet bool
}

func (v NullableResponseRateEstimateOut) Get() *ResponseRateEstimateOut {
	return v.value
}

func (v *NullableResponseRateEstimateOut) Set(val *ResponseRateEstimateOut) {
	v.value = val
	v.isSet = true
}

func (v NullableResponseRateEstimateOut) IsSet() bool {
	return v.isSet
}

func (v *NullableResponseRateEstimateOut) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableResponseRateEstimateOut(val *ResponseRateEstimateOut) *NullableResponseRateEstimateOut {
	return &NullableResponseRateEstimateOut{value: val, isSet: true}
}

func (v NullableResponseRateEstimateOut) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableResponseRateEstimateOut) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

