# DynatraceInternshipTaskFullApp

### Links to front-end and back-end repositories

Back-end: https://github.com/Darnoker/DynatraceInternshipTask written in Java 17 with Spring Boot 2.7.11 <br>
Front-end: https://github.com/Darnoker/DynatraceInternshipTaskFront written in ReactJS 18.2.0

### Starting app

To start app, first use ``./mvnw clean package`` inside "DynatraceInternshipTaskBackend" directory, then go back to root directory and use `docker-compose up` to build front-end app and start both apps.

### How to use
Go to the `localhost:3000` for the front-end app, there will be three inputs and three buttons, each one calls backend api to get the information from NBP api.
![Front](https://user-images.githubusercontent.com/73139334/234406603-80d9222e-f3b4-4139-8ab0-c2dd6dc8ebb1.png)



### Example endpoints
htttp://localhost:8080/exchange/GBP/2023-01-02 - for getting average exchange rate for specified date. <br>
htttp://localhost:8080/exchange/last/max-and-min-average-rate/GBP/10 - maximum and minimum average exchange rate value for last N days. <br>
htttp://localhost:8080/exchange/last/spread/GBP/10 - major difference spread value for last N days. <br>
