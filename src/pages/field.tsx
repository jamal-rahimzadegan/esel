import React from 'react';
import { HtmlHead } from 'components/index';
import Field from 'views/field/Field';

export default function FieldPage() {
  return (
    <>
      <HtmlHead description="Field page" title="گرایش" />
      <Field />
    </>
  );
}
