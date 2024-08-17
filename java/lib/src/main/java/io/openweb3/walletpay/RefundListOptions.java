package io.openweb3.walletpay;

public class RefundListOptions extends ListOptions {
    private String orderId;

    public void setOrderId(final String orderId) {
        this.orderId = orderId;
    }

    public String getOrderId() {
        return orderId;
    }
}
