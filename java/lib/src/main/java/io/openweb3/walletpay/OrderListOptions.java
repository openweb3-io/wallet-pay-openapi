package io.openweb3.walletpay;

public class OrderListOptions extends ListOptions {
    private String walletId;
    private String status;
    private String currency;
    private String userId;
    private String creator;

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
        this.currency = currency;
    }

    public String getCurrency() {
        return currency;
    }

    public void setUserId(final String userId) {
        this.userId = userId;
    }

    public String getUserId() {
        return userId;
    }

    public void setCreator(final String creator) {
        this.creator = creator;
    }

    public String getCreator() {
        return creator;
    }

    public OrderListOptions walletId(final String walletId) {
        this.walletId = walletId;
        return this;
    }

    public OrderListOptions userId(final String userId) {
        this.userId = userId;
        return this;
    }

    public OrderListOptions currency(final String currency) {
        this.currency = currency;
        return this;
    }

    public OrderListOptions status(final String status) {
        this.status = status;
        return this;
    }

    public OrderListOptions creator(final String creator) {
        this.creator = creator;
        return this;
    }
}
