import React from "react";
import posthog from "./posthog-js";

export const PostHogProvider = ({
  children,
}: {
  client?: any;
  children?: React.ReactNode;
}) => <>{children}</>;

export const usePostHog = () => posthog;
