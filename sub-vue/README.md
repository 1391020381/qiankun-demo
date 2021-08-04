# 打开docker

#下载docker中下载nginx
docker pull nginx

# 安装vue项目中的npm依赖
npm install

# 本地打包，生成dist文件
npm run build

# docker创建镜像
docker build -t vue-docker-nginx .

# 本地localhost:4000端口监听容器80容器启动docker
docker run -p 4000:9999 -d vue-docker-nginx

