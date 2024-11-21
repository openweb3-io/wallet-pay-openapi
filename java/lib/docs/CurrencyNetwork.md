

# CurrencyNetwork


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | Currency code | 
**network** | **String** | blockchain network | 
**name** | **String** | Currency name | 
**minDepositAmount** | **String** | Big integer string representation. The min amount to deposit. | 
**minWithdrawAmount** | **String** | Big integer string representation. The min amount to withdraw. | 
**maxWithdrawAmount** | **String** | Big integer string representation. The max amount to withdraw. | 
**canDeposit** | **Boolean** | Is it posible to deposit on blockchain | 
**canWithdraw** | **Boolean** | Is it posible to withdraw to blockchain | 
**canTransfer** | **Boolean** | Is it posible to transfer in custody wallet | 
**contractAddress** | **String** | Contract address |  [optional]
**needMemo** | **Boolean** | Indicates if additional Memo information is required, as needed by some currencies or exchanges | 
**minFee** | **String** | Minimum transaction fee | 
**maxFee** | **String** | Maximum transaction fee | 
**minFeeForCtAddr** | **String** | Minimum transaction fee for contract addresses | 
**maxFeeForCtAddr** | **String** | Maximum transaction fee for contract addresses | 
**minConfirmations** | **Integer** | Minimum number of confirmations required, indicating the number of block confirmations needed for a transaction to be considered valid |  [optional]
**minCollectAmount** | **String** | Minimum amount for collection, i.e., the minimum amount to aggregate small balances to a single address |  [optional]



