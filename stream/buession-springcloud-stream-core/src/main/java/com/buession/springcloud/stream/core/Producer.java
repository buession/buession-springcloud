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

import com.buession.lang.Status;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.MessageHeaders;

/**
 * 消息生产者
 *
 * @param <M>
 * 		消息类型
 *
 * @author Yong.Teng
 * @since 2.3.0
 */
@FunctionalInterface
public interface Producer<M> {

	/**
	 * 发送队列消息
	 *
	 * @param message
	 * 		消息
	 *
	 * @return 消息发送结果
	 */
	default Status sendMessage(final M message) {
		return sendMessage(message, MessageChannel.INDEFINITE_TIMEOUT);
	}

	/**
	 * 发送队列消息
	 *
	 * @param message
	 * 		消息
	 * @param timeout
	 * 		发送消息超时时间
	 *
	 * @return 消息发送结果
	 */
	default Status sendMessage(final M message, final long timeout) {
		return sendMessage(message, null, timeout);
	}

	/**
	 * 发送队列消息
	 *
	 * @param message
	 * 		消息
	 * @param headers
	 * 		消息头
	 *
	 * @return 消息发送结果
	 */
	default Status sendMessage(final M message, final MessageHeaders headers) {
		return sendMessage(message, headers, MessageChannel.INDEFINITE_TIMEOUT);
	}

	/**
	 * 发送队列消息
	 *
	 * @param message
	 * 		消息
	 * @param headers
	 * 		消息头
	 * @param timeout
	 * 		发送消息超时时间
	 *
	 * @return 消息发送结果
	 */
	Status sendMessage(final M message, final MessageHeaders headers, final long timeout);

}
