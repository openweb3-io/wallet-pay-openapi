package io.openweb3.walletpay;

public class OrderListOptions extends ListOptions {
    private String walletId;
    private String accountId;

    public void setWalletId(final String walletId) {
        this.walletId = walletId;
    }

    public String getWalletId() {
        return walletId;
    }

    public void setAccountId(final String accountId) {
        this.accountId = accountId;
    }
    public String getAccountId() {
        return accountId;
    }
}
