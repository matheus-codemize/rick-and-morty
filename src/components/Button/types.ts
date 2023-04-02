export type ButtonProps = {
  icon?: string;
  color?: string;
  block?: boolean;
  shape?: 'square' | 'rounded' | 'circle';
  variant?: 'contained' | 'outline' | 'link';
  children?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
