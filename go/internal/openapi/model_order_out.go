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
	"time"
)

// OrderOut struct for OrderOut
type OrderOut struct {
	// The order's ID
	Id string `json:"id"`
	// The order's UID
	Uid NullableString `json:"uid,omitempty"`
	// Currency code
	Currency string `json:"currency"`
	// Big integer string representation, whose meaning is the value of absolute floating-point number multiplied by the corresponding decimals of the cryptocurrency.
	Amount string `json:"amount"`
	// The order's creator
	UserId NullableString `json:"user_id,omitempty"`
	// wallet id
	WalletId *string `json:"wallet_id,omitempty"`
	// Optional order notes
	Note *string `json:"note,omitempty"`
	Metadata map[string]string `json:"metadata,omitempty"`
	// The expiration seconds
	Expiration *int32 `json:"expiration,omitempty"`
	// The order's status
	Status string `json:"status"`
	// The message when order failed
	FailedMessage *string `json:"failed_message,omitempty"`
	// The order's creation time
	CreatedAt time.Time `json:"created_at"`
	// The order's paid time
	PayedAt *time.Time `json:"payed_at,omitempty"`
	// The order's expiration time
	ExpiredAt *time.Time `json:"expired_at,omitempty"`
	// The order's failure time
	FailedAt *time.Time `json:"failed_at,omitempty"`
}

// NewOrderOut instantiates a new OrderOut object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewOrderOut(id string, currency string, amount string, status string, createdAt time.Time) *OrderOut {
	this := OrderOut{}
	this.Id = id
	this.Currency = currency
	this.Amount = amount
	this.Status = status
	this.CreatedAt = createdAt
	return &this
}

// NewOrderOutWithDefaults instantiates a new OrderOut object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewOrderOutWithDefaults() *OrderOut {
	this := OrderOut{}
	return &this
}

// GetId returns the Id field value
func (o *OrderOut) GetId() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Id
}

// GetIdOk returns a tuple with the Id field value
// and a boolean to check if the value has been set.
func (o *OrderOut) GetIdOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Id, true
}

// SetId sets field value
func (o *OrderOut) SetId(v string) {
	o.Id = v
}

// GetUid returns the Uid field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *OrderOut) GetUid() string {
	if o == nil || o.Uid.Get() == nil {
		var ret string
		return ret
	}
	return *o.Uid.Get()
}

// GetUidOk returns a tuple with the Uid field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *OrderOut) GetUidOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return o.Uid.Get(), o.Uid.IsSet()
}

// HasUid returns a boolean if a field has been set.
func (o *OrderOut) HasUid() bool {
	if o != nil && o.Uid.IsSet() {
		return true
	}

	return false
}

// SetUid gets a reference to the given NullableString and assigns it to the Uid field.
func (o *OrderOut) SetUid(v string) {
	o.Uid.Set(&v)
}
// SetUidNil sets the value for Uid to be an explicit nil
func (o *OrderOut) SetUidNil() {
	o.Uid.Set(nil)
}

// UnsetUid ensures that no value is present for Uid, not even an explicit nil
func (o *OrderOut) UnsetUid() {
	o.Uid.Unset()
}

// GetCurrency returns the Currency field value
func (o *OrderOut) GetCurrency() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Currency
}

// GetCurrencyOk returns a tuple with the Currency field value
// and a boolean to check if the value has been set.
func (o *OrderOut) GetCurrencyOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Currency, true
}

// SetCurrency sets field value
func (o *OrderOut) SetCurrency(v string) {
	o.Currency = v
}

// GetAmount returns the Amount field value
func (o *OrderOut) GetAmount() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Amount
}

// GetAmountOk returns a tuple with the Amount field value
// and a boolean to check if the value has been set.
func (o *OrderOut) GetAmountOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Amount, true
}

// SetAmount sets field value
func (o *OrderOut) SetAmount(v string) {
	o.Amount = v
}

// GetUserId returns the UserId field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *OrderOut) GetUserId() string {
	if o == nil || o.UserId.Get() == nil {
		var ret string
		return ret
	}
	return *o.UserId.Get()
}

// GetUserIdOk returns a tuple with the UserId field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *OrderOut) GetUserIdOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return o.UserId.Get(), o.UserId.IsSet()
}

// HasUserId returns a boolean if a field has been set.
func (o *OrderOut) HasUserId() bool {
	if o != nil && o.UserId.IsSet() {
		return true
	}

	return false
}

// SetUserId gets a reference to the given NullableString and assigns it to the UserId field.
func (o *OrderOut) SetUserId(v string) {
	o.UserId.Set(&v)
}
// SetUserIdNil sets the value for UserId to be an explicit nil
func (o *OrderOut) SetUserIdNil() {
	o.UserId.Set(nil)
}

