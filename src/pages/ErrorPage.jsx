import { useNavigate } from "react-router";
import Icon from "../ui/Icon";
import { FaArrowLeftLong } from "react-icons/fa6";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col items-center gap-1 rounded-lg bg-stone-300 px-20 py-8 text-stone-700 shadow-lg">
        <h2 className="text-2xl font-bold">Error</h2>
        <p className="text-lg font-medium">
          An error occured! Please try again later.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 flex items-center gap-3 rounded-lg bg-stone-200 px-6 py-2 duration-200 hover:bg-stone-500 hover:text-stone-50"
        >
          <Icon icon={<FaArrowLeftLong />} /> <span>Go back</span>
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
