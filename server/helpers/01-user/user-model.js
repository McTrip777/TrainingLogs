const db = require('../../data/dbConfig');

module.exports = {
    find,
    getBy,
    findById,
    destroy,
    add,
    getUserWorkouts,
    addWorkoutToUser
}

function find(){
    return db('user')
}

function findById(id) {
    return db('user')
      .where({ id })
      .first();
  }

async function add(user){
    const [id] = await db('user').insert(user);

    return db('user').where({ id }).first()
}

function getBy(select){
    return db('user').where(select).first();
}


function destroy(id){
    return db('user').where({ id }).del()
}

function getUserWorkouts(userID){
    return db('workout')
        .join('user', 'user.id', 'workout.user_id')
        .select('workout.*' )
        .where('workout.user_id', userID)
}

function addWorkoutToUser(workout){
    return db('workout')
    .insert({
        date: workout.date,
        load: workout.load,
        exercise: workout.exercise,
        duration: workout.duration,
        effort: workout.effort,
        impression: workout.impression,
        problem: workout.problem,
        grade: workout.grade,

        user_id: workout.user_id
    })
}
