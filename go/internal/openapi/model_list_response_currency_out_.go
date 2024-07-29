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

// ListResponseCurrencyOut struct for ListResponseCurrencyOut
type ListResponseCurrencyOut struct {
	Items *[]CurrencyOut `json:"items,omitempty"`
	Total *int32 `json:"total,omitempty"`
}

// NewListResponseCurrencyOut instantiates a new ListResponseCurrencyOut object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewListResponseCurrencyOut() *ListResponseCurrencyOut {
	this := ListResponseCurrencyOut{}
	return &this
}

// NewListResponseCurrencyOutWithDefaults instantiates a new ListResponseCurrencyOut object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewListResponseCurrencyOutWithDefaults() *ListResponseCurrencyOut {
	this := ListResponseCurrencyOut{}
	return &this
}

// GetItems returns the Items field value if set, zero value otherwise.
func (o *ListResponseCurrencyOut) GetItems() []CurrencyOut {
	if o == nil || o.Items == nil {
		var ret []CurrencyOut
		return ret
	}
	return *o.Items
}

// GetItemsOk returns a tuple with the Items field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ListResponseCurrencyOut) GetItemsOk() (*[]CurrencyOut, bool) {
	if o == nil || o.Items == nil {
		return nil, false
	}
	return o.Items, true
}

// HasItems returns a boolean if a field has been set.
func (o *ListResponseCurrencyOut) HasItems() bool {
	if o != nil && o.Items != nil {
		return true
	}

	return false
}

// SetItems gets a reference to the given []CurrencyOut and assigns it to the Items field.
func (o *ListResponseCurrencyOut) SetItems(v []CurrencyOut) {
	o.Items = &v
}

// GetTotal returns the Total field value if set, zero value otherwise.
func (o *ListResponseCurrencyOut) GetTotal() int32 {
	if o == nil || o.Total == nil {
		var ret int32
		return ret
	}
	return *o.Total
}

// GetTotalOk returns a tuple with the Total field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ListResponseCurrencyOut) GetTotalOk() (*int32, bool) {
	if o == nil || o.Total == nil {
		return nil, false
	}
	return o.Total, true
}

// HasTotal returns a boolean if a field has been set.
func (o *ListResponseCurrencyOut) HasTotal() bool {
	if o != nil && o.Total != nil {
		return true
	}

	return false
}

// SetTotal gets a reference to the given int32 and assigns it to the Total field.
func (o *ListResponseCurrencyOut) SetTotal(v int32) {
	o.Total = &v
}

func (o ListResponseCurrencyOut) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.Items != nil {
		toSerialize["items"] = o.Items
	}
	if o.Total != nil {
		toSerialize["total"] = o.Total
	}
	return json.Marshal(toSerialize)
}

type NullableListResponseCurrencyOut struct {
	value *ListResponseCurrencyOut
	isSet bool
}

func (v NullableListResponseCurrencyOut) Get() *ListResponseCurrencyOut {
	return v.value
}

func (v *NullableListResponseCurrencyOut) Set(val *ListResponseCurrencyOut) {
	v.value = val
	v.isSet = true
}

func (v NullableListResponseCurrencyOut) IsSet() bool {
	return v.isSet
}

func (v *NullableListResponseCurrencyOut) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableListResponseCurrencyOut(val *ListResponseCurrencyOut) *NullableListResponseCurrencyOut {
	return &NullableListResponseCurrencyOut{value: val, isSet: true}
}

func (v NullableListResponseCurrencyOut) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableListResponseCurrencyOut) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


