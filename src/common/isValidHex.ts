const isValidHex = (hexString: string | undefined): boolean => {
  return (
    !!hexString &&
    /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(hexString)
  );
};

export default isValidHex;
