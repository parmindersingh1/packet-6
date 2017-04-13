
## Getting Started

To get you started you can simply clone the packet-6 repository and install the dependencies.

### Prerequisites

#### Client

* [Git](http://git-scm.com/)
* [Node](http://nodejs.org/)
* json-server

 for Mongo DB)
* Redis

### Clone Project

Clone the packet-6 repository using [git][git]:

```
git clone https://github.com/punchouty/packet-6
cd packet-6
```


### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

#### Install bower and json-server

```
npm install -g bower
npm install -g json-server
```

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
packet-6 changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/index.html`.



## Directory Layout

```
app/                    --> all of the source files for the application
  api                   --> simulate api for development
    db.json             --> mock data for simulation
  bower-components/     --> client side dependencies
  css                   --> css folder containing css files
    themes              --> css theme folder
    plugin.css
    rtl.css
    styles.css
  i18n                  --> internationlization folder
    en.json             --> all display lablel are picked from here
  images                --> images folder
  js                    --> application specific java script files
    config
    controllers         --> angular controllers
    directives          --> angular directives
    app.js              --> app module for angular app
    config.constant.js  --> constants
    config.router.js
    main.js             --> initialization code for app
  views                 --> angular views
    partials            --> partials for navigation, header, footer etc.
    app.html            --> file having include of navigation, header, footer etc. 
  index.html            --> SPA index html file
e2e-tests               --> End to end tests
node_modules            --> npm modules install directory
unit                    --> unit test cases
.bowerrc                --> file to specify location of bower libraries
.gitignore 
.jshintrc
bower.json              --> bower dependency file
gulpfile.js             --> Gulp task definition
karma.conf.js           --> Karma configuration
package.json            --> npm file
README.md               --> This file
```

## Testing

There are two kinds of tests in the our application: Unit tests and end-to-end tests.

### Running Unit Tests

The app comes preconfigured with unit tests. These are written in
[Jasmine][jasmine], which we run with the [Karma Test Runner][karma]. We provide a Karma
configuration file to run them.

* the configuration is found at `karma.conf.js`
* the unit tests are found next to the code they are testing and are named as `..._test.js`.

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will sit and
watch the source and test files for changes and then re-run the tests whenever any of them change.
This is the recommended strategy; if your unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.

You can also ask Karma to do a single run of the tests and then exit.  This is useful if you want to
check that a particular version of the code is operating as expected.  The project contains a
predefined script to do this:

```
npm run test-single-run
```


### End to end testing

The app comes with end-to-end tests, again written in [Jasmine][jasmine]. These tests
are run with the [Protractor][protractor] End-to-End test runner.  It uses native events and has
special features for applications.

* the configuration is found at `e2e-tests/protractor-conf.js`
* the end-to-end tests are found in `e2e-tests/scenarios.js`

Protractor simulates interaction with our web app and verifies that the application responds
correctly. Therefore, our web server needs to be serving up the application, so that Protractor
can interact with it.

```
npm start
```

In addition, since Protractor is built upon WebDriver we need to install this.  The project comes with a predefined script to do this:

```
npm run update-webdriver
```

This will download and install the latest version of the stand-alone WebDriver tool.

Once you have ensured that the development web server hosting our application is up and running
and WebDriver is updated, you can run the end-to-end tests using the supplied npm script:

```
npm run protractor
```

This script will execute the end-to-end tests against the application being hosted on the
development server.

### Running application during development

The packet-6 project comes preconfigured with a local development webserver.  It is a node.js
tool called [http-server][http-server].  You can start this webserver with `npm start` but you may choose to
install the tool globally:

```
sudo npm install -g http-server
```

Then you can start your own development web server to serve static files from a folder by
running:

```
http-server -a localhost -p 8000
```

Alternatively, you can choose to configure your own webserver, such as apache or nginx. Just
configure your server to serve the files under the `app/` directory.

### Simulating mock api server

#### Rest resources

You can mock api using JSON server. First install using following command (use sudo in case of mac):

```
npm install -g json-server
```

There is sample json file in api directory (/app/api/db.json). Go to root of folder and start json server using following command:

```
json-server --watch app/api/db.json
```

It will start server http://localhost:3000. Use Postman to access rest end points.

Refer [https://github.com/typicode/json-server](https://github.com/typicode/json-server) for more details.

#### Non Rest scenarios

Run node server using following command to simulate non rest scenarios. 

```
node app/api/server.js 
```

* For generic requests (GET, POST, PATCH, PUT, DELETE) use url - http://localhost:3001/users/1?foo=bar&baz&qux. It will return params as json
* To simulate errors (GET, POST, PATCH, PUT, DELETE) use url - http://localhost:3001/400 (or 401, 402, 403, 404, 405, 406, 500)
# packet
