# Nginx로 정적 파일 서빙
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY build/ .   # 로컬에서 생성된 build 폴더를 그대로 복사
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
