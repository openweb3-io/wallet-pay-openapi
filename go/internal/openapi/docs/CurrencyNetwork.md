# CurrencyNetwork

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | **string** | Currency code | 
**Network** | **string** | blockchain network | 
**Name** | **string** | Currency name | 
**MinDepositAmount** | **string** | Big decimal string representation. The min amount to deposit. | 
**MinWithdrawAmount** | **string** | Big decimal string representation. The min amount to withdraw. | 
**MaxWithdrawAmount** | **string** | Big decimal string representation. The max amount to withdraw. | 
**CanDeposit** | **bool** | Is it posible to deposit on blockchain | 
**CanWithdraw** | **bool** | Is it posible to withdraw to blockchain | 
**CanTransfer** | **bool** | Is it posible to transfer in custody wallet | 
**ContractAddress** | Pointer to **string** | Contract address | [optional] 
**NeedMemo** | **bool** | Indicates if additional Memo information is required, as needed by some currencies or exchanges | 
**MinFee** | **string** | Minimum transaction fee | 
**MaxFee** | **string** | Maximum transaction fee | 
**MinFeeForCtAddr** | **string** | Minimum transaction fee for contract addresses | 
**MaxFeeForCtAddr** | **string** | Maximum transaction fee for contract addresses | 
**MinConfirmations** | Pointer to **int32** | Minimum number of confirmations required, indicating the number of block confirmations needed for a transaction to be considered valid | [optional] 
**MinCollectAmount** | Pointer to **string** | Minimum amount for collection, i.e., the minimum amount to aggregate small balances to a single address | [optional] 

## Methods

### NewCurrencyNetwork

`func NewCurrencyNetwork(code string, network string, name string, minDepositAmount string, minWithdrawAmount string, maxWithdrawAmount string, canDeposit bool, canWithdraw bool, canTransfer bool, needMemo bool, minFee string, maxFee string, minFeeForCtAddr string, maxFeeForCtAddr string, ) *CurrencyNetwork`

NewCurrencyNetwork instantiates a new CurrencyNetwork object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCurrencyNetworkWithDefaults

`func NewCurrencyNetworkWithDefaults() *CurrencyNetwork`

