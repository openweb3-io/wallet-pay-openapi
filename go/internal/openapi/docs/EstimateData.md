# EstimateData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**From** | **string** | The base currency. | 
**BaseAmount** | **int32** | The base currency amount. | 
**ToCurrency** | **string** | The target currency | 
**ToAmount** | **int32** | The estimated amount in the target currency | 
**Rate** | **float32** | The conversion rate from the base currency to the target currency. | 

## Methods

### NewEstimateData

`func NewEstimateData(from string, baseAmount int32, toCurrency string, toAmount int32, rate float32, ) *EstimateData`

NewEstimateData instantiates a new EstimateData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEstimateDataWithDefaults

`func NewEstimateDataWithDefaults() *EstimateData`

NewEstimateDataWithDefaults instantiates a new EstimateData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFrom

`func (o *EstimateData) GetFrom() string`

GetFrom returns the From field if non-nil, zero value otherwise.

### GetFromOk

`func (o *EstimateData) GetFromOk() (*string, bool)`

GetFromOk returns a tuple with the From field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrom

`func (o *EstimateData) SetFrom(v string)`

SetFrom sets From field to given value.


### GetBaseAmount

`func (o *EstimateData) GetBaseAmount() int32`

GetBaseAmount returns the BaseAmount field if non-nil, zero value otherwise.

### GetBaseAmountOk

`func (o *EstimateData) GetBaseAmountOk() (*int32, bool)`

GetBaseAmountOk returns a tuple with the BaseAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseAmount

`func (o *EstimateData) SetBaseAmount(v int32)`

SetBaseAmount sets BaseAmount field to given value.


### GetToCurrency

`func (o *EstimateData) GetToCurrency() string`

GetToCurrency returns the ToCurrency field if non-nil, zero value otherwise.

### GetToCurrencyOk

`func (o *EstimateData) GetToCurrencyOk() (*string, bool)`

GetToCurrencyOk returns a tuple with the ToCurrency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToCurrency

`func (o *EstimateData) SetToCurrency(v string)`

SetToCurrency sets ToCurrency field to given value.


### GetToAmount

`func (o *EstimateData) GetToAmount() int32`

GetToAmount returns the ToAmount field if non-nil, zero value otherwise.

### GetToAmountOk

`func (o *EstimateData) GetToAmountOk() (*int32, bool)`

GetToAmountOk returns a tuple with the ToAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToAmount

`func (o *EstimateData) SetToAmount(v int32)`

SetToAmount sets ToAmount field to given value.


### GetRate

`func (o *EstimateData) GetRate() float32`

GetRate returns the Rate field if non-nil, zero value otherwise.

### GetRateOk

`func (o *EstimateData) GetRateOk() (*float32, bool)`

GetRateOk returns a tuple with the Rate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRate

`func (o *EstimateData) SetRate(v float32)`

SetRate sets Rate field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


