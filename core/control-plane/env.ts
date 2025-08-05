import { IdeSettings } from "..";
import { AuthType, ControlPlaneEnv } from "./AuthTypes";

export const EXTENSION_NAME = "continue";

const DISABLED_ENV: ControlPlaneEnv = {
  DEFAULT_CONTROL_PLANE_PROXY_URL: "",
  CONTROL_PLANE_URL: "",
  AUTH_TYPE: AuthType.OnPrem,
  APP_URL: "",
};

export async function enableHubContinueDev() {
  return false;
}

export async function getControlPlaneEnv(
  ideSettingsPromise: Promise<IdeSettings>,
): Promise<ControlPlaneEnv> {
  await ideSettingsPromise;
  return DISABLED_ENV;
}

export function getControlPlaneEnvSync(
  ideTestEnvironment: IdeSettings["continueTestEnvironment"],
): ControlPlaneEnv {
  return DISABLED_ENV;
}

export async function useHub(
  ideSettingsPromise: Promise<IdeSettings>,
): Promise<boolean> {
  await ideSettingsPromise;
  return false;
}
