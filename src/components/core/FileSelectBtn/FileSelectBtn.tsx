import React, { ReactNode, useRef } from 'react';

enum SELECT_TYPE {
  pick = 'pick', // pick from internal storage
  capture = 'capture', // capture photo by camera
}

enum ACCEPTED_FILE_TYPES {
  doc = '.doc',
  docx = '.docx',
  pdf = '.pdf',
  img = '.img',
}

interface Props {
  onSelect?: Function;
  component: ReactNode | string;
  type?: keyof typeof SELECT_TYPE;
  multiple?: boolean;
  acceptedTypes?: keyof typeof ACCEPTED_FILE_TYPES;
}

export default function FileSelectBtn(props: Props): JSX.Element {
  const { component, type, multiple, onSelect, acceptedTypes } = props;
  const fileInput = useRef<any>(null);

  return (
    <>
      <input
        className="d-none"
        type="file"
        ref={fileInput}
        capture={type === 'capture' ? 'environment' : null}
        multiple={multiple}
        accept={acceptedTypes}
        onChange={(e) => onSelect(e.target.files[0])}
      />
      <div className="pointer" onClick={() => fileInput?.current?.click?.()}>
        {component}
      </div>
    </>
  );
}
