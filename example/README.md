## Required steps

Install npm packages on /lib folder and then on /example folder with `npm install` on each.

## Dev mode

1) Run dev task on /lib:

```bash
$ npm run dev
```

1) Start demo (starts server and watches new changes)

```bash
$ npm start
```

## Test compiled library on demo in AOT:

1)  Build lib

Open /lib folder (`cd lib`) and then run:

```bash
$ npm run build
```

2) Build example in AOT

After building the library, you need to place on example folder (`cd example`)

Finally, you can start a server and build the application with:

```bash
$ npm start
```

You should be able to open [localhost:8000](http://localhost:8000) in a browser and see the demo after some seconds.