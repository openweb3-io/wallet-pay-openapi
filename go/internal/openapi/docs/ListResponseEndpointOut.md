# ListResponseEndpointOut

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | Pointer to [**[]EndpointOut**](EndpointOut.md) |  | [optional] 
**PrevCursor** | Pointer to **string** |  | [optional] 
**NextCursor** | Pointer to **string** |  | [optional] 

## Methods

### NewListResponseEndpointOut

`func NewListResponseEndpointOut() *ListResponseEndpointOut`

NewListResponseEndpointOut instantiates a new ListResponseEndpointOut object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListResponseEndpointOutWithDefaults

`func NewListResponseEndpointOutWithDefaults() *ListResponseEndpointOut`

NewListResponseEndpointOutWithDefaults instantiates a new ListResponseEndpointOut object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItems

`func (o *ListResponseEndpointOut) GetItems() []EndpointOut`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *ListResponseEndpointOut) GetItemsOk() (*[]EndpointOut, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *ListResponseEndpointOut) SetItems(v []EndpointOut)`

SetItems sets Items field to given value.

### HasItems

`func (o *ListResponseEndpointOut) HasItems() bool`

HasItems returns a boolean if a field has been set.

### GetPrevCursor

`func (o *ListResponseEndpointOut) GetPrevCursor() string`

GetPrevCursor returns the PrevCursor field if non-nil, zero value otherwise.

### GetPrevCursorOk

`func (o *ListResponseEndpointOut) GetPrevCursorOk() (*string, bool)`

GetPrevCursorOk returns a tuple with the PrevCursor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrevCursor

`func (o *ListResponseEndpointOut) SetPrevCursor(v string)`

SetPrevCursor sets PrevCursor field to given value.

### HasPrevCursor

`func (o *ListResponseEndpointOut) HasPrevCursor() bool`

HasPrevCursor returns a boolean if a field has been set.

### GetNextCursor

`func (o *ListResponseEndpointOut) GetNextCursor() string`

GetNextCursor returns the NextCursor field if non-nil, zero value otherwise.

### GetNextCursorOk

`func (o *ListResponseEndpointOut) GetNextCursorOk() (*string, bool)`

GetNextCursorOk returns a tuple with the NextCursor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextCursor

`func (o *ListResponseEndpointOut) SetNextCursor(v string)`

SetNextCursor sets NextCursor field to given value.

### HasNextCursor

`func (o *ListResponseEndpointOut) HasNextCursor() bool`

HasNextCursor returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


