export type TitleProps = {
  level?: number; // 1 to 6
  align?: 'left' | 'center' | 'right';
  lineGap?: number;
  lineColor?: string;
  children: string;
};
