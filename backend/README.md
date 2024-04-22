# SEUForum backend

## Develop with Docker

### Requirements

- Docker
- VSCode

#### VSCode Extensions
- wsl
- docker
- mongo

#### Start demo
1. 克隆到本地 `wsl` 中
``` bash
git clone -b dev1.0 https://github.com/LCJD99/SEUForum.git
```
2. 在根目录构建docker镜像
``` bash
docker compose up -d
```

#### 后端开发启动流程

1. 添加`.env` 文件

具体内容如下:
```txt
DEV_MONGODB_URI="mongodb://root:admin@seuforum-mongo-1:27017"
TEST_MONGODB_URI="mongodb://root:admin@seuforum-mongo-1:27017"
SECRET="seuabc"
PORT=3001
```

2. 启动`mongodb`的 container

在根目录下执行
```bash
docker compose up -d mongo
```

> -d 参数表示后台执行

3. 启动后端开发的 container

在根目录下执行
```bash
docker compose up backend
```
在本地每次保存文件会自动重新执行程序

4.  使用 mongodb 插件管理数据库

其中 URL 为: mongodb://root:admin@localhost:27017/

数据模型在admin中，可自行查看


#### API 参考

## 数据模型
一期工程数据模型如下图所示（红色表示主键，蓝色表示外键）
![alt text](image.png)
User						
属性名	_id	username	name	email	pwd	blogs
数据类型		string	string	string	hash	blog[]
                  
blog						
属性名	_id	title	author	url	user	
数据类型	string	string	string	string	User	
                  
comments						
属性名	_id	blog_id	content			
数据类型	string	string	string			
                  
likes						
属性名	_id	blog_id	total			
数据类型	string	string	int			
                  
feedback						
属性名	_id	user_id	content	status		
数据类型	string	string	string	int		
