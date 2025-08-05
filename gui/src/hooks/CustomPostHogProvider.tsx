import { PropsWithChildren } from "react";

const CustomPostHogProvider = ({ children }: PropsWithChildren) => {
  // Telemetry disabled - simply render children
  return <>{children}</>;
};

export default CustomPostHogProvider;
