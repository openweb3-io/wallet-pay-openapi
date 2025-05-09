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

// Currency struct for Currency
type Currency struct {
	// Whether on-chain deposits are allowed
	CanDeposit bool `json:"can_deposit"`
	// Whether internal transfers are allowed
	CanTransfer bool `json:"can_transfer"`
	// Whether on-chain withdrawals are allowed
	CanWithdraw bool `json:"can_withdraw"`
	// Currency code identifier
	Code string `json:"code"`
	// Contract address
	ContractAddress *string `json:"contract_address,omitempty"`
	// Decimal precision
	Decimals int32 `json:"decimals"`
	// Logo URL
	Logo string `json:"logo"`
	// Maximum fee
	MaxFee string `json:"max_fee"`
	// Maximum fee for contract address
	MaxFeeForCtAddr string `json:"max_fee_for_ct_addr"`
	// Maximum on-chain withdrawal amount per transaction
	MaxWithdrawAmount string `json:"max_withdraw_amount"`
	// Minimum deposit amount per transaction
	MinDepositAmount string `json:"min_deposit_amount"`
	// Minimum fee
	MinFee string `json:"min_fee"`
	// Minimum fee for contract address
	MinFeeForCtAddr string `json:"min_fee_for_ct_addr"`
	// Minimum on-chain withdrawal amount per transaction
	MinWithdrawAmount string `json:"min_withdraw_amount"`
	// Currency name
	Name string `json:"name"`
	// Whether memo is required
	NeedMemo bool `json:"need_memo"`
	// Currency networks information
	Networks []CurrencyNetwork `json:"networks,omitempty"`
	// Number of decimal places
	Precision int32 `json:"precision"`
	// Whether it participates in exchange rate calculations
	Rated bool `json:"rated"`
	// Currency symbol
	Symbol string `json:"symbol"`
}

// NewCurrency instantiates a new Currency object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCurrency(canDeposit bool, canTransfer bool, canWithdraw bool, code string, decimals int32, logo string, maxFee string, maxFeeForCtAddr string, maxWithdrawAmount string, minDepositAmount string, minFee string, minFeeForCtAddr string, minWithdrawAmount string, name string, needMemo bool, precision int32, rated bool, symbol string) *Currency {
	this := Currency{}
	this.CanDeposit = canDeposit
	this.CanTransfer = canTransfer
	this.CanWithdraw = canWithdraw
	this.Code = code
	this.Decimals = decimals
	this.Logo = logo
	this.MaxFee = maxFee
	this.MaxFeeForCtAddr = maxFeeForCtAddr
	this.MaxWithdrawAmount = maxWithdrawAmount
	this.MinDepositAmount = minDepositAmount
	this.MinFee = minFee
	this.MinFeeForCtAddr = minFeeForCtAddr
	this.MinWithdrawAmount = minWithdrawAmount
	this.Name = name
	this.NeedMemo = needMemo
	this.Precision = precision
	this.Rated = rated
	this.Symbol = symbol
	return &this
}

// NewCurrencyWithDefaults instantiates a new Currency object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCurrencyWithDefaults() *Currency {
	this := Currency{}
	return &this
}

// GetCanDeposit returns the CanDeposit field value
func (o *Currency) GetCanDeposit() bool {
	if o == nil {
		var ret bool
		return ret
	}

	return o.CanDeposit
}

// GetCanDepositOk returns a tuple with the CanDeposit field value
// and a boolean to check if the value has been set.
func (o *Currency) GetCanDepositOk() (*bool, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.CanDeposit, true
}

// SetCanDeposit sets field value
func (o *Currency) SetCanDeposit(v bool) {
	o.CanDeposit = v
}

// GetCanTransfer returns the CanTransfer field value
func (o *Currency) GetCanTransfer() bool {
	if o == nil {
		var ret bool
		return ret
	}

	return o.CanTransfer
}

// GetCanTransferOk returns a tuple with the CanTransfer field value
// and a boolean to check if the value has been set.
func (o *Currency) GetCanTransferOk() (*bool, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.CanTransfer, true
}

// SetCanTransfer sets field value
func (o *Currency) SetCanTransfer(v bool) {
	o.CanTransfer = v
}

// GetCanWithdraw returns the CanWithdraw field value
func (o *Currency) GetCanWithdraw() bool {
	if o == nil {
		var ret bool
		return ret
	}

	return o.CanWithdraw
}

// GetCanWithdrawOk returns a tuple with the CanWithdraw field value
// and a boolean to check if the value has been set.
func (o *Currency) GetCanWithdrawOk() (*bool, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.CanWithdraw, true
}

// SetCanWithdraw sets field value
func (o *Currency) SetCanWithdraw(v bool) {
	o.CanWithdraw = v
}

// GetCode returns the Code field value
func (o *Currency) GetCode() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Code
}

// GetCodeOk returns a tuple with the Code field value
// and a boolean to check if the value has been set.
func (o *Currency) GetCodeOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Code, true
}

// SetCode sets field value
func (o *Currency) SetCode(v string) {
	o.Code = v
}

