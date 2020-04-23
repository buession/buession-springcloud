### 安装及使用

Maven 中央仓库搜索

- [https://search.maven.org/search?q=g:com.buession.springcloud](https://search.maven.org/search?q=g:com.buession.springcloud)
- [https://mvnrepository.com/search?q=com.buession.springcloud](https://mvnrepository.com/search?q=com.buession.springcloud)

**手动编译**

```bash
git clone https://github.com/buession/buession-springcloud
cd buession-springcloud/buession-springcloud-parent && mvn install
```

**Maven**

```xml
<dependency>
    <groupId>com.buession.springcloud</groupId>
    <artifactId>buession-springcloud-xxx</artifactId>
    <version>x.x.x</version>
</dependency>
```

**Gradle**

```gradle
compile group: 'com.buession.springcloud', name: 'buession-springcloud-xxx', version: 'x.x.x'
```

其中，artifactId 中的 xxx 表示对应的子模块；version 中的 x.x.x 代表版本号，根据需要使用特定版本，建议使用最新版本。