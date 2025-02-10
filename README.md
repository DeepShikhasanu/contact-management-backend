# Contact Management Backend

This is a backend API for managing contacts, built using Node.js, Express, and MongoDB.

## Base URL

```
https://contact-management-backend-vafc.onrender.com/
```

## Installation

1. Clone the repository:
   ```sh
   git clone <repository_url>
   cd contact-management-backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add the required environment variables (MongoDB connection string, etc.).
4. Start the server:
   ```sh
   npm start
   ```

## API Endpoints

### Get All Contacts
```
GET /contacts/
```
#### Response:
```json
[
  {
    "_id": "67aa0c8596a38f857d3c5056",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "phone": "1234567890"
  }
]
```

### Get Contact by ID
```
GET /contacts/:id
```
#### Response:
```json
{
  "_id": "67aa0c8596a38f857d3c5056",
  "name": "John Doe",
  "email": "johndoe@example.com",
  "phone": "1234567890"
}
```

### Create a New Contact
```
POST /contacts/
```
#### Request Body:
```json
{
  "name": "Jane Doe",
  "email": "janedoe@example.com",
  "phone": "0987654321"
}
```
#### Response:
```json
{
  "message": "Contact created successfully",
  "contact": {
    "_id": "67aa0c8596a38f857d3c5057",
    "name": "Jane Doe",
    "email": "janedoe@example.com",
    "phone": "0987654321"
  }
}
```

### Update Contact
```
PUT /contacts/:id
```
#### Request Body:
```json
{
  "name": "Updated Name",
  "email": "updated@example.com",
  "phone": "1122334455"
}
```
#### Response:
```json
{
  "message": "Contact updated successfully"
}
```

### Delete Contact
```
DELETE /contacts/:id
```
#### Response:
```json
{
  "message": "Contact deleted successfully"
}
```

## Common Errors

- `400 Bad Request`: Missing required fields (e.g., name, email, phone).
- `404 Not Found`: Contact ID not found in the database.
- `500 Internal Server Error`: Server-related issues (e.g., database connection failures).

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- nodemon

## License

This project is open-source and available under the [MIT License](LICENSE).

