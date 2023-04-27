import React from "react";

export const InputWrap = ({ children }: { children: React.ReactNode }) => {
  return <div className="my-2">{children}</div>;
};
export const LabelWrap = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center justify-between">{children}</div>;
};

export const RequiredText = () => {
  return <p className="text-sm text-slate-500">Optional</p>;
};
