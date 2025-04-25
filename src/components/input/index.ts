import Email from "./email/email";
import Password from "./password/password";
import Text from "./text/text";

const Input = Object.assign(Text, { Email, Password });

export default Input;
