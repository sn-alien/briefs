interface Props {
  children: React.ReactNode;
  orientation?: "horizontal" | "vertical";
}
const Fieldset = ({ children, orientation = "vertical" }: Props) => {
  return (
    <fieldset
      className={`flex flex-wrap ${
        orientation === "horizontal" ? "flex-row" : "flex-col"
      }`}
    >
      {children}
    </fieldset>
  );
};
export { Fieldset };
