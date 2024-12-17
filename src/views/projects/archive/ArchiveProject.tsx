import React, { useEffect, useState } from 'react';
import { Card, CenterWrapper, Circle, TriangleCard } from 'components';
import { ICON_PATH } from 'constant';
import { ComplexObject } from 'types';
import { useHitAction } from 'hooks';
import createAction, { actions } from 'store/actions';
import ProjectsTable from 'views/projects/on-going/ProjectsTable';
import TitleRow from 'views/projects/common/TtitleRow';

export default function ArchiveProject() {
  const [projects, setProjects] = useState<ComplexObject[]>([]);
  const hitAction = useHitAction();

  const getOngoingProjects = () => {
    hitAction(
      createAction(actions.WATCH_GET_PROJECTS, {
        executeOnEnd: setProjects,
        phase: 'done',
      })
    );
  };

  useEffect(getOngoingProjects, []);

  return (
    <CenterWrapper>
      <Card className="w-100 d-flex flex-column justify-content-center align-items-center p-2">
        <Circle title="آرشیو" icon={ICON_PATH + 'archive-done-projects.svg'} iconSize="50px" />
        {/*<triangle-card hasBorder bgColor="CARD_BG" className="my-0 w-100 h-100 p-2">*/}
        {/*  <div className="d-flex align-items-center my-2">*/}
        {/*    <LogoIndicator src={ICON_PATH + 'logo.svg'} />*/}
        {/*    <Txt size="s">آیا مایل به آرشیو مکاتبات، گزارشات و اسناد این پروژه می باشید؟</Txt>*/}
        {/*  </div>*/}
        {/*  <div className="d-flex justify-levels-end m-2">*/}
        {/*    <btn bgColor="GREEN" hasIcon={false} onClick={saveInfos} width="100px" grDir="left" className="mx-2">*/}
        {/*      <Txt color="WHITE">بله</Txt>*/}
        {/*    </btn>*/}
        {/*    <btn hasIcon={false} bgColor="RED" onClick={saveInfos} width="100px" grDir="left">*/}
        {/*      <Txt color="WHITE">خیر</Txt>*/}
        {/*    </btn>*/}
        {/*  </div>*/}
        {/*</triangle-card>*/}
        <TriangleCard hasBorder={true} bgColor="CARD_BG" borderColor="BRIGHT_BORDER" className="my-0 w-100 h-100 p-2">
          <TitleRow src="archive-done-projects.svg" title="پروژه‌های پایان یافته" className="mb-2" />
          <ProjectsTable projects={projects} />
        </TriangleCard>
      </Card>
    </CenterWrapper>
  );
}
