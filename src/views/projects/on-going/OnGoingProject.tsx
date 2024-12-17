import React, { useEffect, useState } from 'react';
import { ICON_PATH } from 'constant';
import { ComplexObject } from 'types';
import { useHitAction } from 'hooks';
import createAction, { actions } from 'store/actions';
import { Card, CenterWrapper, Circle, EmptyContent, TriangleCard } from 'components';
import TitleRow from '../common/TtitleRow';
import ProjectsTable from './ProjectsTable';

export default function OnGoingProject(): JSX.Element {
  const [projects, setProjects] = useState<ComplexObject[]>([]);
  const hitAction = useHitAction();

  const getOngoingProjects = () => {
    hitAction(
      createAction(actions.WATCH_GET_PROJECTS, {
        executeOnEnd: setProjects,
        phase: 'onGoing',
      })
    );
  };

  useEffect(getOngoingProjects, []);

  return (
    <>
      <CenterWrapper>
        <Card className="w-100 d-flex flex-column justify-content-center align-items-center p-2">
          <Circle title="پروژه‌های جاری" icon={ICON_PATH + 'on-going-projects.svg'} iconSize="50px" />
          <TriangleCard hasBorder={true} bgColor="CARD_BG" borderColor="BRIGHT_BORDER" className="my-0 w-100 h-100 p-2">
            <TitleRow src="project-details.svg" title="پروژه‌های جاری" className="mb-2" />
            {projects.length ? <ProjectsTable projects={projects} editAble /> : <EmptyContent className="small" />}
          </TriangleCard>
        </Card>
      </CenterWrapper>
    </>
  );
}
