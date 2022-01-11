const main = async () => {
  // Compile contract and generate necessary files
  const coffeeContractFactory = await hre.ethers.getContractFactory(
    "CoffeePortal"
  );
  const coffeeContract = await coffeeContractFactory.deploy();

  // Wait until contract is fully compiled
  await coffeeContract.deployed();

  console.log("Coffee contract deployed to:", coffeeContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

runMain();
