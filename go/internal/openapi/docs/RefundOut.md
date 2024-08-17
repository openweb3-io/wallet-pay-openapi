# RefundOut

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The refund&#39;s ID | 
**Uid** | Pointer to **NullableString** | The refund&#39;s UID | [optional] 
**OrderId** | **string** | The relative order id | 
**Currency** | **string** | Currency code | 
**Amount** | **string** | Big integer string representation, whose meaning is the value of absolute floating-point number multiplied by the corresponding decimals of the cryptocurrency. | 
**Status** | **string** | The refund&#39;s status | 
**Note** | Pointer to **string** | Optional refund note | [optional] 
**FailedAt** | Pointer to **time.Time** | The refund&#39;s failure time | [optional] 
**FailedMessage** | Pointer to **string** | The message when refund failed | [optional] 
**CreatedAt** | **time.Time** | The refund&#39;s created time | 
**CompletedAt** | Pointer to **time.Time** | The refund&#39;s completed time | [optional] 

## Methods

### NewRefundOut

`func NewRefundOut(id string, orderId string, currency string, amount string, status string, createdAt time.Time, ) *RefundOut`

NewRefundOut instantiates a new RefundOut object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRefundOutWithDefaults

`func NewRefundOutWithDefaults() *RefundOut`

NewRefundOutWithDefaults instantiates a new RefundOut object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *RefundOut) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RefundOut) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RefundOut) SetId(v string)`

SetId sets Id field to given value.


### GetUid

`func (o *RefundOut) GetUid() string`

GetUid returns the Uid field if non-nil, zero value otherwise.

### GetUidOk

`func (o *RefundOut) GetUidOk() (*string, bool)`

GetUidOk returns a tuple with the Uid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUid

`func (o *RefundOut) SetUid(v string)`

SetUid sets Uid field to given value.

### HasUid

`func (o *RefundOut) HasUid() bool`

HasUid returns a boolean if a field has been set.

### SetUidNil

`func (o *RefundOut) SetUidNil(b bool)`

 SetUidNil sets the value for Uid to be an explicit nil

### UnsetUid
`func (o *RefundOut) UnsetUid()`

UnsetUid ensures that no value is present for Uid, not even an explicit nil
### GetOrderId

`func (o *RefundOut) GetOrderId() string`

GetOrderId returns the OrderId field if non-nil, zero value otherwise.

### GetOrderIdOk

`func (o *RefundOut) GetOrderIdOk() (*string, bool)`

GetOrderIdOk returns a tuple with the OrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderId

`func (o *RefundOut) SetOrderId(v string)`

SetOrderId sets OrderId field to given value.


### GetCurrency

`func (o *RefundOut) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *RefundOut) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *RefundOut) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetAmount

`func (o *RefundOut) GetAmount() string`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *RefundOut) GetAmountOk() (*string, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *RefundOut) SetAmount(v string)`

SetAmount sets Amount field to given value.


### GetStatus

`func (o *RefundOut) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *RefundOut) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *RefundOut) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetNote

`func (o *RefundOut) GetNote() string`

GetNote returns the Note field if non-nil, zero value otherwise.

### GetNoteOk

`func (o *RefundOut) GetNoteOk() (*string, bool)`

GetNoteOk returns a tuple with the Note field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNote

`func (o *RefundOut) SetNote(v string)`

SetNote sets Note field to given value.

### HasNote

`func (o *RefundOut) HasNote() bool`

HasNote returns a boolean if a field has been set.

### GetFailedAt

`func (o *RefundOut) GetFailedAt() time.Time`

GetFailedAt returns the FailedAt field if non-nil, zero value otherwise.

### GetFailedAtOk

`func (o *RefundOut) GetFailedAtOk() (*time.Time, bool)`

GetFailedAtOk returns a tuple with the FailedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailedAt

`func (o *RefundOut) SetFailedAt(v time.Time)`

SetFailedAt sets FailedAt field to given value.

### HasFailedAt

`func (o *RefundOut) HasFailedAt() bool`

HasFailedAt returns a boolean if a field has been set.

### GetFailedMessage

`func (o *RefundOut) GetFailedMessage() string`

GetFailedMessage returns the FailedMessage field if non-nil, zero value otherwise.

### GetFailedMessageOk

`func (o *RefundOut) GetFailedMessageOk() (*string, bool)`

GetFailedMessageOk returns a tuple with the FailedMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailedMessage

`func (o *RefundOut) SetFailedMessage(v string)`

SetFailedMessage sets FailedMessage field to given value.

### HasFailedMessage

`func (o *RefundOut) HasFailedMessage() bool`

HasFailedMessage returns a boolean if a field has been set.

### GetCreatedAt

`func (o *RefundOut) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *RefundOut) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *RefundOut) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetCompletedAt

`func (o *RefundOut) GetCompletedAt() time.Time`

GetCompletedAt returns the CompletedAt field if non-nil, zero value otherwise.

### GetCompletedAtOk

`func (o *RefundOut) GetCompletedAtOk() (*time.Time, bool)`

GetCompletedAtOk returns a tuple with the CompletedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletedAt

`func (o *RefundOut) SetCompletedAt(v time.Time)`

SetCompletedAt sets CompletedAt field to given value.

### HasCompletedAt

`func (o *RefundOut) HasCompletedAt() bool`

HasCompletedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


