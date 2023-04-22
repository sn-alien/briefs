interface Props {
  children: React.ReactNode;
}

const PageContainer = ({ children }: Props): JSX.Element => {
  return (
    <div className="mx-auto -mt-14 min-h-full  w-full px-4  pb-2 pt-16">
      {children}
    </div>
  );
};

export { PageContainer };
