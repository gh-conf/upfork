const expect = require('chai').expect;
const { readConf } = require('@gh-conf/gh-conf-read');
const { writeConf } = require('@gh-conf/gh-conf-write');

const { Fork } = require('../lib');


const GIT_CONFIG = '[remote "upstream"]\n\turl = https://github.com/gh-conf/upfork\n\tfetch = +refs/heads/*:refs/remotes/upstream/*\n';
let configBackup;

describe('validate upfork', () => {
  beforeEach(async () => {
    configBackup = await readConf(process.cwd());
  });
  afterEach(async() => {   
    await writeConf(process.cwd(), configBackup);
  });
  it('should configure upstream and sync upstream', async () => {
    const config = await readConf(process.cwd());
    const modifiedConfig = config.replace('https://github.com/gh-conf/upfork', 'https://github.com/arshadkazmi42/upfork');
    await writeConf(process.cwd(), modifiedConfig);
    await Fork(process.cwd());
    expect((await readConf(process.cwd())).includes(GIT_CONFIG)).to.equal(true);

    // Reset Original Config
    await writeConf(process.cwd(), config);
  });
  it('should throw error while configuring upstream', async () => {
    try {
      await Fork('./');
    } catch (err) {
      expect(err.message).to.equal('Not a forked repository!!!');
    }

    try {
      await Fork('./arshad');
    } catch (err) {
      expect(err.message).to.equal('./arshad/.git/config not found');
    }
  });
});