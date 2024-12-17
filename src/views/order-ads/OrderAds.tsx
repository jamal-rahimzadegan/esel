import React from 'react';
import { IMG_PATH } from 'constant';
import { Btn, Card, CenterWrapper, Circle, Hr, Image, TriangleCard, Txt } from 'components';

export default function OrderAds(): JSX.Element {
  const ORDER_ITEMS = [
    { id: '1', name: 'کانال تلگرام اصلی', logo: 'main-telegram.jpg' },
    { id: '2', name: 'اینستاگرام', logo: 'insta.jpg' },
    { id: '3', name: 'تلگرام', logo: 'telegram.jpg' },
    { id: '4', name: 'بنر داخل اپ', logo: 'internal-banner.jpg' },
  ];

  return (
    <CenterWrapper>
      <Card className="center-items flex-column">
        <Circle className="center-items mt-2" title="سفارش آگهی" hasIcon={false} />
        <TriangleCard bgColor="CARD_BG" hasBorder className="p-3 mb-2">
          <Txt size="s" className="mt-2">
            مجموعه اشل با فعالیت تخصصی در حوزه ساخت و ساز شهری و روستایی مفتخر است با بهره گیری از کاربران واقعی شامل
            مهندسین ناظر و مجری، مالکان و سازندگان فعال در صنعت ساختمان ، خدمات محتوایی ارزنده ای به مشتریان عرضه کند.
            با اشل دقیقاً به جامعه هدف بزنید.
          </Txt>
          <Btn bgColor="APP" className="my-5" childWrapperClass="px-4" hasIcon={false}>
            <a href="tel:09210438723">تماس با پشتیبانی</a>
          </Btn>
          {ORDER_ITEMS.map((item) => (
            <>
              <Image
                key={item.id}
                objectFit="fill"
                src={IMG_PATH + 'order-ads/' + item.logo}
                alt={item.name}
                height="auto"
                width="100%"
              />
              <Hr className="my-4" />
            </>
          ))}
        </TriangleCard>
      </Card>
    </CenterWrapper>
  );
}
