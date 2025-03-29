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

// PageRefund struct for PageRefund
type PageRefund struct {
	// List of items in the current page
	Items []Refund `json:"items"`
	// Total number of items across all pages
	Total int32 `json:"total"`
}

// NewPageRefund instantiates a new PageRefund object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPageRefund(items []Refund, total int32) *PageRefund {
	this := PageRefund{}
	this.Items = items
	this.Total = total
	return &this
}

// NewPageRefundWithDefaults instantiates a new PageRefund object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPageRefundWithDefaults() *PageRefund {
	this := PageRefund{}
	return &this
}

// GetItems returns the Items field value
func (o *PageRefund) GetItems() []Refund {
	if o == nil {
		var ret []Refund
		return ret
	}

	return o.Items
}

// GetItemsOk returns a tuple with the Items field value
// and a boolean to check if the value has been set.
func (o *PageRefund) GetItemsOk() (*[]Refund, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Items, true
}

// SetItems sets field value
func (o *PageRefund) SetItems(v []Refund) {
	o.Items = v
}

// GetTotal returns the Total field value
func (o *PageRefund) GetTotal() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Total
}

// GetTotalOk returns a tuple with the Total field value
// and a boolean to check if the value has been set.
func (o *PageRefund) GetTotalOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Total, true
}

// SetTotal sets field value
func (o *PageRefund) SetTotal(v int32) {
	o.Total = v
}

func (o PageRefund) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["items"] = o.Items
	}
	if true {
		toSerialize["total"] = o.Total
	}
	return json.Marshal(toSerialize)
}

type NullablePageRefund struct {
	value *PageRefund
	isSet bool
}

func (v NullablePageRefund) Get() *PageRefund {
	return v.value
}

func (v *NullablePageRefund) Set(val *PageRefund) {
	v.value = val
	v.isSet = true
}

func (v NullablePageRefund) IsSet() bool {
	return v.isSet
}

func (v *NullablePageRefund) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePageRefund(val *PageRefund) *NullablePageRefund {
	return &NullablePageRefund{value: val, isSet: true}
}

func (v NullablePageRefund) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePageRefund) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


