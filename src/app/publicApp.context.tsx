import { User, UserInterface } from "@utilities/user";
import {
  ContextProviderProps,
  createContextProvider,
} from "@solid-primitives/context";
import { createUniqueId, mergeProps } from "solid-js";
import { createStore, SetStoreFunction } from "solid-js/store";

namespace PublicApp {
  export interface Props extends ContextProviderProps {
    context?: (props: [State, Api]) => void | Promise<void>;
    skipComputation?: boolean;
  }

  export interface State {
    applicationContextId: string;
    user: UserInterface | null;
  }

  export interface Api {
    set: SetStoreFunction<State>;
    registerUser: (newUser: UserInterface) => void;
  }
}

const contextFactory = (
  rawProps: PublicApp.Props
): [PublicApp.State, PublicApp.Api] => {
  const props = mergeProps(rawProps);

  const [state, set] = createStore<PublicApp.State>({
    applicationContextId: `App-Context-${createUniqueId()}`,
    user: User.findTarget(),
  });

  const registerUser = (newUser: UserInterface) => {
    if (!newUser) throw new Error("User data is required");

    User.createUser(newUser);
  };

  const Api: PublicApp.Api = {
    set,
    registerUser,
  };

  if (!props.skipComputation) {
  }

  if (props.context) {
    props.context([state, Api]);
  }

  return [state, Api];
};

export const [PublicAppContextProvider, usePublicAppContext] =
  createContextProvider(
    contextFactory,
    contextFactory({
      skipComputation: true,
    })
  );
