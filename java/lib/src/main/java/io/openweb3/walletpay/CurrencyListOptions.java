package io.openweb3.walletpay;

public class CurrencyListOptions extends ListOptions {
    private boolean rated;

    public void setRated(final boolean rated) {
        this.rated = rated;
    }

    public boolean getRated() {
        return rated;
    }
}
