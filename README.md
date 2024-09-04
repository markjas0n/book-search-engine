# Book Search Engine

## Content
1. [Overview](#overview)
2. [Screenshots](#screenshots)
3. [Features](#features)
4. [Technologies Used](#technologies-used)
5. [Installation](#installation)
6. [Installation](#installation)
7. [Usage](#usage)
8. [Deployment](#deployment)
9. [Future Improvments](#future-improvements)
10. [License](#license)
11. [Acknowledgements](#acknowledgements)
12. [Contact](#contact)

## Overview

The Book Search Engine is a full-stack web application built using the MERN (MongoDB, Express.js, React, Node.js) stack with Apollo Server for GraphQL API handling. The application allows users to search for books using the Google Books API and save their favorite books to a personal list, accessible upon login.

## Screenshots

## Features

- **Search for Books**: Users can search for books by title, author, or keyword using the Google Books API.
- **User Authentication**: Users can sign up and log in to create a personal account.
- **Save and Remove Books**: Authenticated users can save books to their personal list and remove them if needed.
- **GraphQL API**: The application uses Apollo Server to handle GraphQL queries and mutations for managing user data and book information.
- **Responsive Design**: The UI is built with React and styled using Bootstrap to ensure responsiveness across devices.

## Technologies Used

- **MongoDB**: NoSQL database for storing user data and saved books.
- **Express.js**: Web framework for Node.js.
- **React**: Front-end library for building user interfaces.
- **Node.js**: JavaScript runtime for the server.
- **Apollo Server**: GraphQL server for handling API requests.
- **JWT**: JSON Web Tokens for user authentication.
- **Google Books API**: External API for fetching book data.
- **Vite**: Front-end tooling for fast development and building.

## Installation

### Prerequisites

- **Node.js** and **npm** installed on your machine.
- **MongoDB** running locally or using a cloud service like MongoDB Atlas.

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/book-search-engine.git      
   cd book-search-engine 
   ``` 
2. **Install server dependencies**:
    ```bash
    cd Develop/server
    npm install
    ``` 
3. **Install client dependencies**:
    ```bash
    cd ../client
    npm install
4. **Set up environment variables**:
Create a .env file in the /server directory with the following content:
    ``` bash
    MONGODB_URI=mongodb://127.0.0.1:27017/googlebooks
    NODE_ENV=development
- Adjust the MONGODB_URI if you're using MongoDB Atlas or a different MongoDB instance.

5. **Start the development server**:
From the root of the project, run:
    ``` bash
    npm run develop

This will start both the Express server and the React client.
Access the application:

Open your browser and go to http://localhost:3000.
## Usage

1. Search for Books: Enter a keyword in the search bar to search for books.
2. Sign Up: Create a new account using the Sign Up form.
3. Log In: Log in with your credentials to start saving books.
4. Save Books: Click the "Save this Book!" button to add books to your saved list.
5. View Saved Books: Go to the "See Your Books" page to view all the books you've saved.
6. Remove Books: Click the "Delete this Book!" button to remove books from your saved list.

## Deployment
To deploy the application, you can use a platform like Render or Heroku. Make sure to:

1. Push your code to a Git repository (e.g., GitHub).
2. Create a new web service on your chosen platform, connecting it to your repository.
3. Set environment variables on the platform to match those in your local .env file.
4. Deploy the application. The platform will automatically build and serve your application.
## Future Improvements
- Pagination: Implement pagination for search results.
- User Profiles: Allow users to update their profiles.
- Enhanced Book Details: Display more detailed information about each book.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.



## Acknowledgements
- [Google Books API]() for providing book data.
- [Bootstrap]() for styling the application.
- [Apollo Client]() for handling GraphQL queries and mutations.

## Contact

If you have any questions or suggestions, feel free to contact me at [markjas0n@icloud.com](markjas0n@icloud.com).