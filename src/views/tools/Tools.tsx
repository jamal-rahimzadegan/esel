import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { CenterWrapper, Circle, Txt, TriangleCard } from 'components';
import { ICON_PATH } from 'constant';
import { AppItem, AppsContainer } from './ToolStyle';

export default function Tools() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>('android');

  const handleIOSApps = () => {};

  const handleAndroidApps = () => {};

  const handleTool = () => {};

  return (
    <CenterWrapper>
      <div className="d-flex flex-column align-items-center">
        <Circle title="ابزارها" icon={ICON_PATH + 'tools.svg'} iconSize="60px" />
        <TriangleCard bgColor="CARD_BG" hasBorder className="px-4 py-2 w-100">
          <div className="w-100 h-100">
            <Txt size="xs" isBold className="d-block text-center">
              ابزارها و نرم افزارهای مهندسی
            </Txt>
            <div className="d-flex align-items-center justify-content-around my-2">
              <Txt onClick={handleAndroidApps}>Android</Txt>
              <Txt onClick={handleAndroidApps}>IOS</Txt>
            </div>
          </div>
        </TriangleCard>
        <TriangleCard
          bgColor="CARD_BG"
          hasBorder
          className="px-4 py-2 mt-3 mb-1 w-100 d-flex align-items-center justify-content-between"
        >
          <AppsContainer>
            {Array.from({ length: 8 }).map((book) => (
              <AppItem onClick={handleTool} src={'app'} alt={'app'}>
                app
              </AppItem>
            ))}
          </AppsContainer>
        </TriangleCard>
      </div>
    </CenterWrapper>
  );
}
