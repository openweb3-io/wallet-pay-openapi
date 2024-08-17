# RefundIn

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uid** | Pointer to **string** | Optional unique identifier for the refund | [optional] 
**OrderId** | **string** | The order&#39;s ID | 
**Amount** | **string** | Big integer string representation, whose meaning is the value of absolute floating-point number multiplied by the corresponding decimals of the cryptocurrency. | 
**Note** | Pointer to **string** | Optional refund note | [optional] 

## Methods

### NewRefundIn

`func NewRefundIn(orderId string, amount string, ) *RefundIn`

NewRefundIn instantiates a new RefundIn object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRefundInWithDefaults

`func NewRefundInWithDefaults() *RefundIn`

NewRefundInWithDefaults instantiates a new RefundIn object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUid

`func (o *RefundIn) GetUid() string`

GetUid returns the Uid field if non-nil, zero value otherwise.

### GetUidOk

`func (o *RefundIn) GetUidOk() (*string, bool)`

GetUidOk returns a tuple with the Uid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUid

`func (o *RefundIn) SetUid(v string)`

SetUid sets Uid field to given value.

### HasUid

`func (o *RefundIn) HasUid() bool`

HasUid returns a boolean if a field has been set.

### GetOrderId

`func (o *RefundIn) GetOrderId() string`

GetOrderId returns the OrderId field if non-nil, zero value otherwise.

### GetOrderIdOk

`func (o *RefundIn) GetOrderIdOk() (*string, bool)`

GetOrderIdOk returns a tuple with the OrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderId

`func (o *RefundIn) SetOrderId(v string)`

SetOrderId sets OrderId field to given value.


### GetAmount

`func (o *RefundIn) GetAmount() string`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *RefundIn) GetAmountOk() (*string, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *RefundIn) SetAmount(v string)`

SetAmount sets Amount field to given value.


### GetNote

`func (o *RefundIn) GetNote() string`

GetNote returns the Note field if non-nil, zero value otherwise.

### GetNoteOk

`func (o *RefundIn) GetNoteOk() (*string, bool)`

GetNoteOk returns a tuple with the Note field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNote

`func (o *RefundIn) SetNote(v string)`

SetNote sets Note field to given value.

### HasNote

`func (o *RefundIn) HasNote() bool`

HasNote returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


