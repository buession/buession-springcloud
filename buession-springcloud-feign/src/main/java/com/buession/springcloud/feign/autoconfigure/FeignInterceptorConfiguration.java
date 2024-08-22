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
 * | Copyright @ 2013-2024 Buession.com Inc.														       |
 * +-------------------------------------------------------------------------------------------------------+
 */
package com.buession.springcloud.feign.autoconfigure;

import com.buession.springcloud.feign.interceptor.reactive.ReactiveClientHeadersRequestInterceptor;
import com.buession.springcloud.feign.interceptor.servlet.ServletClientHeadersRequestInterceptor;
import feign.RequestInterceptor;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.autoconfigure.condition.ConditionalOnWebApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;

/**
 * @author Yong.Teng
 */
@AutoConfiguration
@EnableConfigurationProperties(FeignProperties.class)
@ConditionalOnProperty(prefix = "spring.cloud.feign", name = "apply-client-request-headers.enabled", havingValue = "true", matchIfMissing = true)
@ConditionalOnWebApplication
public class FeignInterceptorConfiguration {

	protected FeignProperties feignProperties;

	public FeignInterceptorConfiguration(FeignProperties feignProperties) {
		this.feignProperties = feignProperties;
	}

	@AutoConfiguration
	@EnableConfigurationProperties(FeignProperties.class)
	@ConditionalOnWebApplication(type = ConditionalOnWebApplication.Type.SERVLET)
	static class ServletFeignInterceptorConfiguration extends FeignInterceptorConfiguration {

		public ServletFeignInterceptorConfiguration(FeignProperties feignProperties) {
			super(feignProperties);
		}

		@Bean
		@ConditionalOnMissingBean
		public RequestInterceptor servletClientHeadersRequestInterceptor() {
			return new ServletClientHeadersRequestInterceptor(
					feignProperties.getApplyClientRequestHeaders().getAllowedHeaderNames(),
					feignProperties.getApplyClientRequestHeaders().getIgnoreHeaderNames());
		}

	}

	@AutoConfiguration
	@EnableConfigurationProperties(FeignProperties.class)
	@ConditionalOnWebApplication(type = ConditionalOnWebApplication.Type.REACTIVE)
	static class ReactiveFeignInterceptorConfiguration extends FeignInterceptorConfiguration {

		public ReactiveFeignInterceptorConfiguration(FeignProperties feignProperties) {
			super(feignProperties);
		}

		@Bean
		@ConditionalOnMissingBean
		public RequestInterceptor reactiveClientHeadersRequestInterceptor() {
			return new ReactiveClientHeadersRequestInterceptor(
					feignProperties.getApplyClientRequestHeaders().getAllowedHeaderNames(),
					feignProperties.getApplyClientRequestHeaders().getIgnoreHeaderNames());
		}

	}

}
