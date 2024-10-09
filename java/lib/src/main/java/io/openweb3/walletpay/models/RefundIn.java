/*
 * Wallet-Pay API Documentations
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
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
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;

/**
 * RefundIn
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-10-10T02:53:44.256449+08:00[Asia/Shanghai]")
public class RefundIn {
  public static final String SERIALIZED_NAME_UID = "uid";
  @SerializedName(SERIALIZED_NAME_UID)
  private String uid;

  public static final String SERIALIZED_NAME_ORDER_ID = "order_id";
  @SerializedName(SERIALIZED_NAME_ORDER_ID)
  private String orderId;

  public static final String SERIALIZED_NAME_AMOUNT = "amount";
  @SerializedName(SERIALIZED_NAME_AMOUNT)
  private String amount;

  public static final String SERIALIZED_NAME_NOTE = "note";
  @SerializedName(SERIALIZED_NAME_NOTE)
  private String note;


  public RefundIn uid(String uid) {
    
    this.uid = uid;
    return this;
  }

   /**
   * Optional unique identifier for the refund
   * @return uid
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "unique-identifier", value = "Optional unique identifier for the refund")

  public String getUid() {
    return uid;
  }


  public void setUid(String uid) {
    this.uid = uid;
  }


  public RefundIn orderId(String orderId) {
    
    this.orderId = orderId;
    return this;
  }

   /**
   * The order&#39;s ID
   * @return orderId
  **/
  @ApiModelProperty(example = "fdcefb20-1994-417a-8c6a-0648b841c266", required = true, value = "The order's ID")

  public String getOrderId() {
    return orderId;
  }


  public void setOrderId(String orderId) {
    this.orderId = orderId;
  }


  public RefundIn amount(String amount) {
    
    this.amount = amount;
    return this;
  }

   /**
   * Big integer string representation, whose meaning is the value of absolute floating-point number multiplied by the corresponding decimals of the cryptocurrency.
   * @return amount
  **/
  @ApiModelProperty(example = "123450000", required = true, value = "Big integer string representation, whose meaning is the value of absolute floating-point number multiplied by the corresponding decimals of the cryptocurrency.")

  public String getAmount() {
    return amount;
  }


  public void setAmount(String amount) {
    this.amount = amount;
  }


  public RefundIn note(String note) {
    
    this.note = note;
    return this;
  }

   /**
   * Optional refund note
   * @return note
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "note example", value = "Optional refund note")

  public String getNote() {
    return note;
  }


  public void setNote(String note) {
    this.note = note;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RefundIn refundIn = (RefundIn) o;
    return Objects.equals(this.uid, refundIn.uid) &&
        Objects.equals(this.orderId, refundIn.orderId) &&
        Objects.equals(this.amount, refundIn.amount) &&
        Objects.equals(this.note, refundIn.note);
  }

  @Override
  public int hashCode() {
    return Objects.hash(uid, orderId, amount, note);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RefundIn {\n");
    sb.append("    uid: ").append(toIndentedString(uid)).append("\n");
    sb.append("    orderId: ").append(toIndentedString(orderId)).append("\n");
    sb.append("    amount: ").append(toIndentedString(amount)).append("\n");
    sb.append("    note: ").append(toIndentedString(note)).append("\n");
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

