const Web3 = require('web3');

// Variables definition
const privKey =
 'dfc91ed03be667f431c214cbfd9c8c9ce36639ccb875268d54af8725239432c7'; // Genesis private key
const addressFrom = '0x685DC2BC95E9EEdbB50F0159954C1BDDe37A2b1c';
const addressTo ='0x4582Cf7Ae7CF0b9C687f1a3a7dBc899a34024eEF';
const web3 = new Web3('https://ropsten.infura.io/v3/e3140f303ce94baeb69520ee7bbc313d');
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