// UnsetUserId ensures that no value is present for UserId, not even an explicit nil
func (o *OrderOut) UnsetUserId() {
	o.UserId.Unset()
}

// GetWalletId returns the WalletId field value if set, zero value otherwise.
func (o *OrderOut) GetWalletId() string {
	if o == nil || o.WalletId == nil {
		var ret string
		return ret
	}
	return *o.WalletId
}

// GetWalletIdOk returns a tuple with the WalletId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *OrderOut) GetWalletIdOk() (*string, bool) {
	if o == nil || o.WalletId == nil {
		return nil, false
	}
	return o.WalletId, true
}

// HasWalletId returns a boolean if a field has been set.
func (o *OrderOut) HasWalletId() bool {
	if o != nil && o.WalletId != nil {
		return true
	}

	return false
}

// SetWalletId gets a reference to the given string and assigns it to the WalletId field.
func (o *OrderOut) SetWalletId(v string) {
	o.WalletId = &v
}

// GetNote returns the Note field value if set, zero value otherwise.
func (o *OrderOut) GetNote() string {
	if o == nil || o.Note == nil {
		var ret string
		return ret
	}
	return *o.Note
}

// GetNoteOk returns a tuple with the Note field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *OrderOut) GetNoteOk() (*string, bool) {
	if o == nil || o.Note == nil {
		return nil, false
	}
	return o.Note, true
}

// HasNote returns a boolean if a field has been set.
func (o *OrderOut) HasNote() bool {
	if o != nil && o.Note != nil {
		return true
	}

	return false
}

// SetNote gets a reference to the given string and assigns it to the Note field.
func (o *OrderOut) SetNote(v string) {
	o.Note = &v
}

// GetMetadata returns the Metadata field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *OrderOut) GetMetadata() map[string]string {
	if o == nil  {
		var ret map[string]string
		return ret
	}
	return o.Metadata
}

// GetMetadataOk returns a tuple with the Metadata field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *OrderOut) GetMetadataOk() (*map[string]string, bool) {
	if o == nil || o.Metadata == nil {
		return nil, false
	}
	return &o.Metadata, true
}

// HasMetadata returns a boolean if a field has been set.
func (o *OrderOut) HasMetadata() bool {
	if o != nil && o.Metadata != nil {
		return true
	}

	return false
}

// SetMetadata gets a reference to the given map[string]string and assigns it to the Metadata field.
func (o *OrderOut) SetMetadata(v map[string]string) {
	o.Metadata = v
}

// GetExpiration returns the Expiration field value if set, zero value otherwise.
func (o *OrderOut) GetExpiration() int32 {
	if o == nil || o.Expiration == nil {
		var ret int32
		return ret
	}
	return *o.Expiration
}

// GetExpirationOk returns a tuple with the Expiration field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *OrderOut) GetExpirationOk() (*int32, bool) {
	if o == nil || o.Expiration == nil {
		return nil, false
	}
	return o.Expiration, true
}

// HasExpiration returns a boolean if a field has been set.
func (o *OrderOut) HasExpiration() bool {
	if o != nil && o.Expiration != nil {
		return true
	}

	return false
}

// SetExpiration gets a reference to the given int32 and assigns it to the Expiration field.
func (o *OrderOut) SetExpiration(v int32) {
	o.Expiration = &v
}

// GetStatus returns the Status field value
func (o *OrderOut) GetStatus() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Status
}

// GetStatusOk returns a tuple with the Status field value
// and a boolean to check if the value has been set.
func (o *OrderOut) GetStatusOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Status, true
}

// SetStatus sets field value
func (o *OrderOut) SetStatus(v string) {
	o.Status = v
}

// GetFailedMessage returns the FailedMessage field value if set, zero value otherwise.
func (o *OrderOut) GetFailedMessage() string {
	if o == nil || o.FailedMessage == nil {
		var ret string
		return ret
	}
	return *o.FailedMessage
}

// GetFailedMessageOk returns a tuple with the FailedMessage field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *OrderOut) GetFailedMessageOk() (*string, bool) {
	if o == nil || o.FailedMessage == nil {
		return nil, false
	}
	return o.FailedMessage, true
}

// HasFailedMessage returns a boolean if a field has been set.
func (o *OrderOut) HasFailedMessage() bool {
	if o != nil && o.FailedMessage != nil {
		return true
	}

	return false
}

// SetFailedMessage gets a reference to the given string and assigns it to the FailedMessage field.
func (o *OrderOut) SetFailedMessage(v string) {
	o.FailedMessage = &v
}

// GetCreatedAt returns the CreatedAt field value
func (o *OrderOut) GetCreatedAt() time.Time {
	if o == nil {
		var ret time.Time
		return ret
	}

	return o.CreatedAt
}

// GetCreatedAtOk returns a tuple with the CreatedAt field value
// and a boolean to check if the value has been set.
func (o *OrderOut) GetCreatedAtOk() (*time.Time, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.CreatedAt, true
}

