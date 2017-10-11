var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "REPLACE WITH YOUR MNEMOIC";

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
     provider: new HDWalletProvider(mnemonic, "https://testnet.infura.io/"),
     network_id: 3
   },
   rinkeby : {
     provider: new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/"),
     network_id : 4
   }
  }
};

