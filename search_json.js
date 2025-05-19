window.ydoc_plugin_search_json = {
  "文档": [
    {
      "title": "快速入门",
      "content": "TIP\n\n官方指南假设您已了解\"JAVA\"、以及 spring、springboot、springcloud 方面的相关知识。\n\nBuession SpringCloud 是基于 Spring Cloud 2 的扩展，其主要目的是统一引入包的版本，我们将 springcloud 中引入的三方包的版本进行了统一，规避了在 springcloud 中每个模块引入的同一个三方包的版本不一致的情况（强迫症），并在此基础上扩展了一些功能。您可以根据本文档中的示例，快速熟悉 Buession SpringCloud 的使用方法。",
      "url": "/docs/quickstart.html",
      "children": [
        {
          "title": "下一步可做什么？",
          "url": "/docs/quickstart.html#下一步可做什么？",
          "content": "下一步可做什么？您对 Buession SpringCloud 大致了解后，您接下来可以做以下事情：了解兼容性：了解 Buession SpringCloud 的兼容性\n安装：安装/引用 Buession SpringCloud\n使用：开始使用 Buession SpringCloud 功能\n"
        }
      ]
    },
    {
      "title": "框架介绍",
      "content": "",
      "url": "/docs/intro.html",
      "children": [
        {
          "title": "Buession SpringCloud框架是什么？",
          "url": "/docs/intro.html#buession-springcloud框架是什么？",
          "content": "Buession SpringCloud框架是什么？基于 Spring Cloud 2 的集成，其主要目的是统一引入包的版本，在此基础上扩展了一些功能。如：feign 拦截器可以将客户端的请求头，携带到微服务后端应用；spring-cloud-gateway、spring-cloud-zuul 定义了 ProxyFilter 可以定义某个服务通过网关传递到后端微服务的请求头；内置了 spring-cloud-config-server 的启动类，您可以开箱即用。当然，其本质就是对 springcloud 组件的依赖引用，核心的和直接引用 springcloud 原生库几乎没有实质性区别。"
        }
      ]
    },
    {
      "title": "开源协议",
      "content": "                             Apache License                       Version 2.0, January 2004\n                    http://www.apache.org/licenses/\nTERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION\nDefinitions.\n\"License\" shall mean the terms and conditions for use, reproduction,\nand distribution as defined by Sections 1 through 9 of this document.\n\"Licensor\" shall mean the copyright owner or entity authorized by\nthe copyright owner that is granting the License.\n\"Legal Entity\" shall mean the union of the acting entity and all\nother entities that control, are controlled by, or are under common\ncontrol with that entity. For the purposes of this definition,\n\"control\" means (i) the power, direct or indirect, to cause the\ndirection or management of such entity, whether by contract or\notherwise, or (ii) ownership of fifty percent (50%) or more of the\noutstanding shares, or (iii) beneficial ownership of such entity.\n\"You\" (or \"Your\") shall mean an individual or Legal Entity\nexercising permissions granted by this License.\n\"Source\" form shall mean the preferred form for making modifications,\nincluding but not limited to software source code, documentation\nsource, and configuration files.\n\"Object\" form shall mean any form resulting from mechanical\ntransformation or translation of a Source form, including but\nnot limited to compiled object code, generated documentation,\nand conversions to other media types.\n\"Work\" shall mean the work of authorship, whether in Source or\nObject form, made available under the License, as indicated by a\ncopyright notice that is included in or attached to the work\n(an example is provided in the Appendix below).\n\"Derivative Works\" shall mean any work, whether in Source or Object\nform, that is based on (or derived from) the Work and for which the\neditorial revisions, annotations, elaborations, or other modifications\nrepresent, as a whole, an original work of authorship. For the purposes\nof this License, Derivative Works shall not include works that remain\nseparable from, or merely link (or bind by name) to the interfaces of,\nthe Work and Derivative Works thereof.\n\"Contribution\" shall mean any work of authorship, including\nthe original version of the Work and any modifications or additions\nto that Work or Derivative Works thereof, that is intentionally\nsubmitted to Licensor for inclusion in the Work by the copyright owner\nor by an individual or Legal Entity authorized to submit on behalf of\nthe copyright owner. For the purposes of this definition, \"submitted\"\nmeans any form of electronic, verbal, or written communication sent\nto the Licensor or its representatives, including but not limited to\ncommunication on electronic mailing lists, source code control systems,\nand issue tracking systems that are managed by, or on behalf of, the\nLicensor for the purpose of discussing and improving the Work, but\nexcluding communication that is conspicuously marked or otherwise\ndesignated in writing by the copyright owner as \"Not a Contribution.\"\n\"Contributor\" shall mean Licensor and any individual or Legal Entity\non behalf of whom a Contribution has been received by Licensor and\nsubsequently incorporated within the Work.\n\n\nGrant of Copyright License. Subject to the terms and conditions of\nthis License, each Contributor hereby grants to You a perpetual,\nworldwide, non-exclusive, no-charge, royalty-free, irrevocable\ncopyright license to reproduce, prepare Derivative Works of,\npublicly display, publicly perform, sublicense, and distribute the\nWork and such Derivative Works in Source or Object form.\n\n\nGrant of Patent License. Subject to the terms and conditions of\nthis License, each Contributor hereby grants to You a perpetual,\nworldwide, non-exclusive, no-charge, royalty-free, irrevocable\n(except as stated in this section) patent license to make, have made,\nuse, offer to sell, sell, import, and otherwise transfer the Work,\nwhere such license applies only to those patent claims licensable\nby such Contributor that are necessarily infringed by their\nContribution(s) alone or by combination of their Contribution(s)\nwith the Work to which such Contribution(s) was submitted. If You\ninstitute patent litigation against any entity (including a\ncross-claim or counterclaim in a lawsuit) alleging that the Work\nor a Contribution incorporated within the Work constitutes direct\nor contributory patent infringement, then any patent licenses\ngranted to You under this License for that Work shall terminate\nas of the date such litigation is filed.\n\n\nRedistribution. You may reproduce and distribute copies of the\nWork or Derivative Works thereof in any medium, with or without\nmodifications, and in Source or Object form, provided that You\nmeet the following conditions:\n(a) You must give any other recipients of the Work or\nDerivative Works a copy of this License; and\n(b) You must cause any modified files to carry prominent notices\nstating that You changed the files; and\n(c) You must retain, in the Source form of any Derivative Works\nthat You distribute, all copyright, patent, trademark, and\nattribution notices from the Source form of the Work,\nexcluding those notices that do not pertain to any part of\nthe Derivative Works; and\n(d) If the Work includes a \"NOTICE\" text file as part of its\ndistribution, then any Derivative Works that You distribute must\ninclude a readable copy of the attribution notices contained\nwithin such NOTICE file, excluding those notices that do not\npertain to any part of the Derivative Works, in at least one\nof the following places: within a NOTICE text file distributed\nas part of the Derivative Works; within the Source form or\ndocumentation, if provided along with the Derivative Works; or,\nwithin a display generated by the Derivative Works, if and\nwherever such third-party notices normally appear. The contents\nof the NOTICE file are for informational purposes only and\ndo not modify the License. You may add Your own attribution\nnotices within Derivative Works that You distribute, alongside\nor as an addendum to the NOTICE text from the Work, provided\nthat such additional attribution notices cannot be construed\nas modifying the License.\nYou may add Your own copyright statement to Your modifications and\nmay provide additional or different license terms and conditions\nfor use, reproduction, or distribution of Your modifications, or\nfor any such Derivative Works as a whole, provided Your use,\nreproduction, and distribution of the Work otherwise complies with\nthe conditions stated in this License.\n\n\nSubmission of Contributions. Unless You explicitly state otherwise,\nany Contribution intentionally submitted for inclusion in the Work\nby You to the Licensor shall be under the terms and conditions of\nthis License, without any additional terms or conditions.\nNotwithstanding the above, nothing herein shall supersede or modify\nthe terms of any separate license agreement you may have executed\nwith Licensor regarding such Contributions.\n\n\nTrademarks. This License does not grant permission to use the trade\nnames, trademarks, service marks, or product names of the Licensor,\nexcept as required for reasonable and customary use in describing the\norigin of the Work and reproducing the content of the NOTICE file.\n\n\nDisclaimer of Warranty. Unless required by applicable law or\nagreed to in writing, Licensor provides the Work (and each\nContributor provides its Contributions) on an \"AS IS\" BASIS,\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or\nimplied, including, without limitation, any warranties or conditions\nof TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A\nPARTICULAR PURPOSE. You are solely responsible for determining the\nappropriateness of using or redistributing the Work and assume any\nrisks associated with Your exercise of permissions under this License.\n\n\nLimitation of Liability. In no event and under no legal theory,\nwhether in tort (including negligence), contract, or otherwise,\nunless required by applicable law (such as deliberate and grossly\nnegligent acts) or agreed to in writing, shall any Contributor be\nliable to You for damages, including any direct, indirect, special,\nincidental, or consequential damages of any character arising as a\nresult of this License or out of the use or inability to use the\nWork (including but not limited to damages for loss of goodwill,\nwork stoppage, computer failure or malfunction, or any and all\nother commercial damages or losses), even if such Contributor\nhas been advised of the possibility of such damages.\n\n\nAccepting Warranty or Additional Liability. While redistributing\nthe Work or Derivative Works thereof, You may choose to offer,\nand charge a fee for, acceptance of support, warranty, indemnity,\nor other liability obligations and/or rights consistent with this\nLicense. However, in accepting such obligations, You may act only\non Your own behalf and on Your sole responsibility, not on behalf\nof any other Contributor, and only if You agree to indemnify,\ndefend, and hold each Contributor harmless for any liability\nincurred by, or claims asserted against, such Contributor by reason\nof your accepting any such warranty or additional liability.\n\nEND OF TERMS AND CONDITIONSAPPENDIX: How to apply the Apache License to your work.  To apply the Apache License to your work, attach the following  boilerplate notice, with the fields enclosed by brackets \"[]\"\n  replaced with your own identifying information. (Don't include\n  the brackets!)  The text should be enclosed in the appropriate\n  comment syntax for the file format. We also recommend that a\n  file or class name and description of purpose be included on the\n  same \"printed page\" as the copyright notice for easier\n  identification within third-party archives.\nCopyright [yyyy] [name of copyright owner]Licensed under the Apache License, Version 2.0 (the \"License\");you may not use this file except in compliance with the License.\nYou may obtain a copy of the License at   http://www.apache.org/licenses/LICENSE-2.0Unless required by applicable law or agreed to in writing, softwaredistributed under the License is distributed on an \"AS IS\" BASIS,\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\nSee the License for the specific language governing permissions and\nlimitations under the License.",
      "url": "/docs/license.html",
      "children": []
    },
    {
      "title": "模块说明",
      "content": "",
      "url": "/docs/module.html",
      "children": [
        {
          "title": "buession-springcloud-common",
          "url": "/docs/module.html#buession-springcloud-common",
          "content": "buession-springcloud-commonSpring Cloud 基础包\n"
        },
        {
          "title": "buession-springcloud-config-client",
          "url": "/docs/module.html#buession-springcloud-config-client",
          "content": "buession-springcloud-config-clientSpring Cloud 配置中心客户端\n"
        },
        {
          "title": "buession-springcloud-config-cloud",
          "url": "/docs/module.html#buession-springcloud-config-cloud",
          "content": "buession-springcloud-config-cloudSpring Cloud 配置中心服务端\n"
        },
        {
          "title": "buession-springcloud-consul",
          "url": "/docs/module.html#buession-springcloud-consul",
          "content": "buession-springcloud-consulSpring Cloud Consul\n"
        },
        {
          "title": "buession-springcloud-feign",
          "url": "/docs/module.html#buession-springcloud-feign",
          "content": "buession-springcloud-feignSpring Cloud Feign\n"
        },
        {
          "title": "buession-springcloud-gateway",
          "url": "/docs/module.html#buession-springcloud-gateway",
          "content": "buession-springcloud-gatewaySpring Cloud Gateway\n"
        },
        {
          "title": "buession-springcloud-hystrix",
          "url": "/docs/module.html#buession-springcloud-hystrix",
          "content": "buession-springcloud-hystrixSpring Cloud Hystrix\n"
        },
        {
          "title": "buession-springcloud-kubernetes",
          "url": "/docs/module.html#buession-springcloud-kubernetes",
          "content": "buession-springcloud-kubernetesSpring Cloud Kubetnetes\n"
        },
        {
          "title": "buession-springcloud-metrics",
          "url": "/docs/module.html#buession-springcloud-metrics",
          "content": "buession-springcloud-metricsSpring Cloud Metrics\n"
        },
        {
          "title": "buession-springcloud-nacos-config-client",
          "url": "/docs/module.html#buession-springcloud-nacos-config-client",
          "content": "buession-springcloud-nacos-config-clientAlibaba Nacos 配置中心客户端\n"
        },
        {
          "title": "buession-springcloud-nacos-config-discovery",
          "url": "/docs/module.html#buession-springcloud-nacos-config-discovery",
          "content": "buession-springcloud-nacos-config-discoveryAlibaba Nacos 服务注册和发现客户端\n"
        },
        {
          "title": "buession-springcloud-ribbon",
          "url": "/docs/module.html#buession-springcloud-ribbon",
          "content": "buession-springcloud-ribbonSpring Cloud Ribbon\n"
        },
        {
          "title": "buession-springcloud-stream",
          "url": "/docs/module.html#buession-springcloud-stream",
          "content": "buession-springcloud-streamSpring Cloud Stream\n"
        },
        {
          "title": "buession-springcloud-zuul",
          "url": "/docs/module.html#buession-springcloud-zuul",
          "content": "buession-springcloud-zuulSpring Cloud Zuul\n"
        }
      ]
    },
    {
      "title": "版本说明",
      "content": "该项目基于 GNU 版风格定义项目版本，即：主版本号.子版本号.修正版本号。管理策略主版本号，发生变更时，不保证所有的 API 对上一个版本兼容，但保障大部分能兼容；主版本变更，可能涉及类、接口、枚举、方法的删除，或者包名的变更\n子版本号，发生变更时，完全兼容上一个版本，主要会增加一些小的功能或API，底层逻辑的调整调优\n修正版本号，主要用于修复 BUG、优化性能、安全漏洞修复，不会新增、变更、删除已有 API\n三方包兼容性说明当引用的三方包，我们保证尽大可能兼容。但对于 springframework、springboot、springcloud、springsecurity、springdata 等 spring 家族组件，以及 servlet 兼容对应的主版本。",
      "url": "/docs/version.html",
      "children": []
    },
    {
      "title": "安装及使用",
      "content": "",
      "url": "/docs/installation.html",
      "children": [
        {
          "title": "Maven 中央仓库搜索",
          "url": "/docs/installation.html#maven-中央仓库搜索",
          "content": "Maven 中央仓库搜索https://mvnrepository.com/search?q=com.buession.springcloud\nhttps://search.maven.org/search?q=g:com.buession.springcloud\n"
        },
        {
          "title": "手动编译",
          "url": "/docs/installation.html#手动编译",
          "content": "手动编译git clone https://github.com/buession/buession-springcloudcd buession-springcloud/buession-springcloud-parent && mvn install\n"
        },
        {
          "title": "Maven",
          "url": "/docs/installation.html#maven",
          "content": "Maven    com.buession.springcloud\n    buession-springcloud-xxx\n    x.x.x\n\n"
        },
        {
          "title": "Gradle",
          "url": "/docs/installation.html#gradle",
          "content": "Gradlecompile group: 'com.buession.springcloud', name: 'buession-springcloud-xxx', version: 'x.x.x'其中，artifactId 中的 xxx 表示对应的子模块；version 中的 x.x.x 代表版本号，根据需要使用特定版本，建议使用最新版本。"
        }
      ]
    },
    {
      "title": "环境要求",
      "content": "",
      "url": "/docs/requirement.html",
      "children": [
        {
          "title": "环境要求",
          "url": "/docs/requirement.html#环境要求",
          "content": "环境要求JDKJDK 8+构建工具\n\n构建工具\n版本\n\n\n\n\nMaven\n3.5+\n\n\nGradle\n6.x+，推荐 6.3 及以上版本\n\n\nServlet 容器支持 servlet 3.1+，推荐使用 servlet 4.0 及以上版本。"
        }
      ]
    }
  ],
  "参考手册": [
    {
      "title": "参考手册简介",
      "content": "基于 Spring Cloud 2 的集成，其主要目的是统一引入包的版本，在此基础上扩展了一些功能。如：feign 拦截器可以将客户端的请求头，携带到微服务后端应用；spring-cloud-gateway、spring-cloud-zuul 定义了 ProxyFilter 可以定义某个服务通过网关传递到后端微服务的请求头；内置了 spring-cloud-config-server 的启动类，您可以开箱即用。",
      "url": "/manual/index.html",
      "children": []
    },
    {
      "title": "参考指南",
      "content": "本文档包含了完整的 Buession SpringCloud 的参考文档。\n\n版本\n手册\n\n\n\n\n3.0.x\nAPI 手册\n\n\n2.3.x\nAPI 手册\n\n\n2.2.x\nAPI 手册\n\n\n2.1.x\nAPI 手册\n\n\n2.0.x\nAPI 手册\n\n\n",
      "url": "/manual/overview.html",
      "children": []
    },
    {
      "title": "API 参考手册",
      "content": "Buession SpringCloud API 包含以下目录：\n\n模块\n使用帮助\n手册\n\n\n\n\nbuession-springcloud-common\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-bus\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-config-client\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-config-server\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-consul\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-feign\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-gateway\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-hystrix\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-loadbalancer\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-loadbalancer\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-metrics\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-nacos-config-client\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-nacos-discovery\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-ribbon\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-stream-core\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-stream-kafka\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-stream-rabbitmq\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-stream-rocketmq\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-zuul\n使用帮助\nAPI 手册\n\n\n",
      "url": "/manual/3.0/index.html",
      "children": []
    },
    {
      "title": "buession-springcloud-common 参考手册",
      "content": "SpringCloud 基础库依赖。",
      "url": "/manual/3.0/common/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/3.0/common/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-common\n    x.x.x\n\n该模块引用了 spring-cloud-commons、spring-cloud-context 等等 spring cloud 的基础包。"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/3.0/common/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-common 参考手册",
      "content": "",
      "url": "/manual/3.0/common/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/3.0/common/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-bus 参考手册",
      "content": "SpringCloud 基础库依赖。",
      "url": "/manual/3.0/bus/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/3.0/bus/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-bus\n    x.x.x\n\n该模块引用了 spring-cloud-bus 等等 spring cloud 的基础包。"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/3.0/bus/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-bus 参考手册",
      "content": "",
      "url": "/manual/3.0/bus/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/3.0/bus/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-config-client 参考手册",
      "content": "SpringCloud Config Client 客户端依赖。",
      "url": "/manual/3.0/config-client/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/3.0/config-client/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-config-client\n    x.x.x\n\n该模块引用了 spring-cloud-config-client 等等 spring cloud config 客户端的包。"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/3.0/config-client/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-config-client 参考手册",
      "content": "",
      "url": "/manual/3.0/config-client/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/3.0/config-client/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-config-server 参考手册",
      "content": "SpringCloud Config Client 服务端依赖。",
      "url": "/manual/3.0/config-server/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/3.0/config-server/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-config-server\n    x.x.x\n\n该模块引用了 spring-cloud-config-server 等等 spring cloud config 服务端的包。该模并实现了 SpringBootApplication 的启动类 com.buession.springcloud.config.server.CloudConfigServerWebApplication，可做到开箱即用。支持 servlet 和 webflux，取决于您引入的包。当然，您使用 buession-springcloud-config-server 的启动类 com.buession.springcloud.config.server.CloudConfigServerWebApplication，也可以将您的应用注册到服务注册和发现中心。"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/3.0/config-server/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-config-server 参考手册",
      "content": "",
      "url": "/manual/3.0/config-server/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/3.0/config-server/ConfigurationProperties.html#配置属性",
          "content": "配置属性通用配置\n\n属性\n类型\n默认值\n说明\n\n\n\n\nspring.cloud.config.send-info\nboolean\ntrue\n是否在请求头中返回 spring cloud config server 信息\n\n\n"
        }
      ]
    },
    {
      "title": "buession-springcloud-consul 参考手册",
      "content": "SpringCloud Consul 基础库依赖。",
      "url": "/manual/3.0/consul/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/3.0/consul/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-consul\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/3.0/consul/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-consul 参考手册",
      "content": "",
      "url": "/manual/3.0/consul/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/3.0/consul/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-feign 参考手册",
      "content": "SpringCloud OpenFeign 基础库依赖。",
      "url": "/manual/3.0/feign/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/3.0/feign/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-feign\n    x.x.x\n\n该模块在引入 spring-cloud-openfeign 的基础上，还定义了请求头拦截器，可以将前端的所有请求头转发到微服务后端，便于在实际业务中需要根据前端的请求头处理业务逻辑。支持 servlet 和 webflux，您可以将配置属性 spring.cloud.feign.apply-client-request-headers.enabled 的值设置为 false 不进行转发。\n注：\n\n\n此处的前端并不指浏览器，而是指调用 feign 的调用端。\n\n\n会忽略掉请求头 Accept-Encoding，我们将在未来支持自定义需要转发或者忽略的请求头。\n\n\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/3.0/feign/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-feign 参考手册",
      "content": "",
      "url": "/manual/3.0/feign/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/3.0/feign/ConfigurationProperties.html#配置属性",
          "content": "配置属性通用配置\n\n属性\n类型\n默认值\n说明\n\n\n\n\nspring.cloud.feign.apply-client-request-headers.enabled\nboolean\ntrue\n是否转发请求头\n\n\n"
        }
      ]
    },
    {
      "title": "buession-springcloud-gateway 参考手册",
      "content": "SpringCloud GateWay 基础库依赖。",
      "url": "/manual/3.0/gateway/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/3.0/gateway/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-gateway\n    x.x.x\n\n您可以通过继承 AbstractProxyFilter 实现代理转发过滤器，AbstractProxyFilter 是 org.springframework.cloud.gateway.filter.GlobalFilter 的抽象实现类。该 Filter 可实现，将请求上下文通过请求头 X-Request-Context，以及其它定义的请求头传递到网关后端，您只需要重写方法 String getRequestContextName()、Map getRequestHeaders(ServerWebExchange exchange) 即可。"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/3.0/gateway/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-gateway 参考手册",
      "content": "",
      "url": "/manual/3.0/gateway/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/3.0/gateway/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-hystrix 参考手册",
      "content": "SpringCloud Netflix Hystrix 基础库依赖。",
      "url": "/manual/3.0/hystrix/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/3.0/hystrix/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-hystrix\n    x.x.x\n\n该模块引用了 spring-boot、spring-boot-autoconfigure、spring-boot-starter-validation、spring-boot-starter-log4j2 等等 spring boot 的基础包。该模块定义了 SpringBootApplication 的接口，简化了您的 SpringBootApplication 启动类的创建(更多的使用方式，将在buession-springboot-web和buession-springboot-cli讲解)。该模块还将自动自动配置 MessagePropertyBeanPostProcessor。"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/3.0/hystrix/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-hystrix 参考手册",
      "content": "",
      "url": "/manual/3.0/hystrix/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/3.0/hystrix/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-kubernetes 参考手册",
      "content": "SpringCloud Kubernetes 基础库依赖。",
      "url": "/manual/3.0/kubernetes/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/3.0/kubernetes/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-kubernetes\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/3.0/kubernetes/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-kubernetes 参考手册",
      "content": "",
      "url": "/manual/3.0/kubernetes/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/3.0/kubernetes/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-loadbalancer 参考手册",
      "content": "SpringCloud LoadBalancer 基础库依赖。",
      "url": "/manual/3.0/loadbalancer/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/3.0/loadbalancer/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-loadbalancer\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/3.0/loadbalancer/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-loadbalancer 参考手册",
      "content": "",
      "url": "/manual/3.0/loadbalancer/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/3.0/loadbalancer/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-metrics 参考手册",
      "content": "dropwizard metrics 基础库依赖。",
      "url": "/manual/3.0/metrics/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/3.0/metrics/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-metrics\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/3.0/metrics/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-metrics 参考手册",
      "content": "",
      "url": "/manual/3.0/metrics/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/3.0/metrics/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-nacos-config-client 参考手册",
      "content": "SpringCloud Alibaba Nacos Config Client 基础库依赖。",
      "url": "/manual/3.0/nacos-config-client/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/3.0/nacos-config-client/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-nacos-config-client\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/3.0/nacos-config-client/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-nacos-config-client 参考手册",
      "content": "",
      "url": "/manual/3.0/nacos-config-client/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/3.0/nacos-config-client/ConfigurationProperties.html#配置属性",
          "content": "配置属性完整的配置属性，参考 Spring Cloud Alibaba Nacos Config 文档"
        }
      ]
    },
    {
      "title": "buession-springcloud-nacos-discovery 参考手册",
      "content": "SpringCloud Alibaba Nacos Discovery 基础库依赖。",
      "url": "/manual/3.0/nacos-discovery/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/3.0/nacos-discovery/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-nacos-discovery\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/3.0/nacos-discovery/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-nacos-discovery 参考手册",
      "content": "",
      "url": "/manual/3.0/nacos-discovery/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/3.0/nacos-discovery/ConfigurationProperties.html#配置属性",
          "content": "配置属性完整的配置属性，参考 Spring Cloud Alibaba Nacos Discovery 文档"
        }
      ]
    },
    {
      "title": "buession-springcloud-ribbon 参考手册",
      "content": "SpringCloud Netflix RRibbon 基础库依赖。",
      "url": "/manual/3.0/ribbon/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/3.0/ribbon/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-ribbon\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/3.0/ribbon/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-ribbon 参考手册",
      "content": "",
      "url": "/manual/3.0/ribbon/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/3.0/ribbon/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream 参考手册",
      "content": "SpringCloud Stream 基础库依赖。",
      "url": "/manual/3.0/stream/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/3.0/stream/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-stream\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/3.0/stream/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream 参考手册",
      "content": "",
      "url": "/manual/3.0/stream/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/3.0/stream/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream-core 参考手册",
      "content": "SpringCloud Stream 基础库依赖。",
      "url": "/manual/3.0/stream/core/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/3.0/stream/core/index.html#安装",
          "content": "安装    com.buession.springcloud.stream\n    buession-springcloud-stream-core\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/3.0/stream/core/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream-core 参考手册",
      "content": "",
      "url": "/manual/3.0/stream/core/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/3.0/stream/core/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream-kafka 参考手册",
      "content": "Spring Cloud Stream Kafka Binder 基础库依赖。",
      "url": "/manual/3.0/stream/kafka/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/3.0/stream/kafka/index.html#安装",
          "content": "安装    com.buession.springcloud.stream\n    buession-springcloud-stream-kafka\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/3.0/stream/kafka/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream-kafka 参考手册",
      "content": "",
      "url": "/manual/3.0/stream/kafka/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/3.0/stream/kafka/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream-rabbitmq 参考手册",
      "content": "SpringCloud Stream 基础库依赖。",
      "url": "/manual/3.0/stream/rabbitmq/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/3.0/stream/rabbitmq/index.html#安装",
          "content": "安装    com.buession.springcloud.stream\n    buession-springcloud-stream-rabbitmq\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/3.0/stream/rabbitmq/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream-rabbitmq 参考手册",
      "content": "",
      "url": "/manual/3.0/stream/rabbitmq/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/3.0/stream/rabbitmq/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream-rocketmq 参考手册",
      "content": "SpringCloud Stream 基础库依赖。",
      "url": "/manual/3.0/stream/rocketmq/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/3.0/stream/rocketmq/index.html#安装",
          "content": "安装    com.buession.springcloud.stream\n    buession-springcloud-stream-rocketmq\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/3.0/stream/rocketmq/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream-rocketmq 参考手册",
      "content": "",
      "url": "/manual/3.0/stream/rocketmq/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/3.0/stream/rocketmq/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-zuul 参考手册",
      "content": "SpringCloud Netflix Zuul 基础库依赖。",
      "url": "/manual/3.0/zuul/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/3.0/zuul/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-zuul\n    x.x.x\n\n您可以通过继承 AbstractProxyFilter 实现代理转发过滤器，AbstractProxyFilter 是 com.netflix.zuul.ZuulFilter 的抽象实现类。该 Filter 可实现，将请求上下文通过请求头 X-Request-Context，以及其它定义的请求头传递到网关后端，您只需要重写方法 String getRequestContextName()、Map getRequestHeaders(HttpServletRequest request) 即可。"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/3.0/zuul/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-zuul 参考手册",
      "content": "",
      "url": "/manual/3.0/zuul/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/3.0/zuul/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "API 参考手册",
      "content": "Buession SpringCloud API 包含以下目录：\n\n模块\n使用帮助\n手册\n\n\n\n\nbuession-springcloud-common\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-bus\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-config-client\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-config-server\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-consul\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-feign\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-gateway\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-hystrix\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-kubernetes\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-metrics\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-nacos-config-client\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-nacos-discovery\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-ribbon\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-stream\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-zuul\n使用帮助\nAPI 手册\n\n\n",
      "url": "/manual/2.3/index.html",
      "children": []
    },
    {
      "title": "buession-springcloud-common 参考手册",
      "content": "SpringCloud 基础库依赖。",
      "url": "/manual/2.3/common/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.3/common/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-common\n    x.x.x\n\n该模块引用了 spring-cloud-commons、spring-cloud-context 等等 spring cloud 的基础包。"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.3/common/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-common 参考手册",
      "content": "",
      "url": "/manual/2.3/common/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.3/common/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-bus 参考手册",
      "content": "SpringCloud 基础库依赖。",
      "url": "/manual/2.3/bus/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.3/bus/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-bus\n    x.x.x\n\n该模块引用了 spring-cloud-bus 等等 spring cloud 的基础包。"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.3/bus/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-bus 参考手册",
      "content": "",
      "url": "/manual/2.3/bus/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.3/bus/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-config-client 参考手册",
      "content": "SpringCloud Config Client 客户端依赖。",
      "url": "/manual/2.3/config-client/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.3/config-client/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-config-client\n    x.x.x\n\n该模块引用了 spring-cloud-config-client 等等 spring cloud config 客户端的包。"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.3/config-client/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-config-client 参考手册",
      "content": "",
      "url": "/manual/2.3/config-client/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.3/config-client/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-config-server 参考手册",
      "content": "SpringCloud Config Client 服务端依赖。",
      "url": "/manual/2.3/config-server/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.3/config-server/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-config-server\n    x.x.x\n\n该模块引用了 spring-cloud-config-server 等等 spring cloud config 服务端的包。该模并实现了 SpringBootApplication 的启动类 com.buession.springcloud.config.server.CloudConfigServerWebApplication，可做到开箱即用。支持 servlet 和 webflux，取决于您引入的包。当然，您使用 buession-springcloud-config-server 的启动类 com.buession.springcloud.config.server.CloudConfigServerWebApplication，也可以将您的应用注册到服务注册和发现中心。"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.3/config-server/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-config-server 参考手册",
      "content": "",
      "url": "/manual/2.3/config-server/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.3/config-server/ConfigurationProperties.html#配置属性",
          "content": "配置属性通用配置\n\n属性\n类型\n默认值\n说明\n\n\n\n\nspring.cloud.config.send-info\nboolean\ntrue\n是否在请求头中返回 spring cloud config server 信息\n\n\n"
        }
      ]
    },
    {
      "title": "buession-springcloud-consul 参考手册",
      "content": "SpringCloud Consul 基础库依赖。",
      "url": "/manual/2.3/consul/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.3/consul/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-consul\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.3/consul/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-consul 参考手册",
      "content": "",
      "url": "/manual/2.3/consul/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.3/consul/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-feign 参考手册",
      "content": "SpringCloud OpenFeign 基础库依赖。",
      "url": "/manual/2.3/feign/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.3/feign/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-feign\n    x.x.x\n\n该模块在引入 spring-cloud-openfeign 的基础上，还定义了请求头拦截器，可以将前端的所有请求头转发到微服务后端，便于在实际业务中需要根据前端的请求头处理业务逻辑。支持 servlet 和 webflux，您可以将配置属性 spring.cloud.feign.apply-client-request-headers.enabled 的值设置为 false 不进行转发。\n注：\n\n\n此处的前端并不指浏览器，而是指调用 feign 的调用端。\n\n\n会忽略掉请求头 Accept-Encoding，我们将在未来支持自定义需要转发或者忽略的请求头。\n\n\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.3/feign/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-feign 参考手册",
      "content": "",
      "url": "/manual/2.3/feign/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.3/feign/ConfigurationProperties.html#配置属性",
          "content": "配置属性通用配置\n\n属性\n类型\n默认值\n说明\n\n\n\n\nspring.cloud.feign.apply-client-request-headers.enabled\nboolean\ntrue\n是否转发请求头\n\n\n"
        }
      ]
    },
    {
      "title": "buession-springcloud-gateway 参考手册",
      "content": "SpringCloud GateWay 基础库依赖。",
      "url": "/manual/2.3/gateway/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.3/gateway/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-gateway\n    x.x.x\n\n您可以通过继承 AbstractProxyFilter 实现代理转发过滤器，AbstractProxyFilter 是 org.springframework.cloud.gateway.filter.GlobalFilter 的抽象实现类。该 Filter 可实现，将请求上下文通过请求头 X-Request-Context，以及其它定义的请求头传递到网关后端，您只需要重写方法 String getRequestContextName()、Map getRequestHeaders(ServerWebExchange exchange) 即可。"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.3/gateway/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-gateway 参考手册",
      "content": "",
      "url": "/manual/2.3/gateway/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.3/gateway/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-hystrix 参考手册",
      "content": "SpringCloud Netflix Hystrix 基础库依赖。",
      "url": "/manual/2.3/hystrix/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.3/hystrix/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-hystrix\n    x.x.x\n\n该模块引用了 spring-boot、spring-boot-autoconfigure、spring-boot-starter-validation、spring-boot-starter-log4j2 等等 spring boot 的基础包。该模块定义了 SpringBootApplication 的接口，简化了您的 SpringBootApplication 启动类的创建(更多的使用方式，将在buession-springboot-web和buession-springboot-cli讲解)。该模块还将自动自动配置 MessagePropertyBeanPostProcessor。"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.3/hystrix/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-hystrix 参考手册",
      "content": "",
      "url": "/manual/2.3/hystrix/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.3/hystrix/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-kubernetes 参考手册",
      "content": "SpringCloud Kubernetes 基础库依赖。",
      "url": "/manual/2.3/kubernetes/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.3/kubernetes/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-kubernetes\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.3/kubernetes/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-kubernetes 参考手册",
      "content": "",
      "url": "/manual/2.3/kubernetes/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.3/kubernetes/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-metrics 参考手册",
      "content": "dropwizard metrics 基础库依赖。",
      "url": "/manual/2.3/metrics/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.3/metrics/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-metrics\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.3/metrics/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-metrics 参考手册",
      "content": "",
      "url": "/manual/2.3/metrics/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.3/metrics/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-nacos-config-client 参考手册",
      "content": "SpringCloud Alibaba Nacos Config Client 基础库依赖。",
      "url": "/manual/2.3/nacos-config-client/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.3/nacos-config-client/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-nacos-config-client\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.3/nacos-config-client/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-nacos-config-client 参考手册",
      "content": "",
      "url": "/manual/2.3/nacos-config-client/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.3/nacos-config-client/ConfigurationProperties.html#配置属性",
          "content": "配置属性完整的配置属性，参考 Spring Cloud Alibaba Nacos Config 文档"
        }
      ]
    },
    {
      "title": "buession-springcloud-nacos-discovery 参考手册",
      "content": "SpringCloud Alibaba Nacos Discovery 基础库依赖。",
      "url": "/manual/2.3/nacos-discovery/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.3/nacos-discovery/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-nacos-discovery\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.3/nacos-discovery/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-nacos-discovery 参考手册",
      "content": "",
      "url": "/manual/2.3/nacos-discovery/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.3/nacos-discovery/ConfigurationProperties.html#配置属性",
          "content": "配置属性完整的配置属性，参考 Spring Cloud Alibaba Nacos Discovery 文档"
        }
      ]
    },
    {
      "title": "buession-springcloud-ribbon 参考手册",
      "content": "SpringCloud Netflix RRibbon 基础库依赖。",
      "url": "/manual/2.3/ribbon/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.3/ribbon/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-ribbon\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.3/ribbon/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-ribbon 参考手册",
      "content": "",
      "url": "/manual/2.3/ribbon/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.3/ribbon/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream 参考手册",
      "content": "SpringCloud Stream 基础库依赖。",
      "url": "/manual/2.3/stream/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.3/stream/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-stream\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.3/stream/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream 参考手册",
      "content": "",
      "url": "/manual/2.3/stream/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.3/stream/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream-core 参考手册",
      "content": "SpringCloud Stream 基础库依赖。",
      "url": "/manual/2.3/stream/core/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.3/stream/core/index.html#安装",
          "content": "安装    com.buession.springcloud.stream\n    buession-springcloud-stream-core\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.3/stream/core/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream-core 参考手册",
      "content": "",
      "url": "/manual/2.3/stream/core/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.3/stream/core/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream-file 参考手册",
      "content": "SpringCloud Stream 基础库依赖。",
      "url": "/manual/2.3/stream/file/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.3/stream/file/index.html#安装",
          "content": "安装    com.buession.springcloud.stream\n    buession-springcloud-stream-file\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.3/stream/file/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream-file 参考手册",
      "content": "",
      "url": "/manual/2.3/stream/file/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.3/stream/file/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream-hdfs 参考手册",
      "content": "SpringCloud Stream 基础库依赖。",
      "url": "/manual/2.3/stream/hdfs/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.3/stream/hdfs/index.html#安装",
          "content": "安装    com.buession.springcloud.stream\n    buession-springcloud-stream-hdfs\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.3/stream/hdfs/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream-hdfs 参考手册",
      "content": "",
      "url": "/manual/2.3/stream/hdfs/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.3/stream/hdfs/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream-http 参考手册",
      "content": "SpringCloud Stream 基础库依赖。",
      "url": "/manual/2.3/stream/http/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.3/stream/http/index.html#安装",
          "content": "安装    com.buession.springcloud.stream\n    buession-springcloud-stream-http\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.3/stream/http/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream-http 参考手册",
      "content": "",
      "url": "/manual/2.3/stream/http/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.3/stream/http/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream-jdbc 参考手册",
      "content": "SpringCloud Stream 基础库依赖。",
      "url": "/manual/2.3/stream/jdbc/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.3/stream/jdbc/index.html#安装",
          "content": "安装    com.buession.springcloud.stream\n    buession-springcloud-stream-jdbc\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.3/stream/jdbc/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream-jdbc 参考手册",
      "content": "",
      "url": "/manual/2.3/stream/jdbc/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.3/stream/jdbc/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream-jms 参考手册",
      "content": "SpringCloud Stream 基础库依赖。",
      "url": "/manual/2.3/stream/jms/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.3/stream/jms/index.html#安装",
          "content": "安装    com.buession.springcloud.stream\n    buession-springcloud-stream-jms\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.3/stream/jms/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream-jms 参考手册",
      "content": "",
      "url": "/manual/2.3/stream/jms/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.3/stream/jms/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream-kafka 参考手册",
      "content": "Spring Cloud Stream Kafka Binder 基础库依赖。",
      "url": "/manual/2.3/stream/kafka/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.3/stream/kafka/index.html#安装",
          "content": "安装    com.buession.springcloud.stream\n    buession-springcloud-stream-kafka\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.3/stream/kafka/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream-kafka 参考手册",
      "content": "",
      "url": "/manual/2.3/stream/kafka/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.3/stream/kafka/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream-mongodb 参考手册",
      "content": "SpringCloud Stream 基础库依赖。",
      "url": "/manual/2.3/stream/mongodb/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.3/stream/mongodb/index.html#安装",
          "content": "安装    com.buession.springcloud.stream\n    buession-springcloud-stream-mongodb\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.3/stream/mongodb/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream-mongodb 参考手册",
      "content": "",
      "url": "/manual/2.3/stream/mongodb/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.3/stream/mongodb/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream-rabbitmq 参考手册",
      "content": "SpringCloud Stream 基础库依赖。",
      "url": "/manual/2.3/stream/rabbitmq/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.3/stream/rabbitmq/index.html#安装",
          "content": "安装    com.buession.springcloud.stream\n    buession-springcloud-stream-rabbitmq\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.3/stream/rabbitmq/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream-rabbitmq 参考手册",
      "content": "",
      "url": "/manual/2.3/stream/rabbitmq/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.3/stream/rabbitmq/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream-rocketmq 参考手册",
      "content": "SpringCloud Stream 基础库依赖。",
      "url": "/manual/2.3/stream/rocketmq/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.3/stream/rocketmq/index.html#安装",
          "content": "安装    com.buession.springcloud.stream\n    buession-springcloud-stream-rocketmq\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.3/stream/rocketmq/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream-rocketmq 参考手册",
      "content": "",
      "url": "/manual/2.3/stream/rocketmq/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.3/stream/rocketmq/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream-syslog 参考手册",
      "content": "SpringCloud Stream 基础库依赖。",
      "url": "/manual/2.3/stream/syslog/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.3/stream/syslog/index.html#安装",
          "content": "安装    com.buession.springcloud.stream\n    buession-springcloud-stream-syslog\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.3/stream/syslog/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream-syslog 参考手册",
      "content": "",
      "url": "/manual/2.3/stream/syslog/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.3/stream/syslog/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream-tcp 参考手册",
      "content": "SpringCloud Stream 基础库依赖。",
      "url": "/manual/2.3/stream/tcp/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.3/stream/tcp/index.html#安装",
          "content": "安装    com.buession.springcloud.stream\n    buession-springcloud-stream-tcp\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.3/stream/tcp/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream-tcp 参考手册",
      "content": "",
      "url": "/manual/2.3/stream/tcp/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.3/stream/tcp/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream-websocket 参考手册",
      "content": "SpringCloud Stream 基础库依赖。",
      "url": "/manual/2.3/stream/websocket/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.3/stream/websocket/index.html#安装",
          "content": "安装    com.buession.springcloud.stream\n    buession-springcloud-stream-websocket\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.3/stream/websocket/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream-websocket 参考手册",
      "content": "",
      "url": "/manual/2.3/stream/websocket/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.3/stream/websocket/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-zuul 参考手册",
      "content": "SpringCloud Netflix Zuul 基础库依赖。",
      "url": "/manual/2.3/zuul/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.3/zuul/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-zuul\n    x.x.x\n\n您可以通过继承 AbstractProxyFilter 实现代理转发过滤器，AbstractProxyFilter 是 com.netflix.zuul.ZuulFilter 的抽象实现类。该 Filter 可实现，将请求上下文通过请求头 X-Request-Context，以及其它定义的请求头传递到网关后端，您只需要重写方法 String getRequestContextName()、Map getRequestHeaders(HttpServletRequest request) 即可。"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.3/zuul/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-zuul 参考手册",
      "content": "",
      "url": "/manual/2.3/zuul/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.3/zuul/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "API 参考手册",
      "content": "Buession SpringCloud API 包含以下目录：\n\n模块\n使用帮助\n手册\n\n\n\n\nbuession-springcloud-common\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-bus\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-config-client\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-config-server\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-consul\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-feign\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-gateway\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-hystrix\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-kubernetes\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-metrics\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-nacos-config-client\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-nacos-discovery\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-ribbon\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-stream\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-zuul\n使用帮助\nAPI 手册\n\n\n",
      "url": "/manual/2.2/index.html",
      "children": []
    },
    {
      "title": "buession-springcloud-common 参考手册",
      "content": "SpringCloud 基础库依赖。",
      "url": "/manual/2.2/common/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.2/common/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-common\n    x.x.x\n\n该模块引用了 spring-cloud-commons、spring-cloud-context 等等 spring cloud 的基础包。"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.2/common/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-common 参考手册",
      "content": "",
      "url": "/manual/2.2/common/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.2/common/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-bus 参考手册",
      "content": "SpringCloud 基础库依赖。",
      "url": "/manual/2.2/bus/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.2/bus/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-bus\n    x.x.x\n\n该模块引用了 spring-cloud-bus 等等 spring cloud 的基础包。"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.2/bus/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-bus 参考手册",
      "content": "",
      "url": "/manual/2.2/bus/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.2/bus/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-config-client 参考手册",
      "content": "SpringCloud Config Client 客户端依赖。",
      "url": "/manual/2.2/config-client/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.2/config-client/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-config-client\n    x.x.x\n\n该模块引用了 spring-cloud-config-client 等等 spring cloud config 客户端的包。"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.2/config-client/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-config-client 参考手册",
      "content": "",
      "url": "/manual/2.2/config-client/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.2/config-client/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-config-server 参考手册",
      "content": "SpringCloud Config Client 服务端依赖。",
      "url": "/manual/2.2/config-server/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.2/config-server/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-config-server\n    x.x.x\n\n该模块引用了 spring-cloud-config-server 等等 spring cloud config 服务端的包。该模并实现了 SpringBootApplication 的启动类 com.buession.springcloud.config.server.CloudConfigServerWebApplication，可做到开箱即用。支持 servlet 和 webflux，取决于您引入的包。当然，您使用 buession-springcloud-config-server 的启动类 com.buession.springcloud.config.server.CloudConfigServerWebApplication，也可以将您的应用注册到服务注册和发现中心。"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.2/config-server/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-config-server 参考手册",
      "content": "",
      "url": "/manual/2.2/config-server/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.2/config-server/ConfigurationProperties.html#配置属性",
          "content": "配置属性通用配置\n\n属性\n类型\n默认值\n说明\n\n\n\n\nspring.cloud.config.send-info\nboolean\ntrue\n是否在请求头中返回 spring cloud config server 信息\n\n\n"
        }
      ]
    },
    {
      "title": "buession-springcloud-consul 参考手册",
      "content": "SpringCloud Consul 基础库依赖。",
      "url": "/manual/2.2/consul/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.2/consul/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-consul\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.2/consul/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-consul 参考手册",
      "content": "",
      "url": "/manual/2.2/consul/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.2/consul/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-feign 参考手册",
      "content": "SpringCloud OpenFeign 基础库依赖。",
      "url": "/manual/2.2/feign/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.2/feign/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-feign\n    x.x.x\n\n该模块在引入 spring-cloud-openfeign 的基础上，还定义了请求头拦截器，可以将前端的所有请求头转发到微服务后端，便于在实际业务中需要根据前端的请求头处理业务逻辑。支持 servlet 和 webflux，您可以将配置属性 spring.cloud.feign.apply-client-request-headers.enabled 的值设置为 false 不进行转发。\n注：\n\n\n此处的前端并不指浏览器，而是指调用 feign 的调用端。\n\n\n会忽略掉请求头 Accept-Encoding，我们将在未来支持自定义需要转发或者忽略的请求头。\n\n\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.2/feign/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-feign 参考手册",
      "content": "",
      "url": "/manual/2.2/feign/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.2/feign/ConfigurationProperties.html#配置属性",
          "content": "配置属性通用配置\n\n属性\n类型\n默认值\n说明\n\n\n\n\nspring.cloud.feign.apply-client-request-headers.enabled\nboolean\ntrue\n是否转发请求头\n\n\n"
        }
      ]
    },
    {
      "title": "buession-springcloud-gateway 参考手册",
      "content": "SpringCloud GateWay 基础库依赖。",
      "url": "/manual/2.2/gateway/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.2/gateway/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-gateway\n    x.x.x\n\n您可以通过继承 AbstractProxyFilter 实现代理转发过滤器，AbstractProxyFilter 是 org.springframework.cloud.gateway.filter.GlobalFilter 的抽象实现类。该 Filter 可实现，将请求上下文通过请求头 X-Request-Context，以及其它定义的请求头传递到网关后端，您只需要重写方法 String getRequestContextName()、Map getRequestHeaders(ServerWebExchange exchange) 即可。"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.2/gateway/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-gateway 参考手册",
      "content": "",
      "url": "/manual/2.2/gateway/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.2/gateway/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-hystrix 参考手册",
      "content": "SpringCloud Netflix Hystrix 基础库依赖。",
      "url": "/manual/2.2/hystrix/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.2/hystrix/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-hystrix\n    x.x.x\n\n该模块引用了 spring-boot、spring-boot-autoconfigure、spring-boot-starter-validation、spring-boot-starter-log4j2 等等 spring boot 的基础包。该模块定义了 SpringBootApplication 的接口，简化了您的 SpringBootApplication 启动类的创建(更多的使用方式，将在buession-springboot-web和buession-springboot-cli讲解)。该模块还将自动自动配置 MessagePropertyBeanPostProcessor。"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.2/hystrix/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-hystrix 参考手册",
      "content": "",
      "url": "/manual/2.2/hystrix/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.2/hystrix/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-kubernetes 参考手册",
      "content": "SpringCloud Kubernetes 基础库依赖。",
      "url": "/manual/2.2/kubernetes/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.2/kubernetes/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-kubernetes\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.2/kubernetes/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-kubernetes 参考手册",
      "content": "",
      "url": "/manual/2.2/kubernetes/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.2/kubernetes/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-metrics 参考手册",
      "content": "dropwizard metrics 基础库依赖。",
      "url": "/manual/2.2/metrics/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.2/metrics/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-metrics\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.2/metrics/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-metrics 参考手册",
      "content": "",
      "url": "/manual/2.2/metrics/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.2/metrics/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-nacos-config-client 参考手册",
      "content": "SpringCloud Alibaba Nacos Config Client 基础库依赖。",
      "url": "/manual/2.2/nacos-config-client/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.2/nacos-config-client/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-nacos-config-client\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.2/nacos-config-client/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-nacos-config-client 参考手册",
      "content": "",
      "url": "/manual/2.2/nacos-config-client/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.2/nacos-config-client/ConfigurationProperties.html#配置属性",
          "content": "配置属性完整的配置属性，参考 Spring Cloud Alibaba Nacos Config 文档"
        }
      ]
    },
    {
      "title": "buession-springcloud-nacos-discovery 参考手册",
      "content": "SpringCloud Alibaba Nacos Discovery 基础库依赖。",
      "url": "/manual/2.2/nacos-discovery/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.2/nacos-discovery/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-nacos-discovery\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.2/nacos-discovery/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-nacos-discovery 参考手册",
      "content": "",
      "url": "/manual/2.2/nacos-discovery/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.2/nacos-discovery/ConfigurationProperties.html#配置属性",
          "content": "配置属性完整的配置属性，参考 Spring Cloud Alibaba Nacos Discovery 文档"
        }
      ]
    },
    {
      "title": "buession-springcloud-ribbon 参考手册",
      "content": "SpringCloud Netflix RRibbon 基础库依赖。",
      "url": "/manual/2.2/ribbon/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.2/ribbon/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-ribbon\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.2/ribbon/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-ribbon 参考手册",
      "content": "",
      "url": "/manual/2.2/ribbon/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.2/ribbon/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream 参考手册",
      "content": "SpringCloud Stream 基础库依赖。",
      "url": "/manual/2.2/stream/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.2/stream/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-stream\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.2/stream/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream 参考手册",
      "content": "",
      "url": "/manual/2.2/stream/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.2/stream/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-zuul 参考手册",
      "content": "SpringCloud Netflix Zuul 基础库依赖。",
      "url": "/manual/2.2/zuul/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.2/zuul/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-zuul\n    x.x.x\n\n您可以通过继承 AbstractProxyFilter 实现代理转发过滤器，AbstractProxyFilter 是 com.netflix.zuul.ZuulFilter 的抽象实现类。该 Filter 可实现，将请求上下文通过请求头 X-Request-Context，以及其它定义的请求头传递到网关后端，您只需要重写方法 String getRequestContextName()、Map getRequestHeaders(HttpServletRequest request) 即可。"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.2/zuul/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-zuul 参考手册",
      "content": "",
      "url": "/manual/2.2/zuul/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.2/zuul/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "API 参考手册",
      "content": "Buession SpringCloud API 包含以下目录：\n\n模块\n使用帮助\n手册\n\n\n\n\nbuession-springcloud-common\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-bus\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-config-client\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-config-server\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-consul\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-feign\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-gateway\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-hystrix\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-kubernetes\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-metrics\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-nacos-config-client\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-nacos-discovery\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-ribbon\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-stream\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-zuul\n使用帮助\nAPI 手册\n\n\n",
      "url": "/manual/2.1/index.html",
      "children": []
    },
    {
      "title": "buession-springcloud-common 参考手册",
      "content": "SpringCloud 基础库依赖。",
      "url": "/manual/2.1/common/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.1/common/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-common\n    x.x.x\n\n该模块引用了 spring-cloud-commons、spring-cloud-context 等等 spring cloud 的基础包。"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.1/common/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-common 参考手册",
      "content": "",
      "url": "/manual/2.1/common/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.1/common/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-bus 参考手册",
      "content": "SpringCloud 基础库依赖。",
      "url": "/manual/2.1/bus/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.1/bus/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-bus\n    x.x.x\n\n该模块引用了 spring-cloud-bus 等等 spring cloud 的基础包。"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.1/bus/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-bus 参考手册",
      "content": "",
      "url": "/manual/2.1/bus/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.1/bus/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-config-client 参考手册",
      "content": "SpringCloud Config Client 客户端依赖。",
      "url": "/manual/2.1/config-client/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.1/config-client/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-config-client\n    x.x.x\n\n该模块引用了 spring-cloud-config-client 等等 spring cloud config 客户端的包。"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.1/config-client/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-config-client 参考手册",
      "content": "",
      "url": "/manual/2.1/config-client/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.1/config-client/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-config-server 参考手册",
      "content": "SpringCloud Config Client 服务端依赖。",
      "url": "/manual/2.1/config-server/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.1/config-server/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-config-server\n    x.x.x\n\n该模块引用了 spring-cloud-config-server 等等 spring cloud config 服务端的包。该模并实现了 SpringBootApplication 的启动类 com.buession.springcloud.config.server.CloudConfigServerWebApplication，可做到开箱即用。支持 servlet 和 webflux，取决于您引入的包。当然，您使用 buession-springcloud-config-server 的启动类 com.buession.springcloud.config.server.CloudConfigServerWebApplication，也可以将您的应用注册到服务注册和发现中心。"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.1/config-server/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-config-server 参考手册",
      "content": "",
      "url": "/manual/2.1/config-server/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.1/config-server/ConfigurationProperties.html#配置属性",
          "content": "配置属性通用配置\n\n属性\n类型\n默认值\n说明\n\n\n\n\nspring.cloud.config.send-info\nboolean\ntrue\n是否在请求头中返回 spring cloud config server 信息\n\n\n"
        }
      ]
    },
    {
      "title": "buession-springcloud-consul 参考手册",
      "content": "SpringCloud Consul 基础库依赖。",
      "url": "/manual/2.1/consul/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.1/consul/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-consul\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.1/consul/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-consul 参考手册",
      "content": "",
      "url": "/manual/2.1/consul/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.1/consul/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-feign 参考手册",
      "content": "SpringCloud OpenFeign 基础库依赖。",
      "url": "/manual/2.1/feign/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.1/feign/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-feign\n    x.x.x\n\n该模块在引入 spring-cloud-openfeign 的基础上，还定义了请求头拦截器，可以将前端的所有请求头转发到微服务后端，便于在实际业务中需要根据前端的请求头处理业务逻辑。支持 servlet 和 webflux，您可以将配置属性 spring.cloud.feign.apply-client-request-headers.enabled 的值设置为 false 不进行转发。\n注：\n\n\n此处的前端并不指浏览器，而是指调用 feign 的调用端。\n\n\n会忽略掉请求头 Accept-Encoding，我们将在未来支持自定义需要转发或者忽略的请求头。\n\n\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.1/feign/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-feign 参考手册",
      "content": "",
      "url": "/manual/2.1/feign/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.1/feign/ConfigurationProperties.html#配置属性",
          "content": "配置属性通用配置\n\n属性\n类型\n默认值\n说明\n\n\n\n\nspring.cloud.feign.apply-client-request-headers.enabled\nboolean\ntrue\n是否转发请求头\n\n\n"
        }
      ]
    },
    {
      "title": "buession-springcloud-gateway 参考手册",
      "content": "SpringCloud GateWay 基础库依赖。",
      "url": "/manual/2.1/gateway/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.1/gateway/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-gateway\n    x.x.x\n\n您可以通过继承 AbstractProxyFilter 实现代理转发过滤器，AbstractProxyFilter 是 org.springframework.cloud.gateway.filter.GlobalFilter 的抽象实现类。该 Filter 可实现，将请求上下文通过请求头 X-Request-Context，以及其它定义的请求头传递到网关后端，您只需要重写方法 String getRequestContextName()、Map getRequestHeaders(ServerWebExchange exchange) 即可。"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.1/gateway/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-gateway 参考手册",
      "content": "",
      "url": "/manual/2.1/gateway/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.1/gateway/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-hystrix 参考手册",
      "content": "SpringCloud Netflix Hystrix 基础库依赖。",
      "url": "/manual/2.1/hystrix/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.1/hystrix/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-hystrix\n    x.x.x\n\n该模块引用了 spring-boot、spring-boot-autoconfigure、spring-boot-starter-validation、spring-boot-starter-log4j2 等等 spring boot 的基础包。该模块定义了 SpringBootApplication 的接口，简化了您的 SpringBootApplication 启动类的创建(更多的使用方式，将在buession-springboot-web和buession-springboot-cli讲解)。该模块还将自动自动配置 MessagePropertyBeanPostProcessor。"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.1/hystrix/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-hystrix 参考手册",
      "content": "",
      "url": "/manual/2.1/hystrix/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.1/hystrix/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-kubernetes 参考手册",
      "content": "SpringCloud Kubernetes 基础库依赖。",
      "url": "/manual/2.1/kubernetes/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.1/kubernetes/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-kubernetes\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.1/kubernetes/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-kubernetes 参考手册",
      "content": "",
      "url": "/manual/2.1/kubernetes/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.1/kubernetes/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-metrics 参考手册",
      "content": "dropwizard metrics 基础库依赖。",
      "url": "/manual/2.1/metrics/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.1/metrics/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-metrics\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.1/metrics/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-metrics 参考手册",
      "content": "",
      "url": "/manual/2.1/metrics/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.1/metrics/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-nacos-config-client 参考手册",
      "content": "SpringCloud Alibaba Nacos Config Client 基础库依赖。",
      "url": "/manual/2.1/nacos-config-client/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.1/nacos-config-client/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-nacos-config-client\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.1/nacos-config-client/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-nacos-config-client 参考手册",
      "content": "",
      "url": "/manual/2.1/nacos-config-client/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.1/nacos-config-client/ConfigurationProperties.html#配置属性",
          "content": "配置属性完整的配置属性，参考 Spring Cloud Alibaba Nacos Config 文档"
        }
      ]
    },
    {
      "title": "buession-springcloud-nacos-discovery 参考手册",
      "content": "SpringCloud Alibaba Nacos Discovery 基础库依赖。",
      "url": "/manual/2.1/nacos-discovery/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.1/nacos-discovery/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-nacos-discovery\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.1/nacos-discovery/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-nacos-discovery 参考手册",
      "content": "",
      "url": "/manual/2.1/nacos-discovery/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.1/nacos-discovery/ConfigurationProperties.html#配置属性",
          "content": "配置属性完整的配置属性，参考 Spring Cloud Alibaba Nacos Discovery 文档"
        }
      ]
    },
    {
      "title": "buession-springcloud-ribbon 参考手册",
      "content": "SpringCloud Netflix RRibbon 基础库依赖。",
      "url": "/manual/2.1/ribbon/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.1/ribbon/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-ribbon\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.1/ribbon/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-ribbon 参考手册",
      "content": "",
      "url": "/manual/2.1/ribbon/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.1/ribbon/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream 参考手册",
      "content": "SpringCloud Stream 基础库依赖。",
      "url": "/manual/2.1/stream/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.1/stream/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-stream\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.1/stream/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream 参考手册",
      "content": "",
      "url": "/manual/2.1/stream/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.1/stream/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-zuul 参考手册",
      "content": "SpringCloud Netflix Zuul 基础库依赖。",
      "url": "/manual/2.1/zuul/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.1/zuul/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-zuul\n    x.x.x\n\n您可以通过继承 AbstractProxyFilter 实现代理转发过滤器，AbstractProxyFilter 是 com.netflix.zuul.ZuulFilter 的抽象实现类。该 Filter 可实现，将请求上下文通过请求头 X-Request-Context，以及其它定义的请求头传递到网关后端，您只需要重写方法 String getRequestContextName()、Map getRequestHeaders(HttpServletRequest request) 即可。"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.1/zuul/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-zuul 参考手册",
      "content": "",
      "url": "/manual/2.1/zuul/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.1/zuul/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "API 参考手册",
      "content": "Buession SpringCloud API 包含以下目录：\n\n模块\n使用帮助\n手册\n\n\n\n\nbuession-springcloud-common\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-config-client\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-config-server\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-consul\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-feign\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-gateway\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-hystrix\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-kubernetes\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-metrics\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-nacos-config-client\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-nacos-discovery\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-ribbon\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-stream\n使用帮助\nAPI 手册\n\n\nbuession-springcloud-zuul\n使用帮助\nAPI 手册\n\n\n",
      "url": "/manual/2.0/index.html",
      "children": []
    },
    {
      "title": "buession-springcloud-common 参考手册",
      "content": "SpringCloud 基础库依赖。",
      "url": "/manual/2.0/common/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.0/common/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-common\n    x.x.x\n\n该模块引用了 spring-cloud-commons、spring-cloud-context 等等 spring cloud 的基础包。"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.0/common/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-common 参考手册",
      "content": "",
      "url": "/manual/2.0/common/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.0/common/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-config-client 参考手册",
      "content": "SpringCloud Config Client 客户端依赖。",
      "url": "/manual/2.0/config-client/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.0/config-client/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-config-client\n    x.x.x\n\n该模块引用了 spring-cloud-config-client 等等 spring cloud config 客户端的包。"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.0/config-client/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-config-client 参考手册",
      "content": "",
      "url": "/manual/2.0/config-client/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.0/config-client/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-config-server 参考手册",
      "content": "SpringCloud Config Client 服务端依赖。",
      "url": "/manual/2.0/config-server/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.0/config-server/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-config-server\n    x.x.x\n\n该模块引用了 spring-cloud-config-server 等等 spring cloud config 服务端的包。该模并实现了 SpringBootApplication 的启动类 com.buession.springcloud.config.server.CloudConfigServerWebApplication，可做到开箱即用。支持 servlet 和 webflux，取决于您引入的包。当然，您使用 buession-springcloud-config-server 的启动类 com.buession.springcloud.config.server.CloudConfigServerWebApplication，也可以将您的应用注册到服务注册和发现中心。"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.0/config-server/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-config-server 参考手册",
      "content": "",
      "url": "/manual/2.0/config-server/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.0/config-server/ConfigurationProperties.html#配置属性",
          "content": "配置属性通用配置\n\n属性\n类型\n默认值\n说明\n\n\n\n\nspring.cloud.config.send-info\nboolean\ntrue\n是否在请求头中返回 spring cloud config server 信息\n\n\n"
        }
      ]
    },
    {
      "title": "buession-springcloud-consul 参考手册",
      "content": "SpringCloud Consul 基础库依赖。",
      "url": "/manual/2.0/consul/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.0/consul/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-consul\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.0/consul/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-consul 参考手册",
      "content": "",
      "url": "/manual/2.0/consul/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.0/consul/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-feign 参考手册",
      "content": "SpringCloud OpenFeign 基础库依赖。",
      "url": "/manual/2.0/feign/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.0/feign/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-feign\n    x.x.x\n\n该模块在引入 spring-cloud-openfeign 的基础上，还定义了请求头拦截器，可以将前端的所有请求头转发到微服务后端，便于在实际业务中需要根据前端的请求头处理业务逻辑。支持 servlet 和 webflux，您可以将配置属性 spring.cloud.feign.apply-client-request-headers.enabled 的值设置为 false 不进行转发。\n注：\n\n\n此处的前端并不指浏览器，而是指调用 feign 的调用端。\n\n\n会忽略掉请求头 Accept-Encoding，我们将在未来支持自定义需要转发或者忽略的请求头。\n\n\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.0/feign/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-feign 参考手册",
      "content": "",
      "url": "/manual/2.0/feign/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.0/feign/ConfigurationProperties.html#配置属性",
          "content": "配置属性通用配置\n\n属性\n类型\n默认值\n说明\n\n\n\n\nspring.cloud.feign.apply-client-request-headers.enabled\nboolean\ntrue\n是否转发请求头\n\n\n"
        }
      ]
    },
    {
      "title": "buession-springcloud-gateway 参考手册",
      "content": "SpringCloud GateWay 基础库依赖。",
      "url": "/manual/2.0/gateway/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.0/gateway/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-gateway\n    x.x.x\n\n您可以通过继承 AbstractProxyFilter 实现代理转发过滤器，AbstractProxyFilter 是 org.springframework.cloud.gateway.filter.GlobalFilter 的抽象实现类。该 Filter 可实现，将请求上下文通过请求头 X-Request-Context，以及其它定义的请求头传递到网关后端，您只需要重写方法 String getRequestContextName()、Map getRequestHeaders(ServerWebExchange exchange) 即可。"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.0/gateway/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-gateway 参考手册",
      "content": "",
      "url": "/manual/2.0/gateway/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.0/gateway/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-hystrix 参考手册",
      "content": "SpringCloud Netflix Hystrix 基础库依赖。",
      "url": "/manual/2.0/hystrix/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.0/hystrix/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-hystrix\n    x.x.x\n\n该模块引用了 spring-boot、spring-boot-autoconfigure、spring-boot-starter-validation、spring-boot-starter-log4j2 等等 spring boot 的基础包。该模块定义了 SpringBootApplication 的接口，简化了您的 SpringBootApplication 启动类的创建(更多的使用方式，将在buession-springboot-web和buession-springboot-cli讲解)。该模块还将自动自动配置 MessagePropertyBeanPostProcessor。"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.0/hystrix/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-hystrix 参考手册",
      "content": "",
      "url": "/manual/2.0/hystrix/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.0/hystrix/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-kubernetes 参考手册",
      "content": "SpringCloud Kubernetes 基础库依赖。",
      "url": "/manual/2.0/kubernetes/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.0/kubernetes/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-kubernetes\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.0/kubernetes/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-kubernetes 参考手册",
      "content": "",
      "url": "/manual/2.0/kubernetes/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.0/kubernetes/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-metrics 参考手册",
      "content": "dropwizard metrics 基础库依赖。",
      "url": "/manual/2.0/metrics/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.0/metrics/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-metrics\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.0/metrics/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-metrics 参考手册",
      "content": "",
      "url": "/manual/2.0/metrics/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.0/metrics/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-nacos-config-client 参考手册",
      "content": "SpringCloud Alibaba Nacos Config Client 基础库依赖。",
      "url": "/manual/2.0/nacos-config-client/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.0/nacos-config-client/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-nacos-config-client\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.0/nacos-config-client/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-nacos-config-client 参考手册",
      "content": "",
      "url": "/manual/2.0/nacos-config-client/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.0/nacos-config-client/ConfigurationProperties.html#配置属性",
          "content": "配置属性完整的配置属性，参考 Spring Cloud Alibaba Nacos Config 文档"
        }
      ]
    },
    {
      "title": "buession-springcloud-nacos-discovery 参考手册",
      "content": "SpringCloud Alibaba Nacos Discovery 基础库依赖。",
      "url": "/manual/2.0/nacos-discovery/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.0/nacos-discovery/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-nacos-discovery\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.0/nacos-discovery/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-nacos-discovery 参考手册",
      "content": "",
      "url": "/manual/2.0/nacos-discovery/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.0/nacos-discovery/ConfigurationProperties.html#配置属性",
          "content": "配置属性完整的配置属性，参考 Spring Cloud Alibaba Nacos Discovery 文档"
        }
      ]
    },
    {
      "title": "buession-springcloud-ribbon 参考手册",
      "content": "SpringCloud Netflix RRibbon 基础库依赖。",
      "url": "/manual/2.0/ribbon/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.0/ribbon/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-ribbon\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.0/ribbon/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-ribbon 参考手册",
      "content": "",
      "url": "/manual/2.0/ribbon/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.0/ribbon/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream 参考手册",
      "content": "SpringCloud Stream 基础库依赖。",
      "url": "/manual/2.0/stream/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.0/stream/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-stream\n    x.x.x\n\n"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.0/stream/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-stream 参考手册",
      "content": "",
      "url": "/manual/2.0/stream/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.0/stream/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    },
    {
      "title": "buession-springcloud-zuul 参考手册",
      "content": "SpringCloud Netflix Zuul 基础库依赖。",
      "url": "/manual/2.0/zuul/index.html",
      "children": [
        {
          "title": "安装",
          "url": "/manual/2.0/zuul/index.html#安装",
          "content": "安装    com.buession.springcloud\n    buession-springcloud-zuul\n    x.x.x\n\n您可以通过继承 AbstractProxyFilter 实现代理转发过滤器，AbstractProxyFilter 是 com.netflix.zuul.ZuulFilter 的抽象实现类。该 Filter 可实现，将请求上下文通过请求头 X-Request-Context，以及其它定义的请求头传递到网关后端，您只需要重写方法 String getRequestContextName()、Map getRequestHeaders(HttpServletRequest request) 即可。"
        },
        {
          "title": "API 参考手册>>",
          "url": "/manual/2.0/zuul/index.html#api-参考手册>>",
          "content": "API 参考手册>>"
        }
      ]
    },
    {
      "title": "buession-springcloud-zuul 参考手册",
      "content": "",
      "url": "/manual/2.0/zuul/ConfigurationProperties.html",
      "children": [
        {
          "title": "配置属性",
          "url": "/manual/2.0/zuul/ConfigurationProperties.html#配置属性",
          "content": "配置属性无"
        }
      ]
    }
  ]
}