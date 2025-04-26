# CreateOrderRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | **string** | Amount, supports decimal values | 
**Creator** | Pointer to **string** | The identifier of the user who created the order | [optional] 
**Currency** | **string** | Currency code. e.g.: USDT, TON, ETH | 
**Expiration** | Pointer to **int32** | Expiration time in seconds. If payment is not completed within the given time, the order will be automatically canceled | [optional] 
**Metadata** | Pointer to **map[string]string** | Order metadata | [optional] 
**Note** | Pointer to **string** | Order description from merchant | [optional] 
**Uid** | Pointer to **string** | External ID, the order ID in the merchant system | [optional] 

## Methods

### NewCreateOrderRequest

`func NewCreateOrderRequest(amount string, currency string, ) *CreateOrderRequest`

NewCreateOrderRequest instantiates a new CreateOrderRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateOrderRequestWithDefaults

`func NewCreateOrderRequestWithDefaults() *CreateOrderRequest`

NewCreateOrderRequestWithDefaults instantiates a new CreateOrderRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *CreateOrderRequest) GetAmount() string`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *CreateOrderRequest) GetAmountOk() (*string, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *CreateOrderRequest) SetAmount(v string)`

SetAmount sets Amount field to given value.


### GetCreator

`func (o *CreateOrderRequest) GetCreator() string`

GetCreator returns the Creator field if non-nil, zero value otherwise.

### GetCreatorOk

`func (o *CreateOrderRequest) GetCreatorOk() (*string, bool)`

GetCreatorOk returns a tuple with the Creator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreator

`func (o *CreateOrderRequest) SetCreator(v string)`

SetCreator sets Creator field to given value.

### HasCreator

`func (o *CreateOrderRequest) HasCreator() bool`

HasCreator returns a boolean if a field has been set.

### GetCurrency

`func (o *CreateOrderRequest) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *CreateOrderRequest) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *CreateOrderRequest) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetExpiration

`func (o *CreateOrderRequest) GetExpiration() int32`

GetExpiration returns the Expiration field if non-nil, zero value otherwise.

### GetExpirationOk

`func (o *CreateOrderRequest) GetExpirationOk() (*int32, bool)`

GetExpirationOk returns a tuple with the Expiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiration

`func (o *CreateOrderRequest) SetExpiration(v int32)`

SetExpiration sets Expiration field to given value.

### HasExpiration

`func (o *CreateOrderRequest) HasExpiration() bool`

HasExpiration returns a boolean if a field has been set.

### GetMetadata

`func (o *CreateOrderRequest) GetMetadata() map[string]string`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *CreateOrderRequest) GetMetadataOk() (*map[string]string, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *CreateOrderRequest) SetMetadata(v map[string]string)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *CreateOrderRequest) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### SetMetadataNil

`func (o *CreateOrderRequest) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *CreateOrderRequest) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil
### GetNote

`func (o *CreateOrderRequest) GetNote() string`

GetNote returns the Note field if non-nil, zero value otherwise.

### GetNoteOk

`func (o *CreateOrderRequest) GetNoteOk() (*string, bool)`

GetNoteOk returns a tuple with the Note field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNote

`func (o *CreateOrderRequest) SetNote(v string)`

SetNote sets Note field to given value.

### HasNote

`func (o *CreateOrderRequest) HasNote() bool`

HasNote returns a boolean if a field has been set.

### GetUid

`func (o *CreateOrderRequest) GetUid() string`

GetUid returns the Uid field if non-nil, zero value otherwise.

### GetUidOk

`func (o *CreateOrderRequest) GetUidOk() (*string, bool)`

GetUidOk returns a tuple with the Uid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUid

`func (o *CreateOrderRequest) SetUid(v string)`

SetUid sets Uid field to given value.

### HasUid

`func (o *CreateOrderRequest) HasUid() bool`

HasUid returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


