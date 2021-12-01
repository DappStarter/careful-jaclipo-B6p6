require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue off smooth fine birth praise cluster hockey entire bridge gas'; 
let testAccounts = [
"0x1f4216c43f25facc133904c584edd10015092708bf1e257381b4f7af953e4df4",
"0x8648a2d82f064ec6650523e2da4073deefa87a80258a2a84052e1ce367966cd5",
"0x9148119304e3a56608cc9229316c48ee2fcd2acc03d87c161d1cae13c1b95395",
"0x03580a7dca4fecbea83f4ad2803e9755d56445735464be2aa43f8a54400e10f6",
"0x395f064c26e92dca4d07d9f522daa2ebc1cb268227a1d11e8bd5b084f32896d0",
"0x7cb1cf1c7f09f64b760a2427630f9bb1968e8f68d069e552f6faad104a6c40fe",
"0xc6fb062f7a2a65c9f14bf940ceedac3189f08e49c590ca1aa15349b0421598ac",
"0x70b3d3cd91d0e3b7825144bb0d56c822293331b5f7c63d1e74fe502a52e98750",
"0x11cee6a945cbf65019fdf9206dfc81ea0c8c2e5e819ca48ac2c146c3b27078b0",
"0x868e68779951c67e96b0a941af5c022a7b51c8c2633b3cddbded17d96e24d6bb"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


