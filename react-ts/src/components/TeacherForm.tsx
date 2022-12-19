import styled from "styled-components";
import { Wrapper } from "./StyledComponents";
type UserData = {
  firstName: string;
  lastName: string;
  phone: string | undefined;
  email: string | undefined;
};
type TeacherFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const TeacherForm = ({
  firstName,
  lastName,
  phone,
  email,
  updateFields,
}: TeacherFormProps) => {
  return (
    <Wrapper>
      <h2>Teacher's Details</h2>
      <div className="form-wrapper">
        <label>First Name*</label>
        <input
          value={firstName}
          onChange={(e) => {
            updateFields({ firstName: e.target.value });
          }}
          type="text"
          autoFocus
          required
        />
        <label>Last Name*</label>
        <input
          value={lastName}
          onChange={(e) => {
            updateFields({ lastName: e.target.value });
          }}
          type="text"
          required
        />
        <label>Phone*</label>
        <input
          required
          value={phone}
          onChange={(e) => {
            updateFields({ phone: e.target.value });
          }}
          type="number"
        />
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => {
            updateFields({ email: e.target.value });
          }}
          type="email"
        />
      </div>
    </Wrapper>
  );
};

export default TeacherForm;
