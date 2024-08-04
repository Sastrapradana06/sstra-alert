declare module "sstra-alert" {
  import * as React from "react";

  export interface AlertProps {
    status: boolean;
    message: string;
    type: "success" | "info" | "error";
    background: string;
  }

  export const Alert: React.FC<AlertProps>;

  export interface UseHandleAlertReturn {
    status: boolean;
    data: { type: "success" | "info" | "error"; message: string };
    handleAlert: (type: "success" | "info" | "error", message: string) => void;
  }

  export function useHandleAlert(): UseHandleAlertReturn;
}
