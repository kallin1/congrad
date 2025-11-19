FROM amazoncorretto:17

# 작업 디렉토리 설정
WORKDIR /app

# 실제 JAR 파일 복사 (로컬에서 빌드된 JAR 이름 지정)
COPY build/libs/*.jar app.jar

# 컨테이너에서 열 포트
EXPOSE 8080

# 컨테이너 시작 시 실행 명령
ENTRYPOINT ["java", "-jar", "app.jar"]
