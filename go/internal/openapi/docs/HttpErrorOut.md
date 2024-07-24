# HttpErrorOut

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Msg** | **string** |  | 
**Code** | Pointer to **NullableInt32** |  | [optional] 

## Methods

### NewHttpErrorOut

`func NewHttpErrorOut(msg string, ) *HttpErrorOut`

NewHttpErrorOut instantiates a new HttpErrorOut object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHttpErrorOutWithDefaults

`func NewHttpErrorOutWithDefaults() *HttpErrorOut`

NewHttpErrorOutWithDefaults instantiates a new HttpErrorOut object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMsg

`func (o *HttpErrorOut) GetMsg() string`

GetMsg returns the Msg field if non-nil, zero value otherwise.

### GetMsgOk

`func (o *HttpErrorOut) GetMsgOk() (*string, bool)`

GetMsgOk returns a tuple with the Msg field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMsg

`func (o *HttpErrorOut) SetMsg(v string)`

SetMsg sets Msg field to given value.


### GetCode

`func (o *HttpErrorOut) GetCode() int32`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *HttpErrorOut) GetCodeOk() (*int32, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *HttpErrorOut) SetCode(v int32)`

SetCode sets Code field to given value.

### HasCode

`func (o *HttpErrorOut) HasCode() bool`

HasCode returns a boolean if a field has been set.

### SetCodeNil

`func (o *HttpErrorOut) SetCodeNil(b bool)`

 SetCodeNil sets the value for Code to be an explicit nil

### UnsetCode
`func (o *HttpErrorOut) UnsetCode()`

UnsetCode ensures that no value is present for Code, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


