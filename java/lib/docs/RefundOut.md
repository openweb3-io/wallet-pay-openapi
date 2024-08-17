

# RefundOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The refund&#39;s ID | 
**uid** | **String** | The refund&#39;s UID |  [optional]
**orderId** | **String** | The relative order id | 
**currency** | **String** | Currency code | 
**amount** | **String** | Big integer string representation, whose meaning is the value of absolute floating-point number multiplied by the corresponding decimals of the cryptocurrency. | 
**status** | [**StatusEnum**](#StatusEnum) | The refund&#39;s status | 
**note** | **String** | Optional refund note |  [optional]
**failedAt** | **OffsetDateTime** | The refund&#39;s failure time |  [optional]
**failedMessage** | **String** | The message when refund failed |  [optional]
**createdAt** | **OffsetDateTime** | The refund&#39;s created time | 
**completedAt** | **OffsetDateTime** | The refund&#39;s completed time |  [optional]



## Enum: StatusEnum

Name | Value
---- | -----
PENDING | &quot;PENDING&quot;
FAILED | &quot;FAILED&quot;
COMPLETED | &quot;COMPLETED&quot;



