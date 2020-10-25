# Notes Making App

- You can have a unique ID, title and description for a note in the app.

## Using express as server and mysql for the database

- It uses json web token for user authentication without which only read of the CRUD functionalities work.
- Sequelize is used as an orm for the handling of the database queries.

### Installing dependencies

- `npm install`

### Running App

- Set the environment variables in environment file (.env)
- PORT in app.js and rest env var are in database.js file
- `npm start`