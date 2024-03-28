# SEUFormu

## 项目基本路线

### 开发模型

**敏捷开发** 

<img src="https://www.wangbase.com/blogimg/asset/201903/bg2019030704.jpg" style="zoom:50%;" />

- 概念参考：https://www.ruanyifeng.com/blog/2019/03/agile-development.html



### 需求分析

- 管理工具： pingcode: https://pingcode.com/



### 设计、编码

- 代码托管平台： Github： https://github.com/
- IDE： VSCode (推荐)
- 编程语言： JavaScript ( [Nodejs](https://nodejs.org) )
- 包管理工具： Npm 
- 版本管理工具： Git
- 多人协同工具： Git
- API 设计： Postman  ([API全流程](https://www.postman.com/api-platform/api-lifecycle/))
- 数据库： 



#### 设计规范

1. 使用 [eslint](https://eslint.org/) 作为静态语法分析工具，可使用`git hook`在`commit`的时候自动修正

2. 多人 git 的流程:  教程： https://www.freecodecamp.org/news/how-to-use-git-and-github-in-a-team-like-a-pro/<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/94wbcj99uvf39ax8f3ab.png" style="zoom: 30%;" />

   ```bash
   $ git branch
   x-my-branch # This is an example name
   
   $ git checkout develop
   
   $ git pull
   
   $ git checkout x-my-branch
   
   $ git merge develop
   
   # You make some changes on the files of the x-my-branch branch
   
   $ git add -A
   
   $ git commit -m "<a message>"
   
   $ git push
   ```

3. 

### 测试

* 单元测试： Mocha ： https://mochajs.org/  可使用`git hook`在`commit`的时候自动测试
* CI： Github Action
* API 测试： Postman



### 部署

* CD: Github Action / Docker
* 服务器： 云服务器


## 开发框架

- 前端框架： react

- 后端框架: express

- 数据库