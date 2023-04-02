export type LayoutProps = {
  backgroundUrl: string;
  direction: 'row' | 'column';
  size: { width?: number; height?: number };
  children: React.ReactNode;
};
