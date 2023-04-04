import Favicon from 'components/Favicon';
import * as GlobalStyled from 'styles/global';
import * as Styled from './styled';
import type { FunctionComponent, ReactNode } from 'react';

const MasterLayout: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <Styled.MasterLayout>
      <Favicon />
      {children}
      <GlobalStyled.AppStyle />
      <Styled.FontIconLoader />
    </Styled.MasterLayout>
  );
};

export default MasterLayout;
