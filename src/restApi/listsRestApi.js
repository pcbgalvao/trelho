import ConnectRestApi from "./ConnectRestApi";

const listsRestApi = Object.create(ConnectRestApi);

// ### Lists Endpoint
// ###
listsRestApi.getLists = async function getLists() {
  const URL = "/lists";
  const response = await restApiConn.post(URL, config);
};
listsRestApi.deleteList = async function deleteList(cardForm) {
  const URL = "/lists/:id/updateCard/:id";
  const response = await restApiConn.post(URL, cardForm, config);
};
listsRestApi.createList = async function createList(cardForm) {
  const URL = "/lists/:id/updateCard/:id";
  const response = await restApiConn.post(URL, cardForm, config);
};
listsRestApi.renameList = async function renameList(cardForm) {
  const URL = "/lists/:id/updateCard/:id";
  const response = await restApiConn.post(URL, cardForm, config);
};
listsRestApi.renameCard = async function updateCard(cardForm) {
  const URL = "/lists/:id/updateCard/:id";
  const response = await restApiConn.post(URL, cardForm, config);
};
listsRestApi.deleteCard = async function updateCard(cardForm) {
  const URL = "/lists/:id/updateCard/:id";
  const response = await restApiConn.post(URL, cardForm, config);
};
listsRestApi.createCard = async function updateCard(cardForm) {
  const URL = "/lists/:id/updateCard/:id";
  const response = await restApiConn.post(URL, cardForm, config);
};
listsRestApi.updateCard = async function updateCard(cardForm) {
  const URL = "/lists/:id/updateCard/:id";
  const response = await restApiConn.post(URL, cardForm, config);
};

listsRestApi.init();

export default listsRestApi;
