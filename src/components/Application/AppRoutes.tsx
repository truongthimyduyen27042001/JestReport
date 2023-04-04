import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { PreLoader } from 'components/Loaders';
import type { ComponentType, ComponentProps, FunctionComponent } from 'react';

const lazyload = (component: () => Promise<{ default: ComponentType }>) => {
  const LazyComponent = lazy(component);

  return (props: ComponentProps<ComponentType>) => (
    <Suspense fallback={<PreLoader />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

const SignInPage = lazyload(() => import('pages/SignInPage'));
const PageNotFound = lazyload(() => import('pages/PageNotFound'));

const AppRoutes: FunctionComponent = () =>
  useRoutes([
    { path: '/', element: <SignInPage /> },
    { path: '/404', element: <PageNotFound /> },
    { path: '*', element: <PageNotFound /> },
  ]);

export default AppRoutes;
