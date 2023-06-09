# Running the project

Navigate to the root of the project and run `npm install`
After all dependencies are installed run `npm start`

# Running the api or frontend separately

Both have separate package.json script commands you can execute
api: `start:api`
frontend: `start:front`

# Configuration

The project comes preconfigured with nodemon for the api hot reload, concurently for running them both at the same time and project wide installation for all package.json dependencies.
Go over the package files and check out the scripts for starting and installing to see how it works.