# PageOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | [**[]Order**](Order.md) | List of items in the current page | 
**Total** | **int32** | Total number of items across all pages | 

## Methods

### NewPageOrder

`func NewPageOrder(items []Order, total int32, ) *PageOrder`

NewPageOrder instantiates a new PageOrder object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPageOrderWithDefaults

`func NewPageOrderWithDefaults() *PageOrder`

NewPageOrderWithDefaults instantiates a new PageOrder object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItems

`func (o *PageOrder) GetItems() []Order`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *PageOrder) GetItemsOk() (*[]Order, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *PageOrder) SetItems(v []Order)`

SetItems sets Items field to given value.


### GetTotal

`func (o *PageOrder) GetTotal() int32`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *PageOrder) GetTotalOk() (*int32, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *PageOrder) SetTotal(v int32)`

SetTotal sets Total field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


