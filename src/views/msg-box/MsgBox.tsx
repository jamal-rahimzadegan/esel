import React, { useState } from 'react';
import { ICON_PATH, IMG_PATH } from 'constant';
import { useHitAction } from 'hooks';
import { Btn, Card, CenterWrapper, Circle, HyperLink, Image, Input, TriangleCard, Txt } from 'components';
import { ContractorImg, SocialImg, TriangleInput } from './MsgBoxStyle';
import createAction, { actions } from 'store/actions';

export default function MsgBox() {
  const hitAction = useHitAction();
  const [msg, setMsg] = useState<string>('');

  const SocialItem = (itemProps) => {
    const { icon, title, url } = itemProps;

    return (
      <HyperLink target="_blank" href={url}>
        <div className="d-flex align-items-center mb-2">
          <Txt size="xxs" isBold className="ml-1">
            {title}
          </Txt>
          <SocialImg src={ICON_PATH + 'social-media/' + icon} alt={title} />
        </div>
      </HyperLink>
    );
  };

  const sendTicket = () => {
    if (!msg) return;
    hitAction(createAction(actions.SEND_TICKET, { subject: "ارتباط با اشل", text: msg, setMsg }));
  };

  return (
    <CenterWrapper>
      <Card className="w-100 d-flex flex-column justify-content-center align-items-center p-2">
        <Circle title="ارتباط با ما" icon={ICON_PATH + 'open-envelope.svg'} iconSize="60px" />
        <TriangleCard hasBorder bgColor="CARD_BG" className="my-0 w-100 h-100 p-3">
          <Txt type="h1" isBold className="d-block mt-2 text-center title-font">
            ارسال پیام
          </Txt>
          <div className="d-flex justify-content-between align-items-start w-100 my-4">
            <Image
              className="rounded-circle"
              src={IMG_PATH + 'user.png'}
              alt="user logo"
              height="50px"
              width="50px"
              radius="round-pill"
              objectFit="cover"
            />
            <TriangleInput>
              <Image className="tri" src={IMG_PATH + 'msg-frame.png'} alt="box" height={34} width={34} />
              <Input
                value={msg}
                name="msg-box-inp"
                placeholder="متن مورد نظر را اینجا بنویسید."
                onChange={(e) => setMsg(e.target.value)}
                multiLine={true}
                type="text"
                maxLength="160"
                wrapperClassName="inp"
                className="w-100 h-100"
                height="240px"
                bgColor="TRANSPARENT"
              />
            </TriangleInput>
          </div>
          <div className="d-flex align-items-center justify-content-end mt-2 w-100 ">
            <Btn
              hasIcon={false}
              onClick={sendTicket}
              width="100px"
              bgColor="GREEN"
              grDir="left"
              childWrapperClass="py-1"
              hasArrow={false}
            >
              {'ثبت ✓'}
            </Btn>
            {/*<btn*/}
            {/*  hasIcon={false}*/}
            {/*  onClick={sendTicket}*/}
            {/*  width="100px"*/}
            {/*  bgColor="BLOCK_BG"*/}
            {/*  grDir="left"*/}
            {/*  className="mr-3"*/}
            {/*  childWrapperClass="py-1"*/}
            {/*  hasArrow={false}*/}
            {/*>*/}
            {/*  آپلود*/}
            {/*</btn>*/}
          </div>
        </TriangleCard>
      </Card>
      <Card className="d-flex align-items-start justify-content-center">
        <div className="d-flex flex-column align-items-end">
          <SocialItem url="tel:09210438723" title="09210438723" icon="phone.svg" />
          <SocialItem url="https://instagram.com/esel.app" title="esel.app" icon="instagram.svg" />
          <SocialItem url="https://telegram.me/eshelapp" title="eshelapp" icon="telegram.svg" />
          <SocialItem url="https://chat.whatsapp.com/HZ6jYXrGUYCgs5aoVO" title="Whatsapp" icon="whatsapp.svg" />
          <SocialItem url="mailto:esel.app@gmail.com" title="esel.app@gmail.com" icon="mail.svg" />
        </div>
        <ContractorImg src={ICON_PATH + 'contractor.svg'} alt="logo" width="150px" />
      </Card>
    </CenterWrapper>
  );
}
