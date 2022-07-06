const Web3 = require('web3');

// Variables definition
const privKey =
 'f40abee9c9ff4901f355b3d2e6b316e2aa29c7b25e6700fca5accfadbf7bf27d'; // Genesis private key
const addressFrom = '0xfa83395752830c908513c050f15e0f2199398C6';
const addressTo ='0xC0FF44bB9cFd351191c5efe86fCA23B57eC1969F';
const web3 = new Web3('https://data-seed-prebsc-2-s1.binance.org:8545/');
// Create transaction
const deploy = async () => {
   console.log(
      `Attempting to make transaction from ${addressFrom} to ${addressTo}`
   );

   const createTransaction = await web3.eth.accounts.signTransaction(
      {
         from: addressFrom,
         to: addressTo,
         value: web3.utils.toWei('0.0012', 'ether'),
         gas: '21000',
      },
      privKey
   );

   // Deploy transaction
   const createReceipt = await web3.eth.sendSignedTransaction(
      createTransaction.rawTransaction
   );
   console.log(
      `Transaction successful with hash: ${createReceipt.transactionHash}`
   );
};

deploy();