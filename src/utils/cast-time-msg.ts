type PayloadType = [time: number, unit: Intl.RelativeTimeFormatUnit, options?: Intl.RelativeTimeFormatOptions];

export default function castTimeMsg(...payload: PayloadType) {
  const [time = 0, unit, options = {}] = payload;
  return new Intl.RelativeTimeFormat('fa', options).format(time, unit);
}
