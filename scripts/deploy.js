const hre = require("hardhat");

async function main() {
  const MGToken = await hre.ethers.getContractFactory("MGToken");
  const token = await MGToken.deploy('MGToken', 'MGT', 100000);

  await token.deployed();

  console.log("Token address:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
