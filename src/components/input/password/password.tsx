import {
  Component,
  ComponentProps,
  JSX,
  mergeProps,
  Show,
  splitProps,
} from "solid-js";
import { InputInterface } from "../input.types";
import { createStore } from "solid-js/store";
import createDebounce from "@solid-primitives/debounce";
import { InputValidationStatus, validateInput } from "../input.utilities";
import Styled from "./password.styled";

interface PasswordProps extends ComponentProps<"input">, InputInterface.Props {}

const defaultProps: PasswordProps = {
  initialValue: null,
  validation: {
    status: InputValidationStatus.pristine,
  },
};

const Password: Component<PasswordProps> = (rawProps) => {
  const { isInvalid } = validateInput;
  const mergedProps = mergeProps(defaultProps, rawProps);
  const [props, othersProps] = splitProps(mergedProps, [
    "initialValue",
    "handleChange",
    "validation",
    "label",
    "context",
  ]);
  const [wrapperProps, inputProps] = splitProps(othersProps, [
    "class",
    "classList",
  ]);

  const [state, setState] = createStore<InputInterface.Context>({
    value: props.initialValue || null,
  });

  const handleChange = createDebounce(
    (e: string | null) => (props.handleChange || (() => {}))(e),
    5
  );

  const onInput: JSX.InputEventHandlerUnion<HTMLInputElement, InputEvent> = (
    e
  ) => {
    const value = e.currentTarget.value || null;
    setState("value", value);

    if (typeof inputProps.onInput === "function") {
      inputProps.onInput(e);
      return;
    }

    handleChange(value);
  };

  const onPaste: JSX.EventHandlerUnion<
    HTMLInputElement,
    ClipboardEvent,
    JSX.EventHandler<HTMLInputElement, ClipboardEvent>
  > = (e) => {
    const value = e.currentTarget.value || null;
    setState("value", value);

    if (typeof inputProps.onPaste === "function") {
      inputProps.onPaste(e);
      return;
    }

    handleChange(value);
  };

  if (typeof props.context == "function") {
    props.context([state, setState]);
  }

  return (
    <Styled.Wrapper {...wrapperProps}>
      <Show when={props.label}>
        <Styled.Label>{props.label}</Styled.Label>
      </Show>

      <Styled.Text
        {...inputProps}
        value={state.value || ""}
        onInput={onInput}
        onPaste={onPaste}
        type="password"
      />

      <Show when={isInvalid(props.validation!.status)}>
        <Styled.InvalidText>
          {props.validation!.invalidText || "Campo requerido *"}
        </Styled.InvalidText>
      </Show>
    </Styled.Wrapper>
  );
};

export default Password;
