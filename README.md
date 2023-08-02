# README Generator

  [![License](https://img.shields.io/badge/License-MIT-orange.svg)](https://choosealicense.com/licenses/mit/)

  ## Description

  The purpose of this project is to create a command-line application that dynamically generates a README.md file from user input using the Inquirer package.
  
  In order to meet requirements, the README Generator App should have the following capabilities:

 * prompt the user for information about the user's application repository via the command-line
 * generate a high-quality, professional README.md that contains the following:
      - title of the user's project
      - Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions sections
 * add a badge for the user selected license at the top of the README
 * License section contains a notice that explains which license the application is covered under
 * Questions section contains a link to the user's GitHub profile and email
 * clicking on the links in the Table of Contents takes the user to the corresponding section of the README

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation

  1. If not already installed, download [Node.js](https://nodejs.org/en/download) and [Git](https://git-scm.com) (if using Windows)
  
  2. Clone the `README-generator` repository to your machine from the command line (Git Bash on Windows) or terminal (Mac)
  
  ```bash
      git clone git@github.com:pinkhaze/README-generator
  ```

  3. In your code editor of choice, navigate to the `README-generator` repository

  4. Open a new terminal and type the following command to initialize a new Node project:

  ```bash
      npm init -y
  ```

  5. Type the following command to install the [Inquirer.js package ]('https://www.npmjs.com/package.inquirer/v/8.2.4):

  ```bash
      npm i inquirer@8.2.4
  ```

  ## Usage

  After navigating to the `README-generator` directory and opening a new terminal, type the following command:

        node index.js

  Then, answer a series of prompts about your application. After entering information for each prompt, check the `dist` folder to see you newly created README.md file.

  https://github.com/pinkhaze/README-generator/assets/55771228/91c86f4a-f27f-4451-86e4-dcba2927822f

  ## Credits
  
  [Professional README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide) 

  [Markdown License Badges for your Project](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)

  ## License

  [MIT License](https://choosealicense.com/licenses/mit/)

  ## Contribute

  NA
  
  ## Tests

  NA

  ## Questions

  Check out the other projects on my GitHub profile at [pinkhaze](https://github.com/pinkhaze).

  If you have any questions about the project, please email me at raciam@oregonstate.edu.
