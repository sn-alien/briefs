import React from "react";

export function InputWrap({ children }: { children: React.ReactNode }) {
  return <div className="my-2">{children}</div>;
}
export function LabelWrap({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center justify-between">{children}</div>;
}

export function RequiredText() {
  return <p className="text-sm text-slate-500">Optional</p>;
}

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}
export function Label(props: LabelProps) {
  return (
    <label className="flex" {...props}>
      {props.children}
    </label>
  );
}
export function CheckboxWrap({ children }: { children: React.ReactNode }) {
  return <div className="flex h-12 items-center">{children}</div>;
}
