AngularJS code example making use of local storage with ng-storage (https://github.com/gsklee/ngStorage)

For this code example, AngularJS (version 1.2.5) was used with data being saved on the local storage.

Why JavaScript + AngularJS? AngularJS is a great framework for buliding dynamic web apps, especially for CRUD (create, read, update, delete) operations. AngularJS uses client-data binding, keeping the model and the view in the sync, so all changes made in the view are reflected in the model and otherwise.

For test coverage (unit tests), Karma + Protractor were used. There are number of unit tests are placed in the conf.js file. See the steps below on how to run the tests. Only few tests were written for the application.

## In Chrome, in order to run this example you need to:
- Open the terminal and go to the folder path: 
	cd FOLDER_PATH
- Install http-server using NPM: 
	sudo npm install http-server -g
- Run in the terminal:
	http-server 
- Open a browser and navigate to: 
	http://127.0.0.1:8080/

## Run the tests:
- Install Protractor:
	sudo npm install -g protractor
		AND
	sudo webdriver-manager update
- While the http-server is running, open a new tab in the terminal and go to the folder path:
	cd FOLDER_PATH
- Then run:
	webdriver-manager start
- Open a new tab in the terminal and go to the folder path:
	cd FOLDER_PATH
- Then run:
	protractor protractor.conf.js