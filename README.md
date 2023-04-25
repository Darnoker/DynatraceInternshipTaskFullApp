# DynatraceInternshipTaskFullApp

### Links to front-end and back-end repositories

Back-end: https://github.com/Darnoker/DynatraceInternshipTask <br>
Front-end: https://github.com/Darnoker/DynatraceInternshipTaskFront

### Starting app

To start app, first use ``./mvnw package clean`` inside dynatrace directory, then go back to root directory and use `docker-compose up` to build front-end app and start both apps.

### How to use
Go to the `localhost:3000` for the front-end app, there will be three inputs and three buttons, each one calls backend api to get the information from NBP api.
![Front](https://user-images.githubusercontent.com/73139334/234406603-80d9222e-f3b4-4139-8ab0-c2dd6dc8ebb1.png)



### Example endpoints
htttp://localhost:8080/exchange/GBP/2023-01-02 <br>
htttp://localhost:8080/exchange/last/average-rate/GBP/10 <br>
htttp://localhost:8080/exchange/last/spread/GBP/10
