# OrderOut

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The order&#39;s ID | 
**Uid** | Pointer to **NullableString** | The order&#39;s UID | [optional] 
**Currency** | **string** | Currency code | 
**Amount** | **string** | Big decimal string representation. Note that the max precision (number of digits after decimal point) depends on the currencyCode. E.g. for all fiat currencies is 2 (0.01), for BTC is 8, for USDT is 6. There&#39;s also min order amount for creating an order. It&#39;s 0.000001 BTC / 0.01 USDT / 0.01 USD / 0.01 EUR / 0.1 RUB. | 
**UserId** | Pointer to **NullableString** | The order&#39;s creator | [optional] 
**WalletId** | Pointer to **string** | wallet id | [optional] 
**Note** | Pointer to **string** | Optional order notes | [optional] 
**Metadata** | Pointer to **map[string]string** |  | [optional] 
**Expiration** | Pointer to **int32** | The expiration seconds | [optional] 
**Status** | **string** | The order&#39;s status | 
**FailedMessage** | Pointer to **string** | The message when order failed | [optional] 
**CreatedAt** | **time.Time** | The order&#39;s creation time | 
**PayedAt** | Pointer to **time.Time** | The order&#39;s paid time | [optional] 
**ExpiredAt** | Pointer to **time.Time** | The order&#39;s expiration time | [optional] 
**FailedAt** | Pointer to **time.Time** | The order&#39;s failure time | [optional] 

## Methods

### NewOrderOut

`func NewOrderOut(id string, currency string, amount string, status string, createdAt time.Time, ) *OrderOut`

NewOrderOut instantiates a new OrderOut object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrderOutWithDefaults

`func NewOrderOutWithDefaults() *OrderOut`

NewOrderOutWithDefaults instantiates a new OrderOut object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *OrderOut) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *OrderOut) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *OrderOut) SetId(v string)`

SetId sets Id field to given value.


### GetUid

`func (o *OrderOut) GetUid() string`

GetUid returns the Uid field if non-nil, zero value otherwise.

### GetUidOk

`func (o *OrderOut) GetUidOk() (*string, bool)`

GetUidOk returns a tuple with the Uid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUid

`func (o *OrderOut) SetUid(v string)`

SetUid sets Uid field to given value.

### HasUid

`func (o *OrderOut) HasUid() bool`

HasUid returns a boolean if a field has been set.

### SetUidNil

`func (o *OrderOut) SetUidNil(b bool)`

 SetUidNil sets the value for Uid to be an explicit nil

### UnsetUid
`func (o *OrderOut) UnsetUid()`

UnsetUid ensures that no value is present for Uid, not even an explicit nil
### GetCurrency

`func (o *OrderOut) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *OrderOut) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *OrderOut) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetAmount

`func (o *OrderOut) GetAmount() string`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *OrderOut) GetAmountOk() (*string, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *OrderOut) SetAmount(v string)`

SetAmount sets Amount field to given value.


### GetUserId

`func (o *OrderOut) GetUserId() string`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *OrderOut) GetUserIdOk() (*string, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *OrderOut) SetUserId(v string)`

SetUserId sets UserId field to given value.

### HasUserId

`func (o *OrderOut) HasUserId() bool`

HasUserId returns a boolean if a field has been set.

### SetUserIdNil

`func (o *OrderOut) SetUserIdNil(b bool)`

 SetUserIdNil sets the value for UserId to be an explicit nil

### UnsetUserId
`func (o *OrderOut) UnsetUserId()`

UnsetUserId ensures that no value is present for UserId, not even an explicit nil
### GetWalletId

`func (o *OrderOut) GetWalletId() string`

GetWalletId returns the WalletId field if non-nil, zero value otherwise.

### GetWalletIdOk

`func (o *OrderOut) GetWalletIdOk() (*string, bool)`

GetWalletIdOk returns a tuple with the WalletId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWalletId

`func (o *OrderOut) SetWalletId(v string)`

