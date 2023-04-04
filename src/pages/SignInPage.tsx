import { Helmet } from 'react-helmet-async';
import { Translation } from 'react-i18next';
import GuestLayout from 'components/Layout/GuestLayout';
import SignInContainer from 'containers/SignInContainer';
import type { FunctionComponent } from 'react';

const SignInPage: FunctionComponent = () => {
  return (
    <GuestLayout>
      <Translation>
        {(t) => (
          <Helmet>
            <title>{t('sign_in')}</title>
          </Helmet>
        )}
      </Translation>
      <SignInContainer />
    </GuestLayout>
  );
};

export default SignInPage;
