# App-Scorecard

This project is built using Vite and React, it is currently a POC for a scorecard application. The goal is to create a simple and efficient way to track scores in various services and their core metrics.

## Project Setup

This project is built using JavaScript, to install NodeJS and NPM on a mac, run the following commands:

```bash
# installing homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# update homebrew and install node & npm (npm is included with node)
brew update
brew install node

# verify that they installed correctly
node -v
npm -v
```

To setup and run this project locally run the following commands from the project root directory:

```bash
npm install
npm run dev

# open a browser and input this address (might need to refresh the page if it's the first time).
http://localhost:5173/
```

## Testing

This project uses Jest for it's unit testing, to run these unit tests run the following command:

```bash
npm run test
```
