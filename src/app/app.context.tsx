import {
  ContextProvider,
  ContextProviderProps,
  createContextProvider,
} from "@solid-primitives/context";
import { createUniqueId, mergeProps } from "solid-js";
import { createStore, SetStoreFunction } from "solid-js/store";
import { User, UserInterface } from "@utilities/user";
import { useNavigate } from "@solidjs/router";

namespace App {
  export interface Props extends ContextProviderProps {
    context?: (props: [State, Api]) => void | Promise<void>;
    skipComputation?: boolean;
  }

  export interface FactoryProps extends Props {
    user: UserInterface;
    computadedFn?: {};
  }

  export interface State {
    applicationContextId: string;
    user: UserInterface;
  }

  export interface Api {
    set: SetStoreFunction<State>;
  }
}

const contextFactory = (rawProps: App.FactoryProps): [App.State, App.Api] => {
  const props = mergeProps(rawProps);

  const [state, set] = createStore<App.State>({
    applicationContextId: `App-Context-${createUniqueId()}`,
    user: props.user,
  });

  const Api: App.Api = {
    set,
  };

  if (props.context) {
    props.context([state, Api]);
  }

  return [state, Api];
};

const [AppContextProviderFactory, useAppHook] = createContextProvider(
  contextFactory,
  contextFactory({
    skipComputation: true,
    user: null as unknown as UserInterface,
  })
);

const AppContextProviderComponent: ContextProvider<App.Props> = (props) => {
  const user = User.findTarget();
  const navigate = useNavigate();

  if (!user) {
    navigate("/auth/login", { replace: true });
    return <></>;
  }

  return (
    <AppContextProviderFactory {...props} user={user}>
      {props.children}
    </AppContextProviderFactory>
  );
};

export const [AppContextProvider, useApp] = [
  AppContextProviderComponent,
  useAppHook,
];
