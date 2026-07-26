import { toast } from "sonner";
import type { PlatformPorts } from "./platform";

export const browserPlatform: PlatformPorts = {
  clipboard: {
    async write(text: string): Promise<void> {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        return;
      }
      const element = document.createElement("textarea");
      element.value = text;
      document.body.appendChild(element);
      element.select();
      document.execCommand("copy");
      document.body.removeChild(element);
    },
  },
  notify: {
    success(message: string): void {
      toast.success(message);
    },
    error(message: string): void {
      toast.error(message);
    },
  },
  confirm: {
    ask(message: string): boolean {
      return window.confirm(message);
    },
  },
  printer: {
    print(): void {
      window.print();
    },
  },
};
