import { useState } from "react";
import EditIcon from "../assets/CommonIcons/EditIcon";
import { Address } from "../types/address";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDeleteAddressMutation } from "../features/address/addressApi";
import DeleteConfirmModal from "./DeleteConfirmModal";
import { successMessage } from "../helpers/ToastHelper";

interface AddressBoxProps {
  address: Address;
  onEdit: () => void;
  refetch: () => void;
}

const AddressBox = ({ address, onEdit, refetch }: AddressBoxProps) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteAddress] = useDeleteAddressMutation();

  const handleDelete = async () => {
    await deleteAddress(address._id);
    successMessage("Address deleted successfully");
    refetch();
    setIsDeleteModalOpen(false);
  };
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
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={onEdit}
        >
          <EditIcon />
          <p className="text-sm">Edit</p>
        </div>
        <div
          className="absolute right-2 bottom-2 cursor-pointer"
          onClick={() => setIsDeleteModalOpen(true)}
        >
          <DeleteIcon
            sx={{ fontSize: 18, color: "grey", "&:hover": { color: "red" } }}
          />
        </div>
      </div>
      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        title="Delete Address"
        message="Are you sure you want to delete this address? This action cannot be undone."
      />
    </>
  );
};

export default AddressBox;
