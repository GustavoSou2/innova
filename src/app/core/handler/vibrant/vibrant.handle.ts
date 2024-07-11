import Vibrant from 'node-vibrant';

function getDominantColor(imageSrc: string) {
  return Vibrant.from(imageSrc).getPalette((err: any, palette: any) => {
    if (err) throw err;

    return palette.Vibrant?.rgb;
  });
}

function getComplementaryColor([r, g, b]: [number, number, number]): [number, number, number] {
  return [255 - r, 255 - g, 255 - b];
}

export { getDominantColor, getComplementaryColor };
