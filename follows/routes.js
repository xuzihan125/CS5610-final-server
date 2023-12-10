import * as dao from "./dao.js";

function FollowsRoutes(app) {
    const userFollowsUser = async (req, res) => {
        const follower = req.session["currentUser"]._id;
        const following = req.params.following;
        const follows = await dao.userFollowsUser(follower, following);
        res.json(follows);
    }

    const userUnfollowsUser = async (req, res) => {
        const follower = req.session["currentUser"]._id;
        const following = req.params.following;
        const status = await dao.userUnfollowsUser(follower, following);
        res.json(status);
    }

    const findFollowersOfUser = async (req, res) => {
        const following = req.params.following;
        const followers = await dao.findFollowersOfUser(following);
        res.json(followers);
    }

    const findFollowingUsersByUser = async (req, res) => {
        const follower = req.params.follower;
        const following = await dao.findFollowingByUser(follower);
        res.json(following);
    }

    app.post("/users/:following/follows", userFollowsUser);
    app.delete("/users/:following/follows", userUnfollowsUser);
    app.get("/users/:following/followers", findFollowersOfUser);
    app.get("/users/:follower/following", findFollowingUsersByUser);
}

export default FollowsRoutes;