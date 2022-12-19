import { Wrapper } from "./StyledComponents";
type AccountData = {
  email: string;
  password: string;
};

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};
const AccountForm = ({ email, password, updateFields }: AccountFormProps) => {
  return (
    <Wrapper>
      <h2>Account Creation</h2>
      <div className="form-wrapper">
        <label>Email</label>
        <input type="text" autoFocus required />
        <label>Password</label>
        <input type="text" required />
      </div>
    </Wrapper>
  );
};

export default AccountForm;
