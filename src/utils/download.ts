import { isSSR } from 'constant';

export default function download(url: string, fileName: string) {
  if (!isSSR) {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement('a');
        link.target = '_blank';
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
        document.body.removeChild(link);
      })
      .catch(console.error);
  }
}
