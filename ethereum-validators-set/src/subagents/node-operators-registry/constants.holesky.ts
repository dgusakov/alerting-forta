import {
  EASY_TRACK_ADDRESS as etAddress,
  CURATED_NODE_OPERATORS_REGISTRY_ADDRESS as curatedNorAddress,
  SIMPLEDVT_NODE_OPERATORS_REGISTRY_ADDRESS as simpleDvtNorAddress,
  SPLIT_WALLET_FACTORY_OBOL_CLUSTER_ADDRESS as splitWalletFactoryObolClusterAddress,
  SPLIT_WALLET_FACTORY_SSV_CLUSTER_ADDRESS as splitWalletFactorySsvClusterAddress,
  STAKING_ROUTER_ADDRESS as srAddress,
} from "../../common/constants.holesky";

export const EASY_TRACK_ADDRESS = etAddress;
export const CURATED_NODE_OPERATORS_REGISTRY_ADDRESS = curatedNorAddress;
export const SIMPLEDVT_NODE_OPERATORS_REGISTRY_ADDRESS = simpleDvtNorAddress;
export const SPLIT_WALLET_FACTORY_OBOL_CLUSTER_ADDRESS =
  splitWalletFactoryObolClusterAddress;
export const SPLIT_WALLET_FACTORY_SSV_CLUSTER_ADDRESS =
  splitWalletFactorySsvClusterAddress;
export const STAKING_ROUTER_ADDRESS = srAddress;

export const NODE_OPERATOR_NEW_STUCK_KEYS_THRESHOLD = 1;
export const NODE_OPERATOR_BIG_EXITED_COUNT_THRESHOLD = 5;

export const CURATED_NODE_OPERATOR_REGISTRY_MODULE_ID = 1;
export const SIMPLEDVT_NODE_OPERATOR_REGISTRY_MODULE_ID = 2;

export const STAKING_MODULES = [
  {
    moduleId: CURATED_NODE_OPERATOR_REGISTRY_MODULE_ID,
    moduleAddress: CURATED_NODE_OPERATORS_REGISTRY_ADDRESS,
    moduleName: "Curated",
    alertPrefix: "",
  },
  {
    moduleId: SIMPLEDVT_NODE_OPERATOR_REGISTRY_MODULE_ID,
    moduleAddress: SIMPLEDVT_NODE_OPERATORS_REGISTRY_ADDRESS,
    moduleName: "SimpleDVT",
    alertPrefix: "SDVT-",
  },
];

export const OBOL_LIDO_SPLIT_FACTORY_CLUSTERS = [
  {
    clusterName: "OBOL",
    factoryAddress: SPLIT_WALLET_FACTORY_OBOL_CLUSTER_ADDRESS,
  },
  {
    clusterName: "SSV",
    factoryAddress: SPLIT_WALLET_FACTORY_SSV_CLUSTER_ADDRESS,
  },
];
