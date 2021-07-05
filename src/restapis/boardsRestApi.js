import ConnectRestApi from "./ConnectRestApi";
import {BOARDS_URL_PATH} from '../constants';

//const AUTH_URL_PATH = "/auth";
const boardsRestApi = Object.create(ConnectRestApi);
console.log("BOARDS_URL_PATH-", BOARDS_URL_PATH);
boardsRestApi.init(BOARDS_URL_PATH);

const configBoardsRestApi = {
    
};

// ### Login Endpoint
// ###
boardsRestApi.getBoardContent = async function getBoardContent(userCredentials) {
  const ENDPOINT_URL_PATH = "/";
  // stringify needed ?!?!
  //userCredentials = JSON.stringify({ ...userCredentials });
  console.log("restapi userCredentials-", userCredentials);
  const boardsData = await this.restApiConn.get(
    ENDPOINT_URL_PATH,    
    configBoardsRestApi
  );

  console.log("getBoardContent.boardsData-", boardsData);
  return response;
};

export default boardsRestApi;
