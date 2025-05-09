/*
 * WalletPay API Documentation
 * This is a custody wallet pay service openapi server.
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package io.openweb3.walletpay.models;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.openweb3.walletpay.models.Refund;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * PageRefund
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class PageRefund {
  public static final String SERIALIZED_NAME_ITEMS = "items";
  @SerializedName(SERIALIZED_NAME_ITEMS)
  private List<Refund> items = new ArrayList<>();

  public static final String SERIALIZED_NAME_TOTAL = "total";
  @SerializedName(SERIALIZED_NAME_TOTAL)
  private Integer total;


  public PageRefund items(List<Refund> items) {
    
    this.items = items;
    return this;
  }

  public PageRefund addItemsItem(Refund itemsItem) {
    this.items.add(itemsItem);
    return this;
  }

   /**
   * List of items in the current page
   * @return items
  **/
  @ApiModelProperty(required = true, value = "List of items in the current page")

  public List<Refund> getItems() {
    return items;
  }


  public void setItems(List<Refund> items) {
    this.items = items;
  }


  public PageRefund total(Integer total) {
    
    this.total = total;
    return this;
  }

   /**
   * Total number of items across all pages
   * @return total
  **/
  @ApiModelProperty(required = true, value = "Total number of items across all pages")

  public Integer getTotal() {
    return total;
  }


  public void setTotal(Integer total) {
    this.total = total;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PageRefund pageRefund = (PageRefund) o;
    return Objects.equals(this.items, pageRefund.items) &&
        Objects.equals(this.total, pageRefund.total);
  }

  @Override
  public int hashCode() {
    return Objects.hash(items, total);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PageRefund {\n");
    sb.append("    items: ").append(toIndentedString(items)).append("\n");
    sb.append("    total: ").append(toIndentedString(total)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

