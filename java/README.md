<h1 align="center">
    <a style="text-decoration: none" href="https://walletpay.openweb3.io">
      <img width="120" src="" />
      <p align="center">walletpay - walletpay as a service</p>
    </a>
</h1>
<h2 align="center">
  <a href="https://walletpay.openweb3.io">Website</a> | <a href="https://docs.openweb3.io/reference/v1orderscreate">Documentation</a> | <a href="https://walletpay.openweb3.io/slack">Community Slack</a>
<h2>

Java library for interacting with the pay API and verifying pay signatures

![GitHub tag](https://img.shields.io/github/tag/pay/walletpay.svg)
[![Maven Central (Java)](https://img.shields.io/maven-central/v/io.openweb3.walletpay/pay?label=maven-central%20(java))](https://search.maven.org/artifact/io.openweb3.walletpay/pay)

[![Join our slack](https://img.shields.io/badge/Slack-join%20the%20community-blue?logo=slack&style=social)](https://walletpay.openweb3.io/slack/)

# Usage Documentation

You can find general usage documentation at <https://docs.walletpay.openweb3.io>.  For complete API documentation with code examples for each endpoint in all of our official client libraries head over to our API documentation site at <https://api.wallet-pay.openweb3.io>.

# Language Support

<table style="table-layout:fixed; white-space: nowrap;">
  <th colspan="2">⚡️ Features ⚡️</th>
  <tr>
    <th>Officially Supported</th>
    <th>✅</th>
  </tr>
  <tr>
    <th>API Support</th>
    <th>✅</th>
  </tr>
  <tr>
    <th>Signature Verification</th>
    <th>✅</th>
  </tr>
  <tr>
    <th>Caveats</th>
    <th>Async support planned. (If you use kotlin, checkout our kotlin library for coroutine support.)</th>
  </tr>
</table>

# Installation

### Maven users

Add this dependency to your project's POM:

```xml
<dependency>
  <groupId>io.openweb3</groupId>
  <artifactId>walletpay</artifactId>
  <version>0.2.13</version>
</dependency>
```

### Gradle users

Add this dependency to your project's build file:

```groovy
implementation "io.openweb3:walletpay:0.2.13"
```

# Development

First checkout the [core README](../README.md#development) for details on how to generate our API bindings, then follow the steps below.

## Requirements

 - Java 1.8+
 - Gradle

## Building the library
```sh
./gradlew build
```

## Running Tests

Simply run:

```sh
./gradlew test
```

## Publishing to Maven

```sh
./gradlew publishToSonatype closeAndReleaseSonatypeStagingRepository
```

