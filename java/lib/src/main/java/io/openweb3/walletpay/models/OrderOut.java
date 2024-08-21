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
import java.time.OffsetDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * OrderOut
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-08-21T19:29:02.160382+08:00[Asia/Shanghai]")
public class OrderOut {
  public static final String SERIALIZED_NAME_ID = "id";
  @SerializedName(SERIALIZED_NAME_ID)
  private String id;

  public static final String SERIALIZED_NAME_UID = "uid";
  @SerializedName(SERIALIZED_NAME_UID)
  private String uid;

  public static final String SERIALIZED_NAME_CURRENCY = "currency";
  @SerializedName(SERIALIZED_NAME_CURRENCY)
  private String currency;

  public static final String SERIALIZED_NAME_AMOUNT = "amount";
  @SerializedName(SERIALIZED_NAME_AMOUNT)
  private String amount;

  public static final String SERIALIZED_NAME_USER_ID = "user_id";
  @SerializedName(SERIALIZED_NAME_USER_ID)
  private String userId;

  public static final String SERIALIZED_NAME_WALLET_ID = "wallet_id";
  @SerializedName(SERIALIZED_NAME_WALLET_ID)
  private String walletId;

  public static final String SERIALIZED_NAME_NOTE = "note";
  @SerializedName(SERIALIZED_NAME_NOTE)
  private String note;

  public static final String SERIALIZED_NAME_METADATA = "metadata";
  @SerializedName(SERIALIZED_NAME_METADATA)
  private Map<String, String> metadata = null;

  public static final String SERIALIZED_NAME_EXPIRATION = "expiration";
  @SerializedName(SERIALIZED_NAME_EXPIRATION)
  private Integer expiration;

  /**
   * The order&#39;s status
   */
  @JsonAdapter(StatusEnum.Adapter.class)
  public enum StatusEnum {
    PENDING("PENDING"),
    
    PAID("PAID"),
    
    FAILED("FAILED"),
    
    EXPIRED("EXPIRED"),
    
    COMPLETED("COMPLETED");

    private String value;

    StatusEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static StatusEnum fromValue(String value) {
      for (StatusEnum b : StatusEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }

    public static class Adapter extends TypeAdapter<StatusEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final StatusEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public StatusEnum read(final JsonReader jsonReader) throws IOException {
        String value =  jsonReader.nextString();
        return StatusEnum.fromValue(value);
      }
    }
  }

  public static final String SERIALIZED_NAME_STATUS = "status";
  @SerializedName(SERIALIZED_NAME_STATUS)
  private StatusEnum status;

  public static final String SERIALIZED_NAME_FAILED_MESSAGE = "failed_message";
  @SerializedName(SERIALIZED_NAME_FAILED_MESSAGE)
  private String failedMessage;

  public static final String SERIALIZED_NAME_CREATED_AT = "created_at";
  @SerializedName(SERIALIZED_NAME_CREATED_AT)
  private OffsetDateTime createdAt;

  public static final String SERIALIZED_NAME_PAYED_AT = "payed_at";
  @SerializedName(SERIALIZED_NAME_PAYED_AT)
  private OffsetDateTime payedAt;

  public static final String SERIALIZED_NAME_EXPIRED_AT = "expired_at";
  @SerializedName(SERIALIZED_NAME_EXPIRED_AT)
  private OffsetDateTime expiredAt;

  public static final String SERIALIZED_NAME_FAILED_AT = "failed_at";
  @SerializedName(SERIALIZED_NAME_FAILED_AT)
  private OffsetDateTime failedAt;


  public OrderOut id(String id) {
    
    this.id = id;
    return this;
  }

   /**
   * The order&#39;s ID
   * @return id
  **/
  @ApiModelProperty(example = "1brOrx2ZWZBpBUvZwXKQmoEYga2", required = true, value = "The order's ID")

  public String getId() {
    return id;
  }


  public void setId(String id) {
    this.id = id;
  }


  public OrderOut uid(String uid) {
    
    this.uid = uid;
    return this;
  }

   /**
   * The order&#39;s UID
   * @return uid
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "unique-order-identifier", value = "The order's UID")

  public String getUid() {
    return uid;
  }


  public void setUid(String uid) {
    this.uid = uid;
  }


  public OrderOut currency(String currency) {
    
    this.currency = currency;
    return this;
  }

   /**
   * Currency code
   * @return currency
  **/
  @ApiModelProperty(example = "USDT", required = true, value = "Currency code")

  public String getCurrency() {
    return currency;
  }


  public void setCurrency(String currency) {
    this.currency = currency;
  }


  public OrderOut amount(String amount) {
    
    this.amount = amount;
    return this;
  }

   /**
   * Big integer string representation, whose meaning is the value of absolute floating-point number multiplied by the corresponding decimals of the cryptocurrency.
   * @return amount
  **/
  @ApiModelProperty(example = "1", required = true, value = "Big integer string representation, whose meaning is the value of absolute floating-point number multiplied by the corresponding decimals of the cryptocurrency.")

  public String getAmount() {
    return amount;
  }


  public void setAmount(String amount) {
    this.amount = amount;
  }


  public OrderOut userId(String userId) {
    
    this.userId = userId;
    return this;
  }

