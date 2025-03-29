package io.openweb3.walletpay;

public class OrderListOptions extends ListOptions {
    private String walletId;
    private String status;
    private String currency;

    public void setWalletId(final String walletId) {
        this.walletId = walletId;
    }
    public String getWalletId() {
        return walletId;
    }

    public void setStatus(final String status) {
        this.status = status;
    }
    public String getStatus() {
        return status;
    }

    public void setCurrency(final String currency) {
        this.currency= currency;
    }
    public String getCurrency() {
        return currency;
    }

    public OrderListOptions walletId(final String walletId) {
        this.walletId= walletId;
        return this;
    }

    public OrderListOptions currency(final String currency) {
        this.currency= currency;
        return this;
    }

    public OrderListOptions status(final String status) {
        this.status= status;
        return this;
    }
}
