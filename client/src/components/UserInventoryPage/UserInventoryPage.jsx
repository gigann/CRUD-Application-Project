import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './UserInventoryPage.css';
import InventoryItemCard from '../InventoryItemCard/InventoryItemCard.jsx';
import { UserContext } from '../../contexts/UserContext.jsx';


function UserInventoryPage() {
    const [userID, setUserID] = useContext(UserContext);

    const [usersItems, setUsersItems] = useState([]);
    const [editMode, setEditMode] = useState(false);

    const navigate = useNavigate();

    // displays a list of items made by the user
    useEffect(() => {
        fetch(`http://localhost:1337/item/user/${userID}`)
            .then((res) => res.json())
            .then((data) => {
                setUsersItems(data);
            })

    }, [])

    // add new items
    const addItem = (itemName, description, quantity) => {

    }

    return (
        <>
            <nav>
                <button onClick={() => navigate('/')}>Return Home</button>
            </nav>

            {(userID > 0) ? (
                <>
                    <h1>My Inventory</h1>
                    <button className='toggle-edit-button' onClick={(e) => {
                        setEditMode(!editMode);
                    }}>{(editMode) ? (
                        'Disable Edit Mode'
                    ) : (
                        'Enable Edit Mode'
                    )}</button>

                    {(editMode) ? (
                        <>
                            <form>
                                <h3>Add a New Item</h3>
                                <input id='item-name-input' type='text' placeholder='Item Name'></input>
                                <input id='description-input' type='text' placeholder='Description'></input>
                                <input id='quantity-input' type='number' placeholder='Quantity'></input>
                                <button className='add-item-button' onClick={(e) => {
                                    addItem(
                                        document.querySelector('#item-name-input').value,
                                        document.querySelector('#description-input').value,
                                        document.querySelector('#quantity-input').value
                                    );
                                }}>Add Item</button>
                            </form>
                            <h3>Edit or Delete Existing Items</h3>
                            {usersItems.map((item) => (
                                <InventoryItemCard
                                    key={item.id}
                                    id={item.id}
                                    user_id={item.user_id}
                                    item_name={item.item_name}
                                    description={item.description}
                                    quantity={item.quantity}
                                    editable={true}
                                />
                            ))}
                        </>
                    ) : (
                        <>
                            {usersItems.map((item) => (
                                <InventoryItemCard
                                    key={item.id}
                                    id={item.id}
                                    user_id={item.user_id}
                                    item_name={item.item_name}
                                    description={item.description}
                                    quantity={item.quantity}
                                    editable={false}
                                />
                            ))}
                        </>
                    )}


                </>
            ) : (
                <>
                    <h1>Oops! You're not supposed to be here!</h1>
                </>
            )}
        </>
    )
}

export default UserInventoryPage;
