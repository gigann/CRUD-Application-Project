import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './UserInventoryPage.css';
import InventoryItemCard from '../InventoryItemCard/InventoryItemCard.jsx';
import { UserContext } from '../../contexts/UserContext.jsx';


function UserInventoryPage() {
    const [userID, setUserID] = useContext(UserContext);

    const [usersItems, setUsersItems] = useState([]);
    const [editMode, setEditMode] = useState(false);

    const [updateRender, setUpdateRender] = useState(false);

    const navigate = useNavigate();

    // displays a list of items made by the user
    useEffect(() => {
        fetch(`http://localhost:1337/item/user/${userID}`)
            .then((res) => res.json())
            .then((data) => {
                setUsersItems(data);
            })
            .catch(err => console.log(err))

    }, [updateRender])

    // add new items
    const addItem = (itemName, description, quantity) => {
        fetch('http://localhost:1337/item', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                item_name: itemName,
                user_id: userID,
                description: description,
                quantity: quantity
            })
        })
            .then((res) => res.json())
            .then(data => {
                setUpdateRender(!updateRender);
                console.log(data);
            })
            .catch((err) => {
                console.error('Error with adding item: ', error);
            });
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
                                <input type='button' className='add-item-button' onClick={(e) => {
                                    addItem(
                                        document.querySelector('#item-name-input').value,
                                        document.querySelector('#description-input').value,
                                        document.querySelector('#quantity-input').value
                                    );
                                    // clear inputs for new items
                                    document.querySelector('#item-name-input').value = '';
                                    document.querySelector('#description-input').value = '';
                                    document.querySelector('#quantity-input').value = '';

                                }} value='Add Item' />
                            </form>
                            <h3>Edit or Delete Existing Items</h3>

                            <table>
                                <thead>
                                    <tr>
                                        <th scope='col'>ID</th>
                                        <th scope='col'>User ID</th>
                                        <th scope='col'>Item Name</th>
                                        <th scope='col'>Description</th>
                                        <th scope='col'>Quantity</th>
                                        <th scope='col'>Edit</th>
                                        <th scope='col'>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usersItems.map((item) => (
                                        <InventoryItemCard
                                            key={item.id}
                                            id={item.id}
                                            user_id={item.user_id}
                                            item_name={item.item_name}
                                            description={item.description}
                                            quantity={item.quantity}
                                            editable={true}
                                            updateRender={updateRender}
                                            setUpdateRender={setUpdateRender}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        </>
                    ) : (
                        <>
                            <table>
                                <thead>
                                    <tr>
                                        <th scope='col'>ID</th>
                                        <th scope='col'>User ID</th>
                                        <th scope='col'>Item Name</th>
                                        <th scope='col'>Description</th>
                                        <th scope='col'>Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usersItems.map((item) => (
                                        <InventoryItemCard
                                            key={item.id}
                                            id={item.id}
                                            user_id={item.user_id}
                                            item_name={item.item_name}
                                            description={item.description}
                                            quantity={item.quantity}
                                            editable={false}
                                            updateRender={updateRender}
                                            setUpdateRender={setUpdateRender}
                                        />
                                    ))}
                                </tbody>
                            </table>



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
