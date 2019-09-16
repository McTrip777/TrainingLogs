const db = require('../../data/dbConfig');

module.exports = {
    find,
    findById,
    add,
    update,
    destroy,
}

function find(){
    return db('workout')
}

function findById(id) {
    return db('workout')
      .where({ id })
      .first();
  }

async function add(workout){
    const [id] = await db('workout').insert(workout);

    return db('workout').where({ id }).first()
}

function destroy(id){
    return db('workout').where({ id }).del()
}

function update(id, changes) {
    return db('workout')
      .where({ id })
      .update(changes);
  }

