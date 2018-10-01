# Webpack Setup

``Steps:-``

1.  Make a new NPM project in the terminal

```
npm init -y

```

2.  Create two JS modules

```
mkdir src
cd src
index.js
sum.js

```
``Purpose of Files``

- **sum.js** - Utility function for working with mathematical calculations
- **index.js** - Calls function from sum.js, than prints the result.

``Note``

the index.js is depend upon **sum.js** because it has the function for addition
of two numbers. and **sum.js** function has it's own scope so we cannot use
that function in **index.js** directly. for that we have to use **Module System**
to link them.

``Module System`` || ``Common Syntax``

 1. CommonJS  || [module.exports] or [require]
    - ``CommonJS`` is Module Syetem implemented by Node.js So whenever we write javaScript code
        which execute outside the browser chances are you are using ``CommonJS``.

 2. AMD       || [define] or [require]
    - ``Asynchronously Module Definition`` is more commonly use is front end application's where different module of code lode synchronously.

 3. ES2015    || [export] or [import]
    - ``ES2015 Spec`` modern web development going toward ``ES2015`` because the functionality of it

3.  Install and configure webpack

```
  npm i --save-dev webpack@2.2.0-rc.0
```

``webpack.config.js``

```javaScript

const path = require('path');

const config = {
  entry:'./src/index.js',
  output:{
    path: path.resolve(__dirname + 'build'),
    filename: 'bundle.js'
  }
};

module.exports = config;

```

4)  Run Webpack

> to run webpack we need a Script in **package.json** file which will than use from command line interface

``note:- never install npm install -g webpack ``

> it will build randomly any project in your computer

Create a **index.html** file in root of your project and add **build/bundle.js** as src in <script /> tag

and open that **index.html** in browser and hoff over to console and see the log which should be '15'


## introduction to Loaders

- Babel   - Turn ES2015 code into ES code
- Webpack - Link up JS modules together

we will add babel in our project and wire that up as a module Loader there are three different
module that we need to install to get babel up and running.

``Module``  ||  ``Purpose``
1.  babel-loader      || Teaches babel how to work with webpack
2.  babel-core        || Knows how to take in code, parse it, and generate some output files
3.  babel-preset-env  || Ruleset for telling babel exactly what pieces of ES2015/6/7 Syntex to look
                        for,and how to turn it into ES5 code.

```
  npm install --save-dev babel-loader babel-core babel-preset-env
```

**if you get error** Read that error carefully. chances are you need to install

```
  npm i --save-dev babel-loader@7
```


## Refector to ES2015

``Action`` || ``CommonJS`` || ``ES2015``

1.  Import a module || const sum = require('./sum');  ||  import sum from './sum';
2.  Export some code || module.exports = sum; || export default sum;

Lets make changes in **sum.js** & **index.js** and convert import and export statement to ES2015

**index.js**

```javaScript
  import sum from './sum';
```

**sum.js**

```javaScript
  export default sum;
```
