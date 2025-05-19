# buession-springcloud-config-server 参考手册


[SpringCloud Config Client](https://spring.io/projects/spring-cloud-config) 服务端依赖。


---


### 安装

```xml
<dependency>
    <groupId>com.buession.springcloud</groupId>
    <artifactId>buession-springcloud-config-server</artifactId>
    <version>x.x.x</version>
</dependency>
```

该模块引用了 `spring-cloud-config-server` 等等 spring cloud config 服务端的包。

该模并实现了 `SpringBootApplication` 的启动类 `com.buession.springcloud.config.server.CloudConfigServerWebApplication`，可做到开箱即用。支持 servlet 和 webflux，取决于您引入的包。

当然，您使用 `buession-springcloud-config-server` 的启动类 `com.buession.springcloud.config.server.CloudConfigServerWebApplication`，也可以将您的应用注册到服务注册和发现中心。


### [API 参考手册>>](https://javadoc.io/static/com.buession.springcloud/buession-springcloud-config-server/2.1.0/)