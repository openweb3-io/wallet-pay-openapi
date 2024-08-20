# TransferIn

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ToWalletId** | **string** | the target wallet id | 
**Currency** | **string** | currency code | 
**Amount** | **string** | big integer string representation | 
**AutoCommit** | Pointer to **bool** | auto commit, default is true | [optional] 
**Description** | Pointer to **string** | transfer description | [optional] 
**Tags** | Pointer to **[]string** | transfer tags | [optional] 

## Methods

### NewTransferIn

`func NewTransferIn(toWalletId string, currency string, amount string, ) *TransferIn`

NewTransferIn instantiates a new TransferIn object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransferInWithDefaults

`func NewTransferInWithDefaults() *TransferIn`

NewTransferInWithDefaults instantiates a new TransferIn object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetToWalletId

`func (o *TransferIn) GetToWalletId() string`

GetToWalletId returns the ToWalletId field if non-nil, zero value otherwise.

### GetToWalletIdOk

`func (o *TransferIn) GetToWalletIdOk() (*string, bool)`

GetToWalletIdOk returns a tuple with the ToWalletId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToWalletId

`func (o *TransferIn) SetToWalletId(v string)`

SetToWalletId sets ToWalletId field to given value.


### GetCurrency

`func (o *TransferIn) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *TransferIn) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *TransferIn) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetAmount

`func (o *TransferIn) GetAmount() string`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *TransferIn) GetAmountOk() (*string, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *TransferIn) SetAmount(v string)`

SetAmount sets Amount field to given value.


### GetAutoCommit

`func (o *TransferIn) GetAutoCommit() bool`

GetAutoCommit returns the AutoCommit field if non-nil, zero value otherwise.

### GetAutoCommitOk

`func (o *TransferIn) GetAutoCommitOk() (*bool, bool)`

GetAutoCommitOk returns a tuple with the AutoCommit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoCommit

`func (o *TransferIn) SetAutoCommit(v bool)`

SetAutoCommit sets AutoCommit field to given value.

### HasAutoCommit

`func (o *TransferIn) HasAutoCommit() bool`

HasAutoCommit returns a boolean if a field has been set.

### GetDescription

`func (o *TransferIn) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TransferIn) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TransferIn) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TransferIn) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetTags

`func (o *TransferIn) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *TransferIn) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *TransferIn) SetTags(v []string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *TransferIn) HasTags() bool`

HasTags returns a boolean if a field has been set.

### SetTagsNil

`func (o *TransferIn) SetTagsNil(b bool)`

 SetTagsNil sets the value for Tags to be an explicit nil

### UnsetTags
`func (o *TransferIn) UnsetTags()`

UnsetTags ensures that no value is present for Tags, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


