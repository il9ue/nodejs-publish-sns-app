nodejs-publish-sns-app
======================

nodejs sns app project


# Basic web Application

This application includes sns profile features/scenarios. 

## README version 0.1.0

Basic web Application is divided into few features as the following : 

* *user profile integration* : user datum are saved and integrated into databases and expresses accessed clients

## Getting Started

### Running Server

The following are general sequences to run the application :

1. setting hostname and port for web server. By default, 3rd party services are set to google and facebook.

2. run the server by typing "node app.js" on terminal

3. monitor and manage the web page by visit "http://{hostname}:{port}"

4. corresponding sensors are published to any clients that are accessed. 

### Environments

- OS which supports Node.js & Javascript : Linux, MacOS, Windows
- For Client or viewing config/status web page, one needs to access browsers which supports websockets, socket.io


### Application Boundaries

Although none of new settings need to be applied, application's boundary needs to be considered before running at least once. Some properties are as follows:

- only profile infos of user are distributed and parsed to clients
- web server, and client are included


## Contact

