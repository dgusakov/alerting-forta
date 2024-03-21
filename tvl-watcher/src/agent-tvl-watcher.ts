import BigNumber from "bignumber.js";

import {
  ethers,
  BlockEvent,
  Finding,
  FindingType,
  FindingSeverity,
} from "forta-agent";

import LIDO_ABI from "./abi/Lido.json";

import { ETH_DECIMALS, LIDO_ADDRESS, REPORT_STEP } from "./constants";

import { ethersProvider } from "./ethers";
import { abbreviateNumber } from "./helpers";

let lastReportedTVL: BigNumber;

export const name = "TVLWatcher";

export async function initialize(
  currentBlock: number,
): Promise<{ [key: string]: string }> {
  console.log(`[${name}]`);
  const tvl = await getTvl(currentBlock);
  lastReportedTVL = tvl.minus(tvl.mod(REPORT_STEP));
  return {
    lastReportedTVL: lastReportedTVL.toFixed(),
  };
}

export async function handleBlock(blockEvent: BlockEvent) {
  const findings: Finding[] = [];

  await handleTvlChange(blockEvent, findings);

  return findings;
}

async function handleTvlChange(blockEvent: BlockEvent, findings: Finding[]) {
  const tvl = await getTvl(blockEvent.blockNumber);
  const tvlRounded = tvl.minus(tvl.mod(REPORT_STEP));
  if (tvlRounded.gt(lastReportedTVL)) {
    lastReportedTVL = tvlRounded;
    findings.push(
      Finding.fromObject({
        name: "Lido TVL update",
        description: `New Lido TVL - ${abbreviateNumber(
          tvlRounded.toNumber(),
        )} ETH`,
        alertId: "LIDO-TVL-UPDATE",
        severity: FindingSeverity.Info,
        type: FindingType.Info,
      }),
    );
  }
}

async function getTvl(blockNumber: number): Promise<BigNumber> {
  const blockTag = { blockTag: blockNumber };
  const block = await ethersProvider.getBlock(blockNumber);
  const lido = new ethers.Contract(LIDO_ADDRESS, LIDO_ABI, ethersProvider);
  const tvl = new BigNumber(
    String(await lido.functions.getTotalPooledEther(blockTag)),
  );
  return tvl.div(ETH_DECIMALS);
}
