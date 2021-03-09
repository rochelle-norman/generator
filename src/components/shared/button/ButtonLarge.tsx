import * as React from "react";
import * as S from "./ButtonLarge.styles";

export interface Props {
  label: string;
  htmlFor?: string;
  className?: string;
  onClick?: () => void;
}

export const Button = ({ label, htmlFor, className, onClick }: Props) => {
  return (
    <S.Button className={className} onClick={onClick} to="/resources">
      <S.Label>{label}</S.Label>
    </S.Button>
  );
};
