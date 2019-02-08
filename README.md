# mongodb-express-example

Sample project using MongoDB and Express (Node.js), to be used as a template.

## Main Libraries

- **express** (Web Framework)
- **mongoose** (MongoDB object modeling)
- **mocha** (Testing)

## MongoDB setup

MongoDB should be running at `localhost:27017`

### Easy MongoDB setup using Docker (Mac OS or Linux)

Pull image:

```sh
docker pull mongo
```

Run container:

```sh
docker run --name mongodb -p 27017:27017 -v $PWD/data/db:/data/db -d mongo
```

## Node.js setup

Project creacted using **Node.js 10.15**. Older versions should be avoieded.

**Yarn** package manager was used instead of **NPM**. Both should work well, though.
