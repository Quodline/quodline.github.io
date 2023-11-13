import { usePathname } from 'next/navigation';
import { useCallback } from 'react';
import pages from '@/static/pages';
import BottomNavButton from './BottomNavButton';
import cn from 'classnames';

export default function BottomNav() {
  const pathname = usePathname();

  const currentPage = useCallback(() => {
    return pages.find((page) => page.path === pathname);
  }, [pathname]);

  return (
    <div
      className={cn(
        'flex flex-1 items-center justify-between overflow-hidden p-4',
        { '!justify-end': currentPage()?.previous === undefined }
      )}
    >
      {currentPage()?.previous && (
        <BottomNavButton href={currentPage()?.previous?.path || '/'}>
          {currentPage()?.previous?.title}
        </BottomNavButton>
      )}
      {currentPage()?.next && (
        <BottomNavButton
          href={currentPage()?.next?.path || '/'}
          position="right"
        >
          {currentPage()?.next?.title}
        </BottomNavButton>
      )}
    </div>
  );
}
