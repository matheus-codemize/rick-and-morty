export type TextProps = {
  color?: string;
  weight?: string;
  noBreakLine?: boolean;
  size?: 'md' | 'sm' | string;
  align?: 'left' | 'center' | 'right';
  children: string;
};
