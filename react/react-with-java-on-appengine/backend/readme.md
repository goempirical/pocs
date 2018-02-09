#GAE Skeleton Web Server in Java

* Java 1.7
* GAE 1.9.32
* Spring 4.2.3
* Resteasy 3.0.14 
* Datastore using Objectify

###Run the server locally
maven appengine:devserver
make sure the JRE is set to 1.7 otherwise will not work

###Local with prod behavior
If there is a test that you need to veryfy, we can configure the local devserver to use the prod configuration. See AppConfig.simulateProd flag

###Debugging
You can run connect via remote debug configuration, see pom for more info.

###Datastore
Inspect data stored locally here:  http://localhost:8080/_ah/admin

###Deploying to prod
change pom.xml to point to <prod-app-name-here> and then
maven appengine:update  

#Api

##Public
POST /api/users
POST /api/users/login

##Private
GET /api/users/123
GET /api/lots
POST /api/lots
PUT /api/lots/1234
GET /api/lots/1234
DELETE /api/lots/1234


Steps for running locally
run ./bable_setup
run ./babel_watch
start server with ./devserver

once the server is running every change will be redeployed to the target folder, need to manually refresh folder to pick up changes

to push update to app engine run ./update

Setup babel at this level and then watch for compilation


