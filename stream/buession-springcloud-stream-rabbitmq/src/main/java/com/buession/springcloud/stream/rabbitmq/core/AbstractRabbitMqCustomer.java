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
package com.buession.springcloud.stream.rabbitmq.core;

import com.buession.core.utils.Assert;
import com.buession.lang.Status;
import com.buession.springcloud.stream.core.AbstractCustomer;
import com.buession.springcloud.stream.core.Sink;
import com.rabbitmq.client.Channel;
import org.springframework.amqp.support.AmqpHeaders;
import org.springframework.messaging.handler.annotation.Header;

import java.io.IOException;

/**
 * RabbitMQ 消息消费者抽象类
 *
 * @param <M>
 * 		消息类型
 * @param <S>
 * 		消息消费 {@link Sink}
 *
 * @author Yong.Teng
 * @since 3.0.0
 */
public abstract class AbstractRabbitMqCustomer<M, S extends Sink> extends AbstractCustomer<M, S>
		implements RabbitMqCustomer<M> {

	/**
	 * 构造函数
	 *
	 * @param sink
	 * 		消息消费 {@link Sink}
	 */
	public AbstractRabbitMqCustomer(final S sink) {
		super(sink);
	}

	@Override
	public void onMessage(final M message, final Channel channel,
						  @Header(AmqpHeaders.DELIVERY_TAG) final long deliveryTag) {
		Assert.isNull(message, "Message cloud not be null.");

		try{
			if(consume(message) == Status.SUCCESS){
				onSuccess(message, channel, deliveryTag);
				logger.info("Message consume success.");
			}else{
				logger.warn("Message consume failure.");
			}
		}catch(Exception e){
			logger.warn("Message consume failure.");
			onFailure(message, channel, deliveryTag);
		}
	}

	/**
	 * 消息消费成功事件回调
	 *
	 * @param message
	 * 		消息
	 * @param channel
	 *        {@link Channel}
	 * @param deliveryTag
	 * 		消息唯一标记
	 *
	 * @return 执行结果
	 */
	protected Status onSuccess(final M message, final Channel channel, final long deliveryTag) throws IOException {
		if(channel != null){
			logger.debug("basicAck Message: {}", deliveryTag);
			channel.basicAck(deliveryTag, false);
		}

		return Status.SUCCESS;
	}

	/**
	 * 消息消费失败事件回调
	 *
	 * @param message
	 * 		消息
	 * @param channel
	 *        {@link Channel}
	 * @param deliveryTag
	 * 		消息唯一标记
	 *
	 * @return 执行结果
	 */
	protected Status onFailure(final M message, final Channel channel, final long deliveryTag) {
		try{
			// 拒绝消息，并将其重新放入队列
			channel.basicNack(deliveryTag, false, true);
			if(logger.isWarnEnabled()){
				logger.warn("requeue Message: {}", deliveryTag);
			}
			return Status.SUCCESS;
		}catch(IOException e){
			if(logger.isErrorEnabled()){
				logger.warn("requeue Message: {} error: {}", deliveryTag, e.getMessage());
			}
			return Status.FAILURE;
		}
	}

}
