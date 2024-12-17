export default function getBase64(file: Blob): string | unknown {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => {
      console.log(`--- err in convert to base64 ----> `, error);
      reject(error);
    };
  });
}
