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

/**
 * RefundOut
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-08-22T23:11:19.415718+08:00[Asia/Shanghai]")
public class RefundOut {
  public static final String SERIALIZED_NAME_ID = "id";
  @SerializedName(SERIALIZED_NAME_ID)
  private String id;

  public static final String SERIALIZED_NAME_UID = "uid";
  @SerializedName(SERIALIZED_NAME_UID)
  private String uid;

  public static final String SERIALIZED_NAME_ORDER_ID = "order_id";
  @SerializedName(SERIALIZED_NAME_ORDER_ID)
  private String orderId;

  public static final String SERIALIZED_NAME_CURRENCY = "currency";
  @SerializedName(SERIALIZED_NAME_CURRENCY)
  private String currency;

  public static final String SERIALIZED_NAME_AMOUNT = "amount";
  @SerializedName(SERIALIZED_NAME_AMOUNT)
  private String amount;

  /**
   * The refund&#39;s status
   */
  @JsonAdapter(StatusEnum.Adapter.class)
  public enum StatusEnum {
    PENDING("PENDING"),
    
    FAILED("FAILED"),
    
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

  public static final String SERIALIZED_NAME_NOTE = "note";
  @SerializedName(SERIALIZED_NAME_NOTE)
  private String note;

  public static final String SERIALIZED_NAME_FAILED_AT = "failed_at";
  @SerializedName(SERIALIZED_NAME_FAILED_AT)
  private OffsetDateTime failedAt;

  public static final String SERIALIZED_NAME_FAILED_MESSAGE = "failed_message";
  @SerializedName(SERIALIZED_NAME_FAILED_MESSAGE)
  private String failedMessage;

  public static final String SERIALIZED_NAME_CREATED_AT = "created_at";
  @SerializedName(SERIALIZED_NAME_CREATED_AT)
  private OffsetDateTime createdAt;

  public static final String SERIALIZED_NAME_COMPLETED_AT = "completed_at";
  @SerializedName(SERIALIZED_NAME_COMPLETED_AT)
  private OffsetDateTime completedAt;


  public RefundOut id(String id) {
    
    this.id = id;
    return this;
  }

   /**
   * The refund&#39;s ID
   * @return id
  **/
  @ApiModelProperty(example = "fdcefb20-1994-417a-8c6a-0648b841c266", required = true, value = "The refund's ID")

  public String getId() {
    return id;
  }


  public void setId(String id) {
    this.id = id;
  }


  public RefundOut uid(String uid) {
    
    this.uid = uid;
    return this;
  }

   /**
   * The refund&#39;s UID
   * @return uid
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "unique-identifier", value = "The refund's UID")

  public String getUid() {
    return uid;
  }


  public void setUid(String uid) {
    this.uid = uid;
  }


  public RefundOut orderId(String orderId) {
    
    this.orderId = orderId;
    return this;
  }

   /**
   * The relative order id
   * @return orderId
  **/
  @ApiModelProperty(example = "fdcefb20-1994-417a-8c6a-0648b841c266", required = true, value = "The relative order id")

  public String getOrderId() {
    return orderId;
  }


  public void setOrderId(String orderId) {
    this.orderId = orderId;
  }


  public RefundOut currency(String currency) {
    
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


  public RefundOut amount(String amount) {
    
    this.amount = amount;
    return this;
  }

   /**
   * Big integer string representation, whose meaning is the value of absolute floating-point number multiplied by the corresponding decimals of the cryptocurrency.
   * @return amount
  **/
  @ApiModelProperty(example = "12345000", required = true, value = "Big integer string representation, whose meaning is the value of absolute floating-point number multiplied by the corresponding decimals of the cryptocurrency.")

  public String getAmount() {
    return amount;
  }


  public void setAmount(String amount) {
    this.amount = amount;
  }


  public RefundOut status(StatusEnum status) {
    
    this.status = status;
    return this;
  }

   /**
   * The refund&#39;s status
   * @return status
  **/
  @ApiModelProperty(required = true, value = "The refund's status")

  public StatusEnum getStatus() {
    return status;
  }


  public void setStatus(StatusEnum status) {
    this.status = status;
  }


  public RefundOut note(String note) {
    
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


  public RefundOut failedAt(OffsetDateTime failedAt) {
    
    this.failedAt = failedAt;
    return this;
  }

   /**
   * The refund&#39;s failure time
   * @return failedAt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "The refund's failure time")

  public OffsetDateTime getFailedAt() {
    return failedAt;
  }


  public void setFailedAt(OffsetDateTime failedAt) {
    this.failedAt = failedAt;
  }


  public RefundOut failedMessage(String failedMessage) {
    
    this.failedMessage = failedMessage;
    return this;
  }

   /**
   * The message when refund failed
   * @return failedMessage
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "The message when refund failed")

  public String getFailedMessage() {
    return failedMessage;
  }


  public void setFailedMessage(String failedMessage) {
    this.failedMessage = failedMessage;
  }


  public RefundOut createdAt(OffsetDateTime createdAt) {
    
    this.createdAt = createdAt;
    return this;
  }

   /**
   * The refund&#39;s created time
   * @return createdAt
  **/
  @ApiModelProperty(required = true, value = "The refund's created time")

  public OffsetDateTime getCreatedAt() {
    return createdAt;
  }


  public void setCreatedAt(OffsetDateTime createdAt) {
    this.createdAt = createdAt;
  }


  public RefundOut completedAt(OffsetDateTime completedAt) {
    
    this.completedAt = completedAt;
    return this;
  }

   /**
   * The refund&#39;s completed time
   * @return completedAt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "The refund's completed time")

  public OffsetDateTime getCompletedAt() {
    return completedAt;
  }


  public void setCompletedAt(OffsetDateTime completedAt) {
    this.completedAt = completedAt;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RefundOut refundOut = (RefundOut) o;
    return Objects.equals(this.id, refundOut.id) &&
        Objects.equals(this.uid, refundOut.uid) &&
        Objects.equals(this.orderId, refundOut.orderId) &&
        Objects.equals(this.currency, refundOut.currency) &&
        Objects.equals(this.amount, refundOut.amount) &&
        Objects.equals(this.status, refundOut.status) &&
        Objects.equals(this.note, refundOut.note) &&
        Objects.equals(this.failedAt, refundOut.failedAt) &&
        Objects.equals(this.failedMessage, refundOut.failedMessage) &&
        Objects.equals(this.createdAt, refundOut.createdAt) &&
        Objects.equals(this.completedAt, refundOut.completedAt);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, uid, orderId, currency, amount, status, note, failedAt, failedMessage, createdAt, completedAt);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RefundOut {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    uid: ").append(toIndentedString(uid)).append("\n");
    sb.append("    orderId: ").append(toIndentedString(orderId)).append("\n");
    sb.append("    currency: ").append(toIndentedString(currency)).append("\n");
    sb.append("    amount: ").append(toIndentedString(amount)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    note: ").append(toIndentedString(note)).append("\n");
    sb.append("    failedAt: ").append(toIndentedString(failedAt)).append("\n");
    sb.append("    failedMessage: ").append(toIndentedString(failedMessage)).append("\n");
    sb.append("    createdAt: ").append(toIndentedString(createdAt)).append("\n");
    sb.append("    completedAt: ").append(toIndentedString(completedAt)).append("\n");
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

