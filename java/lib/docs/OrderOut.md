

# OrderOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The order&#39;s ID | 
**uid** | **String** | The order&#39;s UID |  [optional]
**currency** | **String** | Currency code | 
**amount** | **String** | Big integer string representation, whose meaning is the value of absolute floating-point number multiplied by the corresponding decimals of the cryptocurrency. | 
**userId** | **String** | The order&#39;s creator |  [optional]
**walletId** | **String** | wallet id |  [optional]
**note** | **String** | Optional order notes |  [optional]
**metadata** | **Map&lt;String, String&gt;** |  |  [optional]
**expiration** | **Integer** | The expiration seconds |  [optional]
**status** | [**StatusEnum**](#StatusEnum) | The order&#39;s status | 
**failedMessage** | **String** | The message when order failed |  [optional]
**createdAt** | **OffsetDateTime** | The order&#39;s creation time | 
**payedAt** | **OffsetDateTime** | The order&#39;s paid time |  [optional]
**expiredAt** | **OffsetDateTime** | The order&#39;s expiration time |  [optional]
**failedAt** | **OffsetDateTime** | The order&#39;s failure time |  [optional]



## Enum: StatusEnum

Name | Value
---- | -----
PENDING | &quot;PENDING&quot;
PAID | &quot;PAID&quot;
FAILED | &quot;FAILED&quot;
EXPIRED | &quot;EXPIRED&quot;
COMPLETED | &quot;COMPLETED&quot;



