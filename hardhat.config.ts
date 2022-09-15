import "@nomicfoundation/hardhat-toolbox";
require ("dotenv").config();

module.exports = {
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/",
      accounts: [process.env.PRIVATE_KEY],
    },
    mainnet: {
      url: "https://eth-mainnet.g.alchemy.com/v2/",
      accounts: [process.env.PRIVATE_KEY],
    }
  },
  etherscan: {
    apiKey: "",
  },
  solidity: {
    compilers: [
      {
        version: "0.8.9",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
};
