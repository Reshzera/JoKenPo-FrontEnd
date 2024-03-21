export const convertWheightToEther = (wheight: number) => {
  return wheight / 10 ** 18;
};

export const shortenAddress = (address: string, chars?: number) => {
  if (!chars) {
    chars = 4;
  }
  return `${address.slice(0, chars)}...${address.slice(-chars)}`;
};
