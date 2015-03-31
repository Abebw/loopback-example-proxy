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

### Prerequisite

Update your installation.  You need at least `strongloop` version 2.1.0.

To install the latest version of `slc`:

```sh
npm install -g strongloop 
```

To check your version:

```sh
slc version
```

Should print something similar to:

```
strongloop v3.0.4 (node v0.10.36)
...
```

### Create the application using the `slc` command line tool.

```sh
slc lb project proxy-example
```

### Create a proxy middleware.

See `middleware/proxy.js`.
