export default function reverseStr(str: string, reverseBy?: string): string {
  try {
    if (reverseBy) {
      let splitTxt = str.split(reverseBy);
      return !!str ? `${splitTxt[1]}-${splitTxt[0]}` : str;
    }
    return !!str ? str.split('').reverse().join('') : str;
  } catch (e) {
    console.error(e, ` <--- e in reverseStr ----`);
  }
}
