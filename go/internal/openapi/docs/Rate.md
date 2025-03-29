# Rate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pair** | Pointer to [**CurrencyPair**](CurrencyPair.md) |  | [optional] 
**Rate** | **float32** | Exchange rate value | 

## Methods

### NewRate

`func NewRate(rate float32, ) *Rate`

NewRate instantiates a new Rate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRateWithDefaults

`func NewRateWithDefaults() *Rate`

NewRateWithDefaults instantiates a new Rate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPair

`func (o *Rate) GetPair() CurrencyPair`

GetPair returns the Pair field if non-nil, zero value otherwise.

### GetPairOk

`func (o *Rate) GetPairOk() (*CurrencyPair, bool)`

GetPairOk returns a tuple with the Pair field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPair

`func (o *Rate) SetPair(v CurrencyPair)`

SetPair sets Pair field to given value.

### HasPair

`func (o *Rate) HasPair() bool`

HasPair returns a boolean if a field has been set.

### GetRate

`func (o *Rate) GetRate() float32`

GetRate returns the Rate field if non-nil, zero value otherwise.

### GetRateOk

`func (o *Rate) GetRateOk() (*float32, bool)`

GetRateOk returns a tuple with the Rate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRate

`func (o *Rate) SetRate(v float32)`

SetRate sets Rate field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


