用 tailwindcss 快速设计可以在真实环境中运行的体验系统

需求提出 -》设计-》开发-》体验-》测试-》发布

ui is data

1. 键盘事件，如果鼠标点击了一个 iframe（相当于聚焦了），那么此时键盘就被这个 iframe 接管了，如果该 iframe 没有对键盘事件的监听，则不会响应

# 源码输入

`app/**`

-  language
   -  typescript
-  module
   -  esm
-  target(语言标准及环境版本)
   -  ESNext
-  platform
   -  node

# 模块导出

-  exports

   -  platform

      -  browser

         -  .next
            -  language
               -  js
            -  target
               -  es5
               -  node@>=17.9.1
            -  module
            -  types

## 命令行导出

### 初始化

install

### 重置

clean

### 代码检查

lint

### 开发

### 生成

gen

### 测试

### 框架

### 构建

build - gen - replace - tsup

#### 打包器

tsup

### 发布

### 部署

### 数据库相关

#### 生成客户端 sdk

gen

##### 替换部分文件

replace

#### 同步 schema

push

#### 种子数据装载

seed

#### 数据库数据迁移

migrate:dev

-  生成 migrate 文件

migrate:deploy

-  应用 migrate 文件

#### 数据库预览

studio

####

# 开发流程

# 测试流程

# 打包流程

# 部署流程
