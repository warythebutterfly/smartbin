import { useMemo } from "react";
import { getClient } from "~/sanity/lib";
import { LiveQueryProvider } from "@sanity/preview-kit";

export function PreviewProvider({
  children,
  previewToken,
}: {
  children: React.ReactNode;
  previewToken: string;
}) {
  const client = useMemo(() => getClient(previewToken), [previewToken]);
  return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>;
}
