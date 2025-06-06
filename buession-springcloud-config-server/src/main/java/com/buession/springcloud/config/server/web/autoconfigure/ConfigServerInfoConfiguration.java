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
package com.buession.springcloud.config.server.web.autoconfigure;

import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.autoconfigure.condition.ConditionalOnWebApplication;
import org.springframework.context.annotation.Bean;

/**
 * @author Yong.Teng
 */
@AutoConfiguration
@ConditionalOnProperty(prefix = "spring.cloud.config", name = "send-info", havingValue = "true", matchIfMissing = true)
public class ConfigServerInfoConfiguration {

	@AutoConfiguration
	@ConditionalOnWebApplication(type = ConditionalOnWebApplication.Type.SERVLET)
	static class Servlet extends ConfigServerInfoConfiguration {

		@Bean
		@ConditionalOnMissingBean
		public com.buession.springcloud.config.server.web.servlet.ConfigServerInfoFilter configServerInfoFilter() {
			return new com.buession.springcloud.config.server.web.servlet.ConfigServerInfoFilter();
		}

	}

	@AutoConfiguration
	@ConditionalOnWebApplication(type = ConditionalOnWebApplication.Type.REACTIVE)
	static class Reactive extends ConfigServerInfoConfiguration {

		@Bean
		@ConditionalOnMissingBean
		public com.buession.springcloud.config.server.web.reactive.ConfigServerInfoFilter configServerInfoFilter() {
			return new com.buession.springcloud.config.server.web.reactive.ConfigServerInfoFilter();
		}

	}

}
