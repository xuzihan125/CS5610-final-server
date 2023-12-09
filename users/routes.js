import * as dao from './dao.js';

function UserRoutes(app) {

    const findAllUsers = async (req, res) => {
        const users = await dao.findAllUsers();
        res.json(users);
    }

    const findUserById = async (req, res) => {
        const id = req.params.id;
        const user = await dao.findUserById(id);
        res.json(user);
    }

    const findUserByUsername = async (req, res) => {
        const username = req.params.username;
        const user = await dao.findUserByUsername(username);
        res.json(user);
    }

    const findUserByCredentials = async (req, res) => {
        const { username, password } = req.params;
        const user = await dao.findUserByCredentials(username, password);
        res.json(user);
    }

    const findUsersByRole = async (req, res) => {
        const { role } = req.params;
        const users = await dao.findUsersByRole(role);
        res.json(users);
    }

    const createUser = async (req, res) => {
        const { username, password, firstName, lastName, email, birthday, isVegeterian, isVegan, isLactoseIntolerant, isGlutenIntolerant, role } = req.body;
        const user = await dao.createUser({ username, password, firstName, lastName, email, birthday, isVegeterian, isVegan, isLactoseIntolerant, isGlutenIntolerant, role });
        res.json(user);
    }

    const updateUser = async (req, res) => {
        const id = req.params.id;
        const newUser = req.body;
        const status = await dao.updateUser(id, newUser);
        const currentUser = await dao.findUserById(id);
        req.session["currentUser"] = currentUser;
        res.json(status);
    }

    const updateFirstName = async (req, res) => {
        const id = req.params.id;
        const newFirstName = req.params.firstName;
        const status = await dao.updateUser(id, { firstName: newFirstName });
        res.json(status);
    }

    const deleteUser = async (req, res) => {
        const id = req.params.id;
        const status = await dao.deleteUser(id);
        res.json(status);
    }

    const signin = async (req, res) => {
        const { username, password } = req.body;
        const user = await dao.findUserByCredentials(username, password);
        if (user) {
            const currentUser = user;
            req.session["currentUser"] = currentUser;
            res.json(user);
        } else {
            res.sesndStatus(403);
        }
    }

    const signout = async (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    }

    const account = async (req, res) => {
        const currentUser = req.session["currentUser"];
        res.json(currentUser);
    }

    app.post("/users/signout", signout);
    app.post("/users/signin", signin);
    app.post("/users/account", account);

    app.get("/users", findAllUsers)
    app.get("/users/:id", findUserById)
    app.get("/users/username/:username", findUserByUsername)
    app.get("/users/credentials/:username/:password", findUserByCredentials)
    app.get("/users/role/:role", findUsersByRole)
    app.get("/users/:username/:password/:firstName/:lastName/:email/:birthday/:isVegeterian/:isVegan/:isLactoseIntolerant/:isGlutenIntolerant/:role", createUser)
    app.get("/users/updateFirstName/:id/:firstName", updateFirstName)
    app.delete("/users/:id", deleteUser)
    app.put("/users/:id", updateUser)
}

export default UserRoutes;