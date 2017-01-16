// NOTE: Ensure this script uses ES5 only as the user may be running an old
// version of Node, which this script wants to test against.
//
// This script will ensure that users are using a supported version of node
// for the project.

const exec = require('child_process').exec;
const existsSync = require('fs').existsSync;
const pathResolve = require('path').resolve;

if (existsSync(pathResolve(__dirname, '../../node_modules'))) {
  // An install has already occurred.
  return;
}

const packageJson = require('../../package.json');
if (!packageJson.engines
  || !packageJson.engines.node
  || !packageJson.devDependencies
  || !packageJson.devDependencies.semver) {
  // The package has already been customised. Ignore this script.
  return;
}

// Inspired by "create-react-app". Thanks @gaearon :)
function checkNodeVersion() {
  const semver = require('semver');

  if (!semver.satisfies(process.version, packageJson.engines.node)) {
    console.error(
      'You are currently running Node %s but %s requires %s. Please use a supported version of Node.\n',
      process.version,
      packageJson.name,
      packageJson.engines.node
    );
    process.exit(1);
  }
}

exec(
  `npm install semver@${packageJson.devDependencies.semver}`,
  function installSemverCb(err/* , stdout, stderr*/) {
    if (err) {
      throw err;
    }
    checkNodeVersion();
  }
);
