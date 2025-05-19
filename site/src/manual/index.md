# 参考手册简介


基于 Spring Cloud 2 的集成，其主要目的是统一引入包的版本，在此基础上扩展了一些功能。如：`feign` 拦截器可以将客户端的请求头，携带到微服务后端应用；`spring-cloud-gateway`、`spring-cloud-zuul` 定义了 `ProxyFilter` 可以定义某个服务通过网关传递到后端微服务的请求头；内置了 `spring-cloud-config-server` 的启动类，您可以开箱即用。