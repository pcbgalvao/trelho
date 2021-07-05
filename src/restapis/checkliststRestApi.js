import ConnectRestApi from "./ConnectRestApi";

const checklistsRestApi = Object.create(ConnectRestApi);
checklistsRestApi.init("/checklists");

// ### cards Endpoint
// ###
checklistsRestApi.getChecklists = async function getChecklists(checklistForm) {
  const { fk_userid, fk_cardid } = checklistForm;
  //const urlService = `/list/${fk_userid}/${fk_cardid}`;
  const response = await this.restApiConn.get(
    `/list/${fk_userid}/${fk_cardid}`,
    {}
  );

  return response.data;
};

checklistsRestApi.createChecklist = async function createChecklist(userForm) {
  const URL = "/create";
  const response = await this.restApiConn.post(URL, userForm);

  return response.data;
};

checklistsRestApi.deleteChecklist = async function deleteChecklist(
  checklistForm
) {
  const URL = "/:id";
  const response = await this.restApiConn.delete(URL, cardForm);
};

checklistsRestApi.renameFieldCard = async function renameFieldCard({
  idCard,
  field,
  newTitle,
}) {
  const URL = `/rename/${field}/${id_card}/${newTitle}`;
  const response = await this.restApiConn.post(URL);

  return response;
};

checklistsRestApi.insertItem = async function insertItem(newItemForm) {
  const URL = "/items/insert";
  const response = await this.restApiConn.put(URL, newItemForm);

  return response;
};

checklistsRestApi.updateItem = async function insertItem(newItemForm) {
  const URL = "/items/update";
  const response = await this.restApiConn.put(URL, newItemForm);

  return response;
};

checklistsRestApi.deleteCard = async function updateCard(cardForm) {
  const URL = "/cards/:id/updateCard/:id";
  const response = await restApiConn.post(URL, cardForm);
};

checklistsRestApi.updateCard = async function updateCard(cardForm) {
  const URL = "/cards/:id/updateCard/:id";
  const response = await restApiConn.post(URL, cardForm);
};

export default checklistsRestApi;
