# ListResponseOrderOut

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | [**[]OrderOut**](OrderOut.md) |  | 
**Total** | Pointer to **int32** |  | [optional] 

## Methods

### NewListResponseOrderOut

`func NewListResponseOrderOut(items []OrderOut, ) *ListResponseOrderOut`

NewListResponseOrderOut instantiates a new ListResponseOrderOut object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListResponseOrderOutWithDefaults

`func NewListResponseOrderOutWithDefaults() *ListResponseOrderOut`

NewListResponseOrderOutWithDefaults instantiates a new ListResponseOrderOut object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItems

`func (o *ListResponseOrderOut) GetItems() []OrderOut`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *ListResponseOrderOut) GetItemsOk() (*[]OrderOut, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *ListResponseOrderOut) SetItems(v []OrderOut)`

SetItems sets Items field to given value.


### GetTotal

`func (o *ListResponseOrderOut) GetTotal() int32`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *ListResponseOrderOut) GetTotalOk() (*int32, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *ListResponseOrderOut) SetTotal(v int32)`

SetTotal sets Total field to given value.

### HasTotal

`func (o *ListResponseOrderOut) HasTotal() bool`

HasTotal returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