SetWalletId sets WalletId field to given value.

### HasWalletId

`func (o *OrderOut) HasWalletId() bool`

HasWalletId returns a boolean if a field has been set.

### GetNote

`func (o *OrderOut) GetNote() string`

GetNote returns the Note field if non-nil, zero value otherwise.

### GetNoteOk

`func (o *OrderOut) GetNoteOk() (*string, bool)`

GetNoteOk returns a tuple with the Note field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNote

`func (o *OrderOut) SetNote(v string)`

SetNote sets Note field to given value.

### HasNote

`func (o *OrderOut) HasNote() bool`

HasNote returns a boolean if a field has been set.

### GetMetadata

`func (o *OrderOut) GetMetadata() map[string]string`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *OrderOut) GetMetadataOk() (*map[string]string, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *OrderOut) SetMetadata(v map[string]string)`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *OrderOut) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### GetExpiration

`func (o *OrderOut) GetExpiration() int32`

GetExpiration returns the Expiration field if non-nil, zero value otherwise.

### GetExpirationOk

`func (o *OrderOut) GetExpirationOk() (*int32, bool)`

GetExpirationOk returns a tuple with the Expiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiration

`func (o *OrderOut) SetExpiration(v int32)`

SetExpiration sets Expiration field to given value.

### HasExpiration

`func (o *OrderOut) HasExpiration() bool`

HasExpiration returns a boolean if a field has been set.

### GetStatus

`func (o *OrderOut) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *OrderOut) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *OrderOut) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetFailedMessage

`func (o *OrderOut) GetFailedMessage() string`

GetFailedMessage returns the FailedMessage field if non-nil, zero value otherwise.

### GetFailedMessageOk

`func (o *OrderOut) GetFailedMessageOk() (*string, bool)`

GetFailedMessageOk returns a tuple with the FailedMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailedMessage

`func (o *OrderOut) SetFailedMessage(v string)`

SetFailedMessage sets FailedMessage field to given value.

### HasFailedMessage

`func (o *OrderOut) HasFailedMessage() bool`

HasFailedMessage returns a boolean if a field has been set.

### GetCreatedAt

`func (o *OrderOut) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *OrderOut) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *OrderOut) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetPayedAt

`func (o *OrderOut) GetPayedAt() time.Time`

GetPayedAt returns the PayedAt field if non-nil, zero value otherwise.

### GetPayedAtOk

`func (o *OrderOut) GetPayedAtOk() (*time.Time, bool)`

GetPayedAtOk returns a tuple with the PayedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayedAt

`func (o *OrderOut) SetPayedAt(v time.Time)`

SetPayedAt sets PayedAt field to given value.

### HasPayedAt

`func (o *OrderOut) HasPayedAt() bool`

HasPayedAt returns a boolean if a field has been set.

### GetExpiredAt

`func (o *OrderOut) GetExpiredAt() time.Time`

GetExpiredAt returns the ExpiredAt field if non-nil, zero value otherwise.

### GetExpiredAtOk

`func (o *OrderOut) GetExpiredAtOk() (*time.Time, bool)`

GetExpiredAtOk returns a tuple with the ExpiredAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiredAt

`func (o *OrderOut) SetExpiredAt(v time.Time)`

SetExpiredAt sets ExpiredAt field to given value.

### HasExpiredAt

`func (o *OrderOut) HasExpiredAt() bool`

HasExpiredAt returns a boolean if a field has been set.

### GetFailedAt

`func (o *OrderOut) GetFailedAt() time.Time`

GetFailedAt returns the FailedAt field if non-nil, zero value otherwise.

### GetFailedAtOk

`func (o *OrderOut) GetFailedAtOk() (*time.Time, bool)`

GetFailedAtOk returns a tuple with the FailedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailedAt

`func (o *OrderOut) SetFailedAt(v time.Time)`

SetFailedAt sets FailedAt field to given value.

### HasFailedAt

`func (o *OrderOut) HasFailedAt() bool`

HasFailedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


