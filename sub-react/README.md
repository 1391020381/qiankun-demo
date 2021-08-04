# 本地打包，生成dist文件
npm run build

# docker创建镜像
docker build -t react-docker-nginx .

# 本地localhost:4000端口监听容器80容器启动docker
docker run -p 4000:8899 -d react-docker-nginx