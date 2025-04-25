import { styled } from "solid-styled-components";

const Button = styled("button")`
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  font-weight: bold;
  cursor: pointer;

  background-color: var(--background-color);
  color: var(--color);

  &:hover {
    background-color: var(--hover-color);
  }

  &.primary {
    --background-color: #2563eb;
    --color: #ffffff;
    --hover-color: #1d4ed8;
  }

  &.secondary {
    --background-color: #16a34a;
    --color: #fff;
    --hover-color: #15803d;
  }

  &.danger {
    --background-color: #dc2626;
    --color: #ffffff;
    --hover-color: #b91c1c;
  }
`;

const Styled = {
  Button,
};

export default Styled;
