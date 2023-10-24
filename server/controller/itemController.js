const { Item,User} = require('../models')

class itemController{
    static async getItems(req, res){
        try {
            let items = await Item.findAll({
                order: [
                    ["id", "ASC"]
                ],
                include: [
                    User
                ],
            });

            res.status(200).json(items);
        } catch (err) {
            res.status(500).json(err)
        }
    }
    static async create(req, res){
        try {
            const{name,category,price,stock,UserId}= req.body
            
            let image = "https://via.placeholder.com/100"

            let result = await Item.create({
                name,category,price,stock,image,UserId
            })
            res.status(201).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }
    static async delete(req, res){
        try {
            let id = +req.params.id

            let result = await Item.destroy({
                where : {id}
            })

            result === 1 ?
            res.status(201).json({
               message : `Id ${id} udah udah` 
            }):
            res.status(400).json({
                message : `id ${id} mana ada`
            })
        } catch (err) {
            res.status(500).json(err)
        }
    }
    static async update(req, res){
        try {
            let id = +req.params.id
            const {name,category,price,stock,image,UserId} = req.body

            let result = await Item.update({
                name,category,price,stock,image,UserId
            },
            {
                where:{id}
            })

            result[0] === 1 ?
            res.status(201).json({
               message : `Id ${id} done bg` 
            }):
            res.status(400).json({
                message : `id ${id} gk bisa`
            })
        } catch (err) {
            res.status(500).json(err)
        }
    }


    static async getDetails(req, res){
        try {
            const id = +req.params.id

            let result = await Item.findByPk(id)

            result ?
            res.status(200).json(result):
            res.status(400).json({
                message : `id ${id} dikata mak kamu yang punya semua`
            });
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = itemController