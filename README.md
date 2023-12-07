# Lido Detection bots for Forta

## Bots list

[ethereum-operations](./ethereum-operations) - Lido Detection bot fot stETH protocol operations

[ethereum-financial](./ethereum-financial) - Lido Detection bot fot stETH protocol finance activity

[ethereum-huge-tx](./ethereum-huge-tx) - Lido Detection bot fot huge tx of the Lido tokens of interest detection

[lido-on-polygon](./lido-on-polygon) - Lido Detection bot for stMATIC protocol (should be launched against Ethereum
mainnet)

[polygon](./polygon) - Detection bot for Lido Apps on the Polygon network (should be launched against Polygon mainnet)

[arbitrum](./arbitrum) - Detection bot for Lido Apps on the Arbitrum network (should be launched against Arbitrum
mainnet)

[l2-bridge-arbitrum](./l2-bridge-arbitrum) - Detection bot for Arbitrum part of L2 bridge

[l2-bridge-balance](./l2-bridge-balance) - Detection bot for L2 bridges balances

[l2-bridge-base](./l2-bridge-base) - Detection bot for Base part of L2 bridge

[l2-bridge-ethereum](./l2-bridge-ethereum) - Detection bot for Ethereum part of L2 bridges

[l2-bridge-mantle](./l2-bridge-mantle) - Detection bot for Mantle part of L2 bridges

[l2-bridge-optimism](./l2-bridge-optimism) - Detection bot for Optimism part of L2 bridge

[l2-bridge-zkSync](./l2-bridge-zksync) - Detection bot for ZkSync part of L2 bridge

[phishing-detect](./phishing-detect) - Phishing detection bot for the Lido ERC20 tokens

[multisig-watcher](./multisig-watcher) - Multisig events detector bot

[voting-watcher](./voting-watcher) - Lido bot for watching votes

[storage-watcher](./storage-watcher) - Detection bot that monitors critical storage changes

[reverted-tx-watcher](./reverted-tx-watcher) - Detection bot that monitors critical storage changes

[template](./template) - Template for bot creation. (Forta version)

