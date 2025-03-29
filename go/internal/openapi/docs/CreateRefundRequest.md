# CreateRefundRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | **string** | Amount to refund | 
**Note** | Pointer to **string** | Refund description from merchant | [optional] 
**OrderId** | **string** | ID of the order to be refunded | 
**Uid** | Pointer to **string** | External ID, the refund ID in the merchant system | [optional] 

## Methods

### NewCreateRefundRequest

`func NewCreateRefundRequest(amount string, orderId string, ) *CreateRefundRequest`

NewCreateRefundRequest instantiates a new CreateRefundRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateRefundRequestWithDefaults

`func NewCreateRefundRequestWithDefaults() *CreateRefundRequest`

NewCreateRefundRequestWithDefaults instantiates a new CreateRefundRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *CreateRefundRequest) GetAmount() string`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *CreateRefundRequest) GetAmountOk() (*string, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *CreateRefundRequest) SetAmount(v string)`

SetAmount sets Amount field to given value.


### GetNote

`func (o *CreateRefundRequest) GetNote() string`

GetNote returns the Note field if non-nil, zero value otherwise.

### GetNoteOk

`func (o *CreateRefundRequest) GetNoteOk() (*string, bool)`

GetNoteOk returns a tuple with the Note field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNote

`func (o *CreateRefundRequest) SetNote(v string)`

SetNote sets Note field to given value.

### HasNote

`func (o *CreateRefundRequest) HasNote() bool`

HasNote returns a boolean if a field has been set.

### GetOrderId

`func (o *CreateRefundRequest) GetOrderId() string`

GetOrderId returns the OrderId field if non-nil, zero value otherwise.

### GetOrderIdOk

`func (o *CreateRefundRequest) GetOrderIdOk() (*string, bool)`

GetOrderIdOk returns a tuple with the OrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderId

`func (o *CreateRefundRequest) SetOrderId(v string)`

SetOrderId sets OrderId field to given value.


### GetUid

`func (o *CreateRefundRequest) GetUid() string`

GetUid returns the Uid field if non-nil, zero value otherwise.

### GetUidOk

`func (o *CreateRefundRequest) GetUidOk() (*string, bool)`

GetUidOk returns a tuple with the Uid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUid

`func (o *CreateRefundRequest) SetUid(v string)`

SetUid sets Uid field to given value.

### HasUid

`func (o *CreateRefundRequest) HasUid() bool`

HasUid returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


