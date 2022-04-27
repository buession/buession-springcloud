/*
 * Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.
 * See the NOTICE file distributed with this work for additional information regarding copyright ownership.
 * The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and limitations under the License.
 *
 * =========================================================================================================
 *
 * This software consists of voluntary contributions made by many individuals on behalf of the
 * Apache Software Foundation. For more information on the Apache Software Foundation, please see
 * <http://www.apache.org/>.
 *
 * +-------------------------------------------------------------------------------------------------------+
 * | License: http://www.apache.org/licenses/LICENSE-2.0.txt 										       |
 * | Author: Yong.Teng <webmaster@buession.com> 													       |
 * | Copyright @ 2013-2022 Buession.com Inc.														       |
 * +-------------------------------------------------------------------------------------------------------+
 */
package com.buession.springcloud.gateway.filter;

import com.buession.core.validator.Validate;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.core.Ordered;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import java.util.Map;

/**
 * @author Yong.Teng
 */
public abstract class AbstractProxyFilter implements ProxyFilter, GlobalFilter, Ordered {

	@Override
	public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain){
		ServerHttpRequest.Builder serverHttpRequestBuilder = exchange.getRequest().mutate();
		String requestContextName = getRequestContextName();

		if(Validate.hasText(requestContextName)){
			serverHttpRequestBuilder.header(REQUEST_CONTEXT, requestContextName);
		}

		Map<String, String> headers = getRequestHeaders(exchange);
		if(headers != null){
			headers.forEach(serverHttpRequestBuilder::header);
		}

		return chain.filter(exchange.mutate().request(serverHttpRequestBuilder.build()).build());
	}

	@Override
	public int getOrder(){
		return Ordered.HIGHEST_PRECEDENCE;
	}

	protected String getRequestContextName(){
		return null;
	}

	protected Map<String, String> getRequestHeaders(ServerWebExchange exchange){
		return null;
	}

}
