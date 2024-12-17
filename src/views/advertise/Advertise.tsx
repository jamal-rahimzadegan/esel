import React, { Fragment, useEffect, useLayoutEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { generateFileUrl } from 'utils';
import { Ad, Card, CenterWrapper, Image, Modal } from 'components';

interface Props {
  page: 'MainPage' | 'InnerPage';
}

type AdContentType = { img: string; content: string; url: string };

interface AdType {
  large?: AdContentType;
  bottomLeft: AdContentType;
  bottomRight: AdContentType;
}

export default function Advertise(props: Props): JSX.Element {
  const { page } = props;
  const router = useRouter();
  const isMainPage = page === 'MainPage';
  const [selectedAdToShow, setSelectedAdToShow] = useState<string>('');
  const [adList, setAdList] = useState<AdType>({
    ...(isMainPage && { large: { img: '', content: '', url: '' } }),
    bottomLeft: { img: '', content: '', url: '' },
    bottomRight: { img: '', content: '', url: '' },
  });

  const getAds = () => {
    try {
      const storedADS = JSON.parse(localStorage.getItem('ads'));
      const target = storedADS.filter((el) => el.pageName === page);
      const index = isMainPage ? 1 : 0;

      const assignValues = (i): AdContentType => ({
        img: generateFileUrl(target?.[i].advertiseImageUrl, 'files'),
        content: generateFileUrl(target?.[i].advertiseContentImage, 'files'),
        url: target?.[i].advertiseUrl,
      });

      setAdList({
        bottomLeft: assignValues(index),
        bottomRight: assignValues(index),
        ...(isMainPage && {
          large: assignValues(0),
        }),
      });
    } catch (e) {
      console.error(e, ` <--- e in getting ads----`);
    }
  };

  const handleAdClick = (e) => {
    const { url, content } = adList[e.target.name];
    url ? router.push(url) : setSelectedAdToShow(content);
  };

  useLayoutEffect(getAds, []);

  return (
    <>
      <CenterWrapper className="center-items flex-column my-5">
        {isMainPage ? (
          <Ad
            name="large"
            onClick={handleAdClick}
            className="mb-2 mx-0 p-0"
            type="img"
            src={adList.large.img}
            height="auto"
            width="100%"
            objectFit="contain"
          />
        ) : null}
        <Card className="d-flex align-items-center justify-content-between row px-3 my-2">
          {['bottomRight', 'bottomLeft'].map((item) => (
            <Fragment key={item}>
              <Ad
                name={item}
                onClick={handleAdClick}
                type="img"
                src={adList[item].img}
                height="auto"
                width="49%"
                objectFit="contain"
              />
            </Fragment>
          ))}
        </Card>
      </CenterWrapper>
      <Modal hasClose bgColor="TRANSPARENT" close={setSelectedAdToShow} isOpen={!!selectedAdToShow}>
        {!!selectedAdToShow ? (
          <Image objectFit="contain" src={selectedAdToShow} alt={selectedAdToShow} height="100%" width="100%" />
        ) : null}
      </Modal>
    </>
  );
}
