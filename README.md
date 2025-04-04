# CRUD Application Project
This repo contains the frontend and backend for my Z-Prefix CRUD application.

## Prerequisites
1. A docker postgres image
2. A postgres instance
    - username: postgres
    - password: docker
    - port: 5432:5432
>To start the postgres instance, run `$ docker run --name some-pg-docker-name -e POSTGRES_PASSWORD=docker -d -p 5432:5432 postgres`
3. A database named `inventory` in the postgres container
    - To add this database:
        1. `$ docker exec -it postgres-instance-container-id bash`
        2. `# psql -U postgres`
        3. `# CREATE DATABASE inventory;`
4. A `.env` file in the `server` folder with the following contents:

        PG_HOST = localhost
        PG_USER = postgres
        PG_PASSWORD = docker
        PG_DATABASE = inventory
        PG_PORT = 5432

## How to Download
- `git clone https://github.com/gigann/CRUD-Application-Project.git`
- download and extract the zip.

## How to Run
### Running the Back-End Server
Navigate to the `server` directory and run `$ npm install` to install dependencies. Next, run `$ npm run dev`. This will rollback, migrate, and seed the database, and start the server. However, if only starting the server is desired, run `$ npm start` instead. The server will be live on `http://localhost:1337`.

### Running the Front-End Client
Navigate to the `client` directory and run `$ npm install` to install dependencies. Next, run `$ npm run dev` or `$ npm start`. The client will be live on `http://localhost:2077`.

## How to Use
This full-stack application allows inventory managers to create accounts, and, once logged in, to create, update, and delete items in their personal inventories. The application also allows inventory managers and visitors to view the inventory of all items.
### As an Inventory Manager
#### Create an Account
1. On the *home page*, click the `Create Account` button. This will redirect you to the *registration page*. You cannot create an account if you are already logged in. If necessary, log out by clicking the `Logout` button.
2. On the *registration page*, enter your `First Name`, `Last Name`,  `Username` and `Password`.
3. Click the `Create Account` button. You will be notified if your account was successfully registered. User accounts must have unique usernames.
4. After creating your account, you will be automatically logged in and redirected to your *personal inventory page*.

#### Login to an Account
1. On the *home page*, Click the `Login` button.
2. On the *login page*, enter your `Username` and `Password`.
3. Click the `login button.`
4. If successfully authenticated, you will be automatically redirected to your *personal inventory page*.

#### View and Edit Your Inventory
1. On the *home page*, click the `View Personal Inventory` button. This will redirect you to your *personal inventory page*.
    #### View Details
    1. On the *personal inventory page*, click an item to view its details.
    2. Click the `Go Back` button to return to viewing personal items.
    #### Add a New Item
    1. On the *personal inventory page*, click the `Enable Edit Mod` button.
    2. Under the *Add a New Item* section, enter the `Item Name`, `Description`, and `Quantity`.
    3. Click the `Add Item` button to add the item to the database.
    #### Edit an Item
    1. On the *personal inventory page*, click the `Enable Edit Mod` button.
    2. Under the *Edit or Delete Existing Items* section, modify the `Item Name`, `Description`, and `Quantity` fields of a particular item.
    3. To save your changes, click the `Edit Item` button in the same row.
    #### Delete an Item
    1. On the *personal inventory page*, click the `Enable Edit Mod` button.
    2. Under the *Edit or Delete Existing Items* section, click the `Delete Item` button.

#### View All Inventories
1. On the *home page*, click the `View All Inventories` button. This will redirect you to the *global inventory page*.
2. On the *global inventory page*, click an item to view its details.
3. Click the `Go Back` button to return to viewing all items.

### As a Visitor

#### View All Inventories
1. On the *home page*, click the `View All Inventories` button. This will redirect you to the *global inventory page*.
2. On the *global inventory page*, click an item to view its details. This will redirect you to the *item details page*.
3. On the *item details page*, click the `Go Back` button to return to the *global inventory page*.

## Login Information for Seeded Inventory Manager Accounts
| User ID|Username|Password|
|-|-|-|
|1|`smbro`|`MAR10`|
|2|`mc_master`|`25565`|
|3|`vampire_killer`|`Wallachia1476!`|

## Additional Notes
- Passwords are salted and hashed.
- User IDs are temporarily stored as cookies.