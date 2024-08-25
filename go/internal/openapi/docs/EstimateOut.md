# EstimateOut

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**From** | **string** | The base currency. | 
**BaseAmount** | **string** | The base currency amount. | 
**ToCurrency** | **string** | The target currency | 
**ToAmount** | **string** | The estimated amount in the target currency | 
**Rate** | **float32** | The conversion rate from the base currency to the target currency. | 

## Methods

### NewEstimateOut

`func NewEstimateOut(from string, baseAmount string, toCurrency string, toAmount string, rate float32, ) *EstimateOut`

NewEstimateOut instantiates a new EstimateOut object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEstimateOutWithDefaults

`func NewEstimateOutWithDefaults() *EstimateOut`

NewEstimateOutWithDefaults instantiates a new EstimateOut object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFrom

`func (o *EstimateOut) GetFrom() string`

GetFrom returns the From field if non-nil, zero value otherwise.

### GetFromOk

`func (o *EstimateOut) GetFromOk() (*string, bool)`

GetFromOk returns a tuple with the From field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrom

`func (o *EstimateOut) SetFrom(v string)`

SetFrom sets From field to given value.


### GetBaseAmount

`func (o *EstimateOut) GetBaseAmount() string`

GetBaseAmount returns the BaseAmount field if non-nil, zero value otherwise.

### GetBaseAmountOk

`func (o *EstimateOut) GetBaseAmountOk() (*string, bool)`

GetBaseAmountOk returns a tuple with the BaseAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseAmount

`func (o *EstimateOut) SetBaseAmount(v string)`

SetBaseAmount sets BaseAmount field to given value.


### GetToCurrency

`func (o *EstimateOut) GetToCurrency() string`

GetToCurrency returns the ToCurrency field if non-nil, zero value otherwise.

### GetToCurrencyOk

`func (o *EstimateOut) GetToCurrencyOk() (*string, bool)`

GetToCurrencyOk returns a tuple with the ToCurrency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToCurrency

`func (o *EstimateOut) SetToCurrency(v string)`

SetToCurrency sets ToCurrency field to given value.


### GetToAmount

`func (o *EstimateOut) GetToAmount() string`

GetToAmount returns the ToAmount field if non-nil, zero value otherwise.

### GetToAmountOk

`func (o *EstimateOut) GetToAmountOk() (*string, bool)`

GetToAmountOk returns a tuple with the ToAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToAmount

`func (o *EstimateOut) SetToAmount(v string)`

SetToAmount sets ToAmount field to given value.


### GetRate

`func (o *EstimateOut) GetRate() float32`

GetRate returns the Rate field if non-nil, zero value otherwise.

### GetRateOk

`func (o *EstimateOut) GetRateOk() (*float32, bool)`

GetRateOk returns a tuple with the Rate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRate

`func (o *EstimateOut) SetRate(v float32)`

SetRate sets Rate field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


