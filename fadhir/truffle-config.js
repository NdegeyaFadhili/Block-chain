module.exports = {
    networks: {
      development: {
        host: "127.0.0.1",  // Localhost (default: Ganache)
        port: 7545,         // Port (default: Ganache)
        network_id: "*",    // Match any network id
      },
    },
    compilers: {
      solc: {
        version: "0.8.21",  // Ensure the compiler version matches your contracts
      },
    },
  };
  