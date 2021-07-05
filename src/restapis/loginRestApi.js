import ConnectRestApi from "./ConnectRestApi";
//import {AUTH_URL_PATH} from '../constants';

const AUTH_URL_PATH = "/auth";
const loginRestApi = Object.create(ConnectRestApi);
console.log("AUTH_URL_PATH-", AUTH_URL_PATH);
loginRestApi.init(AUTH_URL_PATH);

const configLoginRestApi = {
    
};

// ### Login Endpoint
// ###
loginRestApi.login = async function login(userCredentials) {
  const ENDPOINT_URL_PATH = "login";
  // stringify needed ?!?!
  //userCredentials = JSON.stringify({ ...userCredentials });
  console.log("restapi userCredentials-", userCredentials);
  const response = await this.restApiConn.post(
    ENDPOINT_URL_PATH,
    userCredentials,
    configLoginRestApi
  );

  console.log("restapi login result-", response);
  return response;
};

export default loginRestApi;
