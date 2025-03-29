# Currency

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CanDeposit** | **bool** | Whether on-chain deposits are allowed | 
**CanTransfer** | **bool** | Whether internal transfers are allowed | 
**CanWithdraw** | **bool** | Whether on-chain withdrawals are allowed | 
**Code** | **string** | Currency code identifier | 
**ContractAddress** | Pointer to **string** | Contract address | [optional] 
**Decimals** | **int32** | Decimal precision | 
**Logo** | **string** | Logo URL | 
**MaxFee** | **string** | Maximum fee | 
**MaxFeeForCtAddr** | **string** | Maximum fee for contract address | 
**MaxWithdrawAmount** | **string** | Maximum on-chain withdrawal amount per transaction | 
**MinDepositAmount** | **string** | Minimum deposit amount per transaction | 
**MinFee** | **string** | Minimum fee | 
**MinFeeForCtAddr** | **string** | Minimum fee for contract address | 
**MinWithdrawAmount** | **string** | Minimum on-chain withdrawal amount per transaction | 
**Name** | **string** | Currency name | 
**NeedMemo** | **bool** | Whether memo is required | 
**Networks** | Pointer to [**[]CurrencyNetwork**](CurrencyNetwork.md) | Currency networks information | [optional] 
**Precision** | **int32** | Number of decimal places | 
**Rated** | **bool** | Whether it participates in exchange rate calculations | 
**Symbol** | **string** | Currency symbol | 

## Methods

### NewCurrency

`func NewCurrency(canDeposit bool, canTransfer bool, canWithdraw bool, code string, decimals int32, logo string, maxFee string, maxFeeForCtAddr string, maxWithdrawAmount string, minDepositAmount string, minFee string, minFeeForCtAddr string, minWithdrawAmount string, name string, needMemo bool, precision int32, rated bool, symbol string, ) *Currency`

NewCurrency instantiates a new Currency object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCurrencyWithDefaults

`func NewCurrencyWithDefaults() *Currency`

NewCurrencyWithDefaults instantiates a new Currency object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCanDeposit

`func (o *Currency) GetCanDeposit() bool`

GetCanDeposit returns the CanDeposit field if non-nil, zero value otherwise.

### GetCanDepositOk

`func (o *Currency) GetCanDepositOk() (*bool, bool)`

GetCanDepositOk returns a tuple with the CanDeposit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCanDeposit

`func (o *Currency) SetCanDeposit(v bool)`

SetCanDeposit sets CanDeposit field to given value.


### GetCanTransfer

`func (o *Currency) GetCanTransfer() bool`

GetCanTransfer returns the CanTransfer field if non-nil, zero value otherwise.

### GetCanTransferOk

`func (o *Currency) GetCanTransferOk() (*bool, bool)`

GetCanTransferOk returns a tuple with the CanTransfer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCanTransfer

`func (o *Currency) SetCanTransfer(v bool)`

SetCanTransfer sets CanTransfer field to given value.


### GetCanWithdraw

`func (o *Currency) GetCanWithdraw() bool`

GetCanWithdraw returns the CanWithdraw field if non-nil, zero value otherwise.

### GetCanWithdrawOk

`func (o *Currency) GetCanWithdrawOk() (*bool, bool)`

GetCanWithdrawOk returns a tuple with the CanWithdraw field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCanWithdraw

`func (o *Currency) SetCanWithdraw(v bool)`

SetCanWithdraw sets CanWithdraw field to given value.


### GetCode

`func (o *Currency) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *Currency) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *Currency) SetCode(v string)`

SetCode sets Code field to given value.


### GetContractAddress

`func (o *Currency) GetContractAddress() string`

GetContractAddress returns the ContractAddress field if non-nil, zero value otherwise.

### GetContractAddressOk

`func (o *Currency) GetContractAddressOk() (*string, bool)`

GetContractAddressOk returns a tuple with the ContractAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContractAddress

`func (o *Currency) SetContractAddress(v string)`

SetContractAddress sets ContractAddress field to given value.

### HasContractAddress

`func (o *Currency) HasContractAddress() bool`

HasContractAddress returns a boolean if a field has been set.

### GetDecimals

`func (o *Currency) GetDecimals() int32`

GetDecimals returns the Decimals field if non-nil, zero value otherwise.

### GetDecimalsOk

`func (o *Currency) GetDecimalsOk() (*int32, bool)`

GetDecimalsOk returns a tuple with the Decimals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecimals

`func (o *Currency) SetDecimals(v int32)`

SetDecimals sets Decimals field to given value.


### GetLogo

`func (o *Currency) GetLogo() string`

GetLogo returns the Logo field if non-nil, zero value otherwise.

### GetLogoOk

`func (o *Currency) GetLogoOk() (*string, bool)`

GetLogoOk returns a tuple with the Logo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogo

`func (o *Currency) SetLogo(v string)`

SetLogo sets Logo field to given value.


### GetMaxFee

`func (o *Currency) GetMaxFee() string`

GetMaxFee returns the MaxFee field if non-nil, zero value otherwise.

### GetMaxFeeOk

`func (o *Currency) GetMaxFeeOk() (*string, bool)`

GetMaxFeeOk returns a tuple with the MaxFee field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxFee

`func (o *Currency) SetMaxFee(v string)`

SetMaxFee sets MaxFee field to given value.


### GetMaxFeeForCtAddr

`func (o *Currency) GetMaxFeeForCtAddr() string`

GetMaxFeeForCtAddr returns the MaxFeeForCtAddr field if non-nil, zero value otherwise.

### GetMaxFeeForCtAddrOk

