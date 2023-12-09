import User from './model.js';

export const findAllUsers = () => {
    User.find()
};

export const findUserById = (id) => {
    User.findById(id)
}

export const findUserByUsername = (username) => {
    User.findOne({ username: username })
}

export const findUserByCredentials = (username, password) => {
    User.findOne({ username: username, password: password })
}

export const findUsersByRole = (role) => {
    User.find({ role: role })
}

export const createUser = (user) => {
    User.create(user)
}

export const updateUser = (id, user) => {
    User.updateOne({ _id: id }, { $set: user })
}

export const deleteUser = (id) => {
    User.deleteOne({ _id: id })
}

