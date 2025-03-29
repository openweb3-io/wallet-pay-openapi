

# Order


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **String** | Amount | 
**createdAt** | **String** | Order creation time | 
**currency** | **String** | Currency symbol | 
**expiration** | **Integer** | Expiration time in seconds. If payment is not completed within the given time, the order will be automatically canceled | 
**expiredAt** | **String** | Order expiration time |  [optional]
**failedAt** | **String** | Order failure time |  [optional]
**failedMessage** | **String** | Error message when order fails |  [optional]
**id** | **String** | System unique ID of the order | 
**metadata** | **Map&lt;String, String&gt;** | Order metadata |  [optional]
**note** | **String** | Order description from merchant | 
**paidAt** | **String** | Order payment time |  [optional]
**status** | **String** | Order status enum | 
**uid** | **String** | External ID, the order ID in the merchant system |  [optional]
**userId** | **String** | ID of the user who made the payment |  [optional]
**walletId** | **String** | ID of the wallet used for payment | 