   /**
   * The order&#39;s creator
   * @return userId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "The order's creator")

  public String getUserId() {
    return userId;
  }


  public void setUserId(String userId) {
    this.userId = userId;
  }


  public OrderOut walletId(String walletId) {
    
    this.walletId = walletId;
    return this;
  }

   /**
   * wallet id
   * @return walletId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "wallet_id", value = "wallet id")

  public String getWalletId() {
    return walletId;
  }


  public void setWalletId(String walletId) {
    this.walletId = walletId;
  }


  public OrderOut note(String note) {
    
    this.note = note;
    return this;
  }

   /**
   * Optional order notes
   * @return note
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "note example", value = "Optional order notes")

  public String getNote() {
    return note;
  }


  public void setNote(String note) {
    this.note = note;
  }


  public OrderOut metadata(Map<String, String> metadata) {
    
    this.metadata = metadata;
    return this;
  }

  public OrderOut putMetadataItem(String key, String metadataItem) {
    if (this.metadata == null) {
      this.metadata = new HashMap<>();
    }
    this.metadata.put(key, metadataItem);
    return this;
  }

   /**
   * Get metadata
   * @return metadata
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Map<String, String> getMetadata() {
    return metadata;
  }


  public void setMetadata(Map<String, String> metadata) {
    this.metadata = metadata;
  }


  public OrderOut expiration(Integer expiration) {
    
    this.expiration = expiration;
    return this;
  }

   /**
   * The expiration seconds
   * @return expiration
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "600", value = "The expiration seconds")

  public Integer getExpiration() {
    return expiration;
  }


  public void setExpiration(Integer expiration) {
    this.expiration = expiration;
  }


  public OrderOut status(StatusEnum status) {
    
    this.status = status;
    return this;
  }

   /**
   * The order&#39;s status
   * @return status
  **/
  @ApiModelProperty(required = true, value = "The order's status")

  public StatusEnum getStatus() {
    return status;
  }


  public void setStatus(StatusEnum status) {
    this.status = status;
  }


  public OrderOut failedMessage(String failedMessage) {
    
    this.failedMessage = failedMessage;
    return this;
  }

   /**
   * The message when order failed
   * @return failedMessage
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "The message when order failed")

  public String getFailedMessage() {
    return failedMessage;
  }


  public void setFailedMessage(String failedMessage) {
    this.failedMessage = failedMessage;
  }


  public OrderOut createdAt(OffsetDateTime createdAt) {
    
    this.createdAt = createdAt;
    return this;
  }

   /**
   * The order&#39;s creation time
   * @return createdAt
  **/
  @ApiModelProperty(required = true, value = "The order's creation time")

  public OffsetDateTime getCreatedAt() {
    return createdAt;
  }


  public void setCreatedAt(OffsetDateTime createdAt) {
    this.createdAt = createdAt;
  }


  public OrderOut payedAt(OffsetDateTime payedAt) {
    
    this.payedAt = payedAt;
    return this;
  }

   /**
   * The order&#39;s paid time
   * @return payedAt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "The order's paid time")

  public OffsetDateTime getPayedAt() {
    return payedAt;
  }


  public void setPayedAt(OffsetDateTime payedAt) {
    this.payedAt = payedAt;
  }


  public OrderOut expiredAt(OffsetDateTime expiredAt) {
    
    this.expiredAt = expiredAt;
    return this;
  }

   /**
   * The order&#39;s expiration time
   * @return expiredAt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "The order's expiration time")

  public OffsetDateTime getExpiredAt() {
    return expiredAt;
  }


  public void setExpiredAt(OffsetDateTime expiredAt) {
    this.expiredAt = expiredAt;
  }


  public OrderOut failedAt(OffsetDateTime failedAt) {
    
    this.failedAt = failedAt;
    return this;
  }

   /**
   * The order&#39;s failure time
   * @return failedAt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "The order's failure time")

  public OffsetDateTime getFailedAt() {
    return failedAt;
  }


  public void setFailedAt(OffsetDateTime failedAt) {
    this.failedAt = failedAt;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    OrderOut orderOut = (OrderOut) o;
    return Objects.equals(this.id, orderOut.id) &&
        Objects.equals(this.uid, orderOut.uid) &&
        Objects.equals(this.currency, orderOut.currency) &&
        Objects.equals(this.amount, orderOut.amount) &&
        Objects.equals(this.userId, orderOut.userId) &&
        Objects.equals(this.walletId, orderOut.walletId) &&
        Objects.equals(this.note, orderOut.note) &&
        Objects.equals(this.metadata, orderOut.metadata) &&
        Objects.equals(this.expiration, orderOut.expiration) &&
        Objects.equals(this.status, orderOut.status) &&
        Objects.equals(this.failedMessage, orderOut.failedMessage) &&
        Objects.equals(this.createdAt, orderOut.createdAt) &&
        Objects.equals(this.payedAt, orderOut.payedAt) &&
        Objects.equals(this.expiredAt, orderOut.expiredAt) &&
        Objects.equals(this.failedAt, orderOut.failedAt);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, uid, currency, amount, userId, walletId, note, metadata, expiration, status, failedMessage, createdAt, payedAt, expiredAt, failedAt);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class OrderOut {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    uid: ").append(toIndentedString(uid)).append("\n");
    sb.append("    currency: ").append(toIndentedString(currency)).append("\n");
    sb.append("    amount: ").append(toIndentedString(amount)).append("\n");
    sb.append("    userId: ").append(toIndentedString(userId)).append("\n");
    sb.append("    walletId: ").append(toIndentedString(walletId)).append("\n");
    sb.append("    note: ").append(toIndentedString(note)).append("\n");
    sb.append("    metadata: ").append(toIndentedString(metadata)).append("\n");
    sb.append("    expiration: ").append(toIndentedString(expiration)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    failedMessage: ").append(toIndentedString(failedMessage)).append("\n");
    sb.append("    createdAt: ").append(toIndentedString(createdAt)).append("\n");
    sb.append("    payedAt: ").append(toIndentedString(payedAt)).append("\n");
    sb.append("    expiredAt: ").append(toIndentedString(expiredAt)).append("\n");
    sb.append("    failedAt: ").append(toIndentedString(failedAt)).append("\n");
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

