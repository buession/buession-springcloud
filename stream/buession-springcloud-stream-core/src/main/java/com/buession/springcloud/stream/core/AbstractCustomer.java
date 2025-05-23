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
package com.buession.springcloud.stream.core;

import com.buession.core.utils.Assert;
import com.buession.lang.Status;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * 消息消费者抽象类
 *
 * @param <M>
 * 		消息类型
 *
 * @author Yong.Teng
 * @since 2.3.0
 */
public abstract class AbstractCustomer<M> implements Customer<M> {

	protected Logger logger = LoggerFactory.getLogger(getClass());

	@Override
	public void onMessage(final M message) {
		Assert.isNull(message, "Message cloud not be null.");

		if(consume(message) == Status.SUCCESS){
			onSuccess(message);
			logger.info("Message consume success.");
		}else{
			logger.warn("Message consume failure.");
		}
	}

	protected abstract Status consume(final M payload);

	/**
	 * 消息消费成功事件回调
	 *
	 * @param message
	 * 		消息
	 *
	 * @return 执行结果
	 *
	 * @since 3.0.0
	 */
	protected Status onSuccess(final M message) {
		return Status.SUCCESS;
	}

	/**
	 * 消息消费失败事件回调
	 *
	 * @param message
	 * 		消息
	 *
	 * @return 执行结果
	 *
	 * @since 3.0.0
	 */
	protected Status onFailure(final M message) {
		return Status.SUCCESS;
	}

}
