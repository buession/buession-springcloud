# buession-springcloud-hystrix 参考手册


[SpringCloud Netflix Hystrix](https://spring.io/projects/spring-cloud-netflix) 基础库依赖。


---


### 安装

```xml
<dependency>
    <groupId>com.buession.springcloud</groupId>
    <artifactId>buession-springcloud-hystrix</artifactId>
    <version>x.x.x</version>
</dependency>
```

该模块引用了 `spring-boot`、`spring-boot-autoconfigure`、`spring-boot-starter-validation`、`spring-boot-starter-log4j2` 等等 spring boot 的基础包。

该模块定义了 SpringBootApplication 的接口，简化了您的 SpringBootApplication 启动类的创建(更多的使用方式，将在[buession-springboot-web](../web/index.md)和[buession-springboot-cli](../cli/index.md)讲解)。该模块还将自动自动配置 `MessagePropertyBeanPostProcessor`。


### [API 参考手册>>](https://javadoc.io/static/com.buession.springcloud/buession-springcloud-hystrix/3.0.1/)