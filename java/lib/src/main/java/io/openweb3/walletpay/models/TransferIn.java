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
import java.util.ArrayList;
import java.util.List;

/**
 * TransferIn
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-11-21T19:23:02.216639+08:00[Asia/Shanghai]")
public class TransferIn {
  public static final String SERIALIZED_NAME_TO_WALLET_ID = "to_wallet_id";
  @SerializedName(SERIALIZED_NAME_TO_WALLET_ID)
  private String toWalletId;

  public static final String SERIALIZED_NAME_CURRENCY = "currency";
  @SerializedName(SERIALIZED_NAME_CURRENCY)
  private String currency;

  public static final String SERIALIZED_NAME_AMOUNT = "amount";
  @SerializedName(SERIALIZED_NAME_AMOUNT)
  private String amount;

  public static final String SERIALIZED_NAME_AUTO_COMMIT = "auto_commit";
  @SerializedName(SERIALIZED_NAME_AUTO_COMMIT)
  private Boolean autoCommit;

  public static final String SERIALIZED_NAME_DESCRIPTION = "description";
  @SerializedName(SERIALIZED_NAME_DESCRIPTION)
  private String description;

  public static final String SERIALIZED_NAME_TAGS = "tags";
  @SerializedName(SERIALIZED_NAME_TAGS)
  private List<String> tags = null;


  public TransferIn toWalletId(String toWalletId) {
    
    this.toWalletId = toWalletId;
    return this;
  }

   /**
   * the target wallet id
   * @return toWalletId
  **/
  @ApiModelProperty(example = "7e5c8e13-0573-472e-9e34-fe779c618fcf", required = true, value = "the target wallet id")

  public String getToWalletId() {
    return toWalletId;
  }


  public void setToWalletId(String toWalletId) {
    this.toWalletId = toWalletId;
  }


  public TransferIn currency(String currency) {
    
    this.currency = currency;
    return this;
  }

   /**
   * currency code
   * @return currency
  **/
  @ApiModelProperty(example = "USDT", required = true, value = "currency code")

  public String getCurrency() {
    return currency;
  }


  public void setCurrency(String currency) {
    this.currency = currency;
  }


  public TransferIn amount(String amount) {
    
    this.amount = amount;
    return this;
  }

   /**
   * big integer string representation
   * @return amount
  **/
  @ApiModelProperty(example = "10000", required = true, value = "big integer string representation")

  public String getAmount() {
    return amount;
  }


  public void setAmount(String amount) {
    this.amount = amount;
  }


  public TransferIn autoCommit(Boolean autoCommit) {
    
    this.autoCommit = autoCommit;
    return this;
  }

   /**
   * auto commit, default is true
   * @return autoCommit
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "true", value = "auto commit, default is true")

  public Boolean getAutoCommit() {
    return autoCommit;
  }


  public void setAutoCommit(Boolean autoCommit) {
    this.autoCommit = autoCommit;
  }


  public TransferIn description(String description) {
    
    this.description = description;
    return this;
  }

   /**
   * transfer description
   * @return description
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Distribute prizes", value = "transfer description")

  public String getDescription() {
    return description;
  }


  public void setDescription(String description) {
    this.description = description;
  }


  public TransferIn tags(List<String> tags) {
    
    this.tags = tags;
    return this;
  }

  public TransferIn addTagsItem(String tagsItem) {
    if (this.tags == null) {
      this.tags = new ArrayList<>();
    }
    this.tags.add(tagsItem);
    return this;
  }

   /**
   * transfer tags
   * @return tags
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "transfer tags")

  public List<String> getTags() {
    return tags;
  }


  public void setTags(List<String> tags) {
    this.tags = tags;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    TransferIn transferIn = (TransferIn) o;
    return Objects.equals(this.toWalletId, transferIn.toWalletId) &&
        Objects.equals(this.currency, transferIn.currency) &&
        Objects.equals(this.amount, transferIn.amount) &&
        Objects.equals(this.autoCommit, transferIn.autoCommit) &&
        Objects.equals(this.description, transferIn.description) &&
        Objects.equals(this.tags, transferIn.tags);
  }

  @Override
  public int hashCode() {
    return Objects.hash(toWalletId, currency, amount, autoCommit, description, tags);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class TransferIn {\n");
    sb.append("    toWalletId: ").append(toIndentedString(toWalletId)).append("\n");
    sb.append("    currency: ").append(toIndentedString(currency)).append("\n");
    sb.append("    amount: ").append(toIndentedString(amount)).append("\n");
    sb.append("    autoCommit: ").append(toIndentedString(autoCommit)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    tags: ").append(toIndentedString(tags)).append("\n");
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

