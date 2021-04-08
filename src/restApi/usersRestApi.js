import ConnectRestApi from './ConnectRestApi';
import {REGISTER_URL_PATH} from '../constants';

const USERS_URL_PATH = "/users";
const usersRestApi = Object.create(ConnectRestApi);
usersRestApi.init(USERS_URL_PATH);

const configUsersRestApi = {
    
};

// ### Users Endpoint
// ###
usersRestApi.getUser = async function getUser(username) {
    
    await this.restApiConn.get(URL, username, restApconfigUsersRestApiiConfig);
};

usersRestApi.createUser = async function createUser(userForm) {
    delete userForm["verifypassword"];
    userForm = JSON.stringify({
        _id: userForm.name,
        ...userForm,
        ...{ role: "users" },
    });
    const URL = "/create";
    const result = await this.restApiConn.post(URL, userForm, configUsersRestApi);
    console.log ("usersRestApi.createUser-", result);
};

usersRestApi.listUsers = async function listUsers() {
    const URL = "/listall";
    const response = await this.restApiConn.get(URL, configUsersRestApi);
};

export default usersRestApi;