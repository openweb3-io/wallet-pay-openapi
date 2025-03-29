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

// CurrencyNetwork struct for CurrencyNetwork
type CurrencyNetwork struct {
	// Whether deposits are enabled for this network
	CanDeposit bool `json:"can_deposit"`
	// Whether transfers are enabled for this network
	CanTransfer bool `json:"can_transfer"`
	// Whether withdrawals are enabled for this network
	CanWithdraw bool `json:"can_withdraw"`
	// Associated with Currency by code
	Code string `json:"code"`
	// Smart contract address for token (if applicable)
	ContractAddress *string `json:"contract_address,omitempty"`
	// Unique identifier for the currency network
	Id string `json:"id"`
	// Maximum transaction fee
	MaxFee string `json:"max_fee"`
	// Maximum fee for contract address transactions
	MaxFeeForCtAddr string `json:"max_fee_for_ct_addr"`
	// Maximum on-chain withdrawal amount per transaction
	MaxWithdrawAmount string `json:"max_withdraw_amount"`
	// Minimum collection amount
	MinCollectAmount *string `json:"min_collect_amount,omitempty"`
	// Required number of confirmations for transactions
	MinConfirmations int32 `json:"min_confirmations"`
	// Minimum deposit amount per transaction
	MinDepositAmount string `json:"min_deposit_amount"`
	// Minimum transaction fee
	MinFee string `json:"min_fee"`
	// Minimum fee for contract address transactions
	MinFeeForCtAddr string `json:"min_fee_for_ct_addr"`
	// Minimum on-chain withdrawal amount per transaction
	MinWithdrawAmount string `json:"min_withdraw_amount"`
	// Display name of the network
	Name string `json:"name"`
	// Whether memo/tag is required for transactions
	NeedMemo bool `json:"need_memo"`
	// Network identifier (e.g., ETH, BTC)
	Network string `json:"network"`
}

// NewCurrencyNetwork instantiates a new CurrencyNetwork object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCurrencyNetwork(canDeposit bool, canTransfer bool, canWithdraw bool, code string, id string, maxFee string, maxFeeForCtAddr string, maxWithdrawAmount string, minConfirmations int32, minDepositAmount string, minFee string, minFeeForCtAddr string, minWithdrawAmount string, name string, needMemo bool, network string) *CurrencyNetwork {
	this := CurrencyNetwork{}
	this.CanDeposit = canDeposit
	this.CanTransfer = canTransfer
	this.CanWithdraw = canWithdraw
	this.Code = code
	this.Id = id
	this.MaxFee = maxFee
	this.MaxFeeForCtAddr = maxFeeForCtAddr
	this.MaxWithdrawAmount = maxWithdrawAmount
	this.MinConfirmations = minConfirmations
	this.MinDepositAmount = minDepositAmount
	this.MinFee = minFee
	this.MinFeeForCtAddr = minFeeForCtAddr
	this.MinWithdrawAmount = minWithdrawAmount
	this.Name = name
	this.NeedMemo = needMemo
	this.Network = network
	return &this
}

// NewCurrencyNetworkWithDefaults instantiates a new CurrencyNetwork object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCurrencyNetworkWithDefaults() *CurrencyNetwork {
	this := CurrencyNetwork{}
	return &this
}

// GetCanDeposit returns the CanDeposit field value
func (o *CurrencyNetwork) GetCanDeposit() bool {
	if o == nil {
		var ret bool
		return ret
	}

	return o.CanDeposit
}

// GetCanDepositOk returns a tuple with the CanDeposit field value
// and a boolean to check if the value has been set.
func (o *CurrencyNetwork) GetCanDepositOk() (*bool, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.CanDeposit, true
}

// SetCanDeposit sets field value
func (o *CurrencyNetwork) SetCanDeposit(v bool) {
	o.CanDeposit = v
}

// GetCanTransfer returns the CanTransfer field value
func (o *CurrencyNetwork) GetCanTransfer() bool {
	if o == nil {
		var ret bool
		return ret
	}

	return o.CanTransfer
}

// GetCanTransferOk returns a tuple with the CanTransfer field value
// and a boolean to check if the value has been set.
func (o *CurrencyNetwork) GetCanTransferOk() (*bool, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.CanTransfer, true
}

// SetCanTransfer sets field value
func (o *CurrencyNetwork) SetCanTransfer(v bool) {
	o.CanTransfer = v
}

// GetCanWithdraw returns the CanWithdraw field value
func (o *CurrencyNetwork) GetCanWithdraw() bool {
	if o == nil {
		var ret bool
		return ret
	}

	return o.CanWithdraw
}

// GetCanWithdrawOk returns a tuple with the CanWithdraw field value
// and a boolean to check if the value has been set.
func (o *CurrencyNetwork) GetCanWithdrawOk() (*bool, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.CanWithdraw, true
}

