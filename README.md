# CRUD Project Application
This repo contains both the front-end and back-end for my CRUD Application Project for the Z-Prefix.

## Prerequisites
1. A docker postgres image
2. A postgres instance
    - username: postgres
    - password: docker
    - port: 5432:5432
        - To start the postgres instance, run `$ docker run --name some-pg-docker-name -e POSTGRES_PASSWORD=docker -d -p 5432:5432 postgres`
>For reference, the connection string in the server's knexfile.js is `postgres://postgres:docker@localhost:5432/inventory`
3. A database named `inventory` in the postgres container.
    - To add this database:
        1. `$ docker exec -it postgres-instance-container-id bash`
        2. `# psql -U postgres`
        3. `\l` and check if a database named inventory exists. If not, then proceed to step 4. Press (q) to close.
        3. `# CREATE DATABASE inventory;`
## How to Download
`git clone https://github.com/gigann/CRUD-Application-Project.git` or download and extract the zip.

## How to Run
### Running the Back-End Server
Navigate to the `server` directory and run `npm start`. This will perform migrations, seeds, and start the server. However, if an initial rollback is desired, run `npm run dev` instead. The server will be live on `http://localhost:1337`.

### Running the Front-End Client
Navigate to the `client` directory and run `npm start`. The client will be live on `http://localhost:2077`.


## How to Use
This full-stack application allows inventory managers to create accounts, and, once logged in, to create, update, and delete items in their personal inventories. The application also allows inventory managers and visitors to view the inventory of all items.
### As an Inventory Manager
#### Create an Account
1. On the *home page*, Click the `Login` button.
2. On the *login page*, enter your `Username` and `Password`.
3. Click the `login button.`
4. If successfully authenticated, the inventory manager will be redirected to their *personal inventory page*.

#### Login to an Account
1. On the *home page*, Click the `Login` button.
2. On the *login page*, enter your `Username` and `Password`.
3. Click the `login button.`
4. If successfully authenticated, the inventory manager will be redirected to their *personal inventory page*.

#### Logout of an Account
On the *home page*, click the `Logout` button.

#### View All Inventories
1. On the *home page*, click the `View All Inventories` button. This will redirect the **Inventory Manager** to the *global inventory page*.
2. On the *global inventory page*, click an item to view its details. This will redirect the **Inventory Manager** to the *item details page*.
3. On the *item details page*, click the `Go Back` button to return to the *global inventory page*.

### As a Visitor

#### View All Inventories
1. On the *home page*, click the `View All Inventories` button. This will redirect the **Visitor** to the *global inventory page*.
2. On the *global inventory page*, click an item to view its details. This will redirect the **Visitor** to the *item details page*.
3. On the *item details page*, click the `Go Back` button to return to the *global inventory page*.

### How to


TODO:

Instructions for spinning up / setting up connection string

Clone or download and extract the zip file.



//client
front end: npm start

//server
back end: npm start

//database


Dummy data
You can login as Mario, Steve, and Simon.
Here are their usernames and passwords:
Mario
username: smbro
password: MAR10

Steve
username: mc_master
password: 25565

Simon
username: vampire_killer
password: Wallachia1476!


To start up the back-end, in the server directory, run the command `npm start`.
This will migrate and seed the databases and start up the nodemon server.
You can also run  `npm run dev` to rollback before migrating and seeding.



    "start": "knex migrate:latest && knex seed:run && node index.js",
    "dev": "knex migrate:rollback && knex migrate:latest && knex seed:run && nodemon index.js",

### Implementation Details
* Passwords are salted and hashed.
* User IDs are temporarily stored as cookies