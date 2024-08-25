# RateData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pair** | [**CurrencyPair**](CurrencyPair.md) |  | 
**Rate** | **float32** | The current exchange rate for the specified pair | 

## Methods

### NewRateData

`func NewRateData(pair CurrencyPair, rate float32, ) *RateData`

NewRateData instantiates a new RateData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRateDataWithDefaults

`func NewRateDataWithDefaults() *RateData`

NewRateDataWithDefaults instantiates a new RateData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPair

`func (o *RateData) GetPair() CurrencyPair`

GetPair returns the Pair field if non-nil, zero value otherwise.

### GetPairOk

`func (o *RateData) GetPairOk() (*CurrencyPair, bool)`

GetPairOk returns a tuple with the Pair field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPair

`func (o *RateData) SetPair(v CurrencyPair)`

SetPair sets Pair field to given value.


### GetRate

`func (o *RateData) GetRate() float32`

GetRate returns the Rate field if non-nil, zero value otherwise.

### GetRateOk

`func (o *RateData) GetRateOk() (*float32, bool)`

GetRateOk returns a tuple with the Rate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRate

`func (o *RateData) SetRate(v float32)`

SetRate sets Rate field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


