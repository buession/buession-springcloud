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
 * | Copyright @ 2013-2019 Buession.com Inc.														       |
 * +-------------------------------------------------------------------------------------------------------+
 */
package com.buession.springcloud.fegin.interceptor;

import feign.Feign;
import feign.RequestInterceptor;
import feign.RequestTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.util.Enumeration;

/**
 * @author Yong.Teng
 */
public class ClientHeadersRequestInterceptor implements RequestInterceptor {

    private final static String REQUEST_CONTEXT_CLIENT_NAME = "X-Request-Context-Client";

    private final static String REQUEST_CONTEXT_CLIENT = Feign.class.getSimpleName() + "/" + (Feign.class.getPackage
            ().getImplementationVendor() == null ? "9.5.0" : Feign.class.getPackage().getImplementationVendor());

    private final static Logger logger = LoggerFactory.getLogger(ClientHeadersRequestInterceptor.class);

    @Override
    public void apply(final RequestTemplate requestTemplate){
        try{
            ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder
                    .currentRequestAttributes();

            HttpServletRequest request = attributes.getRequest();
            Enumeration<String> headerNames = request.getHeaderNames();

            if(headerNames != null){
                while(headerNames.hasMoreElements()){
                    String name = headerNames.nextElement();
                    String values = request.getHeader(name);
                    requestTemplate.header(name, values);
                    logger.debug("Add feign request header, name: {}, values: {}", name, values);
                }
            }
        }catch(IllegalStateException e){
            logger.error(e.getMessage());
        }finally{
            setRequestContextClient(requestTemplate);
        }
    }

    private static void setRequestContextClient(final RequestTemplate requestTemplate){
        requestTemplate.header(REQUEST_CONTEXT_CLIENT_NAME, REQUEST_CONTEXT_CLIENT);
    }

}
