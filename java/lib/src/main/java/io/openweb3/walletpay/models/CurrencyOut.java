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
import io.openweb3.walletpay.models.CurrencyNetwork;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * CurrencyOut
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-11-21T19:23:02.216639+08:00[Asia/Shanghai]")
public class CurrencyOut {
  public static final String SERIALIZED_NAME_CODE = "code";
  @SerializedName(SERIALIZED_NAME_CODE)
  private String code;

  public static final String SERIALIZED_NAME_SYMBOL = "symbol";
  @SerializedName(SERIALIZED_NAME_SYMBOL)
  private String symbol;

  public static final String SERIALIZED_NAME_LOGO = "logo";
  @SerializedName(SERIALIZED_NAME_LOGO)
  private String logo;

  public static final String SERIALIZED_NAME_NAME = "name";
  @SerializedName(SERIALIZED_NAME_NAME)
  private String name;

  public static final String SERIALIZED_NAME_CAN_DEPOSIT = "can_deposit";
  @SerializedName(SERIALIZED_NAME_CAN_DEPOSIT)
  private Boolean canDeposit;

  public static final String SERIALIZED_NAME_CAN_WITHDRAW = "can_withdraw";
  @SerializedName(SERIALIZED_NAME_CAN_WITHDRAW)
  private Boolean canWithdraw;

  public static final String SERIALIZED_NAME_CAN_TRANSFER = "can_transfer";
  @SerializedName(SERIALIZED_NAME_CAN_TRANSFER)
  private Boolean canTransfer;

  public static final String SERIALIZED_NAME_MIN_DEPOSIT_AMOUNT = "min_deposit_amount";
  @SerializedName(SERIALIZED_NAME_MIN_DEPOSIT_AMOUNT)
  private String minDepositAmount;

  public static final String SERIALIZED_NAME_MIN_WITHDRAW_AMOUNT = "min_withdraw_amount";
  @SerializedName(SERIALIZED_NAME_MIN_WITHDRAW_AMOUNT)
  private String minWithdrawAmount;

  public static final String SERIALIZED_NAME_MAX_WITHDRAW_AMOUNT = "max_withdraw_amount";
  @SerializedName(SERIALIZED_NAME_MAX_WITHDRAW_AMOUNT)
  private String maxWithdrawAmount;

  public static final String SERIALIZED_NAME_PRECISION = "precision";
  @SerializedName(SERIALIZED_NAME_PRECISION)
  private Integer precision;

  public static final String SERIALIZED_NAME_DECIMALS = "decimals";
  @SerializedName(SERIALIZED_NAME_DECIMALS)
  private Integer decimals;

  public static final String SERIALIZED_NAME_NETWORKS = "networks";
  @SerializedName(SERIALIZED_NAME_NETWORKS)
  private List<CurrencyNetwork> networks = null;


  public CurrencyOut code(String code) {
    
    this.code = code;
    return this;
  }

   /**
   * Currency code
   * @return code
  **/
  @ApiModelProperty(example = "USDT", required = true, value = "Currency code")

  public String getCode() {
    return code;
  }


  public void setCode(String code) {
    this.code = code;
  }


  public CurrencyOut symbol(String symbol) {
    
    this.symbol = symbol;
    return this;
  }

   /**
   * Currency symbol
   * @return symbol
  **/
  @ApiModelProperty(example = "USDT", required = true, value = "Currency symbol")

  public String getSymbol() {
    return symbol;
  }


  public void setSymbol(String symbol) {
    this.symbol = symbol;
  }


  public CurrencyOut logo(String logo) {
    
    this.logo = logo;
    return this;
  }

   /**
   * Currency logo url
   * @return logo
  **/
  @ApiModelProperty(example = "http://logo.jpg", required = true, value = "Currency logo url")

  public String getLogo() {
    return logo;
  }


  public void setLogo(String logo) {
    this.logo = logo;
  }


  public CurrencyOut name(String name) {
    
    this.name = name;
    return this;
  }

   /**
   * Currency name
   * @return name
  **/
  @ApiModelProperty(example = "USDT", required = true, value = "Currency name")

  public String getName() {
    return name;
  }


  public void setName(String name) {
    this.name = name;
  }


  public CurrencyOut canDeposit(Boolean canDeposit) {
    
    this.canDeposit = canDeposit;
    return this;
  }

   /**
   * Is it posible to deposit on blockchain
   * @return canDeposit
  **/
  @ApiModelProperty(example = "false", required = true, value = "Is it posible to deposit on blockchain")

  public Boolean getCanDeposit() {
    return canDeposit;
  }


  public void setCanDeposit(Boolean canDeposit) {
    this.canDeposit = canDeposit;
  }


  public CurrencyOut canWithdraw(Boolean canWithdraw) {
    
    this.canWithdraw = canWithdraw;
    return this;
  }

   /**
   * Is it posible to withdraw to blockchain
   * @return canWithdraw
  **/
  @ApiModelProperty(example = "false", required = true, value = "Is it posible to withdraw to blockchain")

  public Boolean getCanWithdraw() {
    return canWithdraw;
  }


  public void setCanWithdraw(Boolean canWithdraw) {
    this.canWithdraw = canWithdraw;
  }


  public CurrencyOut canTransfer(Boolean canTransfer) {
    
    this.canTransfer = canTransfer;
    return this;
  }

   /**
   * Is it posible to transfer in custody wallet
   * @return canTransfer
  **/
  @ApiModelProperty(example = "false", required = true, value = "Is it posible to transfer in custody wallet")

  public Boolean getCanTransfer() {
    return canTransfer;
  }


