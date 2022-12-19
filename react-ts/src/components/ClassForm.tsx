import styled from "styled-components";
import { Wrapper } from "./StyledComponents";
type ClassData = {
  classGrade: string;
  studentsCount: number;
  teachersCount: number;
  havePayedTour: boolean;
};
type ClassFormProps = ClassData & {
  updateFields: (fields: Partial<ClassData>) => void;
};

const ClassForm = ({
  studentsCount,
  teachersCount,
  havePayedTour,
  updateFields,
  classGrade,
}: ClassFormProps) => {
  return (
    <>
      <Wrapper>
        <h2>Class's Details</h2>
        <div className="form-wrapper">
          <label>Class Grade*</label>
          <input
            value={classGrade}
            onChange={(e) => {
              updateFields({ classGrade: e.target.value });
            }}
            type="text"
            autoFocus
            required
          />
          <label>How Many Students*</label>
          <input
            value={studentsCount}
            onChange={(e) => {
              updateFields({ studentsCount: +e.target.value });
            }}
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            required
          />
          <label>How Many Teachers*</label>
          <input
            required
            value={teachersCount}
            onChange={(e) => {
              updateFields({ teachersCount: +e.target.value });
            }}
            type="number"
          />
        </div>

        <CheckboxDiv>
          <label htmlFor="checkbox">
            Have a payed tour with a museum pedagog?
          </label>
          <input
            id="checkbox"
            checked={havePayedTour}
            onChange={(e) => {
              updateFields({ havePayedTour: e.target.checked });
            }}
            type="checkbox"
          />
        </CheckboxDiv>
      </Wrapper>
    </>
  );
};

export default ClassForm;

const CheckboxDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
  input {
    margin-left: 1rem;
  }
`;
