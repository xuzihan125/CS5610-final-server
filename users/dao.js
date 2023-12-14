import User from './model.js';
import Like from '../likes/model.js';
import Recipe from '../recipes/model.js';
import Follows from '../follows/model.js';

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

export const findUsersBySearchTerm = (searchTerm) => {
    return User.find({ username: { $regex: searchTerm, $options: 'i' } })
}

export const findUserByEmail = (email) => {
    return User.findOne({ email: email })
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

export const deleteUser = async (id) => {
    await Like.deleteMany({ user: id }).exec()
    await Follows.deleteMany({ follower: id }).exec()
    await Follows.deleteMany({ following: id }).exec()
    return User.deleteOne({ _id: id })
}

