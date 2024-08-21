# Social Network API

[![License](https://img.shields.io/badge/License-MIT_License-green)](http://opensource.org/licenses/MIT)

## Description

The Social Network API is a backend application designed for a social media platform, allowing users to share their thoughts, react to friends’ thoughts, and create a friend list. Built with Express.js and MongoDB using the Mongoose ODM, this API efficiently handles large amounts of unstructured data. The API supports CRUD operations for users, thoughts, reactions, and friend lists.

![Social Network API in action](PICTURE_LINK_HERE)

## Table of Contents

-   [Description](#description)
-   [Functionality](#functionality)
-   [Installation](#installation)
-   [Usage](#usage)
-   [License](#license)
-   [Contributing](#contributing)
-   [Tests](#tests)
-   [Questions](#questions)

## Functionality

This section contains a link to a video that demonstrates the functionality of the Social Network API. The video showcases the API routes being tested in Insomnia, including the creation, updating, and deletion of users and thoughts, as well as adding and removing friends and reactions.

[Watch the walkthrough video here](https://drive.google.com/file/d/1Dq4YWBwyYwhFVpblwlOo6q4k_46lypL-/view)

## Installation

To set up the Social Network API locally, follow these steps:

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/GuillerSaenz/social-network-api.git
    ```

2. Navigate to the project directory:

    ```bash
    cd social-network-api
    ```

3. Install the necessary dependencies:

    ```bash
    npm install
    ```

4. Start the server:

    ```bash
    npm start
    ```

5. Use Insomnia or a similar API client to interact with the API endpoints.

## Usage

The API provides the following routes for managing users, thoughts, reactions, and friend lists:

-   **Users**:

    -   `GET /api/users`: Get all users.
    -   `GET /api/users/:userId`: Get a single user by its `_id` and populated thought and friend data.
    -   `POST /api/users`: Create a new user.
    -   `PUT /api/users/:userId`: Update a user by its `_id`.
    -   `DELETE /api/users/:userId`: Delete a user by its `_id`.

-   **User Friend List**:

    -   `POST /api/users/:userId/friends/:friendId`: Add a new friend to a user's friend list.
    -   `DELETE /api/users/:userId/friends/:friendId`: Remove a friend from a user's friend list.

-   **Thoughts**:

    -   `GET /api/thoughts`: Get all thoughts.
    -   `GET /api/thoughts/:thoughtId`: Get a single thought by its `_id`.
    -   `POST /api/thoughts`: Create a new thought.
    -   `PUT /api/thoughts/:thoughtId`: Update a thought by its `_id`.
    -   `DELETE /api/thoughts/:thoughtId`: Delete a thought by its `_id`.

-   **Reactions**:
    -   `POST /api/thoughts/:thoughtId/reactions`: Create a reaction stored in a single thought's `reactions` array field.
    -   `DELETE /api/thoughts/:thoughtId/reactions/:reactionId`: Remove a reaction by the reaction's `reactionId` value.

## License

This project is licensed under the [MIT License](LICENSE).

## Tests

To test the application, use Insomnia or a similar API client to perform the following:

-   Start the server and ensure it connects to the MongoDB database.
-   Test all `GET`, `POST`, `PUT`, and `DELETE` routes for users and thoughts.
-   Test the `POST` and `DELETE` routes for reactions and friend lists.

Verify that all operations perform as expected and that the data is correctly formatted.

## Questions

If you have any questions about the project or need further assistance, feel free to reach out:

-   GitHub: [GuillerSaenz](https://github.com/GuillerSaenz)
-   Email: guillersaenzs@gmail.com