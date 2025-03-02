import { useState } from "react";
import AddressBox from "./AddressBox";
import Loader from "./Loader";
import Button from "./Button";
import AddressModal from "./AddressModal";
import {
  useAddAddressMutation,
  useGetAddressesQuery,
  useUpdateAddressMutation,
} from "../features/address/addressApi";

export const Address = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedAddress, setSelectedAddress] = useState<any>(null);

  const [addAddress, { isLoading: adding }] = useAddAddressMutation();
  const [updateAddress, { isLoading: updating }] = useUpdateAddressMutation();
  const {
    data: addresses,
    isLoading: addressLoading,
    refetch,
  } = useGetAddressesQuery(undefined);

  const handleAdd = async (formData: any) => {
    await addAddress(formData).unwrap();
    refetch();
  };

  const handleUpdate = async (formData: any) => {
    if (!selectedAddress) return;
    await updateAddress({ id: selectedAddress._id, formData }).unwrap();
    refetch();
  };

  const openAddModal = () => {
    setSelectedAddress(null);
    setShowModal(true);
  };

  const openEditModal = (address: any) => {
    setSelectedAddress(address);
    setShowModal(true);
  };

  if (adding || updating || addressLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-5 mb-3">
        {addresses?.map((address: any) => (
          <AddressBox
            key={address._id}
            address={address}
            onEdit={() => openEditModal(address)}
            refetch={refetch}
          />
        ))}
      </div>
      <Button type="button" label="Add New +" onClick={openAddModal} />

      <AddressModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={selectedAddress ? handleUpdate : handleAdd}
        title={selectedAddress ? "Edit Address" : "Add a New Address"}
        initialData={selectedAddress}
        type={selectedAddress ? "update" : "add"}
        buttonLabel={selectedAddress ? "Update Address" : "Save Address"}
      />
    </>
  );
};
