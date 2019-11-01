const upstreamCore = require('@gh-conf/upstream-core');
const commandExec = require('command-exec');


const fork = async (currentPath) => {
  await upstreamCore(currentPath);
  await commandExec(`cd ${currentPath} && git fetch upstream && git checkout master && git rebase upstream/master`);

  // TODO Use color logs
  console.log('Branch synced, you can run git push origin master to update your forked repository');
};


module.exports = fork;
