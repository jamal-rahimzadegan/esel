export default function uploader(name: string, file: string) {
  const formData = new FormData();
  formData.append('name', name);
  formData.append('file', file);

  // axios
  //   .post(UPLOAD_URL, formData)
  //   .then((res) => {
  //     notify('File Upload success');
  //   })
  //   .catch((err) => notify('File Upload Error'));
}
