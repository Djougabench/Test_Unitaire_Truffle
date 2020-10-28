const { contract } = require('@openzeppelin/test-environment');

const { BN, expectRevert } = require('@openzeppelin/test-helpers');
const { expect } = require('chai');

const Adder = contract.fromArtifact('Adder');
const Suber = contract.fromArtifact('Suber');

describe('Adder', () => {
  beforeEach(async function () {
    this.adder = await Adder.new();
  });

  it('add numbers', async function () {
    expect(await this.adder.add(1, 1)).to.be.bignumber.equal(new BN(2));
  });
});

describe('Suber', () => {
  beforeEach(async function () {
    this.suber = await Suber.new();
  });

  it('substract numbers nb1 - nb2', async function () {
    expect(await this.suber.sub(100, 98)).to.be.bignumber.equal(new BN(2));
  });

  it('reverts when nb1 < nb2', async function () {
    await expectRevert(this.suber.sub(98, 199), 'Suber: no negative value here.');
  });
});
