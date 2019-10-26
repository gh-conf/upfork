#!/usr/bin/env node

const { Fork } = require('./lib');


const fork = async (currentPath) => {

  await Fork(currentPath);
};


// Trigger fork with current path
fork('/Users/arshad/Arshad/workspace/opensource/taskcluster/');
