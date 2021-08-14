const knex = require('../database')

module.exports = {
    async index(req, res) {
        const results = await knex('employee')
            .where('deleted_at', null)

        return res.json(results)
    },
    async create(req, res, next) {
        try {
            const { username } = req.body

            await knex('employee').insert({
                username
            })

            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    },
    async update(req, res, next) {
        try {
            const { username } = req.body
            const { id } = req.params


            await knex('employee')
                .update({ username })
                .where({ id })

            return res.send()

        } catch (error) {
            next(error)
        }
    },
    async delete(req, res, next) {
        try {
            const { id } = req.params

            await knex('employee')
                .where({ id })
                .update('deleted_at', new Date())



            return res.send()
        } catch (error) {
            next(error)
        }
    }
}