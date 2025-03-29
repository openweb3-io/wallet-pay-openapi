# Refund

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | **string** | Amount being refunded | 
**CompletedAt** | Pointer to **string** | Time when the refund was completed | [optional] 
**CreatedAt** | **string** | Time when the refund was created | 
**Currency** | **string** | Currency code of the refund | 
**FailedAt** | Pointer to **string** | Time when the refund failed | [optional] 
**FailedMessage** | Pointer to **string** | Error message when refund fails | [optional] 
**Id** | **string** | System unique ID of the refund | 
**Note** | Pointer to **string** | Refund description from merchant | [optional] 
**OrderId** | **string** | ID of the order being refunded | 
**Status** | **string** | The status of the refund | 
**Uid** | Pointer to **string** | External ID, the refund ID in the merchant system | [optional] 

## Methods

### NewRefund

`func NewRefund(amount string, createdAt string, currency string, id string, orderId string, status string, ) *Refund`

NewRefund instantiates a new Refund object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRefundWithDefaults

`func NewRefundWithDefaults() *Refund`

NewRefundWithDefaults instantiates a new Refund object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *Refund) GetAmount() string`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *Refund) GetAmountOk() (*string, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *Refund) SetAmount(v string)`

SetAmount sets Amount field to given value.


### GetCompletedAt

`func (o *Refund) GetCompletedAt() string`

GetCompletedAt returns the CompletedAt field if non-nil, zero value otherwise.

### GetCompletedAtOk

`func (o *Refund) GetCompletedAtOk() (*string, bool)`

GetCompletedAtOk returns a tuple with the CompletedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletedAt

`func (o *Refund) SetCompletedAt(v string)`

SetCompletedAt sets CompletedAt field to given value.

### HasCompletedAt

`func (o *Refund) HasCompletedAt() bool`

HasCompletedAt returns a boolean if a field has been set.

### GetCreatedAt

`func (o *Refund) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *Refund) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *Refund) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetCurrency

`func (o *Refund) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *Refund) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *Refund) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetFailedAt

`func (o *Refund) GetFailedAt() string`

GetFailedAt returns the FailedAt field if non-nil, zero value otherwise.

### GetFailedAtOk

`func (o *Refund) GetFailedAtOk() (*string, bool)`

GetFailedAtOk returns a tuple with the FailedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailedAt

`func (o *Refund) SetFailedAt(v string)`

SetFailedAt sets FailedAt field to given value.

### HasFailedAt

`func (o *Refund) HasFailedAt() bool`

HasFailedAt returns a boolean if a field has been set.

### GetFailedMessage

`func (o *Refund) GetFailedMessage() string`

GetFailedMessage returns the FailedMessage field if non-nil, zero value otherwise.

### GetFailedMessageOk

`func (o *Refund) GetFailedMessageOk() (*string, bool)`

GetFailedMessageOk returns a tuple with the FailedMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailedMessage

`func (o *Refund) SetFailedMessage(v string)`

SetFailedMessage sets FailedMessage field to given value.

### HasFailedMessage

`func (o *Refund) HasFailedMessage() bool`

HasFailedMessage returns a boolean if a field has been set.

### GetId

`func (o *Refund) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Refund) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Refund) SetId(v string)`

SetId sets Id field to given value.


### GetNote

`func (o *Refund) GetNote() string`

GetNote returns the Note field if non-nil, zero value otherwise.

### GetNoteOk

`func (o *Refund) GetNoteOk() (*string, bool)`

GetNoteOk returns a tuple with the Note field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNote

`func (o *Refund) SetNote(v string)`

SetNote sets Note field to given value.

### HasNote

`func (o *Refund) HasNote() bool`

HasNote returns a boolean if a field has been set.

### GetOrderId

`func (o *Refund) GetOrderId() string`

GetOrderId returns the OrderId field if non-nil, zero value otherwise.

### GetOrderIdOk

`func (o *Refund) GetOrderIdOk() (*string, bool)`

GetOrderIdOk returns a tuple with the OrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderId

`func (o *Refund) SetOrderId(v string)`

SetOrderId sets OrderId field to given value.


### GetStatus

`func (o *Refund) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Refund) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Refund) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetUid

`func (o *Refund) GetUid() string`

GetUid returns the Uid field if non-nil, zero value otherwise.

### GetUidOk

`func (o *Refund) GetUidOk() (*string, bool)`

GetUidOk returns a tuple with the Uid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUid

`func (o *Refund) SetUid(v string)`

SetUid sets Uid field to given value.

### HasUid

`func (o *Refund) HasUid() bool`

HasUid returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


