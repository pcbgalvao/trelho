import ConnectRestApi from "./ConnectRestApi";

const cardsRestApi = Object.create(ConnectRestApi);
cardsRestApi.init("/cards");

// ### cards Endpoint
// ###
cardsRestApi.getCards = async function getCards(searchFields) {
  const {iduser, fk_listid} = searchFields;
  const urlService = `/list/${iduser}/${fk_listid}`;
  const response = await this.restApiConn.get(urlService, {});

  return response.data;
};
cardsRestApi.deleteCard = async function deleteCard(cardForm) {
  const URL = "/cards/:id/updateCard/:id";
  const response = await restApiConn.post(URL, cardForm, config);
};

cardsRestApi.createCard = async function createCard(userForm) {
  const URL = "/create";
  const response = await this.restApiConn.post(URL, userForm);

  return response.data;
};

cardsRestApi.renameFieldCard = async function renameFieldCard({idCard, field, newTitle}) {
  const URL = `/rename/${field}/${id_card}/${newTitle}`;
  const response = await restApiConn.post(URL, config);

  return response;
};
cardsRestApi.renameCard = async function updateCard(cardForm) {
  const URL = "/cards/:id/updateCard/:id";
  const response = await restApiConn.post(URL, cardForm, config);
};
cardsRestApi.deleteCard = async function updateCard(cardForm) {
  const URL = "/cards/:id/updateCard/:id";
  const response = await restApiConn.post(URL, cardForm, config);
};

cardsRestApi.updateCard = async function updateCard(cardForm) {
  const URL = "/cards/:id/updateCard/:id";
  const response = await restApiConn.post(URL, cardForm, config);
};

export default cardsRestApi;
