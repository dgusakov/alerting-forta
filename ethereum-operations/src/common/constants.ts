import BigNumber from "bignumber.js";

// ADDRESSES

// Lido Core Protocol
export const LIDO_LOCATOR_ADDRESS =
  "0xc1d0b3de6792bf6b4b37eccdcc24e45978cfd2eb";
export const LIDO_STETH_ADDRESS = "0xae7ab96520de3a18e5e111b5eaab095312d7fe84";
export const WSTETH_ADDRESS = "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0";
export const STAKING_ROUTER_ADDRESS =
  "0xfddf38947afb03c621c71b06c9c70bce73f12999";
export const NODE_OPERATORS_REGISTRY_ADDRESS =
  "0x55032650b14df07b85bf18a3a3ec8e0af2e028d5";
export const DEPOSIT_SECURITY_ADDRESS =
  "0xc77f8768774e1c9244beed705c4354f2113cfc09";
export const EL_REWARDS_VAULT_ADDRESS =
  "0x388c818ca8b9251b393131c08a736a67ccb19297";
export const WITHDRAWAL_QUEUE_ADDRESS =
  "0x889edc2edab5f40e902b864ad4d7ade8e412f9b1";
export const WITHDRAWALS_VAULT_ADDRESS =
  "0xb9d7934878b5fb9610b3fe8a5e441e8fad7e293f";
export const BURNER_ADDRESS = "0xd15a672319cf0352560ee76d9e89eab0889046d3";
export const MEV_ALLOWED_LIST_ADDRESS =
  "0xf95f069f9ad107938f6ba802a3da87892298610e";

// Lido Oracle Contracts
export const ACCOUNTING_ORACLE_ADDRESS =
  "0x852ded011285fe67063a08005c71a85690503cee";
export const ACCOUNTING_HASH_CONSENSUS_ADDRESS =
  "0xd624b08c83baecf0807dd2c6880c3154a5f0b288";
export const EXITBUS_ORACLE_ADDRESS =
  "0x0de4ea0184c2ad0baca7183356aea5b8d5bf5c6e";
export const EXITBUS_HASH_CONSENSUS_ADDRESS =
  "0x7fadb6358950c5faa66cb5eb8ee5147de3df355a";
export const ORACLE_REPORT_SANITY_CHECKER_ADDRESS =
  "0x9305c1dbfe22c12c66339184c0025d7006f0f1cc";
export const ORACLE_DAEMON_CONFIG_ADDRESS =
  "0xbf05a929c3d7885a6aead833a992da6e5ac23b09";
export const LEGACY_ORACLE_ADDRESS =
  "0x442af784a788a5bd6f42a01ebe9f287a871243fb";

// Lido DAO Contracts
export const LIDO_DAO_ADDRESS = "0xb8ffc3cd6e7cf5a098a1c92f48009765b24088dc";
export const LDO_ADDRESS = "0x5a98fcbea516cf06857215779fd812ca3bef1b32";
export const ARAGON_VOTING_ADDRESS =
  "0x2e59a20f205bb85a89c53f1936454680651e618e";
export const ARAGON_TOKEN_MANAGER_ADDRESS =
  "0xf73a1260d222f447210581ddf212d915c09a3249";
export const ARAGON_FINANCE_ADDRESS =
  "0xb9e5cbb9ca5b0d659238807e84d0176930753d86";
export const ARAGON_AGENT_ADDRESS =
  "0x3e40d73eb977dc6a537af587d48316fee66e9c8c";
export const ARAGON_ACL_ADDRESS = "0x9895f0f17cc1d1891b6f18ee0b483b6f221b37bb";
export const VOTING_REPO_ADDRESS = "0x4ee3118e3858e8d7164a634825bfe0f73d99c792";
export const APP_REPO_ADDRESS = "0xf5dc67e54fc96f993cd06073f71ca732c1e654b1";
export const ORACLE_REPO_ADDRESS = "0xf9339de629973c60c4d2b76749c81e6f40960e3a";
export const NO_REPO_ADDRESS = "0x0d97e876ad14db2b183cfeeb8aa1a5c788eb1831";
export const INSURANCE_FUND_ADDRESS =
  "0x8b3f33234abd88493c0cd28de33d583b70bede35";
export const GATE_SEAL_FACTORY_ADDRESS =
  "0x6c82877cac5a7a739f16ca0a89c0a328b8764a24";
export const GATE_SEAL_DEFAULT_ADDRESS =
  "0x1ad5cb2955940f998081c1ef5f5f00875431aa90";

// EasyTrack
export const EASY_TRACK_ADDRESS = "0xf0211b7660680b49de1a7e9f25c65660f0a13fea";
export const EVM_SCRIPT_EXECUTOR_ADDRESS =
  "0xfe5986e06210ac1ecc1adcafc0cc7f8d63b3f977";
export const INCREASE_STAKING_LIMIT_ADDRESS =
  "0xfebd8fac16de88206d4b18764e826af38546afe0";
export const REWARD_PROGRAMS_REGISTRY_ADDRESS =
  "0xfcad241d9d2a2766979a2de208e8210edf7b7d4f";

// Other
export const DEPOSIT_EXECUTOR_ADDRESS =
  "0xf82ac5937a20dc862f9bc0668779031e06000f17";
export const TRP_FACTORY_ADDRESS = "0xda1df6442afd2ec36abea91029794b9b2156add0";
export const ENS_BASE_REGISTRAR_ADDRESS =
  "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85";
export const LDO_PURCHASE_EXECUTOR_ADDRESS =
  "0xa9b2f5ce3aae7374a62313473a74c98baa7fa70e";
export const CURVE_LIQUIDITY_FARMING_MANAGER_ADDRESS =
  "0x753d5167c31fbeb5b49624314d74a957eb271709";
export const ANCHOR_VAULT_ADDRESS =
  "0xa2f987a546d4cd1c607ee8141276876c26b72bdf";
export const DAI_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f";
export const USDT_ADDRESS = "0xdac17f958d2ee523a2206206994597c13d831ec7";
export const USDC_ADDRESS = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
export const EMERGENCY_BRAKES_MS_ADDRESS =
  "0x73b047fe6337183a454c5217241d780a932777bd";
export const DEV_MS_ADDRESS = "0x3cd9f71f80ab08ea5a7dca348b5e94bc595f26a0";

// COMMON CONSTS
export const BN_ZERO = new BigNumber(0);
export const RUN_TIER = process.env.FORTA_AGENT_RUN_TIER;

export const SECONDS_PER_SLOT = 12;
export const ONE_HOUR = 60 * 60;
export const ONE_DAY = 24 * ONE_HOUR;
export const ONE_WEEK = 7 * ONE_DAY;
export const ONE_MONTH = ONE_WEEK * 4;
export const ONE_YEAR = 365 * ONE_DAY;

// 1 ETH
export const ETH_DECIMALS = new BigNumber(10).pow(18);
// 32 ETH
export const MIN_DEPOSIT = ETH_DECIMALS.times(32);

export interface IProxyContractData {
  name: string;
  shortABI: string;
}

export interface MemberReport {
  refSlot: BigNumber;
  report: string;
  blockNumber: number;
}
