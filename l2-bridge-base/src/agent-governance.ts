import { Finding } from "forta-agent";
import { Log } from "@ethersproject/abstract-provider";

import { GOV_BRIDGE_EVENTS } from "./constants";
import { TransactionEventHelper } from "./entity/transactionEvent";

export const name = "GovBridgeBot";

export async function initialize(
  currentBlock: number,
): Promise<{ [key: string]: string }> {
  console.log(`[${name}]`);
  return {};
}

export async function handleTransaction(logs: Log[]) {
  const findings: Finding[] = [];

  handleGovBridgeEvents(logs, findings);

  return findings;
}

function handleGovBridgeEvents(logs: Log[], findings: Finding[]) {
  const addresses = logs.map((log) => log.address);

  GOV_BRIDGE_EVENTS.forEach((eventInfo) => {
    if (eventInfo.address in addresses) {
      const events = TransactionEventHelper.filterLog(
        logs,
        eventInfo.event,
        eventInfo.address,
      );
      events.forEach((event) => {
        findings.push(
          Finding.fromObject({
            name: eventInfo.name,
            description: eventInfo.description(event.args),
            alertId: eventInfo.alertId,
            severity: eventInfo.severity,
            type: eventInfo.type,
            metadata: { args: String(event.args) },
          }),
        );
      });
    }
  });
}
