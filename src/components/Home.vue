<template>
    <div class="row">
        <div class="col">
            <h4 class="has-text-left">
                <b>You have logged in successfully.</b>
            </h4>
            <p class="has-text-left padding--top--sm">
                This is your <b>User Information</b> from Cognito:
            </p>
            <div class="row padding--top--sm">
                <div class="col is-12">
                    <div class="alert alert-info has-text-justified">
                        <pre>{{userInfo}}</pre>
                    </div>
                </div>
            </div>
            <p class="has-text-left">
                This is your
                <b>Access Token</b> information:
            </p>
            <div class="row padding--top--sm">
                <div class="col is-12">
                    <div class="alert alert-info has-text-justified">
                        <pre>{{accessTokenInfo}}</pre>
                    </div>
                </div>
            </div>
            <p class="has-text-left">
                This is your
                <b>Id Token</b> information:
            </p>
            <div class="row padding--top--sm">
                <div class="col is-12">
                    <div class="alert alert-info has-text-justified">
                        <pre>{{idTokenInfo}}</pre>
                    </div>
                </div>
            </div>
            <p class="has-text-left">
                This is your
                <b>Refresh Token</b> information:
            </p>
            <div class="row padding--top--sm">
                <div class="col is-12">
                    <div class="alert alert-info has-text-justified">
                        <pre>{{refreshTokenInfo}}</pre>
                    </div>
                </div>
            </div>
            <div class="row padding--top--sm">
                <div class="col is-12">
                    <p class="has-text-justified">You can now log out by clicking the logout button below and you will be redirected to a successful
                        logout page.</p>
                </div>
            </div>
            <div>
                <div class="row padding--top--sm">
                    <div class="col is-12">
                        <button
                                class="sgds-button has-text-white is-large is-fullwidth"
                                @click="$router.push('/logout')"
                        >Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import UserInfoStore from "../app/user-info-store";

    export default {
        name: "Home",
        data: function () {
            return {
                userPoolId: process.env.VUE_APP_COGNITO_USERPOOL_ID,
                userInfo: UserInfoStore.state.cognitoInfo,
                accessTokenInfo: UserInfoStore.state.accessTokenInfo,
                idTokenInfo: UserInfoStore.state.idTokenInfo,
                refreshTokenInfo: UserInfoStore.state.refreshTokenInfo
            };
        },
        filters: {
            pretty: function (value) {
                return JSON.stringify(JSON.parse(value), null, 2);
            }
        },
    }
</script>