`func (o *Currency) GetMaxFeeForCtAddrOk() (*string, bool)`

GetMaxFeeForCtAddrOk returns a tuple with the MaxFeeForCtAddr field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxFeeForCtAddr

`func (o *Currency) SetMaxFeeForCtAddr(v string)`

SetMaxFeeForCtAddr sets MaxFeeForCtAddr field to given value.


### GetMaxWithdrawAmount

`func (o *Currency) GetMaxWithdrawAmount() string`

GetMaxWithdrawAmount returns the MaxWithdrawAmount field if non-nil, zero value otherwise.

### GetMaxWithdrawAmountOk

`func (o *Currency) GetMaxWithdrawAmountOk() (*string, bool)`

GetMaxWithdrawAmountOk returns a tuple with the MaxWithdrawAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxWithdrawAmount

`func (o *Currency) SetMaxWithdrawAmount(v string)`

SetMaxWithdrawAmount sets MaxWithdrawAmount field to given value.


### GetMinDepositAmount

`func (o *Currency) GetMinDepositAmount() string`

GetMinDepositAmount returns the MinDepositAmount field if non-nil, zero value otherwise.

### GetMinDepositAmountOk

`func (o *Currency) GetMinDepositAmountOk() (*string, bool)`

GetMinDepositAmountOk returns a tuple with the MinDepositAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinDepositAmount

`func (o *Currency) SetMinDepositAmount(v string)`

SetMinDepositAmount sets MinDepositAmount field to given value.


### GetMinFee

`func (o *Currency) GetMinFee() string`

GetMinFee returns the MinFee field if non-nil, zero value otherwise.

### GetMinFeeOk

`func (o *Currency) GetMinFeeOk() (*string, bool)`

GetMinFeeOk returns a tuple with the MinFee field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinFee

`func (o *Currency) SetMinFee(v string)`

SetMinFee sets MinFee field to given value.


### GetMinFeeForCtAddr

`func (o *Currency) GetMinFeeForCtAddr() string`

GetMinFeeForCtAddr returns the MinFeeForCtAddr field if non-nil, zero value otherwise.

### GetMinFeeForCtAddrOk

`func (o *Currency) GetMinFeeForCtAddrOk() (*string, bool)`

GetMinFeeForCtAddrOk returns a tuple with the MinFeeForCtAddr field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinFeeForCtAddr

`func (o *Currency) SetMinFeeForCtAddr(v string)`

SetMinFeeForCtAddr sets MinFeeForCtAddr field to given value.


### GetMinWithdrawAmount

`func (o *Currency) GetMinWithdrawAmount() string`

GetMinWithdrawAmount returns the MinWithdrawAmount field if non-nil, zero value otherwise.

### GetMinWithdrawAmountOk

`func (o *Currency) GetMinWithdrawAmountOk() (*string, bool)`

GetMinWithdrawAmountOk returns a tuple with the MinWithdrawAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinWithdrawAmount

`func (o *Currency) SetMinWithdrawAmount(v string)`

SetMinWithdrawAmount sets MinWithdrawAmount field to given value.


### GetName

`func (o *Currency) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Currency) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Currency) SetName(v string)`

SetName sets Name field to given value.


### GetNeedMemo

`func (o *Currency) GetNeedMemo() bool`

GetNeedMemo returns the NeedMemo field if non-nil, zero value otherwise.

### GetNeedMemoOk

`func (o *Currency) GetNeedMemoOk() (*bool, bool)`

GetNeedMemoOk returns a tuple with the NeedMemo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNeedMemo

`func (o *Currency) SetNeedMemo(v bool)`

SetNeedMemo sets NeedMemo field to given value.


### GetNetworks

`func (o *Currency) GetNetworks() []CurrencyNetwork`

GetNetworks returns the Networks field if non-nil, zero value otherwise.

### GetNetworksOk

`func (o *Currency) GetNetworksOk() (*[]CurrencyNetwork, bool)`

GetNetworksOk returns a tuple with the Networks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNetworks

`func (o *Currency) SetNetworks(v []CurrencyNetwork)`

SetNetworks sets Networks field to given value.

### HasNetworks

`func (o *Currency) HasNetworks() bool`

HasNetworks returns a boolean if a field has been set.

### SetNetworksNil

`func (o *Currency) SetNetworksNil(b bool)`

 SetNetworksNil sets the value for Networks to be an explicit nil

### UnsetNetworks
`func (o *Currency) UnsetNetworks()`

UnsetNetworks ensures that no value is present for Networks, not even an explicit nil
### GetPrecision

`func (o *Currency) GetPrecision() int32`

GetPrecision returns the Precision field if non-nil, zero value otherwise.

### GetPrecisionOk

`func (o *Currency) GetPrecisionOk() (*int32, bool)`

GetPrecisionOk returns a tuple with the Precision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrecision

`func (o *Currency) SetPrecision(v int32)`

SetPrecision sets Precision field to given value.


### GetRated

`func (o *Currency) GetRated() bool`

GetRated returns the Rated field if non-nil, zero value otherwise.

### GetRatedOk

`func (o *Currency) GetRatedOk() (*bool, bool)`

GetRatedOk returns a tuple with the Rated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRated

`func (o *Currency) SetRated(v bool)`

SetRated sets Rated field to given value.


### GetSymbol

`func (o *Currency) GetSymbol() string`

GetSymbol returns the Symbol field if non-nil, zero value otherwise.

### GetSymbolOk

`func (o *Currency) GetSymbolOk() (*string, bool)`

GetSymbolOk returns a tuple with the Symbol field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSymbol

`func (o *Currency) SetSymbol(v string)`

SetSymbol sets Symbol field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


