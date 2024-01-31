import { EventOfNotice } from '../../entity/events'
import { FindingSeverity, FindingType } from 'forta-agent'
import { Result } from '@ethersproject/abi/lib'
import { GOV_BRIDGE_ADDRESS } from '../constants'

export const GOV_BRIDGE_EVENTS: EventOfNotice[] = [
  {
    address: GOV_BRIDGE_ADDRESS,
    event:
      'event EthereumGovernanceExecutorUpdate(address oldEthereumGovernanceExecutor, address newEthereumGovernanceExecutor)',
    alertId: 'GOV-BRIDGE-EXEC-UPDATED',
    name: '🚨 Mantle Gov Bridge: Ethereum Governance Executor Updated',
    description: (args: Result) =>
      `Ethereum Governance Executor was updated from ` +
      `${args.oldEthereumGovernanceExecutor} to ${args.newEthereumGovernanceExecutor}`,
    severity: FindingSeverity.Critical,
    type: FindingType.Info,
  },
  {
    address: GOV_BRIDGE_ADDRESS,
    event: 'event GuardianUpdate(address oldGuardian, address newGuardian)',
    alertId: 'GOV-BRIDGE-GUARDIAN-UPDATED',
    name: '🚨 Mantle Gov Bridge: Guardian Updated',
    description: (args: Result) => `Guardian was updated from ` + `${args.oldGuardian} to ${args.newGuardian}`,
    severity: FindingSeverity.Critical,
    type: FindingType.Info,
  },
  {
    address: GOV_BRIDGE_ADDRESS,
    event: 'event DelayUpdate(uint256 oldDelay, uint256 newDelay)',
    alertId: 'GOV-BRIDGE-DELAY-UPDATED',
    name: '⚠️ Mantle Gov Bridge: Delay Updated',
    description: (args: Result) => `Delay was updated from ` + `${args.oldDelay} to ${args.newDelay}`,
    severity: FindingSeverity.High,
    type: FindingType.Info,
  },
  {
    address: GOV_BRIDGE_ADDRESS,
    event: 'event GracePeriodUpdate(uint256 oldGracePeriod, uint256 newGracePeriod)',
    alertId: 'GOV-BRIDGE-GRACE-PERIOD-UPDATED',
    name: '⚠️ Mantle Gov Bridge: Grace Period Updated',
    description: (args: Result) =>
      `Grace Period was updated from ` + `${args.oldGracePeriod} to ${args.newGracePeriod}`,
    severity: FindingSeverity.High,
    type: FindingType.Info,
  },
  {
    address: GOV_BRIDGE_ADDRESS,
    event: 'event MinimumDelayUpdate(uint256 oldMinimumDelay, uint256 newMinimumDelay)',
    alertId: 'GOV-BRIDGE-MIN-DELAY-UPDATED',
    name: '⚠️ Mantle Gov Bridge: Min Delay Updated',
    description: (args: Result) => `Min Delay was updated from ` + `${args.oldMinimumDelay} to ${args.newMinimumDelay}`,
    severity: FindingSeverity.High,
    type: FindingType.Info,
  },
  {
    address: GOV_BRIDGE_ADDRESS,
    event: 'event MaximumDelayUpdate(uint256 oldMaximumDelay, uint256 newMaximumDelay)',
    alertId: 'GOV-BRIDGE-MAX-DELAY-UPDATED',
    name: '⚠️ Mantle Gov Bridge: Max Delay Updated',
    description: (args: Result) => `Max Delay was updated from ` + `${args.oldMaximumDelay} to ${args.newMaximumDelay}`,
    severity: FindingSeverity.High,
    type: FindingType.Info,
  },
  {
    address: GOV_BRIDGE_ADDRESS,
    event:
      'event ActionsSetQueued(uint256 indexed id, address[] targets, uint256[] values, string[] signatures, bytes[] calldatas, bool[] withDelegatecalls, uint256 executionTime)',
    alertId: 'GOV-BRIDGE-ACTION-SET-QUEUED',
    name: 'ℹ Mantle Gov Bridge: Action set queued',
    description: (args: Result) => `Action set ${args.id} was queued`,
    severity: FindingSeverity.Info,
    type: FindingType.Info,
  },
  {
    address: GOV_BRIDGE_ADDRESS,
    event: 'event ActionsSetExecuted(uint256 indexed id, address indexed initiatorExecution, bytes[] returnedData)',
    alertId: 'GOV-BRIDGE-ACTION-SET-EXECUTED',
    name: 'ℹ Mantle Gov Bridge: Action set executed',
    description: (args: Result) => `Action set ${args.id} was executed`,
    severity: FindingSeverity.Info,
    type: FindingType.Info,
  },
  {
    address: GOV_BRIDGE_ADDRESS,
    event: 'event ActionsSetCanceled(uint256 indexed id)',
    alertId: 'GOV-BRIDGE-ACTION-SET-CANCELED',
    name: 'ℹ Mantle Gov Bridge: Action set canceled',
    description: (args: Result) => `Action set ${args.id} was canceled`,
    severity: FindingSeverity.Info,
    type: FindingType.Info,
  },
]