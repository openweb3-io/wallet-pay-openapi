

# CreateOrderRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **String** | Amount, supports decimal values | 
**creator** | **String** | The identifier of the user who created the order |  [optional]
**currency** | **String** | Currency code. e.g.: USDT, TON, ETH | 
**expiration** | **Integer** | Expiration time in seconds. If payment is not completed within the given time, the order will be automatically canceled |  [optional]
**metadata** | **Map&lt;String, String&gt;** | Order metadata |  [optional]
**note** | **String** | Order description from merchant |  [optional]
**uid** | **String** | External ID, the order ID in the merchant system |  [optional]



