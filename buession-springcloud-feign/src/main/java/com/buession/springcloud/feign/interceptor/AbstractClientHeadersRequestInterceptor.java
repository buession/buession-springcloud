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
 * | Copyright @ 2013-2023 Buession.com Inc.														       |
 * +-------------------------------------------------------------------------------------------------------+
 */
package com.buession.springcloud.feign.interceptor;

import com.buession.core.builder.SetBuilder;
import com.buession.core.utils.VersionUtils;
import com.buession.core.validator.Validate;
import com.buession.springcloud.common.Version;
import feign.Feign;
import feign.RequestInterceptor;
import feign.RequestTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;
import java.util.Set;

/**
 * 请求头拦截器抽象类
 *
 * @author Yong.Teng
 * @since 1.2.1
 */
public abstract class AbstractClientHeadersRequestInterceptor implements RequestInterceptor {

	protected final static String REQUEST_CONTEXT_CLIENT_NAME = "X-Request-Context-Client";

	protected final static String BUESSION_CLOUD_NAME = "X-Buession-Cloud-Version";

	protected final static String REQUEST_CONTEXT_CLIENT =
			Feign.class.getSimpleName() + "/" + VersionUtils.determineClassVersion(Feign.class);

	/**
	 * 允许转发的请求头
	 *
	 * @since 2.1.0
	 */
	private Set<String> allowedHeaderNames;

	/**
	 * 忽略转发的请求头
	 *
	 * @since 2.1.0
	 */
	private Set<String> ignoreHeaderNames = SetBuilder.of("Accept-Encoding");

	protected final Logger logger = LoggerFactory.getLogger(getClass());

	/**
	 * 构造函数
	 */
	public AbstractClientHeadersRequestInterceptor(){
	}

	/**
	 * 构造函数
	 *
	 * @param allowedHeaderNames
	 * 		允许转发的请求头
	 * @param ignoreHeaderNames
	 * 		忽略转发的请求头
	 *
	 * @since 2.1.0
	 */
	public AbstractClientHeadersRequestInterceptor(Set<String> allowedHeaderNames, Set<String> ignoreHeaderNames){
		this.allowedHeaderNames = allowedHeaderNames;
		this.ignoreHeaderNames = ignoreHeaderNames;
	}

	/**
	 * 返回允许转发的请求头
	 *
	 * @return 允许转发的请求头
	 */
	public Set<String> getAllowedHeaderNames(){
		return allowedHeaderNames;
	}

	/**
	 * 设置允许转发的请求头
	 *
	 * @param allowedHeaderNames
	 * 		允许转发的请求头
	 */
	public void setAllowedHeaderNames(Set<String> allowedHeaderNames){
		this.allowedHeaderNames = allowedHeaderNames;
	}

	/**
	 * 返回忽略转发的请求头
	 *
	 * @return 忽略转发的请求头
	 */
	public Set<String> getIgnoreHeaderNames(){
		return ignoreHeaderNames;
	}

	/**
	 * 设置忽略转发的请求头
	 *
	 * @param ignoreHeaderNames
	 * 		忽略转发的请求头
	 */
	public void setIgnoreHeaderNames(Set<String> ignoreHeaderNames){
		this.ignoreHeaderNames = ignoreHeaderNames;
	}

	protected static void setRequestHeaders(final RequestTemplate requestTemplate){
		requestTemplate.header(REQUEST_CONTEXT_CLIENT_NAME, REQUEST_CONTEXT_CLIENT);
		requestTemplate.header(BUESSION_CLOUD_NAME, Version.VERSION);
	}

	protected boolean isIgnoreHeaderName(final String name){
		Set<String> ignoreHeaderNames = getIgnoreHeaderNames();

		if(Validate.isNotEmpty(ignoreHeaderNames)){
			for(String headerName : ignoreHeaderNames){
				if(headerName.contains(name)){
					if(logger.isDebugEnabled()){
						logger.debug("Ignore feign request header, name: {}", name);
					}
					return true;
				}
			}
		}

		return false;
	}

	protected void applyHeader(final RequestTemplate requestTemplate, final String name, final List<String> values){
		if(isIgnoreHeaderName(name)){
			return;
		}

		Set<String> allowedHeaderNames = getAllowedHeaderNames();

		if(Validate.isNotEmpty(allowedHeaderNames)){
			for(String headerName : allowedHeaderNames){
				if(headerName.contains(name)){
					requestTemplate.header(name, values);
					if(logger.isDebugEnabled()){
						logger.debug("Add feign request header, name: {}, values: {}", name, values);
					}
				}
			}
		}else{
			requestTemplate.header(name, values);
			if(logger.isDebugEnabled()){
				logger.debug("Add feign request header, name: {}, values: {}", name, values);
			}
		}
	}

}
