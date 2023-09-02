const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "since below music stomach unable hire vocal sand actress draft open loop",
  // remember to change this to your own phrase!
  "https://goerli.infura.io/v3/586720110cfb4ee5a4e24308ec6016c5"
  
  // remember to change this to your own endpoint!
);

  const web3 = new Web3(provider);

const deploy = async () => {
try{  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[1]);

  const result = await new web3.eth.Contract(compiledFactory.abi)
    .deploy({ data: compiledFactory.evm.bytecode.object })
    .send({ gas: "1400", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
}
catch(err)
{
  console.log(err)
}
}
deploy();
