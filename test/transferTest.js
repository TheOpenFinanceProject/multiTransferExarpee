const { expect } = require("chai");
const { ethers } = require("hardhat");

const { addresses } = require("../PEE_Addresses.js");
const { amounts } = require("../PEE_amounts.js")




describe("Transfer", function () {
  it("Should Fuck your mom in the Arse", async function () {

    const Token = await ethers.getContractFactory("TestToken");
    const token = await Token.deploy("Hello", "Hellos", 18);
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
    console.log("setting addresses array 4")
    await multiTransfer.setAddresses(addrarrayfive);
    console.log("setting addresses array 5")
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
    //console.log("sending 500 addresses their tokens")
    let balof1456 = await token.balanceOf(addresses[1370])
    let bal1456 = (formattedAmounts[1370])
    console.log(bal1456)


    //await multiTransfer.setAmounts(amounts);
    expect(balof1456).to.equal(bal1456);
    
  });
});
