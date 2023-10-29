const Joi = require("joi");

const id = Joi.number();
const text = Joi.string();
const done = Joi.boolean();

const checkTaskIdSchema = Joi.object({
    id: id.required()
});

const createTaskSchema = Joi.object({
    text: text.required(),
    done: done.required()
});

const updateTaskSchema = Joi.object({
    text: text,
    done: done
});

module.exports = {
    checkTaskIdSchema,
    createTaskSchema,
    updateTaskSchema
}