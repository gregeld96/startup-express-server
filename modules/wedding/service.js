const { WeddingComment } = require('../../models');

class WeddingService {
    static async getComments(){
        try {
            let comments = await WeddingComment.findAll();

            return {
                comments
            }
        } catch (error) {
            throw(error)
        }
    }
    static async createComment({name, description}){
        try {
            let newComment = {
                name: name,
                description: description
            };

            await WeddingComment.create(newComment);
        } catch (error) {
            throw(error)
        }
    }
}

module.exports = WeddingService;