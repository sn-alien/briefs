const Input = () => {
  return (
    <>
      <label htmlFor="fullName">Full Name</label>
      <input
        id="fullName"
        className="block w-full rounded-md border-2 border-slate-300  px-3 py-2 focus:border-pink-400 focus:outline-none"
      ></input>
    </>
  );
};

export { Input };

// px-3 py-2 bg-white border shadow-sm border-slate-200 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 contrast-more:border-slate-400 contrast-more:placeholder-slate-500
