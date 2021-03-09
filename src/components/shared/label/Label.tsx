import styled from "styled-components";

const StyledLabel = styled.span`
  color: ${({ theme }) => theme.colors.red};
  ${({ theme }) => theme.fonts.label};
  opacity: 0.6;
`;

export interface Props {
  label: string;
  className?: string;
}

export const Label = ({ label, className }: Props) => (
  <StyledLabel className={className}>{label}</StyledLabel>
);
