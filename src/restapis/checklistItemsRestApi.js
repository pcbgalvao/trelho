import ConnectRestApi from "./ConnectRestApi";

const checklistItemsRestApi = Object.create(ConnectRestApi);
checklistItemsRestApi.init("/items");

// ### cards Endpoint
// ###
checklistItemsRestApi.getItems = async function getItems(searchFields) {
  const { fk_userid, fk_checklistid } = searchFields;
  //const urlService = `/list/${fk_userid}/${fk_checklistid}`;
  const response = await this.restApiConn.get(
    `/list/${fk_userid}/${fk_checklistid}`,
    {}
  );

  return response.data;
};

checklistItemsRestApi.createItem = async function createItem(
  itemForm
) {
  const URL = "/create";
  const response = await this.restApiConn.post(URL, itemForm);

  return response.data;
};

checklistItemsRestApi.deleteItem = async function deleteItem(
  itemsForm
) {
  const URL = "/:id";
  const response = await this.restApiConn.delete(URL, itemsForm);
};


checklistItemsRestApi.updateItem = async function insertItem(newItemForm) {
  const URL = "/items/update";
  const response = await this.restApiConn.put(URL, newItemForm);

  return response;
};

checklistItemsRestApi.deleteCard = async function updateCard(cardForm) {
  const URL = "/cards/:id/updateCard/:id";
  const response = await restApiConn.post(URL, cardForm);
};

checklistItemsRestApi.updateCard = async function updateCard(cardForm) {
  const URL = "/cards/:id/updateCard/:id";
  const response = await restApiConn.post(URL, cardForm);
};

export default checklistItemsRestApi;
