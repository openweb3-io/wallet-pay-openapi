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
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;

/**
 * Refund
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class Refund {
  public static final String SERIALIZED_NAME_AMOUNT = "amount";
  @SerializedName(SERIALIZED_NAME_AMOUNT)
  private String amount;

  public static final String SERIALIZED_NAME_COMPLETED_AT = "completed_at";
  @SerializedName(SERIALIZED_NAME_COMPLETED_AT)
  private String completedAt;

  public static final String SERIALIZED_NAME_CREATED_AT = "created_at";
  @SerializedName(SERIALIZED_NAME_CREATED_AT)
  private String createdAt;

  public static final String SERIALIZED_NAME_CURRENCY = "currency";
  @SerializedName(SERIALIZED_NAME_CURRENCY)
  private String currency;

  public static final String SERIALIZED_NAME_FAILED_AT = "failed_at";
  @SerializedName(SERIALIZED_NAME_FAILED_AT)
  private String failedAt;

  public static final String SERIALIZED_NAME_FAILED_MESSAGE = "failed_message";
  @SerializedName(SERIALIZED_NAME_FAILED_MESSAGE)
  private String failedMessage;

  public static final String SERIALIZED_NAME_ID = "id";
  @SerializedName(SERIALIZED_NAME_ID)
  private String id;

  public static final String SERIALIZED_NAME_NOTE = "note";
  @SerializedName(SERIALIZED_NAME_NOTE)
  private String note;

  public static final String SERIALIZED_NAME_ORDER_ID = "order_id";
  @SerializedName(SERIALIZED_NAME_ORDER_ID)
  private String orderId;

  public static final String SERIALIZED_NAME_STATUS = "status";
  @SerializedName(SERIALIZED_NAME_STATUS)
  private String status;

  public static final String SERIALIZED_NAME_UID = "uid";
  @SerializedName(SERIALIZED_NAME_UID)
  private String uid;


  public Refund amount(String amount) {
    
    this.amount = amount;
    return this;
  }

   /**
   * Amount being refunded
   * @return amount
  **/
  @ApiModelProperty(required = true, value = "Amount being refunded")

  public String getAmount() {
    return amount;
  }


  public void setAmount(String amount) {
    this.amount = amount;
  }


  public Refund completedAt(String completedAt) {
    
    this.completedAt = completedAt;
    return this;
  }

   /**
   * Time when the refund was completed
   * @return completedAt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Time when the refund was completed")

  public String getCompletedAt() {
    return completedAt;
  }


  public void setCompletedAt(String completedAt) {
    this.completedAt = completedAt;
  }


  public Refund createdAt(String createdAt) {
    
    this.createdAt = createdAt;
    return this;
  }

   /**
   * Time when the refund was created
   * @return createdAt
  **/
  @ApiModelProperty(required = true, value = "Time when the refund was created")

  public String getCreatedAt() {
    return createdAt;
  }


  public void setCreatedAt(String createdAt) {
    this.createdAt = createdAt;
  }


  public Refund currency(String currency) {
    
    this.currency = currency;
    return this;
  }

   /**
   * Currency code of the refund
   * @return currency
  **/
  @ApiModelProperty(required = true, value = "Currency code of the refund")

  public String getCurrency() {
    return currency;
  }


  public void setCurrency(String currency) {
    this.currency = currency;
  }


  public Refund failedAt(String failedAt) {
    
    this.failedAt = failedAt;
    return this;
  }

   /**
   * Time when the refund failed
   * @return failedAt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Time when the refund failed")

  public String getFailedAt() {
    return failedAt;
  }


  public void setFailedAt(String failedAt) {
    this.failedAt = failedAt;
  }


  public Refund failedMessage(String failedMessage) {
    
    this.failedMessage = failedMessage;
    return this;
  }

   /**
   * Error message when refund fails
   * @return failedMessage
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Error message when refund fails")

  public String getFailedMessage() {
    return failedMessage;
  }


  public void setFailedMessage(String failedMessage) {
    this.failedMessage = failedMessage;
  }


  public Refund id(String id) {
    
    this.id = id;
    return this;
  }

   /**
   * System unique ID of the refund
   * @return id
  **/
  @ApiModelProperty(required = true, value = "System unique ID of the refund")

  public String getId() {
    return id;
  }


  public void setId(String id) {
    this.id = id;
  }


  public Refund note(String note) {
    
    this.note = note;
    return this;
  }

   /**
   * Refund description from merchant
   * @return note
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Refund description from merchant")

  public String getNote() {
    return note;
  }


  public void setNote(String note) {
    this.note = note;
  }


  public Refund orderId(String orderId) {
    
    this.orderId = orderId;
    return this;
  }

   /**
   * ID of the order being refunded
   * @return orderId
  **/
  @ApiModelProperty(required = true, value = "ID of the order being refunded")

  public String getOrderId() {
    return orderId;
  }


  public void setOrderId(String orderId) {
    this.orderId = orderId;
  }


  public Refund status(String status) {
    
    this.status = status;
    return this;
  }

   /**
   * The status of the refund
   * @return status
  **/
  @ApiModelProperty(required = true, value = "The status of the refund")

  public String getStatus() {
    return status;
  }


  public void setStatus(String status) {
    this.status = status;
  }


  public Refund uid(String uid) {
    
    this.uid = uid;
    return this;
  }

   /**
   * External ID, the refund ID in the merchant system
   * @return uid
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "External ID, the refund ID in the merchant system")

  public String getUid() {
    return uid;
  }


  public void setUid(String uid) {
    this.uid = uid;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Refund refund = (Refund) o;
    return Objects.equals(this.amount, refund.amount) &&
        Objects.equals(this.completedAt, refund.completedAt) &&
        Objects.equals(this.createdAt, refund.createdAt) &&
        Objects.equals(this.currency, refund.currency) &&
        Objects.equals(this.failedAt, refund.failedAt) &&
        Objects.equals(this.failedMessage, refund.failedMessage) &&
        Objects.equals(this.id, refund.id) &&
        Objects.equals(this.note, refund.note) &&
        Objects.equals(this.orderId, refund.orderId) &&
        Objects.equals(this.status, refund.status) &&
        Objects.equals(this.uid, refund.uid);
  }

  @Override
  public int hashCode() {
    return Objects.hash(amount, completedAt, createdAt, currency, failedAt, failedMessage, id, note, orderId, status, uid);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Refund {\n");
    sb.append("    amount: ").append(toIndentedString(amount)).append("\n");
    sb.append("    completedAt: ").append(toIndentedString(completedAt)).append("\n");
    sb.append("    createdAt: ").append(toIndentedString(createdAt)).append("\n");
    sb.append("    currency: ").append(toIndentedString(currency)).append("\n");
    sb.append("    failedAt: ").append(toIndentedString(failedAt)).append("\n");
    sb.append("    failedMessage: ").append(toIndentedString(failedMessage)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    note: ").append(toIndentedString(note)).append("\n");
    sb.append("    orderId: ").append(toIndentedString(orderId)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    uid: ").append(toIndentedString(uid)).append("\n");
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