// SetCreatedAt sets field value
func (o *OrderOut) SetCreatedAt(v time.Time) {
	o.CreatedAt = v
}

// GetPayedAt returns the PayedAt field value if set, zero value otherwise.
func (o *OrderOut) GetPayedAt() time.Time {
	if o == nil || o.PayedAt == nil {
		var ret time.Time
		return ret
	}
	return *o.PayedAt
}

// GetPayedAtOk returns a tuple with the PayedAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *OrderOut) GetPayedAtOk() (*time.Time, bool) {
	if o == nil || o.PayedAt == nil {
		return nil, false
	}
	return o.PayedAt, true
}

// HasPayedAt returns a boolean if a field has been set.
func (o *OrderOut) HasPayedAt() bool {
	if o != nil && o.PayedAt != nil {
		return true
	}

	return false
}

// SetPayedAt gets a reference to the given time.Time and assigns it to the PayedAt field.
func (o *OrderOut) SetPayedAt(v time.Time) {
	o.PayedAt = &v
}

// GetExpiredAt returns the ExpiredAt field value if set, zero value otherwise.
func (o *OrderOut) GetExpiredAt() time.Time {
	if o == nil || o.ExpiredAt == nil {
		var ret time.Time
		return ret
	}
	return *o.ExpiredAt
}

// GetExpiredAtOk returns a tuple with the ExpiredAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *OrderOut) GetExpiredAtOk() (*time.Time, bool) {
	if o == nil || o.ExpiredAt == nil {
		return nil, false
	}
	return o.ExpiredAt, true
}

// HasExpiredAt returns a boolean if a field has been set.
func (o *OrderOut) HasExpiredAt() bool {
	if o != nil && o.ExpiredAt != nil {
		return true
	}

	return false
}

// SetExpiredAt gets a reference to the given time.Time and assigns it to the ExpiredAt field.
func (o *OrderOut) SetExpiredAt(v time.Time) {
	o.ExpiredAt = &v
}

// GetFailedAt returns the FailedAt field value if set, zero value otherwise.
func (o *OrderOut) GetFailedAt() time.Time {
	if o == nil || o.FailedAt == nil {
		var ret time.Time
		return ret
	}
	return *o.FailedAt
}

// GetFailedAtOk returns a tuple with the FailedAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *OrderOut) GetFailedAtOk() (*time.Time, bool) {
	if o == nil || o.FailedAt == nil {
		return nil, false
	}
	return o.FailedAt, true
}

// HasFailedAt returns a boolean if a field has been set.
func (o *OrderOut) HasFailedAt() bool {
	if o != nil && o.FailedAt != nil {
		return true
	}

	return false
}

// SetFailedAt gets a reference to the given time.Time and assigns it to the FailedAt field.
func (o *OrderOut) SetFailedAt(v time.Time) {
	o.FailedAt = &v
}

func (o OrderOut) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["id"] = o.Id
	}
	if o.Uid.IsSet() {
		toSerialize["uid"] = o.Uid.Get()
	}
	if true {
		toSerialize["currency"] = o.Currency
	}
	if true {
		toSerialize["amount"] = o.Amount
	}
	if o.UserId.IsSet() {
		toSerialize["user_id"] = o.UserId.Get()
	}
	if o.WalletId != nil {
		toSerialize["wallet_id"] = o.WalletId
	}
	if o.Note != nil {
		toSerialize["note"] = o.Note
	}
	if o.Metadata != nil {
		toSerialize["metadata"] = o.Metadata
	}
	if o.Expiration != nil {
		toSerialize["expiration"] = o.Expiration
	}
	if true {
		toSerialize["status"] = o.Status
	}
	if o.FailedMessage != nil {
		toSerialize["failed_message"] = o.FailedMessage
	}
	if true {
		toSerialize["created_at"] = o.CreatedAt
	}
	if o.PayedAt != nil {
		toSerialize["payed_at"] = o.PayedAt
	}
	if o.ExpiredAt != nil {
		toSerialize["expired_at"] = o.ExpiredAt
	}
	if o.FailedAt != nil {
		toSerialize["failed_at"] = o.FailedAt
	}
	return json.Marshal(toSerialize)
}

type NullableOrderOut struct {
	value *OrderOut
	isSet bool
}

func (v NullableOrderOut) Get() *OrderOut {
	return v.value
}

func (v *NullableOrderOut) Set(val *OrderOut) {
	v.value = val
	v.isSet = true
}

func (v NullableOrderOut) IsSet() bool {
	return v.isSet
}

func (v *NullableOrderOut) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableOrderOut(val *OrderOut) *NullableOrderOut {
	return &NullableOrderOut{value: val, isSet: true}
}

func (v NullableOrderOut) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableOrderOut) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


