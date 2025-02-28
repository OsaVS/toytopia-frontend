import EditIcon from "../assets/CommonIcons/EditIcon";
import { Address } from "../types/address";
import DeleteIcon from "@mui/icons-material/Delete";

interface AddressBoxProps {
  address: Address;
}

const AddressBox = ({ address }: AddressBoxProps) => {
  return (
    <>
      <div className="border-2 border-gray-400 rounded-md p-4 flex items-start justify-between relative">
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
        <div className="flex items-center gap-1 cursor-pointer">
          <EditIcon />
          <p className="text-sm">Edit</p>
        </div>
        <div className="absolute right-2 bottom-2 cursor-pointer">
          <DeleteIcon
            sx={{ fontSize: 18, color: "grey", "&:hover": { color: "red" } }}
          />
        </div>
      </div>
    </>
  );
};

export default AddressBox;
