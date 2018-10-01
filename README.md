# Webpack Setup

``Steps:-``

1)  Make a new NPM project in the terminal

```
npm init -y

```

2)  Create two JS modules

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

3)  Install and configure webpack

```
  npm i --save-dev webpack@2.2.0-rc.0
```

4)  Run Webpack
