export const Contacts = ({contactsList, onDeleteContact}) => {
    
    return(
        <ul>
            {contactsList.map(({id, name, number}) => {
                return (
                <li key={id}>
                    <p>{name}</p>
                    <p>{number}</p>
                    <button 
                        type="button"
                        onClick={() => onDeleteContact(id)}
                        >
                        Delete Contact
                    </button>
                </li>
                )
            })}
        </ul>
    )
}