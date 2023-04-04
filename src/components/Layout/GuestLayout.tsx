import MasterLayout from './MasterLayout';
import * as Styled from './styled';
import type { FunctionComponent, ReactNode } from 'react';

const GuestLayout: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <MasterLayout>
      <Styled.GuestLayout>{children}</Styled.GuestLayout>
    </MasterLayout>
  );
};

export default GuestLayout;
