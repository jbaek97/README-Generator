
const fs = require('fs');
const inquirer = require('inquirer');
const badges = ['![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)', '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)','![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)', '![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)', '![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)'];
const choice = ['Apache license 2.0', 'Boost Software License 1.0', 'BSD 3-Clause License', 'BSD 2-Clause License', 'CC0']

const generateReadMe = ({title, description, installation, usage, contribution, test, license, GitHub, email}) => {
    let badge = '';
if(license = choice[0]) {
    badge = badges[0]
} else if (license = choice[1]) {
    badge = badges[1]
} else if (license = choice[2]) {
    badge = badges[2]
} else if (license = choice[3]) {
    badge = badges[3]
} else if (license = choice[4]) {
    badge = badges[4]
};
return `# ${title}

${badge}
<a name="description"></a>
## Description
${description}

##### Table of Contents 
[Description](#description)
<br>
[Installation](#installation)
<br>
[Usage](#usage)
<br>
[License](#license)
<br>
[Contributing](#contributing)
<br>
[Tests](#tests)
<br>
[Questions](#questions)
<br>

<a name="installation"></a>
## Installation
${installation}

<a name="usage"></a>
## Usage
${usage}

<a name="license"></a>
## License
This application is coved under the following license: ${license}

<a name="contributing"></a>
## Contributing
${contribution}

<a name="tests"></a>
## Tests
${test}

<a name="questions"></a>
## Questions
For more information on this project feel free to find the repository on my GitHub profile: ${GitHub}
<br>
If you'd like to contact me personally, feel free to email through my personal email: ${email}
`;}


const prompt = () => {
    return inquirer.prompt([
            {
                type: 'input',
                message: "Enter your project's title:",
                name: 'title',
            },
            {
                type: 'input',
                message: "Enter your project's description:",
                name: 'description',
            },
            {
                type: 'input',
                message: "Enter your project's installation instructions:",
                name: 'installation',
            },
            {
                type: 'input',
                message: "Enter your project's usage information:",
                name: 'usage',
            },
            {
                type: 'input',
                message: "Enter your project's contribution guidelines:",
                name: 'contribution',
            },
            {
                type: 'input',
                message: "Enter your project's test instructions:",
                name: 'test',
            },
            {
                type: 'list',
                message: "Choose a license:",
                name: 'license',
                choices: ['Apache license 2.0', 'Boost Software License 1.0', 'BSD 3-Clause License', 'BSD 2-Clause License', 'CC0'],
            },
            {
                type: 'input',
                message: "Enter your GitHub username:",
                name: 'GitHub',
            },
            {
                type: 'input',
                message: "Enter your email address:",
                name: 'email',
            },
        ])
        .then((data) => {
            const readMe = generateReadMe(data);

            fs.writeFile(`${data.title}.md`, readMe, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html!'));
        })
    };

prompt();