// SetCanWithdraw sets field value
func (o *CurrencyNetwork) SetCanWithdraw(v bool) {
	o.CanWithdraw = v
}

// GetCode returns the Code field value
func (o *CurrencyNetwork) GetCode() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Code
}

// GetCodeOk returns a tuple with the Code field value
// and a boolean to check if the value has been set.
func (o *CurrencyNetwork) GetCodeOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Code, true
}

// SetCode sets field value
func (o *CurrencyNetwork) SetCode(v string) {
	o.Code = v
}

// GetContractAddress returns the ContractAddress field value if set, zero value otherwise.
func (o *CurrencyNetwork) GetContractAddress() string {
	if o == nil || o.ContractAddress == nil {
		var ret string
		return ret
	}
	return *o.ContractAddress
}

// GetContractAddressOk returns a tuple with the ContractAddress field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CurrencyNetwork) GetContractAddressOk() (*string, bool) {
	if o == nil || o.ContractAddress == nil {
		return nil, false
	}
	return o.ContractAddress, true
}

// HasContractAddress returns a boolean if a field has been set.
func (o *CurrencyNetwork) HasContractAddress() bool {
	if o != nil && o.ContractAddress != nil {
		return true
	}

	return false
}

// SetContractAddress gets a reference to the given string and assigns it to the ContractAddress field.
func (o *CurrencyNetwork) SetContractAddress(v string) {
	o.ContractAddress = &v
}

// GetId returns the Id field value
func (o *CurrencyNetwork) GetId() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Id
}

// GetIdOk returns a tuple with the Id field value
// and a boolean to check if the value has been set.
func (o *CurrencyNetwork) GetIdOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Id, true
}

// SetId sets field value
func (o *CurrencyNetwork) SetId(v string) {
	o.Id = v
}

// GetMaxFee returns the MaxFee field value
func (o *CurrencyNetwork) GetMaxFee() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.MaxFee
}

// GetMaxFeeOk returns a tuple with the MaxFee field value
// and a boolean to check if the value has been set.
func (o *CurrencyNetwork) GetMaxFeeOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.MaxFee, true
}

// SetMaxFee sets field value
func (o *CurrencyNetwork) SetMaxFee(v string) {
	o.MaxFee = v
}

// GetMaxFeeForCtAddr returns the MaxFeeForCtAddr field value
func (o *CurrencyNetwork) GetMaxFeeForCtAddr() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.MaxFeeForCtAddr
}

// GetMaxFeeForCtAddrOk returns a tuple with the MaxFeeForCtAddr field value
// and a boolean to check if the value has been set.
func (o *CurrencyNetwork) GetMaxFeeForCtAddrOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.MaxFeeForCtAddr, true
}

// SetMaxFeeForCtAddr sets field value
func (o *CurrencyNetwork) SetMaxFeeForCtAddr(v string) {
	o.MaxFeeForCtAddr = v
}

// GetMaxWithdrawAmount returns the MaxWithdrawAmount field value
func (o *CurrencyNetwork) GetMaxWithdrawAmount() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.MaxWithdrawAmount
}

// GetMaxWithdrawAmountOk returns a tuple with the MaxWithdrawAmount field value
// and a boolean to check if the value has been set.
func (o *CurrencyNetwork) GetMaxWithdrawAmountOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.MaxWithdrawAmount, true
}

// SetMaxWithdrawAmount sets field value
func (o *CurrencyNetwork) SetMaxWithdrawAmount(v string) {
	o.MaxWithdrawAmount = v
}

// GetMinCollectAmount returns the MinCollectAmount field value if set, zero value otherwise.
func (o *CurrencyNetwork) GetMinCollectAmount() string {
	if o == nil || o.MinCollectAmount == nil {
		var ret string
		return ret
	}
	return *o.MinCollectAmount
}

// GetMinCollectAmountOk returns a tuple with the MinCollectAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CurrencyNetwork) GetMinCollectAmountOk() (*string, bool) {
	if o == nil || o.MinCollectAmount == nil {
		return nil, false
	}
	return o.MinCollectAmount, true
}

// HasMinCollectAmount returns a boolean if a field has been set.
func (o *CurrencyNetwork) HasMinCollectAmount() bool {
	if o != nil && o.MinCollectAmount != nil {
		return true
	}

	return false
}

// SetMinCollectAmount gets a reference to the given string and assigns it to the MinCollectAmount field.
func (o *CurrencyNetwork) SetMinCollectAmount(v string) {
	o.MinCollectAmount = &v
}

// GetMinConfirmations returns the MinConfirmations field value
func (o *CurrencyNetwork) GetMinConfirmations() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.MinConfirmations
}

// GetMinConfirmationsOk returns a tuple with the MinConfirmations field value
// and a boolean to check if the value has been set.
func (o *CurrencyNetwork) GetMinConfirmationsOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.MinConfirmations, true
}

