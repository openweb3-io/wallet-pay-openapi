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
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Order
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class Order {
  public static final String SERIALIZED_NAME_AMOUNT = "amount";
  @SerializedName(SERIALIZED_NAME_AMOUNT)
  private String amount;

  public static final String SERIALIZED_NAME_CREATED_AT = "created_at";
  @SerializedName(SERIALIZED_NAME_CREATED_AT)
  private String createdAt;

  public static final String SERIALIZED_NAME_CREATOR = "creator";
  @SerializedName(SERIALIZED_NAME_CREATOR)
  private String creator;

  public static final String SERIALIZED_NAME_CURRENCY = "currency";
  @SerializedName(SERIALIZED_NAME_CURRENCY)
  private String currency;

  public static final String SERIALIZED_NAME_EXPIRATION = "expiration";
  @SerializedName(SERIALIZED_NAME_EXPIRATION)
  private Integer expiration;

  public static final String SERIALIZED_NAME_EXPIRED_AT = "expired_at";
  @SerializedName(SERIALIZED_NAME_EXPIRED_AT)
  private String expiredAt;

  public static final String SERIALIZED_NAME_FAILED_AT = "failed_at";
  @SerializedName(SERIALIZED_NAME_FAILED_AT)
  private String failedAt;

  public static final String SERIALIZED_NAME_FAILED_MESSAGE = "failed_message";
  @SerializedName(SERIALIZED_NAME_FAILED_MESSAGE)
  private String failedMessage;

  public static final String SERIALIZED_NAME_ID = "id";
  @SerializedName(SERIALIZED_NAME_ID)
  private String id;

  public static final String SERIALIZED_NAME_METADATA = "metadata";
  @SerializedName(SERIALIZED_NAME_METADATA)
  private Map<String, String> metadata = null;

  public static final String SERIALIZED_NAME_NOTE = "note";
  @SerializedName(SERIALIZED_NAME_NOTE)
  private String note;

  public static final String SERIALIZED_NAME_PAID_AT = "paid_at";
  @SerializedName(SERIALIZED_NAME_PAID_AT)
  private String paidAt;

  public static final String SERIALIZED_NAME_STATUS = "status";
  @SerializedName(SERIALIZED_NAME_STATUS)
  private String status;

  public static final String SERIALIZED_NAME_UID = "uid";
  @SerializedName(SERIALIZED_NAME_UID)
  private String uid;

  public static final String SERIALIZED_NAME_USER_ID = "user_id";
  @SerializedName(SERIALIZED_NAME_USER_ID)
  private String userId;

  public static final String SERIALIZED_NAME_WALLET_ID = "wallet_id";
  @SerializedName(SERIALIZED_NAME_WALLET_ID)
  private String walletId;


  public Order amount(String amount) {
    
    this.amount = amount;
    return this;
  }

   /**
   * Amount
   * @return amount
  **/
  @ApiModelProperty(required = true, value = "Amount")

  public String getAmount() {
    return amount;
  }


  public void setAmount(String amount) {
    this.amount = amount;
  }


  public Order createdAt(String createdAt) {
    
    this.createdAt = createdAt;
    return this;
  }

   /**
   * Order creation time
   * @return createdAt
  **/
  @ApiModelProperty(required = true, value = "Order creation time")

  public String getCreatedAt() {
    return createdAt;
  }


  public void setCreatedAt(String createdAt) {
    this.createdAt = createdAt;
  }


  public Order creator(String creator) {
    
    this.creator = creator;
    return this;
  }

   /**
   * The identifier of the user who created the order
   * @return creator
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "The identifier of the user who created the order")

  public String getCreator() {
    return creator;
  }


  public void setCreator(String creator) {
    this.creator = creator;
  }


  public Order currency(String currency) {
    
    this.currency = currency;
    return this;
  }

   /**
   * Currency symbol
   * @return currency
  **/
  @ApiModelProperty(required = true, value = "Currency symbol")

  public String getCurrency() {
    return currency;
  }


  public void setCurrency(String currency) {
    this.currency = currency;
  }


  public Order expiration(Integer expiration) {
    
    this.expiration = expiration;
    return this;
  }

   /**
   * Expiration time in seconds. If payment is not completed within the given time, the order will be automatically canceled
   * @return expiration
  **/
  @ApiModelProperty(required = true, value = "Expiration time in seconds. If payment is not completed within the given time, the order will be automatically canceled")

  public Integer getExpiration() {
    return expiration;
  }


  public void setExpiration(Integer expiration) {
    this.expiration = expiration;
  }


  public Order expiredAt(String expiredAt) {
    
    this.expiredAt = expiredAt;
    return this;
  }

   /**
   * Order expiration time
   * @return expiredAt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Order expiration time")

  public String getExpiredAt() {
    return expiredAt;
  }


  public void setExpiredAt(String expiredAt) {
    this.expiredAt = expiredAt;
  }


  public Order failedAt(String failedAt) {
    
    this.failedAt = failedAt;
    return this;
  }

   /**
   * Order failure time
   * @return failedAt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Order failure time")

  public String getFailedAt() {
    return failedAt;
  }


  public void setFailedAt(String failedAt) {
    this.failedAt = failedAt;
  }


  public Order failedMessage(String failedMessage) {
    
    this.failedMessage = failedMessage;
    return this;
  }

   /**
   * Error message when order fails
   * @return failedMessage
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Error message when order fails")

  public String getFailedMessage() {
    return failedMessage;
  }


  public void setFailedMessage(String failedMessage) {
    this.failedMessage = failedMessage;
  }


  public Order id(String id) {
    
    this.id = id;
    return this;
  }

   /**
   * System unique ID of the order
   * @return id
  **/
  @ApiModelProperty(required = true, value = "System unique ID of the order")

  public String getId() {
    return id;
  }


  public void setId(String id) {
    this.id = id;
  }


  public Order metadata(Map<String, String> metadata) {
    
    this.metadata = metadata;
    return this;
  }

  public Order putMetadataItem(String key, String metadataItem) {
    if (this.metadata == null) {
      this.metadata = new HashMap<>();
    }
    this.metadata.put(key, metadataItem);
    return this;
  }

   /**
   * Order metadata
   * @return metadata
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Order metadata")

  public Map<String, String> getMetadata() {
    return metadata;
  }


  public void setMetadata(Map<String, String> metadata) {
    this.metadata = metadata;
  }


  public Order note(String note) {
    
    this.note = note;
    return this;
  }

   /**
   * Order description from merchant
   * @return note
  **/
  @ApiModelProperty(required = true, value = "Order description from merchant")

  public String getNote() {
    return note;
  }


  public void setNote(String note) {
    this.note = note;
  }


  public Order paidAt(String paidAt) {
    
    this.paidAt = paidAt;
    return this;
  }

   /**
   * Order payment time
   * @return paidAt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Order payment time")

  public String getPaidAt() {
    return paidAt;
  }


  public void setPaidAt(String paidAt) {
    this.paidAt = paidAt;
  }


  public Order status(String status) {
    
    this.status = status;
    return this;
  }

   /**
   * Order status enum
   * @return status
  **/
  @ApiModelProperty(required = true, value = "Order status enum")

  public String getStatus() {
    return status;
  }


  public void setStatus(String status) {
    this.status = status;
  }


  public Order uid(String uid) {
    
    this.uid = uid;
    return this;
  }

   /**
   * External ID, the order ID in the merchant system
   * @return uid
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "External ID, the order ID in the merchant system")

  public String getUid() {
    return uid;
  }


  public void setUid(String uid) {
    this.uid = uid;
  }


  public Order userId(String userId) {
    
    this.userId = userId;
    return this;
  }

   /**
   * ID of the user who made the payment
   * @return userId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "ID of the user who made the payment")

  public String getUserId() {
    return userId;
  }


  public void setUserId(String userId) {
    this.userId = userId;
  }


  public Order walletId(String walletId) {
    
    this.walletId = walletId;
    return this;
  }

   /**
   * ID of the wallet used for payment
   * @return walletId
  **/
  @ApiModelProperty(required = true, value = "ID of the wallet used for payment")

  public String getWalletId() {
    return walletId;
  }


  public void setWalletId(String walletId) {
    this.walletId = walletId;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Order order = (Order) o;
    return Objects.equals(this.amount, order.amount) &&
        Objects.equals(this.createdAt, order.createdAt) &&
        Objects.equals(this.creator, order.creator) &&
        Objects.equals(this.currency, order.currency) &&
        Objects.equals(this.expiration, order.expiration) &&
        Objects.equals(this.expiredAt, order.expiredAt) &&
        Objects.equals(this.failedAt, order.failedAt) &&
        Objects.equals(this.failedMessage, order.failedMessage) &&
        Objects.equals(this.id, order.id) &&
        Objects.equals(this.metadata, order.metadata) &&
        Objects.equals(this.note, order.note) &&
        Objects.equals(this.paidAt, order.paidAt) &&
        Objects.equals(this.status, order.status) &&
        Objects.equals(this.uid, order.uid) &&
        Objects.equals(this.userId, order.userId) &&
        Objects.equals(this.walletId, order.walletId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(amount, createdAt, creator, currency, expiration, expiredAt, failedAt, failedMessage, id, metadata, note, paidAt, status, uid, userId, walletId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Order {\n");
    sb.append("    amount: ").append(toIndentedString(amount)).append("\n");
    sb.append("    createdAt: ").append(toIndentedString(createdAt)).append("\n");
    sb.append("    creator: ").append(toIndentedString(creator)).append("\n");
    sb.append("    currency: ").append(toIndentedString(currency)).append("\n");
    sb.append("    expiration: ").append(toIndentedString(expiration)).append("\n");
    sb.append("    expiredAt: ").append(toIndentedString(expiredAt)).append("\n");
    sb.append("    failedAt: ").append(toIndentedString(failedAt)).append("\n");
    sb.append("    failedMessage: ").append(toIndentedString(failedMessage)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    metadata: ").append(toIndentedString(metadata)).append("\n");
    sb.append("    note: ").append(toIndentedString(note)).append("\n");
    sb.append("    paidAt: ").append(toIndentedString(paidAt)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    uid: ").append(toIndentedString(uid)).append("\n");
    sb.append("    userId: ").append(toIndentedString(userId)).append("\n");
    sb.append("    walletId: ").append(toIndentedString(walletId)).append("\n");
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

