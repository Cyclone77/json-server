# json-server

## 安装
``` git
npm install -g json-server
```

## 使用
``` git
json-server --watch db.json
```

### 技巧
把项目用npm初始化一下
``` git
npm init
```
在`package.json`中为`scripts`键，添加一个值：
``` git
"server": "json-server --watch db.json",
```
后面我们就用 `npm run server` 来启动`json-server`。


# 数据生成 mockjs

## 安装
``` git
npm install mockjs
```