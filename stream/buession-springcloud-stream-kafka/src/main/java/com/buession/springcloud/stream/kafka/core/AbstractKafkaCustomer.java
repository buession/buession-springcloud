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
package com.buession.springcloud.stream.kafka.core;

import com.buession.core.utils.Assert;
import com.buession.lang.Status;
import com.buession.springcloud.stream.core.AbstractCustomer;
import org.springframework.kafka.support.Acknowledgment;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.handler.annotation.Header;

/**
 * Kafka 消息消费者抽象类
 *
 * @param <M>
 * 		消息类型
 *
 * @author Yong.Teng
 * @since 3.0.0
 */
public abstract class AbstractKafkaCustomer<M> extends AbstractCustomer<M> implements KafkaCustomer<M> {

	@Override
	public void onMessage(final M message, @Header(KafkaHeaders.ACKNOWLEDGMENT) final Acknowledgment acknowledgment) {
		Assert.isNull(message, "Message cloud not be null.");

		if(consume(message) == Status.SUCCESS){
			onSuccess(message, acknowledgment);
			logger.info("Message consume success.");
		}else{
			logger.warn("Message consume failure.");
		}
	}

	/**
	 * 消息消费成功事件回调
	 *
	 * @param message
	 * 		消息
	 * @param acknowledgment
	 *        {@link Acknowledgment}
	 *
	 * @return 执行结果
	 */
	protected Status onSuccess(final M message, final Acknowledgment acknowledgment) {
		if(acknowledgment != null){
			logger.debug("Acknowledgment acknowledge");
			acknowledgment.acknowledge();
		}

		return Status.SUCCESS;
	}

	/**
	 * 消息消费失败事件回调
	 *
	 * @param message
	 * 		消息
	 * @param acknowledgment
	 *        {@link Acknowledgment}
	 *
	 * @return 执行结果
	 */
	protected Status onFailure(final M message, final Acknowledgment acknowledgment) {
		return Status.SUCCESS;
	}

}