// GetContractAddress returns the ContractAddress field value if set, zero value otherwise.
func (o *Currency) GetContractAddress() string {
	if o == nil || o.ContractAddress == nil {
		var ret string
		return ret
	}
	return *o.ContractAddress
}

// GetContractAddressOk returns a tuple with the ContractAddress field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Currency) GetContractAddressOk() (*string, bool) {
	if o == nil || o.ContractAddress == nil {
		return nil, false
	}
	return o.ContractAddress, true
}

// HasContractAddress returns a boolean if a field has been set.
func (o *Currency) HasContractAddress() bool {
	if o != nil && o.ContractAddress != nil {
		return true
	}

	return false
}

// SetContractAddress gets a reference to the given string and assigns it to the ContractAddress field.
func (o *Currency) SetContractAddress(v string) {
	o.ContractAddress = &v
}

// GetDecimals returns the Decimals field value
func (o *Currency) GetDecimals() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Decimals
}

// GetDecimalsOk returns a tuple with the Decimals field value
// and a boolean to check if the value has been set.
func (o *Currency) GetDecimalsOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Decimals, true
}

// SetDecimals sets field value
func (o *Currency) SetDecimals(v int32) {
	o.Decimals = v
}

// GetLogo returns the Logo field value
func (o *Currency) GetLogo() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Logo
}

// GetLogoOk returns a tuple with the Logo field value
// and a boolean to check if the value has been set.
func (o *Currency) GetLogoOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Logo, true
}

// SetLogo sets field value
func (o *Currency) SetLogo(v string) {
	o.Logo = v
}

// GetMaxFee returns the MaxFee field value
func (o *Currency) GetMaxFee() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.MaxFee
}

// GetMaxFeeOk returns a tuple with the MaxFee field value
// and a boolean to check if the value has been set.
func (o *Currency) GetMaxFeeOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.MaxFee, true
}

// SetMaxFee sets field value
func (o *Currency) SetMaxFee(v string) {
	o.MaxFee = v
}

// GetMaxFeeForCtAddr returns the MaxFeeForCtAddr field value
func (o *Currency) GetMaxFeeForCtAddr() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.MaxFeeForCtAddr
}

// GetMaxFeeForCtAddrOk returns a tuple with the MaxFeeForCtAddr field value
// and a boolean to check if the value has been set.
func (o *Currency) GetMaxFeeForCtAddrOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.MaxFeeForCtAddr, true
}

// SetMaxFeeForCtAddr sets field value
func (o *Currency) SetMaxFeeForCtAddr(v string) {
	o.MaxFeeForCtAddr = v
}

// GetMaxWithdrawAmount returns the MaxWithdrawAmount field value
func (o *Currency) GetMaxWithdrawAmount() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.MaxWithdrawAmount
}

// GetMaxWithdrawAmountOk returns a tuple with the MaxWithdrawAmount field value
// and a boolean to check if the value has been set.
func (o *Currency) GetMaxWithdrawAmountOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.MaxWithdrawAmount, true
}

// SetMaxWithdrawAmount sets field value
func (o *Currency) SetMaxWithdrawAmount(v string) {
	o.MaxWithdrawAmount = v
}

// GetMinDepositAmount returns the MinDepositAmount field value
func (o *Currency) GetMinDepositAmount() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.MinDepositAmount
}

// GetMinDepositAmountOk returns a tuple with the MinDepositAmount field value
// and a boolean to check if the value has been set.
func (o *Currency) GetMinDepositAmountOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.MinDepositAmount, true
}

// SetMinDepositAmount sets field value
func (o *Currency) SetMinDepositAmount(v string) {
	o.MinDepositAmount = v
}

// GetMinFee returns the MinFee field value
func (o *Currency) GetMinFee() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.MinFee
}

// GetMinFeeOk returns a tuple with the MinFee field value
// and a boolean to check if the value has been set.
func (o *Currency) GetMinFeeOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.MinFee, true
}

// SetMinFee sets field value
func (o *Currency) SetMinFee(v string) {
	o.MinFee = v
}

// GetMinFeeForCtAddr returns the MinFeeForCtAddr field value
func (o *Currency) GetMinFeeForCtAddr() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.MinFeeForCtAddr
}

// GetMinFeeForCtAddrOk returns a tuple with the MinFeeForCtAddr field value
// and a boolean to check if the value has been set.
func (o *Currency) GetMinFeeForCtAddrOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.MinFeeForCtAddr, true
}

// SetMinFeeForCtAddr sets field value
func (o *Currency) SetMinFeeForCtAddr(v string) {
	o.MinFeeForCtAddr = v
}

// GetMinWithdrawAmount returns the MinWithdrawAmount field value
func (o *Currency) GetMinWithdrawAmount() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.MinWithdrawAmount
}

// GetMinWithdrawAmountOk returns a tuple with the MinWithdrawAmount field value
// and a boolean to check if the value has been set.
func (o *Currency) GetMinWithdrawAmountOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.MinWithdrawAmount, true
}

// SetMinWithdrawAmount sets field value
func (o *Currency) SetMinWithdrawAmount(v string) {
	o.MinWithdrawAmount = v
}

