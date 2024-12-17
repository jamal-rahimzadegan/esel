import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHitAction } from 'hooks';
import { ComplexObject } from 'types';
import createAction, { actions } from 'store/actions';
import { ICON_PATH, IMG_PATH, selectorState } from 'constant';
import { Card, CenterWrapper, HyperLink, Image, Input, Txt } from 'components';
import { InboxIcon } from './ProfileStyle';

export default function Profile(): JSX.Element {
  const hitAction = useHitAction();
  const { user } = useSelector(selectorState);
  const { age, credit, email, fName, lName, nationalCode, reporterMob, sex, tickets } = user.userData || {};
  const [userDetails, setUserDetails] = useState<ComplexObject>({
    name: fName,
    family: lName,
    email,
    nationalCode,
  });


  const getUserData = () => hitAction(createAction(actions.WATCH_GET_PROFILE));

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const CustomInput = (label, name, placeholder) => {
    return (
      <Input
        wrapperClassName='w-100 mb-4'
        className='p-1 rounded w-100'
        label={label}
        name={name}
        autoComplete='off'
        placeholder={placeholder}
        onChange={handleInput}
      />
    );
  };

  const updateProfile = () => {
    const { name, family, email: newEmail, nationalCode: newNCode } = userDetails;
    hitAction(
      createAction(actions.WATCH_UPDATE_PROFILE, {
        fName: name,
        lName: family,
        email: newEmail || email,
        nationalCode: newNCode,
      }),
    );
  };

  useEffect(getUserData, []);

  return (
    <CenterWrapper>
      <Card className='w-100 p-3' bgColor='CARD_BG'>
        <div className='d-flex w-100 flex-column align-items-center justify-content-center'>
          <InboxIcon>
            <HyperLink href='/inbox'>
              <Image src={ICON_PATH + 'social-media/mail.svg'} alt='inbox' height='100%' width='100%' />
            </HyperLink>
          </InboxIcon>
          <Image
            height='50px'
            width='50px'
            src={IMG_PATH + 'user.png'}
            alt='avatar'
            radius='rounded'
            objectFit='fill'
          />

          <Txt className='text-capitalize' isBold size='s'>
            {(fName || '') + ' ' + (lName || '')}
          </Txt>
          <Txt isPerDigit isBold size='s'>{`اعتبار: ${(+credit || 0).toLocaleString()} ریال`}</Txt>
          <Txt isBold isPerDigit size='s'>
            {user.phone || ''}
          </Txt>
          <Txt isBold isPerDigit size='s'>
            {user.phone || ''}
          </Txt>
          <Txt isBold className="my-2" >
            {fName && lName ? fName + ' ' + lName : ''}
          </Txt>

          {/*{CustomInput('نام', 'name', fName)}*/}
          {/*{CustomInput('نام خانوادگی', 'family', lName)}*/}

          {/*<ProfileElement onChange={(e) => setNewEmail(e.target.value)} title="ایمیل" defaultValue={email} />*/}
          {/*<ProfileElement*/}
          {/*  onChange={(e) => setNewNationalCode(e.target.value)}*/}
          {/*  title="کدملی"*/}
          {/*  defaultValue={nationalCode}*/}
          {/*  disabled={!!nationalCode}*/}
          {/*/>*/}
          {/*<Btn*/}
          {/*  onClick={updateProfile}*/}
          {/*  bgColor="GREEN"*/}
          {/*  hasArrow={false}*/}
          {/*  hasIcon={false}*/}
          {/*  width="110px"*/}
          {/*  children="ثبت تغییرات"*/}
          {/*/>*/}
        </div>
      </Card>
    </CenterWrapper>
  );
}
