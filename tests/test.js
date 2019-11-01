const expect = require('chai').expect;
const { readConf } = require('@gh-conf/gh-conf-read');
const { writeConf } = require('@gh-conf/gh-conf-write');

const { Fork } = require('../lib');


const GIT_CONFIG = '[remote "upstream"]\n\turl = https://github.com/gh-conf/upfork\n\tfetch = +refs/heads/*:refs/remotes/upstream/*\n';
// const GIT_CONFIG = '[core]\n\trepositoryformatversion = 0\n\tfilemode = true\n\tbare = false\n\tlogallrefupdates = true\n\tignorecase = true\n\tprecomposeunicode = true\n[remote \"origin\"]\n\turl = https://github.com/arshadkazmi42/upfork\n\tfetch = +refs/heads/*:refs/remotes/origin/*\n[branch \"master\"]\n\tremote = origin\n\tmerge = refs/heads/master';


describe('validate upfork', () => {
  it('upstream details should be present', async () => {
    const config = await readConf(process.cwd());
    const modifiedConfig = config.replace('https://github.com/gh-conf/upfork', 'https://github.com/arshadkazmi42/upfork');
    await writeConf(process.cwd(), modifiedConfig);
    console.log('----1----');
    try {
      await Fork(process.cwd());
    } catch (err) {
      console.log(err);
    }
    console.log('----2----');

    console.log('----3----');
    expect((await readConf(process.cwd())).includes(GIT_CONFIG)).to.equal(true);
    console.log('----4----');

    // Reset Original Config
    console.log('----5----');
    await writeConf(process.cwd(), config);
    console.log('----6----');
  });
  // it('upstream throws error not a forked repository', async () => {
  //   await Upstreamit(process.cwd());
  //   expect((await readConf(process.cwd())).includes(UPSTREAM_CONFIG)).to.equal(false);
  // });
});