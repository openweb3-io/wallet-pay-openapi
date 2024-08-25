package io.openweb3.walletpay;

public class RatesOptions {
    private String from;
    private String to_currency;
    private String base_amount;

    public void setFrom(final String from) {
        this.from = from;
    }

    public String getFrom() {
        return from;
    }


    public void setToCurrency(final String to_currency) {
        this.to_currency = to_currency;
    }


    public String getToCurrency() {
        return to_currency;
    }


    public void setBaseAmount(final String base_amount) {
        this.base_amount = base_amount;
    }


    public String getBaseAmount() {
        return base_amount;
    }
}
