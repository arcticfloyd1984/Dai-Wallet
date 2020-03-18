const Migrations = artifacts.require("Migrations");
const DaiTokenMock = artifacts.require("DaiTokenMock");

module.exports = async function(deployer) {
	  await deployer.deploy(Migrations);
	  await deployer.deploy(DaiTokenMock);
	  const tokenMock = await DaiTokenMock.deployed()
	  // Mint 1,000 Dai TOkens for the deployer
	  await tokenMock.mint(
	  	'0x35E83d9B2a8Af1D5962CCa23a5d712a856Bb90BD',
	  	'1000000000000000000000'
	  )
};
