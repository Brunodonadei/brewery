const typeColors: Record<string, string> = {
  micro: "#FF6B6B",
  nano: "#FFA94D",
  regional: "#FFD43B",
  brewpub: "#40C057",
  large: "#228BE6",
  planning: "#7950F2",
  bar: "#E64980",
  contract: "#ADB5BD",
  proprietor: "#15AABF",
  closed: "#F783AC",
};

export const mappedColors = (type: string) => typeColors[type];