NewCurrencyNetworkWithDefaults instantiates a new CurrencyNetwork object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *CurrencyNetwork) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *CurrencyNetwork) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *CurrencyNetwork) SetCode(v string)`

SetCode sets Code field to given value.


### GetNetwork

`func (o *CurrencyNetwork) GetNetwork() string`

GetNetwork returns the Network field if non-nil, zero value otherwise.

### GetNetworkOk

`func (o *CurrencyNetwork) GetNetworkOk() (*string, bool)`

GetNetworkOk returns a tuple with the Network field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNetwork

`func (o *CurrencyNetwork) SetNetwork(v string)`

SetNetwork sets Network field to given value.


### GetName

`func (o *CurrencyNetwork) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CurrencyNetwork) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CurrencyNetwork) SetName(v string)`

SetName sets Name field to given value.


### GetMinDepositAmount

`func (o *CurrencyNetwork) GetMinDepositAmount() string`

GetMinDepositAmount returns the MinDepositAmount field if non-nil, zero value otherwise.

### GetMinDepositAmountOk

`func (o *CurrencyNetwork) GetMinDepositAmountOk() (*string, bool)`

GetMinDepositAmountOk returns a tuple with the MinDepositAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinDepositAmount

`func (o *CurrencyNetwork) SetMinDepositAmount(v string)`

SetMinDepositAmount sets MinDepositAmount field to given value.


### GetMinWithdrawAmount

`func (o *CurrencyNetwork) GetMinWithdrawAmount() string`

GetMinWithdrawAmount returns the MinWithdrawAmount field if non-nil, zero value otherwise.

### GetMinWithdrawAmountOk

`func (o *CurrencyNetwork) GetMinWithdrawAmountOk() (*string, bool)`

GetMinWithdrawAmountOk returns a tuple with the MinWithdrawAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinWithdrawAmount

`func (o *CurrencyNetwork) SetMinWithdrawAmount(v string)`

SetMinWithdrawAmount sets MinWithdrawAmount field to given value.


### GetMaxWithdrawAmount

`func (o *CurrencyNetwork) GetMaxWithdrawAmount() string`

GetMaxWithdrawAmount returns the MaxWithdrawAmount field if non-nil, zero value otherwise.

### GetMaxWithdrawAmountOk

`func (o *CurrencyNetwork) GetMaxWithdrawAmountOk() (*string, bool)`

GetMaxWithdrawAmountOk returns a tuple with the MaxWithdrawAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxWithdrawAmount

`func (o *CurrencyNetwork) SetMaxWithdrawAmount(v string)`

SetMaxWithdrawAmount sets MaxWithdrawAmount field to given value.


### GetCanDeposit

`func (o *CurrencyNetwork) GetCanDeposit() bool`

GetCanDeposit returns the CanDeposit field if non-nil, zero value otherwise.

### GetCanDepositOk

`func (o *CurrencyNetwork) GetCanDepositOk() (*bool, bool)`

GetCanDepositOk returns a tuple with the CanDeposit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCanDeposit

`func (o *CurrencyNetwork) SetCanDeposit(v bool)`

SetCanDeposit sets CanDeposit field to given value.


### GetCanWithdraw

`func (o *CurrencyNetwork) GetCanWithdraw() bool`

GetCanWithdraw returns the CanWithdraw field if non-nil, zero value otherwise.

### GetCanWithdrawOk

`func (o *CurrencyNetwork) GetCanWithdrawOk() (*bool, bool)`

GetCanWithdrawOk returns a tuple with the CanWithdraw field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCanWithdraw

`func (o *CurrencyNetwork) SetCanWithdraw(v bool)`

SetCanWithdraw sets CanWithdraw field to given value.


### GetCanTransfer

`func (o *CurrencyNetwork) GetCanTransfer() bool`

GetCanTransfer returns the CanTransfer field if non-nil, zero value otherwise.

### GetCanTransferOk

`func (o *CurrencyNetwork) GetCanTransferOk() (*bool, bool)`

GetCanTransferOk returns a tuple with the CanTransfer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCanTransfer

`func (o *CurrencyNetwork) SetCanTransfer(v bool)`

SetCanTransfer sets CanTransfer field to given value.


### GetContractAddress

`func (o *CurrencyNetwork) GetContractAddress() string`

GetContractAddress returns the ContractAddress field if non-nil, zero value otherwise.

### GetContractAddressOk

`func (o *CurrencyNetwork) GetContractAddressOk() (*string, bool)`

GetContractAddressOk returns a tuple with the ContractAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContractAddress

`func (o *CurrencyNetwork) SetContractAddress(v string)`

SetContractAddress sets ContractAddress field to given value.

### HasContractAddress

`func (o *CurrencyNetwork) HasContractAddress() bool`

HasContractAddress returns a boolean if a field has been set.

### GetNeedMemo

`func (o *CurrencyNetwork) GetNeedMemo() bool`

GetNeedMemo returns the NeedMemo field if non-nil, zero value otherwise.

### GetNeedMemoOk

`func (o *CurrencyNetwork) GetNeedMemoOk() (*bool, bool)`

GetNeedMemoOk returns a tuple with the NeedMemo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNeedMemo

`func (o *CurrencyNetwork) SetNeedMemo(v bool)`

SetNeedMemo sets NeedMemo field to given value.


### GetMinFee

`func (o *CurrencyNetwork) GetMinFee() string`

GetMinFee returns the MinFee field if non-nil, zero value otherwise.

### GetMinFeeOk

`func (o *CurrencyNetwork) GetMinFeeOk() (*string, bool)`

GetMinFeeOk returns a tuple with the MinFee field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinFee

`func (o *CurrencyNetwork) SetMinFee(v string)`

SetMinFee sets MinFee field to given value.


### GetMaxFee

`func (o *CurrencyNetwork) GetMaxFee() string`

GetMaxFee returns the MaxFee field if non-nil, zero value otherwise.

### GetMaxFeeOk

`func (o *CurrencyNetwork) GetMaxFeeOk() (*string, bool)`

GetMaxFeeOk returns a tuple with the MaxFee field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxFee

`func (o *CurrencyNetwork) SetMaxFee(v string)`

SetMaxFee sets MaxFee field to given value.


### GetMinFeeForCtAddr

`func (o *CurrencyNetwork) GetMinFeeForCtAddr() string`

GetMinFeeForCtAddr returns the MinFeeForCtAddr field if non-nil, zero value otherwise.

### GetMinFeeForCtAddrOk

`func (o *CurrencyNetwork) GetMinFeeForCtAddrOk() (*string, bool)`

GetMinFeeForCtAddrOk returns a tuple with the MinFeeForCtAddr field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinFeeForCtAddr

`func (o *CurrencyNetwork) SetMinFeeForCtAddr(v string)`

SetMinFeeForCtAddr sets MinFeeForCtAddr field to given value.


### GetMaxFeeForCtAddr

`func (o *CurrencyNetwork) GetMaxFeeForCtAddr() string`

GetMaxFeeForCtAddr returns the MaxFeeForCtAddr field if non-nil, zero value otherwise.

### GetMaxFeeForCtAddrOk

`func (o *CurrencyNetwork) GetMaxFeeForCtAddrOk() (*string, bool)`

GetMaxFeeForCtAddrOk returns a tuple with the MaxFeeForCtAddr field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxFeeForCtAddr

`func (o *CurrencyNetwork) SetMaxFeeForCtAddr(v string)`

SetMaxFeeForCtAddr sets MaxFeeForCtAddr field to given value.


### GetMinConfirmations

`func (o *CurrencyNetwork) GetMinConfirmations() int32`

GetMinConfirmations returns the MinConfirmations field if non-nil, zero value otherwise.

### GetMinConfirmationsOk

`func (o *CurrencyNetwork) GetMinConfirmationsOk() (*int32, bool)`

GetMinConfirmationsOk returns a tuple with the MinConfirmations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinConfirmations

`func (o *CurrencyNetwork) SetMinConfirmations(v int32)`

SetMinConfirmations sets MinConfirmations field to given value.

### HasMinConfirmations

`func (o *CurrencyNetwork) HasMinConfirmations() bool`

HasMinConfirmations returns a boolean if a field has been set.

### GetMinCollectAmount

`func (o *CurrencyNetwork) GetMinCollectAmount() string`

GetMinCollectAmount returns the MinCollectAmount field if non-nil, zero value otherwise.

### GetMinCollectAmountOk

`func (o *CurrencyNetwork) GetMinCollectAmountOk() (*string, bool)`

GetMinCollectAmountOk returns a tuple with the MinCollectAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinCollectAmount

`func (o *CurrencyNetwork) SetMinCollectAmount(v string)`

SetMinCollectAmount sets MinCollectAmount field to given value.

### HasMinCollectAmount

`func (o *CurrencyNetwork) HasMinCollectAmount() bool`

HasMinCollectAmount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


