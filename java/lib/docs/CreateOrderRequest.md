

# CreateOrderRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **String** | Amount, supports decimal values | 
**currency** | **String** | Currency code. e.g.: USDT, TON, ETH | 
**expiration** | **Integer** | Expiration time in seconds. If payment is not completed within the given time, the order will be automatically canceled |  [optional]
**metadata** | **Map&lt;String, String&gt;** | Order metadata |  [optional]
**note** | **String** | Order description from merchant |  [optional]
**uid** | **String** | External ID, the order ID in the merchant system |  [optional]
**userId** | **String** | ID of the user who needs to make the payment | 



