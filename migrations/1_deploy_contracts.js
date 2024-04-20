const coin = artifacts.require("HedgethToken");
const sale = artifacts.require("AllowanceCrowdsale");

module.exports = async function(deployer) {
  await deployer.deploy(coin);
  await deployer.deploy(sale, 10000, "0xCAfebabE651699fb9B4ae4bCA17741a3c3df1837", coin.address, "0xCAfebabE651699fb9B4ae4bCA17741a3c3df1837");
};
