const uuid = require('uuid')

async function clear(knex) {
  await knex('todo').del()
}

async function seed(knex) {
  await clear(knex)
  const projectId = uuid.v4()
  await knex('project').insert({
    id: projectId,
    title: 'Project',
  })

  await knex('todo').insert({
    projectId,
    id: uuid.v4(),
    title: 'Test action one',
    complete: false,
  })
  await knex('todo').insert({
    projectId,
    id: uuid.v4(),
    title: 'Test action two',
    complete: false,
  })
}
module.exports = { clear, seed }