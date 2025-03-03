import { Address } from "../types/address";

interface AddressBoxProps {
  address: Address;
}

const SelectAddressBox = ({ address }: AddressBoxProps) => {
  return (
    <>
      <div>
        <p>{address.label}</p>
        <p>
          {address.firstName} {address.lastName}
        </p>
        <p>+{address.phone}</p>
        <p>
          {address.streetAddress}, {address.city}, {address.country}
        </p>
      </div>
    </>
  );
};

export default SelectAddressBox;
