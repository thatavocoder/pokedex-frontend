import { useRouter } from 'next/navigation';
import { BiArrowBack } from 'react-icons/bi';

export const BackButton = () => {
  const router = useRouter();
  return (
    <button
      className="absolute top-0 left-0 m-4 text-gray-700 px-4 py-2 rounded-md cursor-pointer"
      onClick={() => router.back()}
    >
      <BiArrowBack className="w-6 h-6" />
    </button>
  );
};
