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
- IDE： VSCode( [调试配置文档](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)) (推荐)
- 编程语言： JavaScript ( [Nodejs](https://nodejs.org) )
- 包管理工具： Npm 
- 版本管理工具： Git
- 多人协同工具： Git
- API 设计： Postman  ([API全流程](https://www.postman.com/api-platform/api-lifecycle/))
- 数据库：mongoDB 

#### 技术细节

- 密钥验证流程：![](https://fullstackopen.com/static/259c9dce6b3d1d77bedb04e799ac7dd3/5a190/16new.png)

#### 设计规范


1. ， 采用[Airbnb JavaScript Style](https://github.com/airbnb/javascript#readme)风格编写代码。 使用 [eslint](https://eslint.org/) 作为静态语法分析工具，有vscode插件用于静态分析, 可使用`git hook`在`commit`的时候自动修正

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

* Unit Test：https://vitest.dev/  可使用`git hook`在`commit`的时候自动测试
* CI： Github Action
* API Test： Postman



### 部署

* CD: Github Action / Docker
* Env：Cloud 


## 开发框架

- Front End： react
   - State mamegement: Redux
- Back End: express
- Database: mongoDB


### MVC

#### 对于前端状态的管理

本项目前端使用 Redux 架构来管理应用程序的状态和数据流（实际属于*Model-View-Whatever*）。

可以将Store理解为状态机，他的变化直接影响Components

该架构将模型的状态集中管理，并通过单向数据流来更新视图。其中模型图如下
![](https://www.ruanyifeng.com/blogimg/asset/2016/bg2016091802.jpg)
具体模型解释见[这篇博客](https://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html)

**类比MVC**

Model（模型）：在 Redux 中，模型通常被称为状态（State）。状态是应用程序中的所有数据的单一来源。它类似于 MVC 模式中的模型，负责存储应用程序的数据和状态，并且是不可变的。在 Redux 中，状态通常被存储在一个单一的状态树中，被称为 Store。

View（视图）：在 Redux 中，视图表示用户界面的表示。视图可以是 React 组件、HTML 元素或者任何其他类型的 UI。视图从 Redux 的状态中获取数据，并将其渲染到界面上。视图也可以响应用户的操作并将这些操作传递给控制器或者 Redux 中间件。在 React 应用中，通常会使用 connect 函数将 React 组件连接到 Redux 的状态树。

Controller（控制器）：在 Redux 中，控制器的角色通常由 Action Creators 和 Reducers 共同承担。Action Creators 是用于创建 Action 的函数，它们描述了发生了什么事件，比如用户点击按钮、发送 API 请求等。Reducers 是纯函数，它们接收先前的状态和一个 Action，并根据 Action 的类型来生成新的状态。Reducers 负责更新状态树，以响应用户的操作或其他事件。