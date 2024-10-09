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
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * OrderIn
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-10-10T02:53:44.256449+08:00[Asia/Shanghai]")
public class OrderIn {
  public static final String SERIALIZED_NAME_UID = "uid";
  @SerializedName(SERIALIZED_NAME_UID)
  private String uid;

  public static final String SERIALIZED_NAME_CURRENCY = "currency";
  @SerializedName(SERIALIZED_NAME_CURRENCY)
  private String currency;

  public static final String SERIALIZED_NAME_AMOUNT = "amount";
  @SerializedName(SERIALIZED_NAME_AMOUNT)
  private String amount;

  public static final String SERIALIZED_NAME_NOTE = "note";
  @SerializedName(SERIALIZED_NAME_NOTE)
  private String note;

  public static final String SERIALIZED_NAME_METADATA = "metadata";
  @SerializedName(SERIALIZED_NAME_METADATA)
  private Map<String, String> metadata = null;

  public static final String SERIALIZED_NAME_EXPIRATION = "expiration";
  @SerializedName(SERIALIZED_NAME_EXPIRATION)
  private Integer expiration;


  public OrderIn uid(String uid) {
    
    this.uid = uid;
    return this;
  }

   /**
   * Optional unique identifier for the order
   * @return uid
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "unique-order-identifier", value = "Optional unique identifier for the order")

  public String getUid() {
    return uid;
  }


  public void setUid(String uid) {
    this.uid = uid;
  }


  public OrderIn currency(String currency) {
    
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


  public OrderIn amount(String amount) {
    
    this.amount = amount;
    return this;
  }

   /**
   * Big integer string representation, whose meaning is the value of absolute floating-point number multiplied by the corresponding decimals of the cryptocurrency.
   * @return amount
  **/
  @ApiModelProperty(example = "0.0012345", required = true, value = "Big integer string representation, whose meaning is the value of absolute floating-point number multiplied by the corresponding decimals of the cryptocurrency.")

  public String getAmount() {
    return amount;
  }


  public void setAmount(String amount) {
    this.amount = amount;
  }


  public OrderIn note(String note) {
    
    this.note = note;
    return this;
  }

   /**
   * Optional order note
   * @return note
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "note example", value = "Optional order note")

  public String getNote() {
    return note;
  }


  public void setNote(String note) {
    this.note = note;
  }


  public OrderIn metadata(Map<String, String> metadata) {
    
    this.metadata = metadata;
    return this;
  }

  public OrderIn putMetadataItem(String key, String metadataItem) {
    if (this.metadata == null) {
      this.metadata = new HashMap<>();
    }
    this.metadata.put(key, metadataItem);
    return this;
  }

   /**
   * Optional metadata
   * @return metadata
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Optional metadata")

  public Map<String, String> getMetadata() {
    return metadata;
  }


  public void setMetadata(Map<String, String> metadata) {
    this.metadata = metadata;
  }


  public OrderIn expiration(Integer expiration) {
    
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


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    OrderIn orderIn = (OrderIn) o;
    return Objects.equals(this.uid, orderIn.uid) &&
        Objects.equals(this.currency, orderIn.currency) &&
        Objects.equals(this.amount, orderIn.amount) &&
        Objects.equals(this.note, orderIn.note) &&
        Objects.equals(this.metadata, orderIn.metadata) &&
        Objects.equals(this.expiration, orderIn.expiration);
  }

  @Override
  public int hashCode() {
    return Objects.hash(uid, currency, amount, note, metadata, expiration);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class OrderIn {\n");
    sb.append("    uid: ").append(toIndentedString(uid)).append("\n");
    sb.append("    currency: ").append(toIndentedString(currency)).append("\n");
    sb.append("    amount: ").append(toIndentedString(amount)).append("\n");
    sb.append("    note: ").append(toIndentedString(note)).append("\n");
    sb.append("    metadata: ").append(toIndentedString(metadata)).append("\n");
    sb.append("    expiration: ").append(toIndentedString(expiration)).append("\n");
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

