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
package com.buession.springcloud.zuul.filter;

import com.netflix.zuul.context.RequestContext;
import org.springframework.core.Ordered;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

/**
 * @author Yong.Teng
 */
public abstract class AbstractProxyFilter extends AbstractZuulFilter {

    @Override
    public Object run(RequestContext context, HttpServletRequest request, HttpServletResponse response){
        String requestContextName = getRequestContextName();

        if(requestContextName != null && requestContextName != ""){
            context.addZuulRequestHeader("X-Request-Context", requestContextName);
        }

        Map<String, String> headers = getRequestHeaders(request);
        if(headers != null){
            headers.forEach((name, value)->{
                context.addZuulRequestHeader(name, value);
            });
        }

        return context;
    }

    @Override
    public int filterOrder(){
        return Ordered.HIGHEST_PRECEDENCE;
    }

    protected String getRequestContextName(){
        return null;
    }

    protected Map<String, String> getRequestHeaders(HttpServletRequest request){
        return null;
    }

}
