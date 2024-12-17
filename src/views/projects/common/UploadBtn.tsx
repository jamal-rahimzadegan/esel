import React from 'react';
import { FileSelectBtn, Image, Txt } from 'components';
import { ICON_PATH } from 'constant';

interface NewProjectProps {
  doAfterUpload: Function;
  title: string;
}

export default function UploadBtn(props: NewProjectProps) {
  const { title, doAfterUpload } = props;

  const LABEL = () => {
    return (
      <div className="pointer d-flex align-items-center justify-content-end mt-2">
        <Txt className="ml-1" size="xs">
          {title}
        </Txt>
        <Image width="" height="15px" src={ICON_PATH + 'upload.svg'} alt="upload" objectFit="cover" />
      </div>
    );
  };

  return <FileSelectBtn multiple={true} component={<LABEL />} />;
}
