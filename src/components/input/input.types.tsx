import { SetStoreFunction } from "solid-js/store";
import { InputValidationStatus } from "./input.utilities";

export namespace InputInterface {
  export interface Props {
    handleChange?: (value: string | null) => void;
    initialValue?: string | null;
    validation?: Validation;
    label?: string;
    context?: ([getter, setter]: [Context, SetStoreFunction<Context>]) => void;
  }

  export interface Context {
    value: string | null;
  }

  interface Validation {
    status: InputValidationStatusType;
    invalidText?: string;
  }
}

export type InputValidationStatusType = keyof typeof InputValidationStatus;
