import { InputValidationStatusType } from "./input.types";

export const InputValidationStatus = {
  pristine: "pristine",
  valid: "valid",
  invalid: "invalid",
} as const;

export const validateInput = {
  isInvalid: (status: InputValidationStatusType) =>
    status === InputValidationStatus.invalid,
  isValid: (status: InputValidationStatusType) =>
    status === InputValidationStatus.valid,
  isPristine: (status: InputValidationStatusType) =>
    status === InputValidationStatus.pristine,
};
