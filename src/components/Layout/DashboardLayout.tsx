import MasterLayout from './MasterLayout';
import * as Styled from './styled';
import type { FunctionComponent, ReactNode } from 'react';

const DashboardLayout: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <MasterLayout>
      <Styled.DashboardLayout>{children}</Styled.DashboardLayout>
    </MasterLayout>
  );
};

export default DashboardLayout;
