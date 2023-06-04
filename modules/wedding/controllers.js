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
            res.status(500).json({
                success: false,
                message: JSON.stringify(error),
            })
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
            res.status(500).json({
                success: false,
                message: JSON.stringify(error),
            })
        }
    }
}

module.exports = WeddingController;