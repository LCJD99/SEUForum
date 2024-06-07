# SEUForum frontend

## Develop with Docker

### Requirements

- Docker
- Google Chrome
- VSCode

#### VSCode Extensions
- wsl
- docker

#### Start demo
1. 克隆到本地 `wsl` 中
``` bash
git clone -b dev1.0 https://github.com/LCJD99/SEUForum.git
```
2. 在根目录构建docker镜像
``` bash
docker compose up -d
```

3. 访问本地[3000](localhost:3000)端口启动demo


### 独立开发流程

替换下面这一行内容
```json
  "proxy": "http://seuforum-backend-1:3001",
```
为：
```json
  "proxy": "http://localhost:3005",
```

并启动一个json-server在docker中，具体执行如下指令
```bash
docker exec seuforum-frontend-1 npm run jsonserver
```

`json-server` 实际上就是一个用json文档保存的小数据库