// GetName returns the Name field value
func (o *Currency) GetName() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Name
}

// GetNameOk returns a tuple with the Name field value
// and a boolean to check if the value has been set.
func (o *Currency) GetNameOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Name, true
}

// SetName sets field value
func (o *Currency) SetName(v string) {
	o.Name = v
}

// GetNeedMemo returns the NeedMemo field value
func (o *Currency) GetNeedMemo() bool {
	if o == nil {
		var ret bool
		return ret
	}

	return o.NeedMemo
}

// GetNeedMemoOk returns a tuple with the NeedMemo field value
// and a boolean to check if the value has been set.
func (o *Currency) GetNeedMemoOk() (*bool, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.NeedMemo, true
}

// SetNeedMemo sets field value
func (o *Currency) SetNeedMemo(v bool) {
	o.NeedMemo = v
}

// GetNetworks returns the Networks field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *Currency) GetNetworks() []CurrencyNetwork {
	if o == nil  {
		var ret []CurrencyNetwork
		return ret
	}
	return o.Networks
}

// GetNetworksOk returns a tuple with the Networks field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *Currency) GetNetworksOk() (*[]CurrencyNetwork, bool) {
	if o == nil || o.Networks == nil {
		return nil, false
	}
	return &o.Networks, true
}

// HasNetworks returns a boolean if a field has been set.
func (o *Currency) HasNetworks() bool {
	if o != nil && o.Networks != nil {
		return true
	}

	return false
}

// SetNetworks gets a reference to the given []CurrencyNetwork and assigns it to the Networks field.
func (o *Currency) SetNetworks(v []CurrencyNetwork) {
	o.Networks = v
}

// GetPrecision returns the Precision field value
func (o *Currency) GetPrecision() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Precision
}

// GetPrecisionOk returns a tuple with the Precision field value
// and a boolean to check if the value has been set.
func (o *Currency) GetPrecisionOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Precision, true
}

// SetPrecision sets field value
func (o *Currency) SetPrecision(v int32) {
	o.Precision = v
}

// GetRated returns the Rated field value
func (o *Currency) GetRated() bool {
	if o == nil {
		var ret bool
		return ret
	}

	return o.Rated
}

// GetRatedOk returns a tuple with the Rated field value
// and a boolean to check if the value has been set.
func (o *Currency) GetRatedOk() (*bool, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Rated, true
}

// SetRated sets field value
func (o *Currency) SetRated(v bool) {
	o.Rated = v
}

// GetSymbol returns the Symbol field value
func (o *Currency) GetSymbol() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Symbol
}

// GetSymbolOk returns a tuple with the Symbol field value
// and a boolean to check if the value has been set.
func (o *Currency) GetSymbolOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Symbol, true
}

// SetSymbol sets field value
func (o *Currency) SetSymbol(v string) {
	o.Symbol = v
}

func (o Currency) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["can_deposit"] = o.CanDeposit
	}
	if true {
		toSerialize["can_transfer"] = o.CanTransfer
	}
	if true {
		toSerialize["can_withdraw"] = o.CanWithdraw
	}
	if true {
		toSerialize["code"] = o.Code
	}
	if o.ContractAddress != nil {
		toSerialize["contract_address"] = o.ContractAddress
	}
	if true {
		toSerialize["decimals"] = o.Decimals
	}
	if true {
		toSerialize["logo"] = o.Logo
	}
	if true {
		toSerialize["max_fee"] = o.MaxFee
	}
	if true {
		toSerialize["max_fee_for_ct_addr"] = o.MaxFeeForCtAddr
	}
	if true {
		toSerialize["max_withdraw_amount"] = o.MaxWithdrawAmount
	}
	if true {
		toSerialize["min_deposit_amount"] = o.MinDepositAmount
	}
	if true {
		toSerialize["min_fee"] = o.MinFee
	}
	if true {
		toSerialize["min_fee_for_ct_addr"] = o.MinFeeForCtAddr
	}
	if true {
		toSerialize["min_withdraw_amount"] = o.MinWithdrawAmount
	}
	if true {
		toSerialize["name"] = o.Name
	}
	if true {
		toSerialize["need_memo"] = o.NeedMemo
	}
	if o.Networks != nil {
		toSerialize["networks"] = o.Networks
	}
	if true {
		toSerialize["precision"] = o.Precision
	}
	if true {
		toSerialize["rated"] = o.Rated
	}
	if true {
		toSerialize["symbol"] = o.Symbol
	}
	return json.Marshal(toSerialize)
}

type NullableCurrency struct {
	value *Currency
	isSet bool
}

func (v NullableCurrency) Get() *Currency {
	return v.value
}

func (v *NullableCurrency) Set(val *Currency) {
	v.value = val
	v.isSet = true
}

func (v NullableCurrency) IsSet() bool {
	return v.isSet
}

func (v *NullableCurrency) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCurrency(val *Currency) *NullableCurrency {
	return &NullableCurrency{value: val, isSet: true}
}

func (v NullableCurrency) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCurrency) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


