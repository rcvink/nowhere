# nowhere

## quick start for noobs

This should only take 20 minutes and you'll only have to do it once.

1. Install [git](https://www.atlassian.com/git/tutorials/install-git) for your operating system.
1. Make a [github](https://github.com/) account and verify it.
1. Autheticate with github using git ([see this simple guide](https://help.github.com/articles/set-up-git/)) using HTTPS.
1. Install [nodejs](https://nodejs.org/en/download/) for your operating system. LTS version of node is fine.
1. in a terminal (e.g. Terminal, iTerm, Windows PowerShell, whatever), `cd` into a directory where you will store the code (e.g. C:/Projects) and run: `git clone https://github.com/rcvink/nowhere.git` (for HTTPS). This will clone all of the code to your machine, into a directory named 'nowhere'.
1. In the same terminal, change directory into the cloned directory e.g. `cd nowhere`.

Finally, to install dependencies:
```
npm install
```

To compile for development and allow hot-reloads:
``` 
npm run serve
```

Once running, you can view by heading to http://localhost:8080/ in your browser.

## contributing

To contribute, you will need:
- some basic git commands, I can help with this.
- a text editor e.g. Atom, Visual Studio Code.. whatever you fancy.
- some understanding of HTML, CSS, JavaScript/TypeScript, Vue.js. But you can learn as you go.
- to go on the [issues](https://github.com/rcvink/nowhere/issues) and [project board](https://github.com/rcvink/nowhere/projects/1) and see how you can help.
- to get on the slack workspace and read whats up.
- make some issues for things you think need doing, doesn't just have to be code related.

## other useful commands

To compile for production and minify:
```
npm run build
```

To lint and fix files:
```
npm run lint
```

## user stories

```
TODO: Write some
```