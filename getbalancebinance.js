const Web3 = require('web3');

// Variables definition
const addressFrom = '0xfa83395752830c908513c050f15e0f2199398C6'
const addressTo = '0xC0FF44bB9cFd351191c5efe86fCA23B57eC1969F';  // replace with your 
const web3 = new Web3('https://data-seed-prebsc-2-s1.binance.org:8545/');
// Balance call
const balances = async () => {
   const balanceFrom = web3.utils.fromWei(
      await web3.eth.getBalance(addressFrom),
      'ether'
   );
   const balanceTo = await web3.utils.fromWei(
      await web3.eth.getBalance(addressTo),
      'ether'
   );
   console.log(`The balance of ${addressFrom} is: ${balanceFrom} ETH.`);
   console.log(`The balance of ${addressTo} is: ${balanceTo} ETH.`);
};

balances();