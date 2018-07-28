let Eos = require('eosjs')
let binaryen = require('binaryen')

const PrivateKey = "5JUeZ85ZkRcupA93TJWsroZsRrErLcQpsBeCP6cX19KUzkUP199"    //testtesttest on dev network
const PublicKey = "EOS5dQ6pCvHBqHxKDpAd1Mc3QzQtt9qJCmTHG8B4FevHJJ1MPSNSZ"   //testtesttest on dev network
const Privatekey2 = "PW5JmT4HEuwHkFs9yum26yx4sHepsz2F1xgUbij6WxzL9Z5Ewbx7x"   //testtest1114 账户中部署合约，所以需要将此账户的私钥导入
const eosioPriKey = ""                                                      //如果需要做eosio的系统操作，则需要将eosio的私钥导入
const chainid = "0b08e71a2f8caaccc2dc13244b788f5eba29462ecd5d5dea1ad8cbe9581e885a" //dev network，通过cleos get info命令得到

let config = {
  keyProvider: [PrivateKey, Privatekey2],
  httpEndpoint: 'http://178.62.196.196:8888',
  chainId: chainid,
  mockTransactions: () => null,
  expireInSeconds: 60,
  broadcast: true,
  debug: false,
  verbose: false,
  sign: true,
  binaryen: binaryen
}
export default Eos(config)
