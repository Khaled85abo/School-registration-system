import { Wrapper } from "./StyledComponents";
import sweden from "../assets/svg/sweden.svg";
import world from "../assets/svg/world.svg";
type AddressData = {
  country: string;
  municipality: string | undefined;
  local: boolean | null;
};
type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};
const AddressForm = ({
  municipality,
  country,
  local,
  updateFields,
}: AddressFormProps) => {
  if (local === true) {
    return (
      <Wrapper>
        <h2>Sweden</h2>
        <img src={sweden} alt="" height="400" />
      </Wrapper>
    );
  }

  if (local === false) {
    return (
      <Wrapper>
        <h2>World</h2>
        <img src={world} alt="" height="400" />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h2>Address Form</h2>
    </Wrapper>
  );
};

export default AddressForm;
