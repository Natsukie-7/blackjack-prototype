import { styled } from "solid-styled-components";

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

const Label = styled("label")`
  font-size: 1.15rem;
  font-weight: 600;
`;

const Input = styled("input")`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const InvalidText = styled("span")`
  font-size: 0.85rem;
  font-weight: 600;
  color: red;
`;

const Styled = {
  Wrapper,
  Label,
  Input,
  InvalidText,
};

export default Styled;
