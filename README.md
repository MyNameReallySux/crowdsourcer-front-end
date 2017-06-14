# Crowdsourcer (Front End)
 
Requirements
------

* [node.js](https://nodejs.org/ "Learn about Node.js") @7.4.0^
* [npm](https://www.npmjs.com/ "Learn about NPM") @5.0.3^ (Comes with node.js)
* [webpack](https://webpack.js.org/ "Learn about Webpack.js") @2.6.1^

Initialize / Build
------

Personally, I use git shell. Will add more documentation on this later if necessary.

1. Confirm you have listed version or later.
  
```
$ node -v
$ npm -v
$ webpack -v
```

2. Clone repository, (Create and navigate to project directory)

``` 
mkdir "crowdsourcer-front-end"
cd "./crowdsourcer-front-end"
$ git clone https://github.com/MyNameReallySux/crowdsourcer-front-end
```

3. Run Webpack (This builds javascript and css in assets and demo)
```
$ webpack
```

4. Alternatively, run Webpack Development Server
```
$ webpack-dev-server
```
