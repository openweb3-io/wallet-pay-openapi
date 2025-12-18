# TransferRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | **string** | Amount to transfer, supports decimal values | 
**Currency** | **string** | Currency code for the transfer (e.g., TON, USDT, ETH) | 
**Description** | Pointer to **string** | Optional description for the transfer | [optional] 
**Metadata** | Pointer to **map[string]string** | Optional metadata for storing extra info | [optional] 
**Tags** | Pointer to **[]string** | Optional tags for categorizing the transfer | [optional] 
**ToWalletId** | **string** | Destination wallet ID to transfer funds to | 

## Methods

### NewTransferRequest

`func NewTransferRequest(amount string, currency string, toWalletId string, ) *TransferRequest`

NewTransferRequest instantiates a new TransferRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransferRequestWithDefaults

`func NewTransferRequestWithDefaults() *TransferRequest`

NewTransferRequestWithDefaults instantiates a new TransferRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *TransferRequest) GetAmount() string`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *TransferRequest) GetAmountOk() (*string, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *TransferRequest) SetAmount(v string)`

SetAmount sets Amount field to given value.


### GetCurrency

`func (o *TransferRequest) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *TransferRequest) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *TransferRequest) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetDescription

`func (o *TransferRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TransferRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TransferRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TransferRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetMetadata

`func (o *TransferRequest) GetMetadata() map[string]string`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *TransferRequest) GetMetadataOk() (*map[string]string, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *TransferRequest) SetMetadata(v map[string]string)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *TransferRequest) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### SetMetadataNil

`func (o *TransferRequest) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *TransferRequest) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil
### GetTags

`func (o *TransferRequest) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *TransferRequest) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *TransferRequest) SetTags(v []string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *TransferRequest) HasTags() bool`

HasTags returns a boolean if a field has been set.

### SetTagsNil

`func (o *TransferRequest) SetTagsNil(b bool)`

 SetTagsNil sets the value for Tags to be an explicit nil

### UnsetTags
`func (o *TransferRequest) UnsetTags()`

UnsetTags ensures that no value is present for Tags, not even an explicit nil
### GetToWalletId

`func (o *TransferRequest) GetToWalletId() string`

GetToWalletId returns the ToWalletId field if non-nil, zero value otherwise.

### GetToWalletIdOk

`func (o *TransferRequest) GetToWalletIdOk() (*string, bool)`

GetToWalletIdOk returns a tuple with the ToWalletId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToWalletId

`func (o *TransferRequest) SetToWalletId(v string)`

SetToWalletId sets ToWalletId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


