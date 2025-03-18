const z = require("zod")

const createTodo = z.object({
    title: z.string(),
    description: Zod.string()
})

const updateTodo = z.object({
    id: z.string()
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}