import React from "react";

export function InputWrap({ children }: { children: React.ReactNode }) {
  return <div className="my-4">{children}</div>;
}
export function LabelWrap({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center justify-between">{children}</div>;
}

export function RequiredText() {
  return <p className="text-xs text-slate-500">Optional</p>;
}

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  className?: string;
}
export function Label(props: LabelProps) {
  return (
    <label
      {...props}
      className={`mr-2 flex text-sm font-medium text-gray-900 peer-disabled:text-slate-400 ${props.className}`}
    >
      {props.children}
    </label>
  );
}

export function ControlInputWrap({ children }: { children: React.ReactNode }) {
  return <div className="my-3 flex items-center">{children}</div>;
}
export function ErrorMessageWrap({ children }: { children: any }) {
  return (
    <div className="h-1">
      <p className="text-xs">{children}</p>
    </div>
  );
}
