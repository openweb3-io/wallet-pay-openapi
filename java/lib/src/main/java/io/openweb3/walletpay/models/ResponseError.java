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
 * ResponseError
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-08-21T17:44:11.856419+08:00[Asia/Shanghai]")
public class ResponseError {
  public static final String SERIALIZED_NAME_MSG = "msg";
  @SerializedName(SERIALIZED_NAME_MSG)
  private String msg;

  public static final String SERIALIZED_NAME_CODE = "code";
  @SerializedName(SERIALIZED_NAME_CODE)
  private Integer code;


  public ResponseError msg(String msg) {
    
    this.msg = msg;
    return this;
  }

   /**
   * Get msg
   * @return msg
  **/
  @ApiModelProperty(required = true, value = "")

  public String getMsg() {
    return msg;
  }


  public void setMsg(String msg) {
    this.msg = msg;
  }


  public ResponseError code(Integer code) {
    
    this.code = code;
    return this;
  }

   /**
   * Get code
   * @return code
  **/
  @ApiModelProperty(required = true, value = "")

  public Integer getCode() {
    return code;
  }


  public void setCode(Integer code) {
    this.code = code;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ResponseError responseError = (ResponseError) o;
    return Objects.equals(this.msg, responseError.msg) &&
        Objects.equals(this.code, responseError.code);
  }

  @Override
  public int hashCode() {
    return Objects.hash(msg, code);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ResponseError {\n");
    sb.append("    msg: ").append(toIndentedString(msg)).append("\n");
    sb.append("    code: ").append(toIndentedString(code)).append("\n");
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

