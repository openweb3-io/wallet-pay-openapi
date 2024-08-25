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

// EstimateData struct for EstimateData
type EstimateData struct {
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

// NewEstimateData instantiates a new EstimateData object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewEstimateData(from string, baseAmount int32, toCurrency string, toAmount int32, rate float32) *EstimateData {
	this := EstimateData{}
	this.From = from
	this.BaseAmount = baseAmount
	this.ToCurrency = toCurrency
	this.ToAmount = toAmount
	this.Rate = rate
	return &this
}

// NewEstimateDataWithDefaults instantiates a new EstimateData object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewEstimateDataWithDefaults() *EstimateData {
	this := EstimateData{}
	return &this
}

// GetFrom returns the From field value
func (o *EstimateData) GetFrom() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.From
}

// GetFromOk returns a tuple with the From field value
// and a boolean to check if the value has been set.
func (o *EstimateData) GetFromOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.From, true
}

// SetFrom sets field value
func (o *EstimateData) SetFrom(v string) {
	o.From = v
}

// GetBaseAmount returns the BaseAmount field value
func (o *EstimateData) GetBaseAmount() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.BaseAmount
}

// GetBaseAmountOk returns a tuple with the BaseAmount field value
// and a boolean to check if the value has been set.
func (o *EstimateData) GetBaseAmountOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.BaseAmount, true
}

// SetBaseAmount sets field value
func (o *EstimateData) SetBaseAmount(v int32) {
	o.BaseAmount = v
}

// GetToCurrency returns the ToCurrency field value
func (o *EstimateData) GetToCurrency() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.ToCurrency
}

// GetToCurrencyOk returns a tuple with the ToCurrency field value
// and a boolean to check if the value has been set.
func (o *EstimateData) GetToCurrencyOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.ToCurrency, true
}

// SetToCurrency sets field value
func (o *EstimateData) SetToCurrency(v string) {
	o.ToCurrency = v
}

// GetToAmount returns the ToAmount field value
func (o *EstimateData) GetToAmount() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.ToAmount
}

// GetToAmountOk returns a tuple with the ToAmount field value
// and a boolean to check if the value has been set.
func (o *EstimateData) GetToAmountOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.ToAmount, true
}

// SetToAmount sets field value
func (o *EstimateData) SetToAmount(v int32) {
	o.ToAmount = v
}

// GetRate returns the Rate field value
func (o *EstimateData) GetRate() float32 {
	if o == nil {
		var ret float32
		return ret
	}

	return o.Rate
}

// GetRateOk returns a tuple with the Rate field value
// and a boolean to check if the value has been set.
func (o *EstimateData) GetRateOk() (*float32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Rate, true
}

// SetRate sets field value
func (o *EstimateData) SetRate(v float32) {
	o.Rate = v
}

func (o EstimateData) MarshalJSON() ([]byte, error) {
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

type NullableEstimateData struct {
	value *EstimateData
	isSet bool
}

func (v NullableEstimateData) Get() *EstimateData {
	return v.value
}

func (v *NullableEstimateData) Set(val *EstimateData) {
	v.value = val
	v.isSet = true
}

func (v NullableEstimateData) IsSet() bool {
	return v.isSet
}

func (v *NullableEstimateData) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableEstimateData(val *EstimateData) *NullableEstimateData {
	return &NullableEstimateData{value: val, isSet: true}
}

func (v NullableEstimateData) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableEstimateData) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

