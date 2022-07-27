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
package com.buession.springcloud.feign.interceptor;

import com.buession.core.builder.ListBuilder;
import com.buession.core.utils.VersionUtils;
import com.buession.springcloud.common.Version;
import feign.Feign;
import feign.RequestInterceptor;
import feign.RequestTemplate;

import java.util.List;

/**
 * 请求头拦截器抽象类
 *
 * @author Yong.Teng
 * @since 1.2.1
 */
public abstract class AbstractClientHeadersRequestInterceptor implements RequestInterceptor {

	protected final static String REQUEST_CONTEXT_CLIENT_NAME = "X-Request-Context-Client";

	protected final static String BUESSION_CLOUD_NAME = "X-Buession-Cloud-Version";

	protected final static List<String> IGNORE_REQUEST_HEADERS = ListBuilder.of("Accept-Encoding");

	protected final static String REQUEST_CONTEXT_CLIENT =
			Feign.class.getSimpleName() + "/" + VersionUtils.determineClassVersion(Feign.class);

	protected static void setRequestHeaders(final RequestTemplate requestTemplate){
		requestTemplate.header(REQUEST_CONTEXT_CLIENT_NAME, REQUEST_CONTEXT_CLIENT);
		requestTemplate.header(BUESSION_CLOUD_NAME, Version.VERSION);
	}

}
