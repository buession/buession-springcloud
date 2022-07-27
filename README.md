# Buession Spring Cloud

[![Build Status](https://travis-ci.org/buession/buession-springcloud.svg?branch=master)](https://travis-ci.org/buession/buession-springcloud)
[![Coverage Status](https://img.shields.io/codecov/c/github/buession/buession-springcloud/master.svg)](https://codecov.io/github/buession/buession-springcloud?branch=master&view=all#sort=coverage&dir=asc)
[![Maven Central](https://img.shields.io/maven-central/v/com.buession.springcloud/buession-springcloud-common.svg)](https://search.maven.org/search?q=g:com.buession.springcloud)
[![GitHub release](https://img.shields.io/github/release/buession/buession-springcloud.svg)](https://github.com/buession/buession-springcloud/releases)
[![License](https://img.shields.io/badge/license-Apache%202-4EB1BA.svg)](https://www.apache.org/licenses/LICENSE-2.0.html)
[![Java support](https://img.shields.io/badge/Java-8+-green?logo=java&logoColor=white)](https://openjdk.java.net/)
[![Javadocs](http://www.javadoc.io/badge/com.buession.springcloud/buession-springcloud-common.svg)](http://www.javadoc.io/doc/com.buession.springcloud/buession-springcloud-common)


基于 Spring Cloud 2 的集成，其主要目的是统一引入包的版本，在此基础上扩展了一些功能。如：`feign` 拦截器可以将客户端的请求头，携带到微服务后端应用；`spring-cloud-gateway`、`spring-cloud-zuul` 定义了 `ProxyFilter` 可以定义某个服务通过网关传递到后端微服务的请求头；内置了 `spring-cloud-config-server` 的启动类，您可以开箱即用。


<p align="center">
	<img src="docs/images/logo.png" alt="Buession Spring Cloud" title="Buession SpringCloud" width="280px" />
</p>

## Requirements

- JDK 1.8+

## Introduction

- git clone https://github.com/buession/buession-springcloud
- cd buession-springcloud/buession-springcloud-parent && mvn install

## Maven

- [https://search.maven.org/search?q=g:com.buession.springcloud](https://search.maven.org/search?q=g:com.buession.springcloud)
- [https://mvnrepository.com/search?q=com.buession.springcloud](https://mvnrepository.com/search?q=com.buession.springcloud)

## Documentation

- 参考文档 [https://springcloud.buession.com/](https://springcloud.buession.com/)
- Wiki [https://github.com/buession/buession-springcloud/wiki](https://github.com/buession/buession-springcloud/wiki)
- API Reference [https://springcloud.buession.com/doc/](https://springcloud.buession.com/doc/)

## License

The Buession Spring Cloud is released under version 2.0 of the [Apache License](https://www.apache.org/licenses/LICENSE-2.0).