  public void setCanTransfer(Boolean canTransfer) {
    this.canTransfer = canTransfer;
  }


  public CurrencyOut minDepositAmount(String minDepositAmount) {
    
    this.minDepositAmount = minDepositAmount;
    return this;
  }

   /**
   * Big integer string representation. The min amount to deposit.
   * @return minDepositAmount
  **/
  @ApiModelProperty(example = "12345", required = true, value = "Big integer string representation. The min amount to deposit.")

  public String getMinDepositAmount() {
    return minDepositAmount;
  }


  public void setMinDepositAmount(String minDepositAmount) {
    this.minDepositAmount = minDepositAmount;
  }


  public CurrencyOut minWithdrawAmount(String minWithdrawAmount) {
    
    this.minWithdrawAmount = minWithdrawAmount;
    return this;
  }

   /**
   * Big integer string representation. The min amount to withdraw.
   * @return minWithdrawAmount
  **/
  @ApiModelProperty(example = "12345", required = true, value = "Big integer string representation. The min amount to withdraw.")

  public String getMinWithdrawAmount() {
    return minWithdrawAmount;
  }


  public void setMinWithdrawAmount(String minWithdrawAmount) {
    this.minWithdrawAmount = minWithdrawAmount;
  }


  public CurrencyOut maxWithdrawAmount(String maxWithdrawAmount) {
    
    this.maxWithdrawAmount = maxWithdrawAmount;
    return this;
  }

   /**
   * Big integer string representation. The max amount to withdraw.
   * @return maxWithdrawAmount
  **/
  @ApiModelProperty(example = "12345", required = true, value = "Big integer string representation. The max amount to withdraw.")

  public String getMaxWithdrawAmount() {
    return maxWithdrawAmount;
  }


  public void setMaxWithdrawAmount(String maxWithdrawAmount) {
    this.maxWithdrawAmount = maxWithdrawAmount;
  }


  public CurrencyOut precision(Integer precision) {
    
    this.precision = precision;
    return this;
  }

   /**
   * Currency precision
   * @return precision
  **/
  @ApiModelProperty(example = "6", required = true, value = "Currency precision")

  public Integer getPrecision() {
    return precision;
  }


  public void setPrecision(Integer precision) {
    this.precision = precision;
  }


  public CurrencyOut decimals(Integer decimals) {
    
    this.decimals = decimals;
    return this;
  }

   /**
   * Currency decimals
   * @return decimals
  **/
  @ApiModelProperty(example = "12", required = true, value = "Currency decimals")

  public Integer getDecimals() {
    return decimals;
  }


  public void setDecimals(Integer decimals) {
    this.decimals = decimals;
  }


  public CurrencyOut networks(List<CurrencyNetwork> networks) {
    
    this.networks = networks;
    return this;
  }

  public CurrencyOut addNetworksItem(CurrencyNetwork networksItem) {
    if (this.networks == null) {
      this.networks = new ArrayList<>();
    }
    this.networks.add(networksItem);
    return this;
  }

   /**
   * Get networks
   * @return networks
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<CurrencyNetwork> getNetworks() {
    return networks;
  }


  public void setNetworks(List<CurrencyNetwork> networks) {
    this.networks = networks;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CurrencyOut currencyOut = (CurrencyOut) o;
    return Objects.equals(this.code, currencyOut.code) &&
        Objects.equals(this.symbol, currencyOut.symbol) &&
        Objects.equals(this.logo, currencyOut.logo) &&
        Objects.equals(this.name, currencyOut.name) &&
        Objects.equals(this.canDeposit, currencyOut.canDeposit) &&
        Objects.equals(this.canWithdraw, currencyOut.canWithdraw) &&
        Objects.equals(this.canTransfer, currencyOut.canTransfer) &&
        Objects.equals(this.minDepositAmount, currencyOut.minDepositAmount) &&
        Objects.equals(this.minWithdrawAmount, currencyOut.minWithdrawAmount) &&
        Objects.equals(this.maxWithdrawAmount, currencyOut.maxWithdrawAmount) &&
        Objects.equals(this.precision, currencyOut.precision) &&
        Objects.equals(this.decimals, currencyOut.decimals) &&
        Objects.equals(this.networks, currencyOut.networks);
  }

  @Override
  public int hashCode() {
    return Objects.hash(code, symbol, logo, name, canDeposit, canWithdraw, canTransfer, minDepositAmount, minWithdrawAmount, maxWithdrawAmount, precision, decimals, networks);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CurrencyOut {\n");
    sb.append("    code: ").append(toIndentedString(code)).append("\n");
    sb.append("    symbol: ").append(toIndentedString(symbol)).append("\n");
    sb.append("    logo: ").append(toIndentedString(logo)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    canDeposit: ").append(toIndentedString(canDeposit)).append("\n");
    sb.append("    canWithdraw: ").append(toIndentedString(canWithdraw)).append("\n");
    sb.append("    canTransfer: ").append(toIndentedString(canTransfer)).append("\n");
    sb.append("    minDepositAmount: ").append(toIndentedString(minDepositAmount)).append("\n");
    sb.append("    minWithdrawAmount: ").append(toIndentedString(minWithdrawAmount)).append("\n");
    sb.append("    maxWithdrawAmount: ").append(toIndentedString(maxWithdrawAmount)).append("\n");
    sb.append("    precision: ").append(toIndentedString(precision)).append("\n");
    sb.append("    decimals: ").append(toIndentedString(decimals)).append("\n");
    sb.append("    networks: ").append(toIndentedString(networks)).append("\n");
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

