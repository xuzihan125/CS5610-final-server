import Follows from "./model.js";

export const userFollowsUser = (follower, following) => {
    return Follows.create({ follower: follower, following: following })
}

export const userUnfollowsUser = (follower, following) => {
    return Follows.deleteOne({ follower: follower, following: following })
}

// Find those who follow the user (i.e. others is following who)
export const findFollowersOfUser = (following) => {
    return Follows.find({ following: following }).populate("follower")
}

// Find those who the user is following (i.e. is a follower of)
export const findFollowingByUser = (follower) => {
    return Follows.find({ follower: follower }).populate("following")
}