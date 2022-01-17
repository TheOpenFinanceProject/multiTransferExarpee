// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const { addresses } = require("../PEE_Addresses.js");
const { amounts } = require("../PEE_amounts.js")

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy

    const Token = await ethers.getContractFactory("TestToken");
    const token = await Token.deploy("PEETEST", "PEETEST", 18);
    await token.deployed();
    var tokensadded = 0;
    var formattedAmounts = [];
    let n = 0
    console.log(amounts.length);
    while(n < amounts.length){
      formattedAmounts[n] = ethers.utils.parseEther(String(amounts[n])).toString()
      tokensadded += amounts[n];
      n++
    } 
    console.log(tokensadded)

    var amountarrayzero = formattedAmounts.slice(0,500)
    var amountarrayone = formattedAmounts.slice(500,1000)
    var amountarraytwo = formattedAmounts.slice(1000,1500)
    var amountarraythree = formattedAmounts.slice(1500,2000)
    var amountarrayfour = formattedAmounts.slice(2000,2500)
    var amountarrayfive = formattedAmounts.slice(2500,3000)

    var addrarrayzero = addresses.slice(0,500)
    var addrarrayone = addresses.slice(500,1000)
    var addrarraytwo = addresses.slice(1000,1500)
    var addrarraythree = addresses.slice(1500,2000)
    var addrarrayfour = addresses.slice(2000,2500)
    var addrarrayfive = addresses.slice(2500,3000)



        const MultiTransfer = await ethers.getContractFactory("MultiTransfer");
    const multiTransfer = await MultiTransfer.deploy(token.address);
    await multiTransfer.deployed();
    console.log("minting enough piss for everyone")
    await token.mint(ethers.utils.parseEther(String(tokensadded + 1)).toString(), multiTransfer.address);
    console.log("setting amount array 0")
    await multiTransfer.setAmounts(amountarrayzero);
    console.log("setting amount array 1")
    await multiTransfer.setAmounts(amountarrayone);
    console.log("setting amount array 2")
    await multiTransfer.setAmounts(amountarraytwo);
    console.log("setting amount array 3")
    await multiTransfer.setAmounts(amountarraythree);
    console.log("setting amount array 4")
    await multiTransfer.setAmounts(amountarrayfour);
    console.log("setting amount array 5")
    await multiTransfer.setAmounts(amountarrayfive);
    console.log("setting addresses array 0")
    await multiTransfer.setAddresses(addrarrayzero);
    console.log("setting addresses array 1")
    await multiTransfer.setAddresses(addrarrayone);
    console.log("setting addresses array 2")
    await multiTransfer.setAddresses(addrarraytwo);
    console.log("setting addresses array 3")
    await multiTransfer.setAddresses(addrarraythree);
    console.log("setting addresses array 4")
    await multiTransfer.setAddresses(addrarrayfour);
    console.log("setting addresses array 5")
    await multiTransfer.setAddresses(addrarrayfive);

    console.log("Greeter deployed to:", token.address);
    console.log("Greeter deployed to:", multiTransfer.address);

    console.log(await multiTransfer.getAddressesLength())
    console.log(await multiTransfer.getAmountsLength())
    console.log("sending 500 addresses their tokens")
    await multiTransfer.distribute(500)
    console.log("sending 500 addresses their tokens")
    await multiTransfer.distribute(500)
    console.log("sending 500 addresses their tokens")
    await multiTransfer.distribute(500)
    console.log("sending 500 addresses their tokens")
    await multiTransfer.distribute(500)
    console.log("sending 500 addresses their tokens")
    await multiTransfer.distribute(500)
    console.log("sending 500 addresses their tokens")
    await multiTransfer.distribute(500)
    console.log("testPee deployed to:", token.address);
    console.log("multitransfer deployed to:", multiTransfer.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
