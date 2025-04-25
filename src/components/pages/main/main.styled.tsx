import { styled } from "solid-styled-components";

const Page = styled("div")`
  height: 100vh;
  width: 100vw;
`;

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;

  padding: 2rem;

  height: 100%;
  width: 100%;
  box-sizing: border-box;
`;

const PageComponents = {
  Page,
  Wrapper,
};

const Header = styled("header")`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled("h1")`
  margin: 0;
`;

const UserInfo = styled("p")`
  margin: 0;
`;

const HeaderComponents = {
  Header,
  Title,
  UserInfo,
};

const Options = styled("main")`
  flex: 1;
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RulesCard = styled("footer")`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  align-self: center;
`;

const RulesTitle = styled("h2")``;

const RulesWrapper = styled("ul")``;

const Rule = styled("li")``;

const RulesCardComponents = {
  RulesCard,
  RulesWrapper,
  RulesTitle,
  Rule,
};

const PageContentComponents = {
  Options,
};

const StyledComponents = {
  PageComponents,
  HeaderComponents,
  PageContentComponents,
  RulesCardComponents,
};

export default StyledComponents;
