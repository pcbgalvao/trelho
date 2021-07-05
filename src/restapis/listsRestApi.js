import ConnectRestApi from "./ConnectRestApi";

const listsRestApi = Object.create(ConnectRestApi);
listsRestApi.init("/lists");

// ### Lists Endpoint
// ###
listsRestApi.getLists = async function getLists(searchFields) {
  const {fk_userid} = searchFields;
  const urlService = `/list/${fk_userid}`;
  const response = await this.restApiConn.get(urlService, {});

  return response.data;
};
listsRestApi.deleteList = async function deleteList(cardForm) {
  const URL = "/lists/:id/updateCard/:id";
  const response = await restApiConn.post(URL, cardForm, config);
};

listsRestApi.createList = async function createList(userForm) {
  const URL = "create";
  const response = await this.restApiConn.post("/create", userForm);

  return response.data;
};

listsRestApi.renameListName = async function renameList(idList, newListName) {
  const URL = `/rename/${idList}/${newListName}`;
  const response = await this.restApiConn.put(URL, );

  return response
};

export default listsRestApi;
