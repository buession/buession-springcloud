# buession-springcloud-feign 参考手册


[SpringCloud OpenFeign](https://spring.io/projects/spring-cloud-openfeign) 基础库依赖。


---


### 安装

```xml
<dependency>
    <groupId>com.buession.springcloud</groupId>
    <artifactId>buession-springcloud-feign</artifactId>
    <version>x.x.x</version>
</dependency>
```

该模块在引入 `spring-cloud-openfeign` 的基础上，还定义了请求头拦截器，可以将前端的所有请求头转发到微服务后端，便于在实际业务中需要根据前端的请求头处理业务逻辑。支持 servlet 和 webflux，您可以将配置属性 `spring.cloud.feign.apply-client-request-headers.enabled` 的值设置为 `false` 不进行转发。

* 注：

    1. 此处的前端并不指浏览器，而是指调用 `feign` 的调用端。

    2. 会忽略掉请求头 `Accept-Encoding`，我们将在未来支持自定义需要转发或者忽略的请求头。


### [API 参考手册>>](https://javadoc.io/static/com.buession.springcloud/buession-springcloud-feign/3.0.1/)