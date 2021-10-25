!["Screenshot"](https://github.com/shivanix/ordersAssigner/blob/main/screenshots/ordersAssigner%20img.png?raw=true)


# ordersAssigner

  ordersAssigner is a full stack web application built using React, Node.js, Express, pg, and PostgreSQL for DBMS.

## What is ordersAssigner
  It is a drag-and-drop system for managing a list of orders to be assigned to different drivers

## Getting Started

### 1. Execute the following to set up ordersAssigner server-side:

```sh
cd <project-directory>
https://github.com/shivanix/ordersAssigner.git
cd ordersAssigner
npm install
```
(If needed for the next step; Install [Postgres](https://www.postgresql.org).)

Update the node-postgress/db.js file as necessary: Update the
- user <Your username>
- password <Your password>
- database <Database name>

  
Log into Postgres as a user with superuser privileges.  For example:

```sh
sudo -u postgres psql
```
Execute the following to set up the test database and populate it with data:

Example:

- CREATE USER random_test WITH NOSUPERUSER PASSWORD 'random';
- CREATE DATABASE orders_assigner OWNER random_test;
- GRANT ALL ON DATABASE random_test TO random_test;

```ssh
Connect to database server based on what is in the node-postgress/db.js file 
e.g. \c orders_assigner or <your database name>

  
  
Run the following commands
\i db/schema/drivers.sql
\i db/schema/orders.sql
\i db/seeds/drivers.sql
\i db/seeds/orders.sql
-- Use this to verify the data:
SELECT * FROM orders;
```

On a seperate terminal execute the following:
```sh
cd <node-postgress>
node index.js
```
### 2. Execute the following to set up ordersAssigner client-side:
On a seperate terminal execute the following:
```sh
cd <client>
npm start
```
At the end of this you will have three seperate terminals running parallely.

## Dependencies

- React
- React beautiful dnd 
- cors
- Node 10.x or above
- NPM 5.x or above
- express
- pg
- pg-native
