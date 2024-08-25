# CurrencyPair

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BaseCurrency** | **string** | The code of the currency you are converting from. | 
**ToCurrency** | **string** | The code of the currency you are converting to. | 

## Methods

### NewCurrencyPair

`func NewCurrencyPair(baseCurrency string, toCurrency string, ) *CurrencyPair`

NewCurrencyPair instantiates a new CurrencyPair object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCurrencyPairWithDefaults

`func NewCurrencyPairWithDefaults() *CurrencyPair`

NewCurrencyPairWithDefaults instantiates a new CurrencyPair object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBaseCurrency

`func (o *CurrencyPair) GetBaseCurrency() string`

GetBaseCurrency returns the BaseCurrency field if non-nil, zero value otherwise.

### GetBaseCurrencyOk

`func (o *CurrencyPair) GetBaseCurrencyOk() (*string, bool)`

GetBaseCurrencyOk returns a tuple with the BaseCurrency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseCurrency

`func (o *CurrencyPair) SetBaseCurrency(v string)`

SetBaseCurrency sets BaseCurrency field to given value.


### GetToCurrency

`func (o *CurrencyPair) GetToCurrency() string`

GetToCurrency returns the ToCurrency field if non-nil, zero value otherwise.

### GetToCurrencyOk

`func (o *CurrencyPair) GetToCurrencyOk() (*string, bool)`

GetToCurrencyOk returns a tuple with the ToCurrency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToCurrency

`func (o *CurrencyPair) SetToCurrency(v string)`

SetToCurrency sets ToCurrency field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


