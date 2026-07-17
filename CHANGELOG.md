 Buession SpringCloud Changelog
===========================

## [4.0.0](https://github.com/buession/buession-springcloud/releases/tag/v4.0.1) (2026-07-xx)

### 🔨依赖升级

- [依赖库版本升级和安全漏洞修复](https://github.com/buession/buession-parent/releases/tag/v4.0.1)


---


## [4.0.0](https://github.com/buession/buession-springcloud/releases/tag/v4.0.0) (2026-07-17)

### 🔨依赖升级

- [依赖库版本升级和安全漏洞修复](https://github.com/buession/buession-parent/releases/tag/v4.0.0)
- [spring-cloud-commons](https://projects.spring.io/spring-cloud/spring-cloud-commons/) 版本升级至 4.3.0
- [spring-cloud-bus](https://projects.spring.io/spring-cloud/spring-cloud-bus/) 版本升级至 4.3.0
- [spring-cloud-context](https://projects.spring.io/spring-cloud/spring-cloud-context/) 版本升级至 4.3.0
- [spring-cloud-starter-consul-discovery](https://projects.spring.io/spring-cloud/spring-cloud-starter-consul-discovery/) 版本升级至 4.3.0
- [spring-cloud-starter-kubernetes-client](https://cloud.spring.io/spring-cloud-starter-kubernetes-client) 版本升级至 3.3.0
- [spring-cloud-starter-loadbalancer](https://projects.spring.io/spring-cloud/spring-cloud-starter-loadbalancer/) 版本升级至 4.3.0
- [spring-cloud-stream](https://projects.spring.io/spring-cloud/spring-cloud-stream/) 版本升级至 4.3.0
- [spring-cloud-starter-stream-kafka](https://projects.spring.io/spring-cloud) 版本升级至 4.3.0
- [spring-cloud-stream-binder-kafka-streams](https://projects.spring.io/spring-cloud) 版本升级至 4.3.0
- [openfeign](https://github.com/OpenFeign/feign) 版本升级至 13.6
- io.projectreactor.netty:reactor-netty(https://github.com/reactor/reactor-netty) 版本升级至 1.2.11
- [com.alibaba.cloud:spring-cloud-starter-alibaba-nacos-config](https://github.com/alibaba/spring-cloud-alibaba/tree/2.2.x/spring-cloud-alibaba-starters/spring-cloud-starter-alibaba-nacos-config) 版本升级至 2025.0.0.0
- [com.alibaba.cloud:spring-cloud-starter-alibaba-nacos-discovery](https://github.com/alibaba/spring-cloud-alibaba/tree/2.2.x/spring-cloud-alibaba-starters/spring-cloud-starter-alibaba-nacos-discovery) 版本升级至 2025.0.0.0
- [com.alibaba.cloud:spring-cloud-starter-stream-rocketmq](https://github.com/alibaba/spring-cloud-alibaba/spring-cloud-alibaba-starters/spring-cloud-starter-stream-rocketmq) 版本升级至 2025.1.0.0


### 🔔 变化

- 删除模块 buession-springcloud-hystrix
- 删除模块 buession-springcloud-ribbon
- 删除模块 buession-springcloud-zipkin
- 删除模块 buession-springcloud-zuul
- 新增模块 buession-springcloud-sleuth


---


## [3.0.1](https://github.com/buession/buession-springcloud/releases/tag/v3.0.1) (2025-05-20)

### 🔨依赖升级

- [依赖库版本升级和安全漏洞修复](https://github.com/buession/buession-parent/releases/tag/v3.0.1)


---


### 🔨依赖升级

## [3.0.0](https://github.com/buession/buession-springcloud/releases/tag/v3.0.0) (2024-11-07)

### 🔨依赖升级

- [依赖库版本升级和安全漏洞修复](https://github.com/buession/buession-parent/releases/tag/v3.0.0)
- [spring-integration](https://github.com/spring-projects/spring-integration) 版本升级至 5.5.20
- [spring-cloud-commons](https://projects.spring.io/spring-cloud/spring-cloud-commons/) 版本升级至 3.1.8
- [spring-cloud-context](https://projects.spring.io/spring-cloud/spring-cloud-context/) 版本升级至 3.1.8
- [spring-cloud-bus](https://projects.spring.io/spring-cloud/spring-cloud-bus/) 版本升级至 3.1.3
- [spring-cloud-stream](https://projects.spring.io/spring-cloud/spring-cloud-stream/) 版本升级至 3.2.10
- [spring-cloud-config-client](https://projects.spring.io/spring-cloud/spring-cloud-config-client/) 版本升级至 3.1.9
- [spring-cloud-config-server](https://projects.spring.io/spring-cloud/spring-cloud-config-server/) 版本升级至 3.1.9
- [spring-cloud-starter-consul-discovery](https://projects.spring.io/spring-cloud/spring-cloud-starter-consul-discovery/) 版本升级至 3.1.5
- [spring-cloud-starter-openfeign](https://projects.spring.io/spring-cloud/spring-cloud-starter-openfeign/) 版本升级至 3.1.9
- [spring-cloud-starter-gateway](https://projects.spring.io/spring-cloud/spring-cloud-starter-gateway/) 版本升级至 3.1.9
- [spring-cloud-starter-loadbalancer](https://projects.spring.io/spring-cloud/spring-cloud-starter-loadbalancer/) 版本升级至 3.1.8
- [spring-cloud-starter-alibaba-nacos-config](https://github.com/alibaba/spring-cloud-alibaba/tree/2.2.x/spring-cloud-alibaba-starters/spring-cloud-starter-alibaba-nacos-config) 版本升级至 2.2.10.RELEASE
- [spring-cloud-starter-alibaba-nacos-discovery](https://github.com/alibaba/spring-cloud-alibaba/tree/2.2.x/spring-cloud-alibaba-starters/spring-cloud-starter-alibaba-nacos-discovery) 版本升级至 2.2.10.RELEASE
- io.projectreactor.netty:reactor-netty(https://github.com/reactor/reactor-netty) 版本升级至 1.1.21
- [openfeign] 版本升级至 13.3
- [archaius-core](https://github.com/Netflix/archaius) 版本升级至 0.7.12
- [objenesis](http://objenesis.org) 版本升级至 3.0
- [snappy-java](https://github.com/xerial/snappy-java) 版本升级至 1.1.10.5
- [apache hadoop] 版本升级至 3.4.0


### ⭐ 新特性

- stream 新增支持手动确认消息方法


### 🔔 变化

- 删除 buession-springcloud-stream、buession-springcloud-stream-file、buession-springcloud-stream-hdfs、buession-springcloud-stream-http、buession-springcloud-stream-jdbc、buession-springcloud-stream-jms、buession-springcloud-stream-mongodb、buession-springcloud-stream-syslog、buession-springcloud-stream-tcp、buession-springcloud-stream-websocket


---


## [2.3.3](https://github.com/buession/buession-springcloud/releases/tag/v2.3.3) (2024-05-06)

### 🔨依赖升级

- [依赖库版本升级和安全漏洞修复](https://github.com/buession/buession-parent/releases/tag/v2.3.3)


---


## [2.3.2](https://github.com/buession/buession-springcloud/releases/tag/v2.3.2) (2023-12-27)

### 🔨依赖升级

- [依赖库版本升级和安全漏洞修复](https://github.com/buession/buession-parent/releases/tag/v2.3.2)


---


## [2.3.1](https://github.com/buession/buession-springcloud/releases/tag/v2.3.1) (2023-11-20)

### 🔨依赖升级

- [依赖库版本升级和安全漏洞修复](https://github.com/buession/buession-parent/releases/tag/v2.3.1)
- [openfeign] 版本升级至 12.4


### 🔔 变化

- **buession-springcloud-feign：** 移除 org.bouncycastle 依赖


---


## [2.3.0](https://github.com/buession/buession-springcloud/releases/tag/v2.3.0) (2023-08-17)

### 🔨依赖升级

- [依赖库版本升级和安全漏洞修复](https://github.com/buession/buession-parent/releases/tag/v2.3.0)


### 🐞 Bug 修复

- **buession-springcloud-config-server** 修复 CloudConfigServerWebApplication 在 reactive 模式下无法启动的问题


---


## [2.2.1](https://github.com/buession/buession-springcloud/releases/tag/v2.2.1) (2023-03-31)

### 🔨依赖升级

- [依赖库版本升级和安全漏洞修复](https://github.com/buession/buession-parent/releases/tag/v2.2.1)
- [zstd-jni](https://github.com/luben/zstd-jni) 版本升级至 1.5.4-2


---


## [2.2.0](https://github.com/buession/buession-springcloud/releases/tag/v2.2.0) (2023-03-10)

### 🔨依赖升级

- [依赖库版本升级和安全漏洞修复](https://github.com/buession/buession-parent/releases/tag/v2.2.0)
- spring-cloud-starter-alibaba-nacos-config(https://github.com/alibaba/spring-cloud-alibaba/tree/2.2.x/spring-cloud-alibaba-starters/spring-cloud-starter-alibaba-nacos-config) 版本升级至 2.2.9.RELEASE
- spring-cloud-starter-alibaba-nacos-discovery(https://github.com/alibaba/spring-cloud-alibaba/tree/2.2.x/spring-cloud-alibaba-starters/spring-cloud-starter-alibaba-nacos-discovery) 版本升级至 2.2.9.RELEASE
- io.projectreactor.netty:reactor-netty(https://github.com/reactor/reactor-netty) 版本升级至 0.9.25.RELEASE


### ⭐ 新特性

- **buession-springcloud-loadbalancer：** 新增 buession-springcloud-loadbalancer module
- **buession-springcloud-nacos-discovery** 兼容处理 nacos discovery 在 undertow 容器中，停止服务时 java.lang.IllegalStateException: UT015023: This Context has been already 异常
- **模块：** 新增 springcloud stream 子模块


### 🔔 变化

- **buession-springcloud-stream：** 废弃该模块，迁移至 com.buession.springcloud.stream:buession-springcloud-stream-core


---


## [2.1.2](https://github.com/buession/buession-springcloud/releases/tag/v2.1.2) (2022-11-14)

### 🔨依赖升级

- [依赖库版本升级和安全漏洞修复](https://github.com/buession/buession-parent/releases/tag/v2.1.2)


---


## [2.1.1](https://github.com/buession/buession-springcloud/releases/tag/v2.1.1) (2022-08-18)

### 🔨依赖升级

- [依赖库版本升级和安全漏洞修复](https://github.com/buession/buession-parent/releases/tag/v2.1.1)


---


## [2.1.0](https://github.com/buession/buession-springcloud/releases/tag/v2.1.0) (2022-08-07)

### 🔨依赖升级

- [依赖库版本升级和安全漏洞修复](https://github.com/buession/buession-parent/releases/tag/v2.1.0)
- [openfeign] 版本升级至 11.9.1


### ⭐ 新特性

- **buession-springcloud-bus：** 新增 buession-springcloud-bus module
- **buession-springcloud-feign：** 可指定允许转发和忽略的请求头


### 🔔 变化

- **buession-springcloud-feign：** Servlet 模式请求头拦截器，ServletClientHeadersRequestInterceptor 将会转发重复请求头的所有值


### 🐞 Bug 修复

- **buession-springcloud-feign：** 修复 ReactiveFeignInterceptorConfiguration 自动配置设置成 Type.SERVLET 的 BUG


---


## [2.0.2](https://github.com/buession/buession-springcloud/releases/tag/v2.0.2) (2022-07-28)

### 🔨依赖升级

- [依赖库版本升级和安全漏洞修复](https://github.com/buession/buession-parent/releases/tag/v2.0.2)


---


## [2.0.1](https://github.com/buession/buession-springcloud/releases/tag/v2.0.1) (2022-07-18)

### 🔨依赖升级

- [依赖库版本升级和安全漏洞修复](https://github.com/buession/buession-parent/releases/tag/v2.0.1)
- spring-cloud-starter-alibaba-nacos-config 版本升级至 2.2.8.RELEASE
- spring-cloud-starter-alibaba-nacos-discovery 版本升级至 2.2.8.RELEASE


---


## [2.0.0](https://github.com/buession/buession-springcloud/releases/tag/v2.0.0) (2022-07-08)

### 🔨依赖升级

- [依赖库版本升级和安全漏洞修复](https://github.com/buession/buession-parent/releases/tag/v2.0.0)
- spring-cloud-starter-netflix-hystrix 版本升级至 2.2.10.RELEASE
- spring-cloud-starter-netflix-ribbon 版本升级至 2.2.10.RELEASE
- spring-cloud-starter-alibaba-nacos-config 版本升级至 2.2.7.RELEASE