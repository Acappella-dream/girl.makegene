var Eos = require('eosjs')
var binaryen = require('binaryen')

const PrivateKey = "5JUeZ85ZkRcupA93TJWsroZsRrErLcQpsBeCP6cX19KUzkUP199"    //testtesttest on dev network
const PublicKey = "EOS5dQ6pCvHBqHxKDpAd1Mc3QzQtt9qJCmTHG8B4FevHJJ1MPSNSZ"   //testtesttest on dev network
const Privatekey2 = "PW5JmT4HEuwHkFs9yum26yx4sHepsz2F1xgUbij6WxzL9Z5Ewbx7x"   //testtest1114 账户中部署合约，所以需要将此账户的私钥导入
const eosioPriKey = ""                                                      //如果需要做eosio的系统操作，则需要将eosio的私钥导入
const chainid = "0b08e71a2f8caaccc2dc13244b788f5eba29462ecd5d5dea1ad8cbe9581e885a" //dev network，通过cleos get info命令得到

var config = {
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

var eos=Eos(config);

module.exports=require('express').Router()
    .post('/login',function(req,res,next){
        var account=req.body.account;
        eos.getAccount({account_name:account}).then(result=>{
                res.json({
                code:0,
                msg:'ok'
            })
        }).catch((error)=>{
                console.error(error)
                res.json({
                    code:1,
                    msg:'err'
            })
        })
    })
    .post('/amount',function(req,res,next){
        var account=req.body.account;
        eos.getCurrencyBalance({code: "eosio.token", account: account, symbol: "DEV" })
            .then(result=>{
                res.json({
                    amount:result[0]
                })
            })
    })
    .post('/buy',function(req,res,next){
        var account_s=req.body.account_s;
        var account_d=req.body.account_d;
        var price=req.body.price;
        eos.transfer({ from: account_s,to:account_d, quantity: price, memo: ''})
            .then(result=>{
                console.log(result);
                res.json({
                    code:0,
                    msg:"ok"
                })
            }).catch(err=>{
                console.log(err)
        })
    })
    .post('/push',function(req,res,next){

    })
    .post('/find',function(req,res,next){

    })
    .post('/getList',function(req,res,next){

    });