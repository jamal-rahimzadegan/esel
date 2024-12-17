import React from 'react';
import RulesBookBank from 'views/rules/RulesBookBank';
import { HtmlHead } from 'components/index';

export default function RulesBookBankPage() {
  return (
    <>
      <HtmlHead title="قوانین و مقررات " description="بانک قوانین و مقررات" />
      <RulesBookBank />
    </>
  );
}
