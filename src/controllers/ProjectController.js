
const knex = require('../database')

module.exports = {
    async index(req, res, next) {
        try {
            const { user_id, page = 1 } = req.query;

            const query = knex('company')
                .limit(5)
                .offset((page - 1) * 5)

            const countObj = knex('company').count()


            if (user_id) {
                query
                    .where({ user_id })
                    .join('employee', 'employee.id', '=', 'company.user_id')
                    .select('company.*', 'employee.username')
                    .where('employee.deleted_at', null)

                countObj
                    .where({ user_id })
            }

            const [count] = await countObj
            res.header('X-Total-Count', count["count"])

            const results = await query

            return res.json(results)
        } catch (error) {
            next(error)
        }
    },
    async create(req, res, next) {
        try {
            const { title, user_id } = req.body

            await knex('company').insert({
                title,
                user_id
            })

            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    }
}