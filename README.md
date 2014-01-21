# Loopback Examples: Proxy / Gateway

> **This Example is a Work in Progress**

### Clone the project and install the server dependencies

```sh
git clone git@github.com:strongloop/loopback-example-proxy.git
cd loopback-example-access-control
npm install
```

### Run the app

```sh
node app
```

## How to build the Proxy example app:

### 0. Make sure you have `slc` version **>= 2.1.0**.

To install the latest version of `slc`:

```sh
npm install strong-cli -g
```

To check your version of `slc`:

```sh
slc version
```

Should print something similar to:

```
slc v2.1.0 (node v0.10.22)
```

### 1. Create the application using the `slc` command line tool.

```sh
slc lb project proxy-example
```

### 2. Create a proxy middleware.

See `middleware/proxy.js`.
