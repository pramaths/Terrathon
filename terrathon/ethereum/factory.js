import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0xdC2Fe1d27Cb6A6341fA5C9E4A774AC7624BF6A21"
);

export default instance;
