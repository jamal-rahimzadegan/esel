import { ls } from 'utils/index';
import { kookie } from 'services/index';

export default function logout() {
  const isInstalled: boolean = !!ls.get('installed');

  ls.removeAll();
  kookie.removeAll();

  isInstalled && ls.set('installed', true);

  location.href = '/user/login';
}
