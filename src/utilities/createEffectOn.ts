import { createEffect, on, OnOptions } from "solid-js";

export const createEffectOn = <T>(
  condition: () => T,
  sideEffect: (value: T) => void,
  options?:
    | OnOptions
    | {
        defer: true;
      }
): void =>
  createEffect(
    options ? on(condition, sideEffect, options) : on(condition, sideEffect)
  );
