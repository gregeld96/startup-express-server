const WeddingService = require("./service");

class WeddingController {
    static async getAll(req, res, next) {
        try {
            res.status(200).json({
                success: true,
                message: 'Success get all comments',
                data: await WeddingService.getComments()
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async create(req, res, next) {
        try {
            res.status(201).json({
                success: true,
                message: 'Success create comment',
                data: await WeddingService.createComment({
                    name: req.body.name,
                    description: req.body.description
                })
            })
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = WeddingController;