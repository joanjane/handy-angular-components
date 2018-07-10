## Required steps

Install npm packages on /lib folder and then on /example folder with `npm install` on each.

## Dev mode

1) To run example and library in watch mode, run in console:

```bash
$ cd lib
$ npm run start
```

2) Then, open [localhost:8000](http://localhost:8000) in a browser to test it. When doing changes, this task will rebuild new changes.

## Test library and sample in aot:

Open /lib folder (`cd lib`) and then run:

```bash
$ npm run build:release
```

After the build, you can start a server and build the application with:

```bash
$ npm run serve
```

You should be able to open [localhost:8000](http://localhost:8000) in a browser and see the demo after some seconds.
