const db = require('../../data/dbConfig');

module.exports = {
    find,
    findById,
    add,
    update,
    destroy,
}

function find(){
    return db('workouts')
}

function findById(id) {
    return db('workouts')
      .where({ id })
      .first();
  }

async function add(workout){
    const [id] = await db('workouts').insert(workout);

    return db('workouts').where({ id }).first()
}

function destroy(id){
    return db('workouts').where({ id }).del()
}

function update(id, changes) {
    return db('workouts')
      .where({ id })
      .update(changes);
  }

