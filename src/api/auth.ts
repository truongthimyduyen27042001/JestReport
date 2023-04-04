import httpRequest from './http-request';

export const signIn = async (
  data: Auth.UserCertificate,
): Promise<Auth.UserAuthentication> =>
  httpRequest.post<Auth.UserCertificate, Auth.UserAuthentication>(
    '/auth/login',
    data,
  );

export const logOut = (): Promise<void> => httpRequest.delete('/auth/logout');
