interface Props {
  children: React.ReactNode;
}

const ContentWrap = ({ children }: Props): JSX.Element => {
  return <div className="mx-auto block max-w-md">{children}</div>;
};

export { ContentWrap };
