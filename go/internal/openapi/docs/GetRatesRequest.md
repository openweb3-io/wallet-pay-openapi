# GetRatesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pairs** | [**[]CurrencyPair**](CurrencyPair.md) | List of currency pairs to get rates for | 

## Methods

### NewGetRatesRequest

`func NewGetRatesRequest(pairs []CurrencyPair, ) *GetRatesRequest`

NewGetRatesRequest instantiates a new GetRatesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetRatesRequestWithDefaults

`func NewGetRatesRequestWithDefaults() *GetRatesRequest`

NewGetRatesRequestWithDefaults instantiates a new GetRatesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPairs

`func (o *GetRatesRequest) GetPairs() []CurrencyPair`

GetPairs returns the Pairs field if non-nil, zero value otherwise.

### GetPairsOk

`func (o *GetRatesRequest) GetPairsOk() (*[]CurrencyPair, bool)`

GetPairsOk returns a tuple with the Pairs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPairs

`func (o *GetRatesRequest) SetPairs(v []CurrencyPair)`

SetPairs sets Pairs field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


