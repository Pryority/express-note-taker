# Note Taker - Express

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Note Taker is a web application that can be used to write and save notes. It uses an Express.js back end, and saves and retrieves note data from a JSON database file.

This application can either be deployed locally by running a localhost server on your machine, or can be accessed through the following link:
https://sleepy-taiga-62249.herokuapp.com/

## Table of Contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contribution](#Contribution)
- [Tests](#Tests)
- [Questions](#Questions)
- [License](#License)

##

## Installation

To install this application clone the repository to your local machine either by an HTTP or an SSH link.

```bash
git clone
```

Once you have the repository cloned to your local machine, navigate to the root folder of the repository in terminal and copy to install the following dependencies:

Express:

```bash
npm i express
```

This will install all necessary dependancies in order for the application to run

## Usage

To use this application, navigate to the root of this repository in the terminal and enter the following command:

```bash
npm start
```

This will start the server and the deployed application can be accessed in their browser via a localhost.

The user can also the deployed application via the Heroku link provided above.

The following images show the web application's appearance and functionality:

Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.
![Demo-Image-1](./public/assets/images/demo-01.png)

Note titled “Balance accounts” reads, “Balance account books by end of day Monday,” with other notes listed on the left.
![Demo-Image-2](./public/assets/images/demo-02.png)

## Contribution

No contribution is required.

## Tests

Testing for this application has been implemented using the node package "Jest".
Use the following command to test whether all files are working correctly:

```bash
npm run test
```

## Questions

To view more projects that I've created visit my [Github](#https://github.com/pryority).

How to reach me for additional questions: matthewapryor@gmail.com

## License

This project is covered under the MIT License.
