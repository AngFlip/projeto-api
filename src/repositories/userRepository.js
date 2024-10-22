const User = require('../models/user');

class userRepository {
    async createUser(model)
    {
        return await User.create(model);
    }

    async findByUserName(username) {
        return await User.find({where: {username}});
    }

    async findAll() {
        return await User.findAll();
    }
}