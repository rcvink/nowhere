# nowhere

## quick start

This should only take 10 minutes.

1. [Download the code](https://github.com/rcvink/nowhere/archive/master.zip) and 
1. Extract to the root directory of C:\
1. Install [nodejs](https://nodejs.org/en/download/) for your operating system. LTS version of node is fine.

Open Windows PowerShell and do (separately):

```
cd C:\nowhere 
npm install
npm run serve
```

Once running, you can view at http://localhost:8080/ in your browser.

## commands

To compile for development:
```
npm run build
```

To run with hot reload:
```
npm run serve
```

To compile for production and minify:
```
npm run build
```

To lint and fix files:
```
npm run lint
```

To deploy to surge:
```
npm run build
npm run surge
// project: /home/roland/projects/nowhere/dist/
// domain: nowhere-game.surge.sh
```
## user stories

```
TODO: Write some
```