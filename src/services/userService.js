const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/userRepository');

class userService {
    async register(username, password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = userRepository.createUser({username, password: hashedPassword});
        return user;
    }
    
    async login(username, password){

    }
    
    async getUsers() {
        return userRepository.findAll();
    }
}

module.exports = new userService();