# EstimateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BaseAmount** | **string** | Amount in source currency | 
**BaseCurrency** | **string** | Source currency code | 
**Rate** | **float32** | Exchange rate used for conversion | 
**ToAmount** | **string** | Converted amount in target currency | 
**ToCurrency** | **string** | Target currency code | 

## Methods

### NewEstimateResponse

`func NewEstimateResponse(baseAmount string, baseCurrency string, rate float32, toAmount string, toCurrency string, ) *EstimateResponse`

NewEstimateResponse instantiates a new EstimateResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEstimateResponseWithDefaults

`func NewEstimateResponseWithDefaults() *EstimateResponse`

NewEstimateResponseWithDefaults instantiates a new EstimateResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBaseAmount

`func (o *EstimateResponse) GetBaseAmount() string`

GetBaseAmount returns the BaseAmount field if non-nil, zero value otherwise.

### GetBaseAmountOk

`func (o *EstimateResponse) GetBaseAmountOk() (*string, bool)`

GetBaseAmountOk returns a tuple with the BaseAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseAmount

`func (o *EstimateResponse) SetBaseAmount(v string)`

SetBaseAmount sets BaseAmount field to given value.


### GetBaseCurrency

`func (o *EstimateResponse) GetBaseCurrency() string`

GetBaseCurrency returns the BaseCurrency field if non-nil, zero value otherwise.

### GetBaseCurrencyOk

`func (o *EstimateResponse) GetBaseCurrencyOk() (*string, bool)`

GetBaseCurrencyOk returns a tuple with the BaseCurrency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseCurrency

`func (o *EstimateResponse) SetBaseCurrency(v string)`

SetBaseCurrency sets BaseCurrency field to given value.


### GetRate

`func (o *EstimateResponse) GetRate() float32`

GetRate returns the Rate field if non-nil, zero value otherwise.

### GetRateOk

`func (o *EstimateResponse) GetRateOk() (*float32, bool)`

GetRateOk returns a tuple with the Rate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRate

`func (o *EstimateResponse) SetRate(v float32)`

SetRate sets Rate field to given value.


### GetToAmount

`func (o *EstimateResponse) GetToAmount() string`

GetToAmount returns the ToAmount field if non-nil, zero value otherwise.

### GetToAmountOk

`func (o *EstimateResponse) GetToAmountOk() (*string, bool)`

GetToAmountOk returns a tuple with the ToAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToAmount

`func (o *EstimateResponse) SetToAmount(v string)`

SetToAmount sets ToAmount field to given value.


### GetToCurrency

`func (o *EstimateResponse) GetToCurrency() string`

GetToCurrency returns the ToCurrency field if non-nil, zero value otherwise.

### GetToCurrencyOk

`func (o *EstimateResponse) GetToCurrencyOk() (*string, bool)`

GetToCurrencyOk returns a tuple with the ToCurrency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToCurrency

`func (o *EstimateResponse) SetToCurrency(v string)`

SetToCurrency sets ToCurrency field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


