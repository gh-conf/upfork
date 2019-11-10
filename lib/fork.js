const logSymbols = require('log-symbols');
const upstreamCore = require('@gh-conf/upstream-core');
const commandExec = require('command-exec');


const fork = async (currentPath) => {

  try {

    // Catch upstream core errors and continue
    // Upstreamcore throws error for already configured upstream
    // That is not an error for us
    await upstreamCore(currentPath).catch(() => {});

    await commandExec(`cd ${currentPath} && git fetch upstream && git checkout master && git rebase upstream/master`);
    console.log(logSymbols.success, 'Branch synced.\n\nRun below command to update your forked repository\n\n///////  git push origin master  ///////\n');
    
  } catch (err) {
    console.log(logSymbols.error, err.message || err);
  }
};


module.exports = fork;
