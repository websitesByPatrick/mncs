import React from "react";

import { ReactNode } from "react";

export const Form = ({ children }: { children: ReactNode }) => {
  return <form>{children}</form>;
};

export const FormSection = ({children}:{ children: ReactNode }) => {
  return <div>{children}</div>;
};

export const FormLabel = ({text}) => {
  return <div>Hello</div>;
};

export const FormInput = () => {
  return <div>World</div>;
};

export const FormButton = () => {
  return <div></div>;
};
export const FormTextArea = () => {
  return <div></div>;
};
