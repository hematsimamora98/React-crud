const { User } = require('../models')

class UserController{
    static async getUsers(req, res){
        try {
            let Users = await User.findAll()

            res.status(200).json(Users)
        } catch (err) {
            res.status(500).json(err)
        }
    }
    static async register(req, res){
        try {
            const{username,email,password,role}= req.body
            
            let image = "https://via.placeholder.com/100"

            let result = await User.create({
                username,email,password,image,role
            })
            res.status(201).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async loginUsers(req,res){
        try {
            const {email, password}=req.body
            let result = await User.findOne({
                where:{email}
            })

            if(result){
                if(result.password === password){
                res.status(201).json(result)
                }else{
                    res.status(400).json({
                        message:"password salah",
                    });
                }
            }else{
                res.status(404).json({
                    message:"email lu gk ada"
                })
            }
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async delete(req, res){
        try {
            let id = +req.params.id

            let result = await User.destroy({
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
            const {username,email,password,image,role} = req.body

            let result = await User.update({
                username,email,password,image,role
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

            let result = await User.findByPk(id)

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

module.exports = UserController