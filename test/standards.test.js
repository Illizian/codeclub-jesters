const path = require('path');
const glob = require('glob');
const CLIEngine = require('eslint').CLIEngine;

const engine = new CLIEngine({ envs: ['node'] });
const files = glob.sync('./src/*.js');

describe('Standards', () => {
  engine.executeOnFiles(files).results.forEach(generateTest);
});

function generateTest(result) {
  return test(`${ path.parse(result.filePath).base } should contain correctly formatted code.`, function() {
    expect(formatMessages(result.messages)).toBeFalsy();
  });
}

function formatMessages(messages) {
  const errors = messages.map((message) => {
    return `${message.line}:${message.column} ${message.message.slice(0, -1)} - ${message.ruleId}\n`;
  });

  return errors.join('');
}