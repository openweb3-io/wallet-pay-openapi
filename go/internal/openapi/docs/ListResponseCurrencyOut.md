# ListResponseCurrencyOut

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | [**[]CurrencyOut**](CurrencyOut.md) |  | 
**NextCursor** | Pointer to **string** |  | [optional] 
**PrevCursor** | Pointer to **string** |  | [optional] 
**HasNext** | Pointer to **bool** |  | [optional] 

## Methods

### NewListResponseCurrencyOut

`func NewListResponseCurrencyOut(items []CurrencyOut, ) *ListResponseCurrencyOut`

NewListResponseCurrencyOut instantiates a new ListResponseCurrencyOut object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListResponseCurrencyOutWithDefaults

`func NewListResponseCurrencyOutWithDefaults() *ListResponseCurrencyOut`

NewListResponseCurrencyOutWithDefaults instantiates a new ListResponseCurrencyOut object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItems

`func (o *ListResponseCurrencyOut) GetItems() []CurrencyOut`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *ListResponseCurrencyOut) GetItemsOk() (*[]CurrencyOut, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *ListResponseCurrencyOut) SetItems(v []CurrencyOut)`

SetItems sets Items field to given value.


### GetNextCursor

`func (o *ListResponseCurrencyOut) GetNextCursor() string`

GetNextCursor returns the NextCursor field if non-nil, zero value otherwise.

### GetNextCursorOk

`func (o *ListResponseCurrencyOut) GetNextCursorOk() (*string, bool)`

GetNextCursorOk returns a tuple with the NextCursor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextCursor

`func (o *ListResponseCurrencyOut) SetNextCursor(v string)`

SetNextCursor sets NextCursor field to given value.

### HasNextCursor

`func (o *ListResponseCurrencyOut) HasNextCursor() bool`

HasNextCursor returns a boolean if a field has been set.

### GetPrevCursor

`func (o *ListResponseCurrencyOut) GetPrevCursor() string`

GetPrevCursor returns the PrevCursor field if non-nil, zero value otherwise.

### GetPrevCursorOk

`func (o *ListResponseCurrencyOut) GetPrevCursorOk() (*string, bool)`

GetPrevCursorOk returns a tuple with the PrevCursor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrevCursor

`func (o *ListResponseCurrencyOut) SetPrevCursor(v string)`

SetPrevCursor sets PrevCursor field to given value.

### HasPrevCursor

`func (o *ListResponseCurrencyOut) HasPrevCursor() bool`

HasPrevCursor returns a boolean if a field has been set.

### GetHasNext

`func (o *ListResponseCurrencyOut) GetHasNext() bool`

GetHasNext returns the HasNext field if non-nil, zero value otherwise.

### GetHasNextOk

`func (o *ListResponseCurrencyOut) GetHasNextOk() (*bool, bool)`

GetHasNextOk returns a tuple with the HasNext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasNext

`func (o *ListResponseCurrencyOut) SetHasNext(v bool)`

SetHasNext sets HasNext field to given value.

### HasHasNext

`func (o *ListResponseCurrencyOut) HasHasNext() bool`

HasHasNext returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


