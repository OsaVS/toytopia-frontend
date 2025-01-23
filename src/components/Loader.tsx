import { PuffLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <PuffLoader size={75} color="rgb(56, 203, 137)"/>
    </div>
  );
};

export default Loader;