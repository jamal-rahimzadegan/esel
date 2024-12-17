import React, { useEffect, useState } from 'react';
import { MessageBox } from './InternetStatusStyle';

export default function InternetStatus() {
  const [isConnected, setIsConnected] = useState<boolean>(true);

  const manageStatusChange = (e) => setIsConnected(e.type !== 'offline');

  useEffect(() => {
    window.addEventListener('online', manageStatusChange, false);
    window.addEventListener('offline', manageStatusChange, false);
    return () => {
      window.removeEventListener('online', manageStatusChange, false);
      window.removeEventListener('offline', manageStatusChange, false);
    };
  }, []);

  return <MessageBox isConnected={isConnected}>مشکل در ارتباط اینترنت</MessageBox>;
}
