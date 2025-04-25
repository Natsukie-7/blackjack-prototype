import {
  Component,
  ComponentProps,
  createSignal,
  JSX,
  splitProps,
} from "solid-js";
import { DOMElement } from "solid-js/jsx-runtime";
import Styled from "./button.styled";

interface ButtonProps extends ComponentProps<"button"> {
  handleClick?: (
    e: MouseEvent & {
      currentTarget: HTMLButtonElement;
      target: DOMElement;
    }
  ) => void | Promise<void>;
  variant?: "primary" | "secondary" | "danger";
}

const Button: Component<ButtonProps> = (props) => {
  const [local, buttonProps] = splitProps(props, [
    "handleClick",
    "children",
    "disabled",
    "class",
    "variant",
  ]);

  const [loading, setLoading] = createSignal<boolean>(false);

  const buttonClass = () => `${local.class || ""} ${local.variant || ""}`;

  const onClick: JSX.EventHandler<HTMLButtonElement, MouseEvent> = async (
    e
  ) => {
    if (loading()) {
      return;
    }

    try {
      const result = local.handleClick?.(e);

      if (result instanceof Promise) {
        setLoading(true);
        await result;
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Styled.Button
      {...buttonProps}
      onClick={onClick}
      disabled={loading() || local.disabled}
      class={buttonClass()}
    >
      {local.children}
    </Styled.Button>
  );
};

export default Button;
