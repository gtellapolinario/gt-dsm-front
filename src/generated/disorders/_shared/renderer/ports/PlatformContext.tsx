import { createContext, useContext, type ReactNode } from "react";
import type { PlatformPorts } from "./platform";
import { browserPlatform } from "./browserPlatform";

const PlatformContext = createContext<PlatformPorts>(browserPlatform);

export function PlatformProvider({
  ports,
  children,
}: {
  readonly ports: PlatformPorts;
  readonly children: ReactNode;
}) {
  return (
    <PlatformContext.Provider value={ports}>
      {children}
    </PlatformContext.Provider>
  );
}

export function usePlatform(): PlatformPorts {
  return useContext(PlatformContext);
}
