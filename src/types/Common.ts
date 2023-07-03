export interface MuiOptions {
  label: string;
  value: any;
}

export type HttpRequestMethod =
  | "GET"
  | "HEAD"
  | "POST"
  | "PUT"
  | "DELETE"
  | "CONNECT"
  | "OPTIONS"
  | "TRACE";

export interface PaginatedResponse<T> {
  page_number: number;
  data: T[];
  total_records: number;
  has_more_data: boolean;
  page_size: number;
}

export type MuiChipColor =
  | "success"
  | "default"
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "warning";

export type MuiButtonColor =
  | "success"
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "warning"
  | "inherit";

export type MuiChipVariant = "filled" | "outlined";

export type MuiButtonVariant = "text" | "contained" | "outlined";
