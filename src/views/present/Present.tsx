import React from 'react';
import { Btn, CenterWrapper, HyperLink, Txt } from 'components';
import useGetCount from 'api/requests/misc/use-get-count';

export default function Present(): JSX.Element {
  const { data = {} } = useGetCount();

  return (
    <CenterWrapper>
      <div className="d-flex flex-column align-items-center">
        <ProjectBtn route="/why-esel" title="چرا اشل" />
        <ProjectBtn route="/about-us" title="درباره اشل" />
        <ProjectBtn route="/certificates" title="مجوزها" />
        <div className="text-center my-3">
          {data?.allUsers ? (
            <Txt isBold size="s" className="my-1">
              تعداد کاربران: {data.allUsers}
            </Txt>
          ) : null}
        </div>
      </div>
    </CenterWrapper>
  );
}

const ProjectBtn = (btnProps) => {
  const { title, route, icon } = btnProps;
  return (
    <HyperLink href={route}>
      <Btn
        hasIcon={false}
        textColor="BLACK"
        childWrapperClass="px-3"
        bgColor="APP"
        width="300px"
        className="my-3 small "
      >
        {title}
      </Btn>
    </HyperLink>
  );
};
