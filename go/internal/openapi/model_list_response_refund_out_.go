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

// ListResponseRefundOut struct for ListResponseRefundOut
type ListResponseRefundOut struct {
	Items []RefundOut `json:"items"`
	Total *int32 `json:"total,omitempty"`
}

// NewListResponseRefundOut instantiates a new ListResponseRefundOut object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewListResponseRefundOut(items []RefundOut) *ListResponseRefundOut {
	this := ListResponseRefundOut{}
	this.Items = items
	return &this
}

// NewListResponseRefundOutWithDefaults instantiates a new ListResponseRefundOut object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewListResponseRefundOutWithDefaults() *ListResponseRefundOut {
	this := ListResponseRefundOut{}
	return &this
}

// GetItems returns the Items field value
func (o *ListResponseRefundOut) GetItems() []RefundOut {
	if o == nil {
		var ret []RefundOut
		return ret
	}

	return o.Items
}

// GetItemsOk returns a tuple with the Items field value
// and a boolean to check if the value has been set.
func (o *ListResponseRefundOut) GetItemsOk() (*[]RefundOut, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Items, true
}

// SetItems sets field value
func (o *ListResponseRefundOut) SetItems(v []RefundOut) {
	o.Items = v
}

// GetTotal returns the Total field value if set, zero value otherwise.
func (o *ListResponseRefundOut) GetTotal() int32 {
	if o == nil || o.Total == nil {
		var ret int32
		return ret
	}
	return *o.Total
}

// GetTotalOk returns a tuple with the Total field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ListResponseRefundOut) GetTotalOk() (*int32, bool) {
	if o == nil || o.Total == nil {
		return nil, false
	}
	return o.Total, true
}

// HasTotal returns a boolean if a field has been set.
func (o *ListResponseRefundOut) HasTotal() bool {
	if o != nil && o.Total != nil {
		return true
	}

	return false
}

// SetTotal gets a reference to the given int32 and assigns it to the Total field.
func (o *ListResponseRefundOut) SetTotal(v int32) {
	o.Total = &v
}

func (o ListResponseRefundOut) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["items"] = o.Items
	}
	if o.Total != nil {
		toSerialize["total"] = o.Total
	}
	return json.Marshal(toSerialize)
}

type NullableListResponseRefundOut struct {
	value *ListResponseRefundOut
	isSet bool
}

func (v NullableListResponseRefundOut) Get() *ListResponseRefundOut {
	return v.value
}

func (v *NullableListResponseRefundOut) Set(val *ListResponseRefundOut) {
	v.value = val
	v.isSet = true
}

func (v NullableListResponseRefundOut) IsSet() bool {
	return v.isSet
}

func (v *NullableListResponseRefundOut) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableListResponseRefundOut(val *ListResponseRefundOut) *NullableListResponseRefundOut {
	return &NullableListResponseRefundOut{value: val, isSet: true}
}

func (v NullableListResponseRefundOut) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableListResponseRefundOut) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

