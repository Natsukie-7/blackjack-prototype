import { styled } from "solid-styled-components";

const Wrapper = styled("div")`
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #f4f4f4;
   height: 100vh;
`;

const Form = styled("form")`
   background: white;
   padding: 2rem;
   border-radius: 8px;
   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
   display: flex;
   flex-direction: column;
   gap: 1rem;
   width: 300px;
`;

const Title = styled("h2")`
   text-align: center;
   margin-bottom: 1rem;
`;

const Input = styled("input")`
   padding: 0.8rem;
   border: 1px solid #ccc;
   border-radius: 4px;
   font-size: 1rem;
`;

const Button = styled("button")`
   padding: 0.8rem;
   background-color: #007bff;
   color: white;
   border: none;
   border-radius: 4px;
   cursor: pointer;
   font-size: 1rem;

   &:hover {
      background-color: #0056b3;
   }
`;

const Styled = {
   Wrapper,
   Form,
   Title,
   Input,
   Button,
};

export default Styled;
