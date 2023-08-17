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
package com.buession.springcloud.stream.core;

import com.buession.core.utils.Assert;
import com.buession.lang.Status;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.MessageHeaders;
import org.springframework.messaging.support.MessageBuilder;

/**
 * 消息生产者抽象类
 *
 * @param <M>
 * 		消息类型
 * @param <S>
 * 		消息源 {@link Source}
 *
 * @author Yong.Teng
 * @since 2.3.0
 */
public abstract class AbstractProducer<M, S extends Source> implements Producer<M> {

	/**
	 * 消息源 {@link Source}
	 */
	protected S source;

	protected Logger logger = LoggerFactory.getLogger(getClass());

	/**
	 * 构造函数
	 *
	 * @param source
	 * 		消息源 {@link Source}
	 */
	public AbstractProducer(final S source) {
		Assert.isNull(source, "Source cloud not be null.");
		this.source = source;
	}

	@Override
	public Status sendMessage(final M message, final MessageHeaders headers, final long timeout) {
		Assert.isNull(message, "Message cloud not be null.");

		org.springframework.messaging.Message<M> actualMessage = headers == null ?
				MessageBuilder.withPayload(message).build() : MessageBuilder.createMessage(message, headers);

		if(source.output().send(actualMessage, timeout)){
			logger.info("Message send success.");
			return Status.SUCCESS;
		}else{
			logger.warn("Message send failure.");
			return Status.FAILURE;
		}
	}

}
