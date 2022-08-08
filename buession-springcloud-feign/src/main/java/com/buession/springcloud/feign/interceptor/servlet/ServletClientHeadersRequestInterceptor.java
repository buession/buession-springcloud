/*
 * Licensed to the Apache Software Foundation (ASF) under one or more contributor license
 * agreements. See the NOTICE file distributed with this work for additional information regarding
 * copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with the License. You may obtain
 * a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 *
 * =================================================================================================
 *
 * This software consists of voluntary contributions made by many individuals on behalf of the
 * Apache Software Foundation. For more information on the Apache Software Foundation, please see
 * <http://www.apache.org/>.
 *
 * +------------------------------------------------------------------------------------------------+
 * | License: http://www.apache.org/licenses/LICENSE-2.0.txt 										|
 * | Author: Yong.Teng <webmaster@buession.com> 													|
 * | Copyright @ 2013-2022 Buession.com Inc.														|
 * +------------------------------------------------------------------------------------------------+
 */
package com.buession.springcloud.feign.interceptor.servlet;

import com.buession.springcloud.feign.interceptor.AbstractClientHeadersRequestInterceptor;
import feign.RequestTemplate;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;
import java.util.Set;

/**
 * Servlet 模式请求头拦截器
 *
 * @author Yong.Teng
 */
public class ServletClientHeadersRequestInterceptor extends AbstractClientHeadersRequestInterceptor {

	/**
	 * 构造函数
	 */
	public ServletClientHeadersRequestInterceptor(){
		super();
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
	public ServletClientHeadersRequestInterceptor(Set<String> allowedHeaderNames,
												  Set<String> ignoreHeaderNames){
		super(allowedHeaderNames, ignoreHeaderNames);
	}

	@Override
	public void apply(final RequestTemplate requestTemplate){
		try{
			ServletRequestAttributes requestAttributes =
					(ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();

			HttpServletRequest request = requestAttributes.getRequest();
			Enumeration<String> headerNames = request.getHeaderNames();

			while(headerNames != null && headerNames.hasMoreElements()){
				String name = headerNames.nextElement();

				if(isIgnoreHeaderName(name) == false){
					Enumeration<String> value = request.getHeaders(name);
					List<String> values = new ArrayList<>();

					while(value != null && value.hasMoreElements()){
						values.add(value.nextElement());
					}

					applyHeader(requestTemplate, name, values);
				}
			}
		}catch(IllegalStateException e){
			logger.error(e.getMessage());
		}finally{
			setRequestHeaders(requestTemplate);
		}
	}

}
