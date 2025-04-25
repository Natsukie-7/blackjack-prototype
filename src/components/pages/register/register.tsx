import { Component, ParentProps } from "solid-js";
import Styled from "./register.styled";
import Input from "@components/input";
import { createStore } from "solid-js/store";
import { InputValidationStatusType } from "@components/input/input.types";
import { InputValidationStatus } from "@components/input/input.utilities";
import { usePublicAppContext } from "@app/publicApp.context";
import { UserInterface } from "@utilities/user";
import { useNavigate } from "@solidjs/router";

namespace NRegister {
  export interface Props extends ParentProps {}

  export interface FormDataInterface {
    name: string | null;
    email: string | null;
  }

  export type FormDataValidation = Record<
    keyof FormDataInterface,
    InputValidationStatusType
  >;
}

const Register: Component<NRegister.Props> = () => {
  const [publicAppState, { registerUser }] = usePublicAppContext();
  const navigate = useNavigate();

  const [formData, setFormData] = createStore<NRegister.FormDataInterface>({
    name: null,
    email: null,
  });
  const [validation, setValidation] = createStore<NRegister.FormDataValidation>(
    {
      name: InputValidationStatus.pristine,
      email: InputValidationStatus.pristine,
    }
  );

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    const validateForm = (): boolean => {
      const entries = Object.entries(formData) as Array<
        [keyof NRegister.FormDataInterface, string | null]
      >;

      let isValid = true;

      entries.forEach(([key, value]) => {
        if (!value?.trim()) {
          setValidation(key, InputValidationStatus.invalid);
          isValid = false;
        }
      });

      return isValid;
    };

    if (!validateForm()) return;

    const newUser: UserInterface = {
      name: formData.name!,
      email: formData.email!,
    };

    registerUser(newUser);
    navigate("/");
  };

  return (
    <Styled.Wrapper>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.Title>Login</Styled.Title>

        <Input
          placeholder="Nome:"
          label="Nome"
          handleChange={(name) => {
            if (name) {
              setValidation("name", InputValidationStatus.pristine);
            }

            setFormData("name", name);
          }}
          validation={{ status: validation.name }}
          initialValue={publicAppState.user?.name}
          disabled={!!publicAppState.user?.name}
        />

        <Input.Email
          placeholder="Email"
          label="Email"
          handleChange={(email) => {
            if (email) {
              setValidation("email", InputValidationStatus.pristine);
            }

            setFormData("email", email);
          }}
          validation={{ status: validation.email }}
          initialValue={publicAppState.user?.email}
          disabled={!!publicAppState.user?.email}
        />

        <Styled.Button type="submit">Login</Styled.Button>
      </Styled.Form>
    </Styled.Wrapper>
  );
};

export default Register;
