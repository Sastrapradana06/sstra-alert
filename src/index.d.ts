declare module "sstra-alert" {
  import * as React from "react";

  export interface AlertProps {
    message: string;
    type: "success" | "info" | "error";
    background: string;
  }

  export const Alert: React.FC<AlertProps>;

  export interface UseHandleAlertReturn {
    status: boolean;
    data: { type: string; message: string };
    handleAlert: (type: string, message: string) => void;
  }

  export function useHandleAlert(): UseHandleAlertReturn;
}
