type InputOption = {
  label: string;
  value: string;
};

export type FloatingInputProps = {
  label: string;
  value: string;
  startFullHeight?: boolean;
  options?: Array<InputOption>;
  onChange: (value: string) => void;
};
