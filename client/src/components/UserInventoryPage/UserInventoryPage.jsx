import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './UserInventoryPage.css';
import InventoryItemCard from '../InventoryItemCard/InventoryItemCard.jsx';
import { UserContext } from '../../contexts/UserContext.jsx';


function UserInventoryPage() {
    const [userID, setUserID] = useContext(UserContext);

    const [usersItems, setUsersItems] = useState([]);

    const navigate = useNavigate();

    // displays a list of items made by the user
    useEffect(() => {
        fetch(`http://localhost:1337/item/user/${userID}`)
            .then((res) => res.json())
            .then((data) => {
                setUsersItems(data);
            })

    }, [])

    return (
        <>
            <nav>
                <button onClick={() => navigate(-1)}>Go Back</button>
            </nav>

            {(userID > 0) ? (
                <>
                    <h1>My Inventory</h1>
                    <button className='edit-button'>Edit</button>

                    {usersItems.map((item) => (
                        <InventoryItemCard
                            id={item.id}
                            user_id={item.user_id}
                            item_name={item.item_name}
                            description={item.description}
                            quantity={item.quantity}
                        />
                    ))}
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
