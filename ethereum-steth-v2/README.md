# Lido ethereum Steth bot

## Supported chains

- Ethereum mainnet

## Alerts

1. StETH operations
    1. HandleBlock
        1. 🚨🚨🚨 Buffered ETH drain
        2. 🚨 Huge depositable ETH amount
        3. ⚠️ High depositable ETH amount
        4. ⚠️ Low deposit executor balance
        5. ⚠️ Staking limit below 10%
        6. 📉 Staking limit below 30%
    2. HandleTransaction
        1. Deposit Security events
            1. 🚨 Deposit Security: Deposits paused
            2. ✅ Deposit Security: Deposits resumed
            3. ⚠️ Deposit Security: Guardian added
            4. ⚠️ Deposit Security: Guardian removed
            5. 🚨 Deposit Security: Guardian quorum changed
            6. ⚠️ Deposit Security: Max deposits changed
            7. ⚠️ Deposit Security: Min deposit block distance changed
            8. 🚨 Deposit Security: Owner changed
        2. Lido events
            1. 🚨🚨🚨 Lido: Stopped 🚨🚨🚨
            2. ✅ Lido: Resumed
            3. 🚨 Lido: Staking paused
            4. ✅ Lido: Staking resumed
            5. ⚠️ Lido: Staking limit set
            6. 🚨 Lido: Staking limit removed
            7. 🚨 Lido: Locator set
            8. ℹ️ Lido: Funds recovered to vault
            9. ℹ️ Lido: Contract version set
        3. Insurance fund events
            1. ⚠️ Insurance fund: ETH transferred
            2. ⚠️ Insurance fund: ERC721 transferred
            3. 🚨 Insurance fund: ERC20 transferred
            4. ⚠️ Insurance fund: ERC1155 transferred
            5. 🚨 Insurance fund: Ownership transferred
        4. Burner events
            1. ℹ️ Lido Burner: ERC20 recovered
            2. ℹ️ Lido Burner: ERC721 recovered

## Development (Forta specific)

Edit `alerting-forta/<SUBMODULE>/forta.config.json` and set `jsonRpcUrl` to your JSON-RPC provider. Install deps:

```
yarn install
```

Running in a live mode:

```
yarn start:dev
```

Testing on a specific block/range/transaction:

```
yarn block 13626668
yarn range '13626667..13626668'
yarn tx 0x2d2774c04e3faf9f17cd26e0978bb812081b9d0b5cc6fd8bf04cc441f92c0a8c
```
