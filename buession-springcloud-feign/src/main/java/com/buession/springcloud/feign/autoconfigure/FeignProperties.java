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
package com.buession.springcloud.feign.autoconfigure;

import com.buession.core.builder.SetBuilder;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.NestedConfigurationProperty;

import java.util.Set;

/**
 * @author Yong.Teng
 * @since 2.1.0
 */
@ConfigurationProperties(prefix = "spring.cloud.feign")
public class FeignProperties {

	@NestedConfigurationProperty
	private ApplyClientRequestHeaders applyClientRequestHeaders = new ApplyClientRequestHeaders();

	public ApplyClientRequestHeaders getApplyClientRequestHeaders(){
		return applyClientRequestHeaders;
	}

	public void setApplyClientRequestHeaders(
			ApplyClientRequestHeaders applyClientRequestHeaders){
		this.applyClientRequestHeaders = applyClientRequestHeaders;
	}

	public final static class ApplyClientRequestHeaders {

		/**
		 * 允许的请求头
		 */
		private Set<String> allowedHeaderNames;

		/**
		 * 忽略的请求头
		 */
		private Set<String> ignoreHeaderNames = SetBuilder.of("Accept-Encoding");

		/**
		 * 返回允许的请求头
		 *
		 * @return 允许的请求头
		 */
		public Set<String> getAllowedHeaderNames(){
			return allowedHeaderNames;
		}

		/**
		 * 设置允许的请求头
		 *
		 * @param allowedHeaderNames
		 * 		允许的请求头
		 */
		public void setAllowedHeaderNames(Set<String> allowedHeaderNames){
			this.allowedHeaderNames = allowedHeaderNames;
		}

		/**
		 * 返回忽略的请求头
		 *
		 * @return 忽略的请求头
		 */
		public Set<String> getIgnoreHeaderNames(){
			return ignoreHeaderNames;
		}

		/**
		 * 设置忽略的请求头
		 *
		 * @param ignoreHeaderNames
		 * 		忽略的请求头
		 */
		public void setIgnoreHeaderNames(Set<String> ignoreHeaderNames){
			this.ignoreHeaderNames = ignoreHeaderNames;
		}

	}

}
