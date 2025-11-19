# 빌드용 이미지 (Corretto 17)
FROM amazoncorretto:17 AS builder
WORKDIR /app

# Gradle Wrapper와 프로젝트 복사
COPY gradlew .
COPY gradle gradle
COPY build.gradle settings.gradle ./
COPY src ./src

RUN chmod +x gradlew
RUN ./gradlew clean bootJar --no-daemon

# 실행용 이미지
FROM amazoncorretto:17
WORKDIR /app
COPY --from=builder /app/build/libs/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
