import ConnectRestApi from "./ConnectRestApi";

const listsRestApi = Object.create(ConnectRestApi);
listsRestApi.init("/lists");

// ### Lists Endpoint
// ###
listsRestApi.getLists = async function getLists() {
  const urlService = "/lists";
  const response = await this.restApiConn.get("", {});

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
