# React with Redux


### Getting Started

* <b>NOTE: Each branch has a separate app. Kindly Have a look at other branches also.</b>  

Checkout this repo, install dependencies per branch, then start with the following:

```
> npm install
> npm start
```

Open browser -> [click](http://localhost:8080) here

## Production Deployment

## Apps created with react-app module

Change dev server run script in package.json as 
```json
{ "dev": "react-scripts start" }
```

To run dev server:
```
> npm i
> npm run dev
```

For production build, change start and build run scripts in package.json as

```json
{ 
    "start": "serve -s build",
    "build": "react-scripts build && rm build/static/js/*.map && rm build/static/css/*.map"
}
```

By default, create react-app will build map files also. These map files maps the entire source code and entire original code is 
visible to the client on source inspect in the browser. Ideally, in a production env, only minified files should be visible to the 
client. So, to achieve this, I have changed the build script in the package.json file to removed the map files after build creation.

To run the production server

```
> npm i
> npm run build
> npm start
```

By doing so, only bundled js and css files are visible to the end user in a production env.

Open browser -> [click here](http://localhost:5000)

## Apps created with this boiler plate

1. Create an express server to direct every route to index.html
2. Configure the webpack config to output a bundle.js file. Current webpack.config.js file supports this.
3. Server the bundle.js file from index.html