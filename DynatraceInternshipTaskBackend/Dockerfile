FROM openjdk:19-jdk-slim
WORKDIR /app
COPY target/dynatracetask-0.0.1-SNAPSHOT.jar /app/app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]