[template-v2](./template-v2) - Template for bot creation. (Sergey Wh1te's version)

## How to setup new bot and network on example from template-v2 folder or l2-bridge-mantle

1. Find out a repository which contains WstETH information. For current project it's
   1. https://www.notion.so/wstETH-on-Mantle-Deployment-Verification-08a1e257034b4ed9b6f5de1ef5293399
   2. https://github.com/mantlenetworkio/lido-l2
   3. Get Proofs of addreses and constants got from https://docs.lido.fi/deployed-contracts/:
      1. L1ERC20TokenBridge
         Impl : [0x6fBBe1Af52D22557D7F161Dc5952E306F4742e23](https://etherscan.io/address/0x2D001d79E5aF5F65a939781FE228B267a8Ed468B)
      2. L1ERC20TokenBridge
         Proxy: [0x2D001d79E5aF5F65a939781FE228B267a8Ed468B](https://etherscan.io/address/0x6fBBe1Af52D22557D7F161Dc5952E306F4742e23)
      3. ERC20Bridged
         Impl: [0x1FaBaAec88198291A4efCc85Cabb33a3785165ba](https://explorer.mantle.xyz/address/0x1FaBaAec88198291A4efCc85Cabb33a3785165ba)
      4. ERC20Bridged
         Proxy: [0x458ed78EB972a369799fb278c0243b25e5242A83](https://explorer.mantle.xyz/address/0x458ed78EB972a369799fb278c0243b25e5242A83)
      5. L2ERC20TokenBridge
         Impl: [0xf10A7ffC613a9b23Abc36167925A375bf5986181](https://explorer.mantle.xyz/address/0xf10A7ffC613a9b23Abc36167925A375bf5986181)
      6. L2ERC20TokenBridge
         Proxy: [0x9c46560D6209743968cC24150893631A39AfDe4d](https://explorer.mantle.xyz/address/0x9c46560D6209743968cC24150893631A39AfDe4d)
      7. OptimismBridgeExecutor: [0x3a7b055bf88cdc59d20d0245809c6e6b3c5819dd](https://explorer.mantle.xyz/address/0x3a7b055bf88cdc59d20d0245809c6e6b3c5819dd)
2. Clone https://github.com/mantlenetworkio/lido-l2 repository and compile contracts.
   1. Then copy and past needed abi's into ./abi folder in current repo
3. `yarn install`
4. `yarn generate-types` Install abi bindings though typechain. Generated files place in ./src/generated
5. Set up correct contract addresses.
6. Provide l2 rpc url. In most cases FORTA-SDK does not support it. For checking it go
   to https://app.forta.network/network, please.
   1. Go to ./src/config and change rpc. Also, you have to encode url into base64 format
7. On current stage you have to fix all TS syntax errors
8. Go to ./src/utils/constants.ts and provide address to new Network. In our case - Mantle.
   1. Change GOV_BRIDGE_ADDRESS
   2. Change L2_ERC20_TOKEN_GATEWAY_ADDRESS
   3. Change \*\_WST_ETH_BRIDGED_ADDRESS
   4. Consider that WithdrawalInitiated is set up - correct.
      1. For this go to ./src/abi, find WithdrawalInitiated and compare event abi. Must be the same.
   5. Check address roles. In most case they're same because the source of truth place on ETH mainnet.
9. Go to ./utils/events/\*
   1. bridge_events.ts
      1. Replace all network name to your-network name
      2. Check event signatures
   2. gov_events.ts
      1. Replace all network name to your-network name
      2. Check event signatures
   3. proxy_admin_events.ts
      1. Replace all network name to your-network name
      2. Check event signatures
10. Go to ./src/workers and replace all network name to your-network name
11. Add new folder to .github/CODEOWNERS file
12. Add new bot for root [Readme.md](README.md)
13. Add alerts of bot to bot's Readme.md
14. Finish. Type yarn run in your CLI

## Update l2-bridge-balance bot

1. Go to ./l2-bridge-balance/config/bot-config.json and provide your RPC network URL.
2. Go to l2-bridge-balance/src/constants.ts
   1. Add to BRIDGE_PARAMS_WSTETH obj your network by analogy with other networks
   2. In case network has LDO, also update BRIDGE_PARAMS_LDO obj
3. Inside l2-bridge-balance/src/agent-balance.ts::handleBlock add call handleBridgeBalanceWstETH and
   handleBridgeBalanceLDO with new network
4. Finish. `yarn run start`

## Update l2-bridge-ethereum bot

1. Go to l2-bridge-ethereum/src/constants.ts
2. Add two constants by analogy with others:
   1. Cross domain messenger for l1 part
   2. L1ERC20TokenBridge for l1 part
3. Update L1_ERC20_TOKEN_GATEWAYS const with data from prev. stage
4. Populate LIDO_PROXY_CONTRACTS with data from stage 2.
5. Populate THIRD_PARTY_PROXY_EVENTS with data from stage 2.
   1. Go to contract address and read contract src
   2. Find events in contract's src
   3. Add those events into THIRD_PARTY_PROXY_EVENTS

## Contribute

See bots README plus

### We use prettier and eslint

Everything you need to do involves a few steps.
Add the following scripts to your package.json:

- Add dependencies like devDependencies:

```json
{
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^6.12.0",
    "@typescript-eslint/parser": "^6.12.0",
    "eslint": "^8.54.0",
    "eslint-config-prettier": "^9.0.0",
    "eslint-plugin-jest": "^27.6.0",
    "eslint-plugin-prettier": "^5.0.1",
    "prettier": "^3.1.0"
  }
}
```

```json
{
  "scripts": {
    "eslint:lint": "eslint ./src",
    "eslint:format": "eslint ./src --fix",
    "prettier:check": "prettier --check .",
    "prettier:format": "prettier --write .",
    "lint": "yarn run prettier:check && yarn run eslint:lint",
    "format": "yarn run eslint:format && yarn run prettier:format"
  }
}
```

touch .eslintrc.json and past settings for eslint. This will allow to use eslint and prettier together.

```
{
  "parser": "@typescript-eslint/parser",
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
  "plugins": ["@typescript-eslint", "prettier"],
  "env": {
    "node": true,
    "es6": true
  },
  "rules": {
    "prettier/prettier": "error",
    "curly": "error"
  }
}
```

And finally:

```bash
yarn install
yarn format
```
