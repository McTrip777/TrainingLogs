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
    return db('users')
}

function findById(id) {
    return db('users')
      .where({ id })
      .first();
  }

async function add(user){
    const [id] = await db('users').insert(user);

    return db('users').where({ id }).first()
}

function getBy(select){
    return db('users').where(select).first();
}


function destroy(id){
    return db('users').where({ id }).del()
}

function getUserWorkouts(userID){
    return db('workouts')
        .join('users', 'users.id', 'workouts.user_id')
        .select('workouts.*' )
        .where('workouts.user_id', userID)
}

function addWorkoutToUser(workout){
    return db('workouts')
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
