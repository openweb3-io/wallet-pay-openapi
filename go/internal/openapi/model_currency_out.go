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

// CurrencyOut struct for CurrencyOut
type CurrencyOut struct {
	// Optional unique identifier for the order
	Id string `json:"id"`
	// Currency code
	Code string `json:"code"`
	// Currency symbol
	Symbol string `json:"symbol"`
	// Currency logo url
	Logo string `json:"logo"`
	// Currency name
	Name string `json:"name"`
	// Is it posible to deposit on blockchain
	CanDeposit bool `json:"can_deposit"`
	// Is it posible to withdraw to blockchain
	CanWithdraw bool `json:"can_withdraw"`
	// Is it posible to transfer in custody wallet
	CanTransfer bool `json:"can_transfer"`
	// Big decimal string representation. The min amount to deposit.
	MinDepositAmount string `json:"min_deposit_amount"`
	// Big decimal string representation. The min amount to withdraw.
	MinWithdrawAmount string `json:"min_withdraw_amount"`
	// Big decimal string representation. The max amount to withdraw.
	MaxWithdrawAmount string `json:"max_withdraw_amount"`
	// Currency precision
	Precision int32 `json:"precision"`
	// Currency decimal
	Decimals int32 `json:"decimals"`
}

// NewCurrencyOut instantiates a new CurrencyOut object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCurrencyOut(id string, code string, symbol string, logo string, name string, canDeposit bool, canWithdraw bool, canTransfer bool, minDepositAmount string, minWithdrawAmount string, maxWithdrawAmount string, precision int32, decimals int32) *CurrencyOut {
	this := CurrencyOut{}
	this.Id = id
	this.Code = code
	this.Symbol = symbol
	this.Logo = logo
	this.Name = name
	this.CanDeposit = canDeposit
	this.CanWithdraw = canWithdraw
	this.CanTransfer = canTransfer
	this.MinDepositAmount = minDepositAmount
	this.MinWithdrawAmount = minWithdrawAmount
	this.MaxWithdrawAmount = maxWithdrawAmount
	this.Precision = precision
	this.Decimals = decimals
	return &this
}

// NewCurrencyOutWithDefaults instantiates a new CurrencyOut object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCurrencyOutWithDefaults() *CurrencyOut {
	this := CurrencyOut{}
	return &this
}

// GetId returns the Id field value
func (o *CurrencyOut) GetId() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Id
}

// GetIdOk returns a tuple with the Id field value
// and a boolean to check if the value has been set.
func (o *CurrencyOut) GetIdOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Id, true
}

// SetId sets field value
func (o *CurrencyOut) SetId(v string) {
	o.Id = v
}

// GetCode returns the Code field value
func (o *CurrencyOut) GetCode() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Code
}

// GetCodeOk returns a tuple with the Code field value
// and a boolean to check if the value has been set.
func (o *CurrencyOut) GetCodeOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Code, true
}

// SetCode sets field value
func (o *CurrencyOut) SetCode(v string) {
	o.Code = v
}

// GetSymbol returns the Symbol field value
func (o *CurrencyOut) GetSymbol() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Symbol
}

// GetSymbolOk returns a tuple with the Symbol field value
// and a boolean to check if the value has been set.
func (o *CurrencyOut) GetSymbolOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Symbol, true
}

// SetSymbol sets field value
func (o *CurrencyOut) SetSymbol(v string) {
	o.Symbol = v
}

// GetLogo returns the Logo field value
func (o *CurrencyOut) GetLogo() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Logo
}

// GetLogoOk returns a tuple with the Logo field value
// and a boolean to check if the value has been set.
func (o *CurrencyOut) GetLogoOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Logo, true
}

// SetLogo sets field value
func (o *CurrencyOut) SetLogo(v string) {
	o.Logo = v
}

// GetName returns the Name field value
func (o *CurrencyOut) GetName() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Name
}

// GetNameOk returns a tuple with the Name field value
// and a boolean to check if the value has been set.
func (o *CurrencyOut) GetNameOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Name, true
}

// SetName sets field value
func (o *CurrencyOut) SetName(v string) {
	o.Name = v
}

// GetCanDeposit returns the CanDeposit field value
func (o *CurrencyOut) GetCanDeposit() bool {
	if o == nil {
		var ret bool
		return ret
	}

	return o.CanDeposit
}

// GetCanDepositOk returns a tuple with the CanDeposit field value
// and a boolean to check if the value has been set.
func (o *CurrencyOut) GetCanDepositOk() (*bool, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.CanDeposit, true
}

// SetCanDeposit sets field value
func (o *CurrencyOut) SetCanDeposit(v bool) {
	o.CanDeposit = v
}

// GetCanWithdraw returns the CanWithdraw field value
func (o *CurrencyOut) GetCanWithdraw() bool {
	if o == nil {
		var ret bool
		return ret
	}

	return o.CanWithdraw
}

