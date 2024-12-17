import { ReactChildren, useEffect, useState } from 'react';
import { TransitionContainer } from '../LayoutStyle';

export default function PageTransition({ children }): JSX.Element {
  const [childrenToShow, setChildrenToShow] = useState<ReactChildren>(children);
  const [transitionType, setTransitionType] = useState<'in' | 'out'>('out');

  const handleTransition = () => {
    if (transitionType === 'out') {
      setChildrenToShow(children);
      setTransitionType('in');
    }
  };

  useEffect(() => {
    if (children !== childrenToShow) setTransitionType('out');
  }, [children, childrenToShow]);

  useEffect(() => setTransitionType('in'), []);

  return (
    <TransitionContainer transitionType={transitionType} onTransitionEnd={handleTransition}>
      {childrenToShow}
    </TransitionContainer>
  );
}
