import { Component, ComponentProps } from "solid-js";
import StyledComponents from "./main.styled";
import { useApp } from "@app/app.context";
import { destructure } from "@solid-primitives/destructure";
import { useNavigate } from "@solidjs/router";
import { User } from "@utilities/user";
import Button from "@components/button/button";

interface MainProps extends ComponentProps<"div"> {}

const Main: Component<MainProps> = () => {
  const [app] = useApp();
  const navigate = useNavigate();

  const { name } = destructure(app.user);

  const handleStartGame = () => {
    // Aqui você pode colocar a lógica para começar o jogo
    console.log("Jogo iniciado!");
  };

  const handleLogout = () => {
    User.deleteUser();
    navigate("/auth/login", { replace: true });
  };

  return (
    <Page>
      <Wrapper>
        <Header>
          <Title>Blackjack Offlline</Title>
          <UserInfo>Bem vindo(a) {name()}</UserInfo>
        </Header>

        <Options>
          <Button handleClick={handleStartGame} variant="secondary">
            Começar Jogo
          </Button>
          <Button handleClick={handleLogout} variant="danger">
            Sair do Jogo
          </Button>
        </Options>

        <RulesCard>
          <RulesTitle>Regras Básicas</RulesTitle>
          <RulesWrapper>
            <Rule>O objetivo é somar 21 ou o mais próximo disso.</Rule>
            <Rule>Se passar de 21, você perde (estoura).</Rule>
            <Rule>Você pode pedir mais cartas ("Hit") ou parar ("Stand").</Rule>
          </RulesWrapper>
        </RulesCard>
      </Wrapper>
    </Page>
  );
};

export default Main;

const {
  PageComponents,
  HeaderComponents,
  PageContentComponents,
  RulesCardComponents,
} = StyledComponents;
const { Page, Wrapper } = PageComponents;
const { Header, Title, UserInfo } = HeaderComponents;
const { Options } = PageContentComponents;
const { RulesCard, RulesTitle, RulesWrapper, Rule } = RulesCardComponents;
