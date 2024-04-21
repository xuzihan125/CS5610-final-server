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
        const { username, password, firstName, lastName, email, birthday, isVegeterian, isGlutenIntolerant, role } = req.body;
        if (!username || !password || !email) {
            res.status(400).json({ message: "Username, password and email are required" });
            return;
        }
        const existingUserByUsername = await dao.findUserByUsername(username);
        if (existingUserByUsername) {
            res.status(400).json({ message: "Username already exists" });
            return;
        }
        const existingUserByEmail = await dao.findUserByEmail(email);
        if (existingUserByEmail) {
            res.status(400).json({ message: "Email already exists" });
            return;
        }
        const user = await dao.createUser({ username, password, firstName, lastName, email, birthday, isVegeterian, isGlutenIntolerant, role });
        res.json(user);
    }

    const updateUser = async (req, res) => {
        const id = req.params.id;
        const newUser = req.body;
        const duplicateUserByUsername = await dao.findUserByUsername(newUser.username);
        if (duplicateUserByUsername && duplicateUserByUsername._id != id) {
            res.status(400).json({ message: "Username already exists" });
            return;
        }
        const duplicateUserByEmail = await dao.findUserByEmail(newUser.email);
        if (duplicateUserByEmail && duplicateUserByEmail._id != id) {
            res.status(400).json({ message: "Email already exists" });
            return;
        }
        if (!newUser.username || !newUser.password || !newUser.email) {
            res.status(400).json({ message: "Username, password and email are required" });
            return;
        }
        const status = await dao.updateUser(id, newUser);
        const currentUser = await dao.findUserById(id);
        req.session["currentUser"] = currentUser;
        res.json(status);
    }

    const updateFirstName = async (req, res) => {
        const id = req.params.id;
        const newFirstName = req.params.newFirstName;
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
            res.sendStatus(403);
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

    const signup = async (req, res) => {
        const { username, password, firstName, lastName, email, birthday, isVegeterian, isGlutenIntolerant, role } = req.body;
        if (!username || !password || !email) {
            res.status(400).json({ message: "Username, password and email are required" });
            return;
        }
        const existingUserByUsername = await dao.findUserByUsername(username);
        if (existingUserByUsername) {
            res.status(400).json({ message: "Username already exists" });
            return;
        }
        const existingUserByEmail = await dao.findUserByEmail(email);
        if (existingUserByEmail) {
            res.status(400).json({ message: "Email already exists" });
            return;
        }
        const user = await dao.createUser({ username, password, firstName, lastName, email, birthday, isVegeterian, isGlutenIntolerant, role });
        if (user) {
            const currentUser = user;
            req.session["currentUser"] = currentUser;
            res.json(user);
        } else {
            res.sendStatus(403);
        }
    }

    const findUserByEmail = async (req, res) => {
        const email = req.params.email;
        const user = await dao.findUserByEmail(email);
        res.json(user);
    }

    const findUsersBySearchTerm = async (req, res) => {
        const searchTerm = req.params.searchTerm;
        const users = await dao.findUsersBySearchTerm(searchTerm);
        res.json(users);
    }

    app.post("/users/signout", signout);
    app.post("/users/signin", signin);
    app.post("/users/account", account);
    app.post("/users/signup", signup);
    app.post("/users/create", createUser);
    app.get("/users", findAllUsers)
    app.get("/users/:id", findUserById)
    app.get("/users/username/:username", findUserByUsername)
    app.get("/users/search/:searchTerm", findUsersBySearchTerm);
    app.get("/users/credentials/:username/:password", findUserByCredentials)
    app.get("/users/email/:email", findUserByEmail)
    app.get("/users/role/:role", findUsersByRole)
    app.get("/users/updateFirstName/:id/:newFirstName", updateFirstName)
    app.delete("/users/:id", deleteUser)
    app.put("/users/:id", updateUser)
}

export default UserRoutes;
