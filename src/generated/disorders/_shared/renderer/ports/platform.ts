export interface ClipboardPort { write(text: string): Promise<void>; }
export interface NotifyPort    { success(message: string): void; error(message: string): void; }
export interface ConfirmPort   { ask(message: string): boolean; }
export interface PrintPort     { print(): void; }

export interface PlatformPorts {
  readonly clipboard: ClipboardPort;
  readonly notify: NotifyPort;
  readonly confirm: ConfirmPort;
  readonly printer: PrintPort;
}