// GetCanWithdrawOk returns a tuple with the CanWithdraw field value
// and a boolean to check if the value has been set.
func (o *CurrencyOut) GetCanWithdrawOk() (*bool, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.CanWithdraw, true
}

// SetCanWithdraw sets field value
func (o *CurrencyOut) SetCanWithdraw(v bool) {
	o.CanWithdraw = v
}

// GetCanTransfer returns the CanTransfer field value
func (o *CurrencyOut) GetCanTransfer() bool {
	if o == nil {
		var ret bool
		return ret
	}

	return o.CanTransfer
}

// GetCanTransferOk returns a tuple with the CanTransfer field value
// and a boolean to check if the value has been set.
func (o *CurrencyOut) GetCanTransferOk() (*bool, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.CanTransfer, true
}

// SetCanTransfer sets field value
func (o *CurrencyOut) SetCanTransfer(v bool) {
	o.CanTransfer = v
}

// GetMinDepositAmount returns the MinDepositAmount field value
func (o *CurrencyOut) GetMinDepositAmount() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.MinDepositAmount
}

// GetMinDepositAmountOk returns a tuple with the MinDepositAmount field value
// and a boolean to check if the value has been set.
func (o *CurrencyOut) GetMinDepositAmountOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.MinDepositAmount, true
}

// SetMinDepositAmount sets field value
func (o *CurrencyOut) SetMinDepositAmount(v string) {
	o.MinDepositAmount = v
}

// GetMinWithdrawAmount returns the MinWithdrawAmount field value
func (o *CurrencyOut) GetMinWithdrawAmount() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.MinWithdrawAmount
}

// GetMinWithdrawAmountOk returns a tuple with the MinWithdrawAmount field value
// and a boolean to check if the value has been set.
func (o *CurrencyOut) GetMinWithdrawAmountOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.MinWithdrawAmount, true
}

// SetMinWithdrawAmount sets field value
func (o *CurrencyOut) SetMinWithdrawAmount(v string) {
	o.MinWithdrawAmount = v
}

// GetMaxWithdrawAmount returns the MaxWithdrawAmount field value
func (o *CurrencyOut) GetMaxWithdrawAmount() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.MaxWithdrawAmount
}

// GetMaxWithdrawAmountOk returns a tuple with the MaxWithdrawAmount field value
// and a boolean to check if the value has been set.
func (o *CurrencyOut) GetMaxWithdrawAmountOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.MaxWithdrawAmount, true
}

// SetMaxWithdrawAmount sets field value
func (o *CurrencyOut) SetMaxWithdrawAmount(v string) {
	o.MaxWithdrawAmount = v
}

// GetPrecision returns the Precision field value
func (o *CurrencyOut) GetPrecision() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Precision
}

// GetPrecisionOk returns a tuple with the Precision field value
// and a boolean to check if the value has been set.
func (o *CurrencyOut) GetPrecisionOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Precision, true
}

// SetPrecision sets field value
func (o *CurrencyOut) SetPrecision(v int32) {
	o.Precision = v
}

// GetDecimals returns the Decimals field value
func (o *CurrencyOut) GetDecimals() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Decimals
}

// GetDecimalsOk returns a tuple with the Decimals field value
// and a boolean to check if the value has been set.
func (o *CurrencyOut) GetDecimalsOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Decimals, true
}

// SetDecimals sets field value
func (o *CurrencyOut) SetDecimals(v int32) {
	o.Decimals = v
}

func (o CurrencyOut) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["id"] = o.Id
	}
	if true {
		toSerialize["code"] = o.Code
	}
	if true {
		toSerialize["symbol"] = o.Symbol
	}
	if true {
		toSerialize["logo"] = o.Logo
	}
	if true {
		toSerialize["name"] = o.Name
	}
	if true {
		toSerialize["can_deposit"] = o.CanDeposit
	}
	if true {
		toSerialize["can_withdraw"] = o.CanWithdraw
	}
	if true {
		toSerialize["can_transfer"] = o.CanTransfer
	}
	if true {
		toSerialize["min_deposit_amount"] = o.MinDepositAmount
	}
	if true {
		toSerialize["min_withdraw_amount"] = o.MinWithdrawAmount
	}
	if true {
		toSerialize["max_withdraw_amount"] = o.MaxWithdrawAmount
	}
	if true {
		toSerialize["precision"] = o.Precision
	}
	if true {
		toSerialize["decimals"] = o.Decimals
	}
	return json.Marshal(toSerialize)
}

type NullableCurrencyOut struct {
	value *CurrencyOut
	isSet bool
}

func (v NullableCurrencyOut) Get() *CurrencyOut {
	return v.value
}

func (v *NullableCurrencyOut) Set(val *CurrencyOut) {
	v.value = val
	v.isSet = true
}

func (v NullableCurrencyOut) IsSet() bool {
	return v.isSet
}

func (v *NullableCurrencyOut) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCurrencyOut(val *CurrencyOut) *NullableCurrencyOut {
	return &NullableCurrencyOut{value: val, isSet: true}
}

func (v NullableCurrencyOut) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCurrencyOut) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

