import { getFromLocalStorage, setInLocalStorage } from "./localStorage";

export interface UserInterface {
  name: string;
  email: string;
}

export class User {
  static createUser(params: UserInterface) {
    if (!params) throw new Error("UserData is required");

    setInLocalStorage("user", params);
  }

  static findTarget() {
    return getFromLocalStorage<UserInterface>("user");
  }

  static deleteUser() {
    localStorage.removeItem("user");
  }
}
