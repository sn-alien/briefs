const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="rounded-md bg-pink-400 p-2 text-white ">
      <span className="font-semibold">{children}</span>
    </button>
  );
};

export { Button };
