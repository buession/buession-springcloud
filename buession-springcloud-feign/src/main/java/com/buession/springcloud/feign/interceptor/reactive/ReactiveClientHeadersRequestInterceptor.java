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
package com.buession.springcloud.feign.interceptor.reactive;

import com.buession.springcloud.feign.interceptor.AbstractClientHeadersRequestInterceptor;
import com.buession.web.reactive.context.request.RequestContextHolder;
import feign.RequestTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.server.reactive.ServerHttpRequest;
import reactor.core.publisher.Mono;

/**
 * Reactive 请求头拦截器抽象类
 *
 * @author Yong.Teng
 * @since 1.2.1
 */
public class ReactiveClientHeadersRequestInterceptor extends AbstractClientHeadersRequestInterceptor {

	private final static Logger logger = LoggerFactory.getLogger(ReactiveClientHeadersRequestInterceptor.class);

	@Override
	public void apply(RequestTemplate requestTemplate){
		try{
			Mono<ServerHttpRequest> mono = RequestContextHolder.getRequest();

			mono.subscribe(request->{
				request.getHeaders().forEach((name, value)->{
					if(IGNORE_REQUEST_HEADERS.contains(name)){
						if(logger.isDebugEnabled()){
							logger.debug("Ignore feign request header, name: {}", name);
						}
					}else{
						requestTemplate.header(name, value);
						if(logger.isDebugEnabled()){
							logger.debug("Add feign request header, name: {}, values: {}", name, value);
						}
					}
				});
			});
		}catch(IllegalStateException e){
			logger.error(e.getMessage());
		}finally{
			setRequestHeaders(requestTemplate);
		}
	}

}
