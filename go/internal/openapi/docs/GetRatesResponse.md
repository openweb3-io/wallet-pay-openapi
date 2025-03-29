# GetRatesResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Rates** | [**[]Rate**](Rate.md) | List of exchange rates for requested currency pairs | 

## Methods

### NewGetRatesResponse

`func NewGetRatesResponse(rates []Rate, ) *GetRatesResponse`

NewGetRatesResponse instantiates a new GetRatesResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetRatesResponseWithDefaults

`func NewGetRatesResponseWithDefaults() *GetRatesResponse`

NewGetRatesResponseWithDefaults instantiates a new GetRatesResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRates

`func (o *GetRatesResponse) GetRates() []Rate`

GetRates returns the Rates field if non-nil, zero value otherwise.

### GetRatesOk

`func (o *GetRatesResponse) GetRatesOk() (*[]Rate, bool)`

GetRatesOk returns a tuple with the Rates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRates

`func (o *GetRatesResponse) SetRates(v []Rate)`

SetRates sets Rates field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


