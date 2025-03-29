package io.openweb3.walletpay;


public class EndpointListOptions  {
    private String cursor;
    private Integer limit;

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

    public EndpointListOptions cursor(final String cursor) {
        this.cursor = cursor;
        return this;
    }

    public EndpointListOptions limit(final Integer limit) {
        this.limit = limit;
        return this;
    }
}
