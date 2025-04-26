# Order

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | **string** | Amount | 
**CreatedAt** | **string** | Order creation time | 
**Creator** | Pointer to **string** | The identifier of the user who created the order | [optional] 
**Currency** | **string** | Currency symbol | 
**Expiration** | **int32** | Expiration time in seconds. If payment is not completed within the given time, the order will be automatically canceled | 
**ExpiredAt** | Pointer to **string** | Order expiration time | [optional] 
**FailedAt** | Pointer to **string** | Order failure time | [optional] 
**FailedMessage** | Pointer to **string** | Error message when order fails | [optional] 
**Id** | **string** | System unique ID of the order | 
**Metadata** | Pointer to **map[string]string** | Order metadata | [optional] 
**Note** | **string** | Order description from merchant | 
**PaidAt** | Pointer to **string** | Order payment time | [optional] 
**Status** | **string** | Order status enum | 
**Uid** | Pointer to **string** | External ID, the order ID in the merchant system | [optional] 
**UserId** | Pointer to **string** | ID of the user who made the payment | [optional] 
**WalletId** | **string** | ID of the wallet used for payment | 

## Methods

### NewOrder

`func NewOrder(amount string, createdAt string, currency string, expiration int32, id string, note string, status string, walletId string, ) *Order`

NewOrder instantiates a new Order object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrderWithDefaults

`func NewOrderWithDefaults() *Order`

NewOrderWithDefaults instantiates a new Order object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *Order) GetAmount() string`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *Order) GetAmountOk() (*string, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *Order) SetAmount(v string)`

SetAmount sets Amount field to given value.


### GetCreatedAt

`func (o *Order) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *Order) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *Order) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetCreator

`func (o *Order) GetCreator() string`

GetCreator returns the Creator field if non-nil, zero value otherwise.

### GetCreatorOk

`func (o *Order) GetCreatorOk() (*string, bool)`

GetCreatorOk returns a tuple with the Creator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreator

`func (o *Order) SetCreator(v string)`

SetCreator sets Creator field to given value.

### HasCreator

`func (o *Order) HasCreator() bool`

HasCreator returns a boolean if a field has been set.

### GetCurrency

`func (o *Order) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *Order) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *Order) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetExpiration

`func (o *Order) GetExpiration() int32`

GetExpiration returns the Expiration field if non-nil, zero value otherwise.

### GetExpirationOk

`func (o *Order) GetExpirationOk() (*int32, bool)`

GetExpirationOk returns a tuple with the Expiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiration

`func (o *Order) SetExpiration(v int32)`

SetExpiration sets Expiration field to given value.


### GetExpiredAt

`func (o *Order) GetExpiredAt() string`

GetExpiredAt returns the ExpiredAt field if non-nil, zero value otherwise.

### GetExpiredAtOk

`func (o *Order) GetExpiredAtOk() (*string, bool)`

GetExpiredAtOk returns a tuple with the ExpiredAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiredAt

`func (o *Order) SetExpiredAt(v string)`

SetExpiredAt sets ExpiredAt field to given value.

### HasExpiredAt

`func (o *Order) HasExpiredAt() bool`

HasExpiredAt returns a boolean if a field has been set.

### GetFailedAt

`func (o *Order) GetFailedAt() string`

GetFailedAt returns the FailedAt field if non-nil, zero value otherwise.

### GetFailedAtOk

`func (o *Order) GetFailedAtOk() (*string, bool)`

GetFailedAtOk returns a tuple with the FailedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailedAt

`func (o *Order) SetFailedAt(v string)`

SetFailedAt sets FailedAt field to given value.

### HasFailedAt

`func (o *Order) HasFailedAt() bool`

HasFailedAt returns a boolean if a field has been set.

### GetFailedMessage

`func (o *Order) GetFailedMessage() string`

GetFailedMessage returns the FailedMessage field if non-nil, zero value otherwise.

### GetFailedMessageOk

`func (o *Order) GetFailedMessageOk() (*string, bool)`

GetFailedMessageOk returns a tuple with the FailedMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailedMessage

`func (o *Order) SetFailedMessage(v string)`

SetFailedMessage sets FailedMessage field to given value.

### HasFailedMessage

`func (o *Order) HasFailedMessage() bool`

HasFailedMessage returns a boolean if a field has been set.

### GetId

`func (o *Order) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Order) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Order) SetId(v string)`

SetId sets Id field to given value.


### GetMetadata

`func (o *Order) GetMetadata() map[string]string`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *Order) GetMetadataOk() (*map[string]string, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *Order) SetMetadata(v map[string]string)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *Order) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### SetMetadataNil

`func (o *Order) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *Order) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil
### GetNote

`func (o *Order) GetNote() string`

GetNote returns the Note field if non-nil, zero value otherwise.

### GetNoteOk

`func (o *Order) GetNoteOk() (*string, bool)`

GetNoteOk returns a tuple with the Note field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNote

`func (o *Order) SetNote(v string)`

SetNote sets Note field to given value.


### GetPaidAt

`func (o *Order) GetPaidAt() string`

GetPaidAt returns the PaidAt field if non-nil, zero value otherwise.

### GetPaidAtOk

`func (o *Order) GetPaidAtOk() (*string, bool)`

GetPaidAtOk returns a tuple with the PaidAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaidAt

`func (o *Order) SetPaidAt(v string)`

SetPaidAt sets PaidAt field to given value.

### HasPaidAt

`func (o *Order) HasPaidAt() bool`

HasPaidAt returns a boolean if a field has been set.

### GetStatus

`func (o *Order) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Order) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Order) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetUid

`func (o *Order) GetUid() string`

GetUid returns the Uid field if non-nil, zero value otherwise.

### GetUidOk

`func (o *Order) GetUidOk() (*string, bool)`

GetUidOk returns a tuple with the Uid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUid

`func (o *Order) SetUid(v string)`

SetUid sets Uid field to given value.

### HasUid

`func (o *Order) HasUid() bool`

HasUid returns a boolean if a field has been set.

### GetUserId

`func (o *Order) GetUserId() string`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *Order) GetUserIdOk() (*string, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *Order) SetUserId(v string)`

SetUserId sets UserId field to given value.

### HasUserId

`func (o *Order) HasUserId() bool`

HasUserId returns a boolean if a field has been set.

### GetWalletId

`func (o *Order) GetWalletId() string`

GetWalletId returns the WalletId field if non-nil, zero value otherwise.

### GetWalletIdOk

`func (o *Order) GetWalletIdOk() (*string, bool)`

GetWalletIdOk returns a tuple with the WalletId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWalletId

`func (o *Order) SetWalletId(v string)`

SetWalletId sets WalletId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


