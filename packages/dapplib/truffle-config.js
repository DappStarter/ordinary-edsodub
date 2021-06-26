require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty bottom system blame develop remain prosper inflict kite bubble shed'; 
let testAccounts = [
"0xee0161f966bcc8ac0e119629f7a9ca1d7cf92b928fabf5db2dc0d00fa13e2381",
"0xfc056dec3cf19a6d024e281c3f5179b4672ad934f9def3b284306cb41226f203",
"0x86f99de48381f88350a067c20eeb8d5f20782ff1c8dd51e3842f73799e45ea14",
"0x5ee90bdaf7e81e7b56b2869d843f6abe096d7f96b8e2cb12810754ea3d279383",
"0x155df913c84faa5bcbd368c86e4cf4842552c7ceda5928d32c87ad67eafaa3c6",
"0xcdfbf66204c65206e820363a679a4a034136470d9fa8bfb637e704b2c80bce4a",
"0x8b90e1b5e9eb425f848128b3e2b7b4e533a2c2dfbe063cdad77c48929c0f8d9c",
"0x9a195653041c4f5908e5e6503ada6a1bc17351dad861d91ac679017e711369ac",
"0xc6b448678f5c08ffa55dd52ac78e74a43171fd58607b5871be5ac8dddca87ecb",
"0xc74e1904c6494b43c9a956387448c7762656b1045d635e0b52f2d19b8f616c99"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

