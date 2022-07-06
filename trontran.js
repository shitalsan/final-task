
const TronWeb = require('tronweb');
const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider('https://api.trongrid.io');
const solidityNode = new HttpProvider('https://api.trongrid.io');
const eventServer = 'https://api.trongrid.io';
const privateKey = 'Your Private Key Here';

// Create tronWeb object defining Node addresses
const tronWeb = new TronWeb(
    fullNode,
    solidityNode,
    eventServer,
    privateKey,
);

// Create param object that defines all the API input parameters
const param = {
  exchangeID:5,          //Exchange ID Number
  tokenName:"_",         //Token name for TRX
  sold:100000000,        //TRX amount sold. Must be in SUN denomination.
  expected:1,            //Assigned as 1 to keep wide limit, like market order
  privKey:'Your Private Key Here',
}

async function trade(param){
  try {
    // Performs the trade between Token and TRX
    const tradeobj = await tronWeb.transactionBuilder.tradeExchangeTokens(exchangeID = param.exchangeID,
    tokenName = param.tokenName,
    tokenAmountSold = param.sold,
    tokenAmountExpected = param.expected,
    ownerAddress = "Your TRX Wallet Address Here - in Hex String");

    // Signing the transaction
    const signedtxn = await tronWeb.trx.sign(tradeobj, param.privKey);

    // Broadcasting the transaction
    const receipt = await tronWeb.trx.sendRawTransaction(signedtxn);
    console.log(receipt)
  }
  catch(err) {
    console.log(err);
    
  };
};

trade(param); // Execute the function