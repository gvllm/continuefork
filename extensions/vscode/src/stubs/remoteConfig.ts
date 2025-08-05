import { EXTENSION_NAME } from "core/control-plane/env";
import * as vscode from "vscode";

export class RemoteConfigSync {
  private userToken: string | null;
  private remoteConfigServerUrl: string | null;
  private remoteConfigSyncPeriod: number;

  private syncInterval: NodeJS.Timer | undefined = undefined;

  constructor(
    private triggerReloadConfig: () => void,
    userToken: string | null,
  ) {
    this.userToken = null;
    this.remoteConfigServerUrl = null;
    this.remoteConfigSyncPeriod = 0;
  }

  private loadVsCodeSettings() {
    const settings = vscode.workspace.getConfiguration(EXTENSION_NAME);
    const userToken = settings.get<string | null>("userToken", null);
    const remoteConfigServerUrl = settings.get<string | null>(
      "remoteConfigServerUrl",
      null,
    );
    const remoteConfigSyncPeriod = settings.get<number | null>(
      "remoteConfigSyncPeriod",
      null,
    );

    return { userToken, remoteConfigServerUrl, remoteConfigSyncPeriod };
  }

  async setup() {
    // Remote config syncing disabled in offline mode
    return;
  }

  private setInterval() {
    // no-op
  }

  async sync(userToken: string, remoteConfigServerUrl: string) {
    // no-op
    return;
  }
}
