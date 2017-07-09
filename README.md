# react-webpack2
基于webpack手工搭建react环境之不同的环境不同的配置
    
# 配置步骤简述 #

2. 安装webpack-merge，用于合并配置 
 ```javascript
   npm install webpack-merge --save-dev
```

3. 安装uglifyjs-webpack-plugin，用于js代码压缩
```javascript
    npm install uglifyjs-webpack-plugin --save-dev
```
4. 拆分webpack.config.js为以下几个配置：
	基础配置 webpack.base.config.js：
	开发环境配置,webpack.dev.config.js
	测试环境配置,webpack.test.config.js
	生成环境配置,webpack.prod.config.js
5. 修改package.json：
```javascript
	"scripts": {
    "start": "webpack-dev-server --hot --progress --config webpack.dev.config.js",
    "build:dev": "rimraf dist && webpack --progress --config webpack.dev.config.js",
    "build:test": "rimraf dist && webpack --progress --config webpack.test.config.js",
    "build": "rimraf dist && webpack --progress --config webpack.prod.config.js"
	},
```
```javascript
	# 启动开发调试
	npm run start
	# 开发环境构建
	npm run build:dev
	# 测试环境构建
	npm run build:test
	# 生产环境构建
	npm run build
```	
