'use strict'

const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

const id = chalk.red.bold('redshoga');
const blogId = chalk.red.bold('benishoga');

const data = {
  name: `@${id}`,
  
  work: chalk.gray.bold('Null-stack engineer'),
  twitter: chalk.gray('https://twitter.com/') + id,
  github: chalk.gray('https://github.com/') + id,
  qiita: chalk.gray('https://qiita.com/') + id,
  blog: chalk.gray('https://') + blogId + chalk.gray('.hatenablog.com/'),
  npm: chalk.gray('https://npmjs.com/~') + id,
  npx: chalk.gray('$ npx') + ' ' + id,

  labelWork: chalk.keyword("red").bold('       Work:'),
  labelTwitter: chalk.keyword("orange").bold('    Twitter:'),
  labelGitHub: chalk.keyword("yellow").bold('     GitHub:'),
  labelQiita: chalk.keyword("green").bold('      Qiita:'),
  labelBlog: chalk.keyword("aqua").bold('       Blog:'),
  labelnpm: chalk.keyword("blue").bold('        npm:'),
  labelCard: chalk.keyword("purple").bold('       Card:')
}

const output = 
  `${data.name}` +
  '\n' + '\n' +
  `${data.labelWork}  ${data.work}` + '\n' +
  `${data.labelTwitter}  ${data.twitter}` + '\n' +
  `${data.labelGitHub}  ${data.github}` + '\n' +
  `${data.labelQiita}  ${data.qiita}` + '\n' +
  `${data.labelBlog}  ${data.blog}` + '\n' +
  `${data.labelnpm}  ${data.npm}` + '\n' +
  `${data.labelCard}  ${data.npx}`;

// https://www.npmjs.com/package/boxen
const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: 'double',
  borderColor: "red"
}

fs.writeFileSync(path.join(__dirname, 'bin/output'), boxen(output, boxenOptions))
