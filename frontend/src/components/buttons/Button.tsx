interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  onClick?: () => void;
}
const Button = ({ children, onClick }: Props) => {
  return (
    <button className="rounded-md bg-pink-400 p-2 text-white" type="submit">
      <span className="font-semibold">{children}</span>
    </button>
  );
};

export { Button };
