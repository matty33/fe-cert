
const hre = require("hardhat");

async function main() {
  const EasyCerts = await hre.ethers.deployContract('EasyCerts',["Easy Certificates  ", "EAZYCERTS"]);

  await EasyCerts.waitForDeployment(); //0x403Aee4aB4160c9dBdFb13625985693F009955A8

  console.log('Easy Certs Deployed at ', EasyCerts.target)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});