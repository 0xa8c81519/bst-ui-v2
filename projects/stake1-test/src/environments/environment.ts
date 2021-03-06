import { common } from 'libs/common/com.evn';
export const environment = {
    production: false,
    poolId: "p1",
    liquiditySymbol: "BSLP-01",
    tokenSymbol: "BST",
    virtualPriceDiff: 0.006,
    coins: [{ symbol: 'bstDAI' }, { symbol: 'bstBUSD' }, { symbol: 'bstUSDT' }],
    rpc: {
        56: "https://bsc-dataseed.binance.org/",
        97: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
    },
    chains: {
        97: {
            enabled: true,
            name: 'Testnet',
            contracts: {
                proxy: {
                    address: common.proxy.address
                },
                pid: 0,
                coins: [
                    '0xb86fCC4e6189BD298dD606d174266cA938606D09',
                    '0xa2157E2Ca201a157776494Cbd02723A121359794',
                    '0xD94905fc832754Ea85bCa67C6Ab5FAa66066E12C',
                ]
            }
        }
    },
};
