const Web3 = require('web3');

// Variables definition
const addressFrom = '0x685DC2BC95E9EEdbB50F0159954C1BDDe37A2b1c' ;
const addressTo = '0x4582Cf7Ae7CF0b9C687f1a3a7dBc899a34024eEF';  // replace with your 
const web3 = new Web3('https://ropsten.infura.io/v3/e3140f303ce94baeb69520ee7bbc313d');
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