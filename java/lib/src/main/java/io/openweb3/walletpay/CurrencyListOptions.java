package io.openweb3.walletpay;

public class CurrencyListOptions {
    private boolean rated;
    private String cursor;
    private Integer limit;

    public void setRated(final boolean rated) {
        this.rated = rated;
    }

    public boolean getRated() {
        return rated;
    }


    public void setCursor(final String cursor) {
        this.cursor = cursor;
    }

    public String getCursor() {
        return cursor;
    }

    public void setLimit(final Integer limit) {
        this.limit = limit;
    }

    public Integer getLimit() {
        return limit;
    }

    public CurrencyListOptions rated(final boolean rated) {
        this.rated = rated;
        return this;
    }

    public CurrencyListOptions cursor(final String cursor) {
        this.cursor = cursor;
        return this;
    }

    public CurrencyListOptions limit(final Integer limit) {
        this.limit = limit;
        return this;
    }
}
