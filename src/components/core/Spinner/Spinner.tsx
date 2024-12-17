import { DARK_THEME } from 'assets/style/theme';
import { Loading } from './SpinnerStyle';

interface SpinnerProps {
  bgColor?: keyof typeof DARK_THEME;
  rippleColor?: keyof typeof DARK_THEME;
  speed?: number;
  size?: number;
  className?: string;
}

export default function Spinner(props: SpinnerProps) {
  return <Loading {...props} />;
}
