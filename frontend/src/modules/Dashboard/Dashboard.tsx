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
        <button className="my-4 rounded-md bg-pink-400 px-4 font-semibold text-white">
          + Create form
        </button>
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
