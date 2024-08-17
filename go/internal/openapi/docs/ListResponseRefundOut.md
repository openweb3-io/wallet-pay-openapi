# ListResponseRefundOut

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | [**[]RefundOut**](RefundOut.md) |  | 
**Total** | Pointer to **int32** |  | [optional] 

## Methods

### NewListResponseRefundOut

`func NewListResponseRefundOut(items []RefundOut, ) *ListResponseRefundOut`

NewListResponseRefundOut instantiates a new ListResponseRefundOut object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListResponseRefundOutWithDefaults

`func NewListResponseRefundOutWithDefaults() *ListResponseRefundOut`

NewListResponseRefundOutWithDefaults instantiates a new ListResponseRefundOut object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItems

`func (o *ListResponseRefundOut) GetItems() []RefundOut`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *ListResponseRefundOut) GetItemsOk() (*[]RefundOut, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *ListResponseRefundOut) SetItems(v []RefundOut)`

SetItems sets Items field to given value.


### GetTotal

`func (o *ListResponseRefundOut) GetTotal() int32`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *ListResponseRefundOut) GetTotalOk() (*int32, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *ListResponseRefundOut) SetTotal(v int32)`

SetTotal sets Total field to given value.

### HasTotal

`func (o *ListResponseRefundOut) HasTotal() bool`

HasTotal returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


