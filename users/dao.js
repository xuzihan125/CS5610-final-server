import User from './model.js';

export const findAllUsers = () => {
    return User.find()
};

export const findUserById = (id) => {
    return User.findById(id)
}

export const findUserByUsername = (username) => {
    return User.findOne({ username: username })
}

export const findUserByCredentials = (username, password) => {
    return User.findOne({ username: username, password: password })
}

export const findUsersByRole = (role) => {
    return User.find({ role: role })
}

export const createUser = (user) => {
    return User.create(user)
}

export const updateUser = (id, user) => {
    return User.updateOne({ _id: id }, { $set: user })
}

export const deleteUser = (id) => {
    return User.deleteOne({ _id: id })
}

