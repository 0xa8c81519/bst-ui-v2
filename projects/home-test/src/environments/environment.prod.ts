export const environment = {
    production: true,
    menu: [
        {
            text: 'Pay',
            active: false,
            url: '/payment',
            target: '_self'
        },
        {
            text: 'Pool 1 DAI / BUSD / USDT',
            active: false,
            url: '/pool1',
            target: '_self'
        },
        {
            text: 'Pool 2 QUSD / BUSD / USDT',
            active: false,
            url: '/pool2',
            target: '_self'
        },
        {
            text: 'Pool 3 USDC / BUSD / USDT',
            active: false,
            url: '/pool3',
            target: '_self'
        },
        {
            text: 'Stake BSLP-01 DAI / BUSD / USDT',
            active: false,
            url: '/stake1',
            target: '_self'
        },
        {
            text: 'Stake BSLP-02 QUSD / BUSD / USDT',
            active: false,
            url: '/stake2',
            target: '_self'
        },
        {
            text: 'Stake BSLP-03 USDC / BUSD / USDT',
            active: false,
            url: '/stake3',
            target: '_self'
        },
        {
            text: 'Docs',
            active: false,
            url: 'https://docs.bstable.finance',
            target: '_blank'
        }
    ],
    rpc: {
        url: 'https://bsc-dataseed.binance.org/'
    },
    pool1: {
        address: '0x9c00954a8a58f5dda8c011d6233093763f13c8da',
    },
    pool2: {
        address: '0x27f545300f7b93c1c0184979762622db043b0805'
    },
    pool3: {
        address: '0x81b6711677783e38A575ff1CCeFDcc6F86617006'
    },
    liqudityFarmingProxy: {
        address: '0x931B226EBb7134a19B970cBF74f18E40a4239178'
    },
    bstToken: {
        address: '0x0A65141EDE51776712B91cE1B77B996aE6f089eC'
    },
    paymentFarmingProxy: {
        address: '0x830a40032FEA261E57736fce9bB6Cc04124a8459'
    },
    dai: {
        address: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3'
    },
    busd: {
        address: '0xe9e7cea3dedca5984780bafc599bd69add087d56'
    },
    usdt: {
        address: '0x55d398326f99059ff775485246999027b3197955'
    },
    qusd: {
        address: '0xb8c540d00dd0bf76ea12e4b4b95efc90804f924e'
    },
    usdc: {
        address: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d'
    }
};
