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
package com.buession.springcloud.nacos.discovery.autoconfigure;

import com.alibaba.cloud.nacos.ConditionalOnNacosDiscoveryEnabled;
import com.alibaba.cloud.nacos.NacosDiscoveryProperties;
import com.alibaba.cloud.nacos.NacosServiceManager;
import com.alibaba.cloud.nacos.discovery.NacosDiscoveryAutoConfiguration;
import com.alibaba.cloud.nacos.discovery.NacosDiscoveryClientConfiguration;
import com.alibaba.cloud.nacos.discovery.NacosWatch;
import org.springframework.boot.autoconfigure.AutoConfigureAfter;
import org.springframework.boot.autoconfigure.AutoConfigureBefore;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.cloud.client.ConditionalOnDiscoveryEnabled;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author Yong.Teng
 * @since 2.2.0
 */
@Configuration(proxyBeanMethods = false)
@ConditionalOnDiscoveryEnabled
@ConditionalOnNacosDiscoveryEnabled
@AutoConfigureBefore({NacosDiscoveryClientConfiguration.class})
@AutoConfigureAfter({NacosDiscoveryAutoConfiguration.class})
public class NacosDiscoveryConfiguration {

	/**
	 * 解决在 Undertow 容器下停止时，报：
	 * <a href="https://github.com/alibaba/spring-cloud-alibaba/issues/2652" target="_blank">java.lang.IllegalStateException: UT015023: This Context has been already
	 * destroyed</a> 异常，解决方法：<a href="https://github.com/alibaba/spring-cloud-alibaba/issues/2589" target="_blank">https://github.com/alibaba/spring-cloud-alibaba/issues/2589</a>
	 *
	 * @param nacosServiceManager
	 *        {@link NacosServiceManager} 实例
	 * @param nacosDiscoveryProperties
	 *        {@link NacosDiscoveryProperties} 实例
	 *
	 * @return {@link NacosWatch}
	 */
	@Bean
	@ConditionalOnMissingBean
	@ConditionalOnProperty(value = "spring.cloud.nacos.discovery.watch.enabled", matchIfMissing = true)
	@ConditionalOnClass(name = {"io.undertow.Undertow"})
	public NacosWatch nacosWatch(NacosServiceManager nacosServiceManager,
								 NacosDiscoveryProperties nacosDiscoveryProperties){
		return new NacosWatch(nacosServiceManager, nacosDiscoveryProperties) {

			@Override
			public int getPhase(){
				return Integer.MAX_VALUE;
			}

		};
	}

}
