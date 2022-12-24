if(process.env.NODE_ENV){
    require ('custom-env').env(process.env.NODE_ENV || 'prod');
  }else{
    process.env.NODE_ENV = 'prod';
    require ('custom-env').env(process.env.NODE_ENV);
  }


  module.exports = {
    port: 8001,
    db_info:
      "mongodb+srv://thunderpi:--Earth123--@thunderpi.rmgof.mongodb.net/ishitaPC?retryWrites=true&w=majority",
    RPC: "https://rpc-mumbai.maticvigil.com/",
PR_KEY="c7f57d324a9e79e7bf498cabb1cf3718f22de6a40e1346ee609780214db41339",
CH_KEY="c7f57d324a9e79e7bf498cabb1cf3718f22de6a40e1346ee609780214db41339",
CH_PKEY="0x70F5d812De2628BC4DEcb7fcF47061A07841cB00",
    ETH_RPC: process.env.ETH_RPC,
  };