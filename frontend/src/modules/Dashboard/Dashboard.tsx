import { CreateFormButton } from "@components/CreateFormButton";
import { Search } from "@components/input/Search";

const Dashboard = () => {
  return (
    <div>
      <div className="py-4">
        <p className="text-4xl font-semibold leading-relaxed text-gray-900">
          Your forms
        </p>
        <p className="text-md  leading-relaxed text-gray-500">
          manage the forms that you have created
        </p>
      </div>

      <hr></hr>
      <div className="flex justify-between">
        <Search></Search>
        <CreateFormButton />
      </div>

      <hr></hr>
      <div className="my-4 h-16 w-full rounded-md hover:bg-slate-100"></div>
      <div className="my-4 h-16 w-full rounded-md hover:bg-slate-100"></div>
      <div className="my-4 h-16 w-full rounded-md hover:bg-slate-100"></div>
      <div className="my-4 h-16 w-full rounded-md hover:bg-slate-100"></div>
    </div>
  );
};

export { Dashboard };
