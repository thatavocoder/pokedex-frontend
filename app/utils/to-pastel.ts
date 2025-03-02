export const toPastel = (color: string): string => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (context) {
    context.fillStyle = color;
    const hex = context.fillStyle;

    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    const pastelFactor = 0.5;
    const mixWithWhite = (c: number) => Math.floor(c + (255 - c) * pastelFactor);

    return `rgb(${mixWithWhite(r)}, ${mixWithWhite(g)}, ${mixWithWhite(b)})`;
  }
  return color;
};
