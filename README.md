# /expense
_Better expense reporting, from the Gesher Labs team._

## What’s this all about?
/expense is the first project from Gesher Labs, Gesher Group’s internal software team. We’re still trying to figure out what this team can do, and this is our way of doing that.

This specific piece of software will help our members make and submit purchases, which should make for better record keeping, and a more straightforward process, both for the folks buying things, and those watching the budgets.

## How can I get involved?
Head on over to geshergroup.org/apply, and submit an application to join. If you’ve missed the application period, but still want to be a part of Gesher Labs, email into team@geshergroup.org, and we’ll see how we can get you on the team.

---

# Prerequisites
You'll need [yarn](https://yarnpkg.com/en/docs/install) and [NPM](https://www.npmjs.com/get-npm) to get started. I've written these instructions and tested on MacOS, but everything should also work on PC and Linux.

# Installation instructions
1. Clone the repo, and install all dependencies with `npm i`.
2. Run `yarn run dev`. 
3. Head over to http://localhost:3000.

# Standards
We use [Standard.js](http://standardjs.com) to maintain consistent code style. If you’re trying to submit a commit and you’re getting blocked by the pre-commit hook, run `standard fix` in your terminal, or manually rectify your deviant behavior. :smirk: 

If you use [Atom](https://atom.io) as your editor, awesome. Installing the Standard linter can be super helpful for finding (and fixing) those stylistic errors before you commit. You can find that linter [right here](https://atom.io/packages/linter-js-standard).

# Tech stack
We use [React](https://facebook.github.io/react/) with [Next.js](https://github.com/zeit/next.js/), with [Firebase](http://firebase.google.com) running the backend. 

We use [Now](https://zeit.co/now) by Zeit.co (same folks who make Next.js) for deployments, and Github (obviously) for version control.