// SetMinConfirmations sets field value
func (o *CurrencyNetwork) SetMinConfirmations(v int32) {
	o.MinConfirmations = v
}

// GetMinDepositAmount returns the MinDepositAmount field value
func (o *CurrencyNetwork) GetMinDepositAmount() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.MinDepositAmount
}

// GetMinDepositAmountOk returns a tuple with the MinDepositAmount field value
// and a boolean to check if the value has been set.
func (o *CurrencyNetwork) GetMinDepositAmountOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.MinDepositAmount, true
}

// SetMinDepositAmount sets field value
func (o *CurrencyNetwork) SetMinDepositAmount(v string) {
	o.MinDepositAmount = v
}

// GetMinFee returns the MinFee field value
func (o *CurrencyNetwork) GetMinFee() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.MinFee
}

// GetMinFeeOk returns a tuple with the MinFee field value
// and a boolean to check if the value has been set.
func (o *CurrencyNetwork) GetMinFeeOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.MinFee, true
}

// SetMinFee sets field value
func (o *CurrencyNetwork) SetMinFee(v string) {
	o.MinFee = v
}

// GetMinFeeForCtAddr returns the MinFeeForCtAddr field value
func (o *CurrencyNetwork) GetMinFeeForCtAddr() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.MinFeeForCtAddr
}

// GetMinFeeForCtAddrOk returns a tuple with the MinFeeForCtAddr field value
// and a boolean to check if the value has been set.
func (o *CurrencyNetwork) GetMinFeeForCtAddrOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.MinFeeForCtAddr, true
}

// SetMinFeeForCtAddr sets field value
func (o *CurrencyNetwork) SetMinFeeForCtAddr(v string) {
	o.MinFeeForCtAddr = v
}

// GetMinWithdrawAmount returns the MinWithdrawAmount field value
func (o *CurrencyNetwork) GetMinWithdrawAmount() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.MinWithdrawAmount
}

// GetMinWithdrawAmountOk returns a tuple with the MinWithdrawAmount field value
// and a boolean to check if the value has been set.
func (o *CurrencyNetwork) GetMinWithdrawAmountOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.MinWithdrawAmount, true
}

// SetMinWithdrawAmount sets field value
func (o *CurrencyNetwork) SetMinWithdrawAmount(v string) {
	o.MinWithdrawAmount = v
}

// GetName returns the Name field value
func (o *CurrencyNetwork) GetName() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Name
}

// GetNameOk returns a tuple with the Name field value
// and a boolean to check if the value has been set.
func (o *CurrencyNetwork) GetNameOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Name, true
}

// SetName sets field value
func (o *CurrencyNetwork) SetName(v string) {
	o.Name = v
}

// GetNeedMemo returns the NeedMemo field value
func (o *CurrencyNetwork) GetNeedMemo() bool {
	if o == nil {
		var ret bool
		return ret
	}

	return o.NeedMemo
}

// GetNeedMemoOk returns a tuple with the NeedMemo field value
// and a boolean to check if the value has been set.
func (o *CurrencyNetwork) GetNeedMemoOk() (*bool, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.NeedMemo, true
}

// SetNeedMemo sets field value
func (o *CurrencyNetwork) SetNeedMemo(v bool) {
	o.NeedMemo = v
}

// GetNetwork returns the Network field value
func (o *CurrencyNetwork) GetNetwork() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Network
}

// GetNetworkOk returns a tuple with the Network field value
// and a boolean to check if the value has been set.
func (o *CurrencyNetwork) GetNetworkOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Network, true
}

// SetNetwork sets field value
func (o *CurrencyNetwork) SetNetwork(v string) {
	o.Network = v
}

func (o CurrencyNetwork) MarshalJSON() ([]byte, error) {
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
		toSerialize["id"] = o.Id
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
	if o.MinCollectAmount != nil {
		toSerialize["min_collect_amount"] = o.MinCollectAmount
	}
	if true {
		toSerialize["min_confirmations"] = o.MinConfirmations
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
	if true {
		toSerialize["network"] = o.Network
	}
	return json.Marshal(toSerialize)
}

type NullableCurrencyNetwork struct {
	value *CurrencyNetwork
	isSet bool
}

func (v NullableCurrencyNetwork) Get() *CurrencyNetwork {
	return v.value
}

func (v *NullableCurrencyNetwork) Set(val *CurrencyNetwork) {
	v.value = val
	v.isSet = true
}

func (v NullableCurrencyNetwork) IsSet() bool {
	return v.isSet
}

func (v *NullableCurrencyNetwork) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCurrencyNetwork(val *CurrencyNetwork) *NullableCurrencyNetwork {
	return &NullableCurrencyNetwork{value: val, isSet: true}
}

func (v NullableCurrencyNetwork) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCurrencyNetwork) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


