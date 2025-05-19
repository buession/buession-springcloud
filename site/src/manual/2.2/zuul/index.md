# buession-springcloud-zuul 参考手册


[SpringCloud Netflix Zuul](https://spring.io/projects/spring-cloud-netflix) 基础库依赖。


---


### 安装

```xml
<dependency>
    <groupId>com.buession.springcloud</groupId>
    <artifactId>buession-springcloud-zuul</artifactId>
    <version>x.x.x</version>
</dependency>
```

您可以通过继承 `AbstractProxyFilter` 实现代理转发过滤器，`AbstractProxyFilter` 是 `com.netflix.zuul.ZuulFilter` 的抽象实现类。该 Filter 可实现，将请求上下文通过请求头 `X-Request-Context`，以及其它定义的请求头传递到网关后端，您只需要重写方法 `String getRequestContextName()`、`Map<String, String> getRequestHeaders(HttpServletRequest request)` 即可。


### [API 参考手册>>](https://javadoc.io/static/com.buession.springcloud/buession-springcloud-zuul/2.2.0/)