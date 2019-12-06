var state = {
  cognitoInfo: {},
  accessTokenInfo: {},
  idTokenInfo: {},
  refreshTokenInfo: {},
  loggedIn: false,
  loadingState: true,
  errorLoadingState: false
};


function setLoggedIn(newValue) {
  state.loggedIn = newValue;
}

function setLoggedOut() {
  state.loggedIn = false;
  state.cognitoInfo = {};
}

function setCognitoInfo(newValue) {
  state.cognitoInfo = newValue;
}

function setDecodedAccessTokenInfo(newValue) {
  state.accessTokenInfo = newValue;
}

function setDecodedIdTokenInfo(newValue) {
  state.idTokenInfo = newValue;
}

function setDecodedRefreshTokenInfo(newValue) {
  state.refreshTokenInfo = newValue;
}

export default {
  state: state,
  setLoggedIn: setLoggedIn,
  setLoggedOut: setLoggedOut,
  setCognitoInfo: setCognitoInfo,
  setDecodedAccessTokenInfo: setDecodedAccessTokenInfo,
  setDecodedIdTokenInfo: setDecodedIdTokenInfo,
  setDecodedRefreshTokenInfo: setDecodedRefreshTokenInfo,
}
