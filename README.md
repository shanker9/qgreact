Prerequisites

1.	Node JS(version > 6.x.x) and NPM(usually comes along with Node JS installer)

To verify the installation : For Node, run the command node. If installed correctly without any problems, the command initializes its shell mode. 
For NPM, run the command npm -v to print the version of npm.


Installing a static server for build deployment

1. Run the command npm i -g serve. This will install serve package globally in the node environment.


How to Deploy

1. Download the project source code.
2. Open terminal/cmd prompt and navigate to root of the project folder.
3. Run the command   npm i  . This will install all the dependencies mentioned in package.json file. This may take a minute or two.
4. Run the command    npm run build   .This will generate the build for production deployment.
5. Once the build is completed. We can use the serve server to deploy our build folder. Running the command     npm run build    will start the server.
By default, the webapp can be accessed at http://localhost:5000 from local and http://IPAddress:5000 on machines in network.


Changing the Amps server

1. Open the file at /src/serverconfig.json
2. Change the active property to true for the server that you may want to connect. Ensure that for all other servers the active property is set to false.


