import authInstance from "./auth-api";

export const getContacts = async() => {
  const {data} = await authInstance.get('/contacts');
  return data;
}

export const addContact = async(data) => {
  const {data: result} = await authInstance.post('/contacts', data)
  return result;
}

export const deleteContact = async(id) => {
  const {data} = await authInstance.delete(`/contacts/${id}`);
  return data;
}