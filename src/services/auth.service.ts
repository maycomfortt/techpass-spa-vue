import { UserManager, UserManagerSettings, Log, WebStorageStateStore, User, SignoutResponse } from 'oidc-client';

export const DefaultSettings: UserManagerSettings = {
    authority: process.env.VUE_APP_PROVIDER,
    client_id: process.env.VUE_APP_CLIENT_ID,
    redirect_uri: process.env.VUE_APP_SIGN_IN_REDIRECT_URI,
    post_logout_redirect_uri: process.env.VUE_APP_SIGN_OUT_REDIRECT_URI,
    response_type: 'id_token token',
    scope: 'openid email profile',
    userStore: new WebStorageStateStore({ store: window.localStorage })
};

export class AuthService {
    private static _auth: AuthService;
    
    private _mgr: UserManager;

    private constructor() { 
        this._mgr = new UserManager(DefaultSettings);

        // Log.logger = console;
        // Log.level = Log.DEBUG;
    }

    static instance(): AuthService {
        if (!this._auth) {
            this._auth = new AuthService();
        }

        return this._auth;
    }

    async login(): Promise<void> {
        return this._mgr.signinRedirect();
    }

    async loginCB(url:string): Promise<User> {
        return this._mgr.signinCallback(url);
    }

    async logout(): Promise<void> {
        return this._mgr.signoutRedirect();
    }

    async logoutCB(): Promise<SignoutResponse> {
        return this._mgr.signoutRedirectCallback();
    }

    async getUser(): Promise<User|null> {
        return this._mgr.getUser();
    }

    async isAuthenticated(): Promise<boolean> {
        return new Promise(resolve => {
            this._mgr.getUser().then(user => {
                resolve(user != null);
            });
        });
    }
}
