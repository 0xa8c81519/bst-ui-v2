
import { common } from 'libs/common/com.evn';
export const environment = {
    production: false,
    poolId: "p2",
    liquiditySymbol: "BSLP-02",
    tokenSymbol: "BST",
    virtualPriceDiff: 0.006,
    coins: [{ symbol: 'tQUSD' }, { symbol: 'tBUSD' }, { symbol: 'tUSDT' }],
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
                pid: 1,
                coins: [
                    '0xd7c2ba36d15bfdeaa38766c231cc940ed524530f',
                    '0xa2157E2Ca201a157776494Cbd02723A121359794',
                    '0xD94905fc832754Ea85bCa67C6Ab5FAa66066E12C',
                ]
            }
        },
    },
    subgraphApi: "https://api.thegraph.com/subgraphs/name/0xa8c81519/my-subgraph"
};
