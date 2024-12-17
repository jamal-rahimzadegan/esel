import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { showAlert } from 'utils';
import { useHitAction } from 'hooks';
import { ICON_PATH, REGEX } from 'constant';
import { Btn, Card, CountDown, Image, Input, Txt } from 'components';
import createAction, { actions } from 'store/actions';
import { InputBox, Triangle } from './LoginStyle';

export default function Login() {
  const hitAction = useHitAction();
  const router = useRouter();
  const [phone, setPhone] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [isShowCode, setIsShowCode] = useState<boolean>(false);
  const [isResendCode, setIsResendCode] = useState<boolean>(false);

  const sendPhoneNumber = (e) => {
    e && e.preventDefault();
    phone && REGEX.IS_MOBILE_NUM.test(phone)
      ? hitAction(createAction(actions.WATCH_LOGIN, { phone, step: 'check', setIsShowCode }))
      : hitAction(showAlert('err', 'لطفا تلفن را به درستی وارد کنید'));
  };

  const verifyPhoneNumber = (e) => {
    e?.preventDefault();

    phone && REGEX.IS_MOBILE_NUM.test(phone) && code
      ? hitAction(
          createAction(actions.WATCH_LOGIN, { code, phone, step: 'verify', navigate: (route) => router.replace(route) })
        )
      : hitAction(showAlert('err', 'لطفا موارد را به درستی وارد کنید'));
  };

  const retrySendCode = (e) => {
    setIsResendCode(false);
    sendPhoneNumber(e);
  };

  return (
    <Card bgColor="APP" height="100vh" className="d-flex flex-column align-items-center justify-content-center">
      {/*<button onClick={() => hitAction(showAlert('info', 'wowo'))}>show</button>*/}
      <Image
        src="/static/img/user.png"
        alt="user logo"
        height="70px"
        width="70px"
        objectFit="cover"
        radius="round-pill"
      />
      <Triangle />
      <InputBox width="270px" bgColor="WHITE">
        <form onSubmit={isShowCode ? verifyPhoneNumber : sendPhoneNumber}>
          <Input
            autocomplete="off"
            name="mobile-inp"
            SideIcon={() => <Image className="ml-2" alt="user" height={20} width={20} src={ICON_PATH + 'user.svg'} />}
            value={phone}
            type="tel" //todo: fix on safari
            maxLength="11"
            className="p-2 w-100"
            wrapperClassName="mb-2"
            placeholder="شماره تلفن"
            onChange={(e) => setPhone(e.target.value)}
          />
          {isShowCode ? (
            <>
              <Input
                name="confirm-code"
                value={code}
                onEnterPress={verifyPhoneNumber}
                className="p-2 w-100"
                type="number"
                wrapperClassName="my-3"
                placeholder="کد تایید"
                onChange={(e) => setCode(e.target.value)}
                SideIcon={() => (
                  <Image alt="user" className="ml-2" height={20} width={20} src={ICON_PATH + 'lock.svg'} />
                )}
              />

              <Card className="d-flex flex-column align-items-center justify-content-center">
                <CountDown shouldReset={isResendCode} onEnd={() => setIsResendCode(true)} />
                {isResendCode ? (
                  <Txt size="s" isBold className="pointer" onClick={retrySendCode}>
                    ارسال مجدد کد
                  </Txt>
                ) : null}
              </Card>
            </>
          ) : null}
          <Btn
            hasArrow={false}
            hasIcon={false}
            className="w-100 mt-2 d-flex justify-content-center align-items-center"
            textColor="BLACK"
            hasRadius={false}
            hasBorder={false}
            hasGlow={false}
            hasGradient={false}
            bgColor="APP"
            type="submit"
            children={isShowCode ? 'تایید' : 'ارسال'}
          />
          {isShowCode ? null : (
            <>
              <Txt isBold size="xs" color="RED" className="text-center my-2">
                ورود به معنی موافقت با قوانین است
              </Txt>
              <Txt
                onClick={() => router.push('/user/policy')}
                hasDecoration={true}
                size="s"
                className="text-center pointer"
              >
                مطالعه قوانین
              </Txt>
            </>
          )}
        </form>
      </InputBox>
    </Card>
  );
}
