# Todo-Rest-Api

github: https://github.com/paragkadyan/Todo-Rest-Api

To install all the dependencies:     npm install

To run the API server: npm run dev


variables:  username, email, password (all lowercase)
cookies: toDoAuth


Server is running on http://localhost:4400/

To register user: http://localhost:4400/api/auth/register        [POST]

To login user: http://localhost:4400/api/auth/login              [POST]

To view all users: http://localhost:4400/api/users               [GET]

To delete a user: http://localhost:4400/api/users/dlt/:id        [DELETE]   (replace ' :id ' with the user's id in the url) (user can only delete themselves and must be logged in)

To update username: http://localhost:4400/api/users/update/:id   [PATCH]   (replace ' :id ' with the user's id in the url) (user can only update themselves and must be logged in)


