import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
export function PageTransition({ children }: {children: React.ReactNode;}) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="animate-fade-in min-h-screen flex flex-col">{children}</div>);

}