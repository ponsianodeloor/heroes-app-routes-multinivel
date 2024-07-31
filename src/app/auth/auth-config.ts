import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '../../environments/environment';

export const authConfig: AuthConfig = {
  issuer: `${environment.KEYCLOAK_URL}/realms/${environment.KEYCLOAK_REALM}`,
  redirectUri: environment.KEYCLOAK_REDIRECT_URI,
  clientId: environment.KEYCLOAK_CLIENT_ID,
  responseType: 'code',
  scope: 'openid profile email',
  showDebugInformation: true,
  silentRefreshRedirectUri: environment.KEYCLOAK_SILENT_REFRESH_REDIRECT_URI,
  useSilentRefresh: true,
  sessionChecksEnabled: true,
  clearHashAfterLogin: false
};
