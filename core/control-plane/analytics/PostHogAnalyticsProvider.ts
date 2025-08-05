import { Analytics } from "@continuedev/config-types";

import {
  ControlPlaneProxyInfo,
  IAnalyticsProvider,
} from "./IAnalyticsProvider.js";

export default class PostHogAnalyticsProvider implements IAnalyticsProvider {
  // No-op analytics provider for offline build
  async capture(
    event: string,
    properties: { [key: string]: any },
  ): Promise<void> {
    return;
  }

  async setup(
    config: Analytics,
    uniqueId: string,
    controlPlaneProxyInfo?: ControlPlaneProxyInfo,
  ): Promise<void> {
    return;
  }

  async shutdown(): Promise<void> {
    return;
  }
}
