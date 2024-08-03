package io.openweb3.walletpay;

public class ListOptions {
    private static final int DEFAULT_SIZE = 50;

    private Integer page;
    private Integer size = DEFAULT_SIZE;

	public ListOptions() {
	}

	public <T extends ListOptions> T page(final Integer page) {
		this.page = page;
		return (T) this;
	}

	public <T extends ListOptions> T  size(final Integer size) {
		this.size = size;
		return (T) this;
	}

	public void setPage(final Integer page) {
		this.page = page;
	}

	public void setSize(final Integer size) {
		this.size = size;
	}

	public Integer getPage() {
		return page;
	}

	public Integer getSize() {
		return size;
	}
}
