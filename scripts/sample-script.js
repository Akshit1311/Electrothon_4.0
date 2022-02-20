const hre = require("hardhat");

async function main() {
  const DNews = await hre.ethers.getContractFactory("DNews");
  const dNews = await DNews.deploy();

  await dNews.deployed();

  console.log("DNews deployed to:", dNews.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
