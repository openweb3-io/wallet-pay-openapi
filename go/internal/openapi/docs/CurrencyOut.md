# CurrencyOut

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | **string** | Currency code | 
**Symbol** | **string** | Currency symbol | 
**Logo** | **string** | Currency logo url | 
**Name** | **string** | Currency name | 
**CanDeposit** | **bool** | Is it posible to deposit on blockchain | 
**CanWithdraw** | **bool** | Is it posible to withdraw to blockchain | 
**CanTransfer** | **bool** | Is it posible to transfer in custody wallet | 
**MinDepositAmount** | **string** | Big decimal string representation. The min amount to deposit. | 
**MinWithdrawAmount** | **string** | Big decimal string representation. The min amount to withdraw. | 
**MaxWithdrawAmount** | **string** | Big decimal string representation. The max amount to withdraw. | 
**Precision** | **int32** | Currency precision | 
**Decimals** | **int32** | Currency decimals | 

## Methods

### NewCurrencyOut

`func NewCurrencyOut(code string, symbol string, logo string, name string, canDeposit bool, canWithdraw bool, canTransfer bool, minDepositAmount string, minWithdrawAmount string, maxWithdrawAmount string, precision int32, decimals int32, ) *CurrencyOut`

NewCurrencyOut instantiates a new CurrencyOut object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCurrencyOutWithDefaults

`func NewCurrencyOutWithDefaults() *CurrencyOut`

NewCurrencyOutWithDefaults instantiates a new CurrencyOut object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *CurrencyOut) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *CurrencyOut) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *CurrencyOut) SetCode(v string)`

SetCode sets Code field to given value.


### GetSymbol

`func (o *CurrencyOut) GetSymbol() string`

GetSymbol returns the Symbol field if non-nil, zero value otherwise.

### GetSymbolOk

`func (o *CurrencyOut) GetSymbolOk() (*string, bool)`

GetSymbolOk returns a tuple with the Symbol field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSymbol

`func (o *CurrencyOut) SetSymbol(v string)`

SetSymbol sets Symbol field to given value.


### GetLogo

`func (o *CurrencyOut) GetLogo() string`

GetLogo returns the Logo field if non-nil, zero value otherwise.

### GetLogoOk

`func (o *CurrencyOut) GetLogoOk() (*string, bool)`

GetLogoOk returns a tuple with the Logo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogo

`func (o *CurrencyOut) SetLogo(v string)`

SetLogo sets Logo field to given value.


### GetName

`func (o *CurrencyOut) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CurrencyOut) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CurrencyOut) SetName(v string)`

SetName sets Name field to given value.


### GetCanDeposit

`func (o *CurrencyOut) GetCanDeposit() bool`

GetCanDeposit returns the CanDeposit field if non-nil, zero value otherwise.

### GetCanDepositOk

`func (o *CurrencyOut) GetCanDepositOk() (*bool, bool)`

GetCanDepositOk returns a tuple with the CanDeposit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCanDeposit

`func (o *CurrencyOut) SetCanDeposit(v bool)`

SetCanDeposit sets CanDeposit field to given value.


### GetCanWithdraw

`func (o *CurrencyOut) GetCanWithdraw() bool`

GetCanWithdraw returns the CanWithdraw field if non-nil, zero value otherwise.

### GetCanWithdrawOk

`func (o *CurrencyOut) GetCanWithdrawOk() (*bool, bool)`

GetCanWithdrawOk returns a tuple with the CanWithdraw field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCanWithdraw

`func (o *CurrencyOut) SetCanWithdraw(v bool)`

SetCanWithdraw sets CanWithdraw field to given value.


### GetCanTransfer

`func (o *CurrencyOut) GetCanTransfer() bool`

GetCanTransfer returns the CanTransfer field if non-nil, zero value otherwise.

### GetCanTransferOk

`func (o *CurrencyOut) GetCanTransferOk() (*bool, bool)`

GetCanTransferOk returns a tuple with the CanTransfer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCanTransfer

`func (o *CurrencyOut) SetCanTransfer(v bool)`

SetCanTransfer sets CanTransfer field to given value.


### GetMinDepositAmount

`func (o *CurrencyOut) GetMinDepositAmount() string`

GetMinDepositAmount returns the MinDepositAmount field if non-nil, zero value otherwise.

### GetMinDepositAmountOk

`func (o *CurrencyOut) GetMinDepositAmountOk() (*string, bool)`

GetMinDepositAmountOk returns a tuple with the MinDepositAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinDepositAmount

`func (o *CurrencyOut) SetMinDepositAmount(v string)`

SetMinDepositAmount sets MinDepositAmount field to given value.


### GetMinWithdrawAmount

`func (o *CurrencyOut) GetMinWithdrawAmount() string`

GetMinWithdrawAmount returns the MinWithdrawAmount field if non-nil, zero value otherwise.

### GetMinWithdrawAmountOk

`func (o *CurrencyOut) GetMinWithdrawAmountOk() (*string, bool)`

GetMinWithdrawAmountOk returns a tuple with the MinWithdrawAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinWithdrawAmount

`func (o *CurrencyOut) SetMinWithdrawAmount(v string)`

SetMinWithdrawAmount sets MinWithdrawAmount field to given value.


### GetMaxWithdrawAmount

`func (o *CurrencyOut) GetMaxWithdrawAmount() string`

GetMaxWithdrawAmount returns the MaxWithdrawAmount field if non-nil, zero value otherwise.

### GetMaxWithdrawAmountOk

`func (o *CurrencyOut) GetMaxWithdrawAmountOk() (*string, bool)`

GetMaxWithdrawAmountOk returns a tuple with the MaxWithdrawAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxWithdrawAmount

`func (o *CurrencyOut) SetMaxWithdrawAmount(v string)`

SetMaxWithdrawAmount sets MaxWithdrawAmount field to given value.


### GetPrecision

`func (o *CurrencyOut) GetPrecision() int32`

GetPrecision returns the Precision field if non-nil, zero value otherwise.

### GetPrecisionOk

`func (o *CurrencyOut) GetPrecisionOk() (*int32, bool)`

GetPrecisionOk returns a tuple with the Precision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrecision

`func (o *CurrencyOut) SetPrecision(v int32)`

SetPrecision sets Precision field to given value.


### GetDecimals

`func (o *CurrencyOut) GetDecimals() int32`

GetDecimals returns the Decimals field if non-nil, zero value otherwise.

### GetDecimalsOk

`func (o *CurrencyOut) GetDecimalsOk() (*int32, bool)`

GetDecimalsOk returns a tuple with the Decimals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecimals

`func (o *CurrencyOut) SetDecimals(v int32)`

SetDecimals sets Decimals field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


