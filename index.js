// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
    },

    {
        type: 'input',
        message: 'Enter a brief description explaining the what, why and how of your project.',
        name: 'description',
    },

    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'install',
    },

    {
        type: 'input',
        message: 'What are the instructions for using your project?',
        name: 'usage',
    },

    {
        type: 'input',
        message: 'List and provide links to any collaborators, third-party assets and/or tutorials used in creating your project.',
        name: 'credit',
    },

    {
        type: 'list',
        message: 'What license is your project using?',
        name: 'license',
        choices: [
            {
                name: 'Apache 2.0 License   ',
                value: {
                    nameStr: 'Apache 2.0',
                    badgeStr: 'Apache_2.0',
                    linkStr: 'apache-2.0',
                }
            },
            {
                name: 'Boost Software License 1.0',
                value: {
                    nameStr: 'Boost Software 1.0',
                    badgeStr: 'Boost_1.0',
                    linkStr: 'bsl-1.0',
                }
            },
             {
                name: 'BSD 2-Clause "Simplified" License',
                value: {
                    nameStr: 'BSD 2-Clause "Simplified"',
                    badgeStr: 'BSD_2--Clause',
                    linkStr: 'bsd-2-clause',
                }
            },
            {
                name: 'BSD 3-Clause "New" or "Revised" License',
                value: {
                    nameStr: 'BSD 3-Clause "New" or "Revised"',
                    badgeStr: 'BSD_3--Clause',
                    linkStr: 'bsd-3-clause',
                }
            },
            {
                name: 'Creative Commons Zero v1.0 Universal',
                value: {
                    nameStr: 'Creative Commons Zero v1.0 Universal',
                    badgeStr: 'CC0_1.0',
                    linkStr: 'cc0-1.0',
                }
            },
            {
                name: 'Eclipse Public License 2.0',
                value: {
                    nameStr: 'Eclipse Public 2.0',
                    badgeStr: 'EPL_1.0',
                    linkStr: 'epl-2.0',
                }
            },
            {
                name: 'GNU Affero General Public License v3.0',
                value: {
                    nameStr: 'GNU Affero General Public v3.0',
                    badgeStr: 'AGPL_v3',
                    linkStr: 'agpl-3.0',
                }
            },
            {
                name: 'GNU Lesser General Public License v2.1',
                value: {
                    nameStr: 'GNU Lesser General Public v2.1',
                    badgeStr: 'LGPL_v2.1',
                    linkStr: 'lgpl-2.1',
                }
            },
            {
                name: 'GNU General Public License v2.0',
                value: {
                    nameStr: 'GNU General Public v2.0',
                    badgeStr: 'GPL_v2',
                    linkStr: 'gpl-2.0',
                }
            },
            {
                name: 'GNU General Public License v3.0',
                value: {
                    nameStr: 'GNU General Public v3.0',
                    badgeStr: 'GPLv3',
                    linkStr: 'gpl-3.0',
                }
            },
            {
                name: 'Mozilla Public License 2.0',
                value: {
                    nameStr: 'Mozilla Public 2.0',
                    badgeStr: 'MPL_2.0',
                    linkStr: 'mpl-2.0',
                }
            },
            {
                name: 'MIT License',
                value: {
                    nameStr: 'MIT',
                    badgeStr: 'MIT',
                    linkStr: 'mit'
                }
            },
            {
                name: 'The Unlicense',
                value: {
                    nameStr: 'The Unlicense',
                    badgeStr: 'Unlicense',
                    linkStr: 'unlicense',
                }
            },
            {
                name: 'None',
            }
        ]
    },

    {
        type: 'input',
        message: 'What are the guidelines for contributing to your project?',
        name: 'contribute',
    },

    {
        type: 'input',
        message: 'What are the instructions for testing your project?',
        name: 'test',
    },

    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },

    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
}

// TODO: Create a function to initialize app
function init() {
};

// Function call to initialize app
init();
