const Checkbox = () => {
  return (
    <div className="flex h-12 items-center">
      <input id="Tos" className="checkbox-custom" type="checkbox"></input>
      <label className="flex items-center" htmlFor="Tos">
        Tos
      </label>
    </div>
  );
};

export { Checkbox };

// px-3 py-2 bg-white border shadow-sm border-slate-200 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 contrast-more:border-slate-400 contrast-more:placeholder-slate-500
