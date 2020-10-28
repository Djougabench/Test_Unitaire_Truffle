const { contract } = require('@openzeppelin/test-environment');

const { BN } = require('@openzeppelin/test-helpers');
const { expect } = require('chai');

const Multiplier = contract.fromArtifact('Multiplier');
const Divisor = contract.fromArtifact('Divisor');

describe('Multiplier', () => {
  beforeEach(async function () {
    this.multiplier = await Multiplier.new();
  });

  it('multiply numbers nb1 * nb2', async function () {
    expect(await this.multiplier.mul(6, 10)).to.be.bignumber.equal(new BN(60));
  });
});

describe('Divisor', () => {
  beforeEach(async function () {
    this.divisor = await Divisor.new();
  });

  it('divide numbers nb1 / nb2', async function () {
    expect(await this.divisor.div(100, 2)).to.be.bignumber.equal(new BN(50));
  });
});
