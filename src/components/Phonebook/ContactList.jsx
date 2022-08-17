const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
          {contacts.map(({ id, name, number }) => (
            <li key={id}>
              {name} : {number}
              <button
                key={id}
                onClick={() => deleteContact(id)}
                type="button"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
  )
};

export default ContactList;
