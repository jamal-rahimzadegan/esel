import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import anime from 'animejs';
import { useHitAction } from 'hooks/index';
import { Btn, Txt } from 'components/index';
import { selectorState } from 'constant/index';
import { lockScroll } from 'utils/index';
import createAction, { actions } from 'store/actions';
import { AlertContainer } from './NotifyStyle';

export default function Notify(): JSX.Element {
  const handleAlert = useHitAction();

  const {
    notify: { msg, alertType, isShowAlert, isAutoClose, timeout },
  } = useSelector(selectorState);

  const closeAlert = () => handleAlert(createAction(actions.HIDE_ALERT));

  const applyAlertBgColor = () => {
    switch (alertType) {
      case 'warn':
        return 'ORANGE';
      case 'err':
        return 'RED';
      case 'success':
        return 'GREEN';
      default:
        return 'INFO';
    }
  };

  const toggleAlert = (toggle) => {
    lockScroll(isShowAlert);

    if (toggle === 'open') {
      anime({ targets: '#alertModal', height: [0, 120], duration: 300, easing: 'linear' });
      isAutoClose && setTimeout(closeAlert, timeout);
    }

    if (toggle === 'close') {
      anime({
        targets: '#alertModal',
        height: [120, 0],
        duration: 300,
        easing: 'linear',
      });
    }
  };

  useEffect(() => {
    if (msg) toggleAlert(isShowAlert ? 'open' : 'close');
  }, [isShowAlert]);

  return (
    <AlertContainer bgColor={applyAlertBgColor()} id="alertModal" className="shadow rounded-bottom">
      {!isAutoClose ? (
        <Btn
          hasGradient={false}
          hasGlow={false}
          hasBorder={false}
          hasRadius={false}
          textColor="WHITE"
          bgColor="TRANSPARENT"
          onClick={closeAlert}
          children="x"
        />
      ) : null}

      <div className="d-flex px-3 py-2 text-justify align-items-center justify-content-center">
        <Txt isBold color="WHITE">
          {msg}
        </Txt>
      </div>
    </AlertContainer>
  );
}
