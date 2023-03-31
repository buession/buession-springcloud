 Buession SpringCloud Changelog
===========================


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