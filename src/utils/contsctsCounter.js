export const countContacts = contacts => {
  if (contacts.length === 0) {
    return 0;
  }
  return contacts.length;
};
