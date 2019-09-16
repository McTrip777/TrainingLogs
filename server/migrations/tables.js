exports.up = function(knex, Promise) {
    return knex.schema.createTable('user', (tbl) => {
  
        tbl.increments();

        tbl.string('email', 255)
            .notNullable()
        
        tbl.string('username', 255)
           .notNullable()
           .unique()
        
        tbl.string('password', 255)
           .notNullable()
  
    })
  
    .createTable('workout', (tbl) => {

        tbl.increments();
        
        tbl.date('date', 255) //Date the workout takes place

        tbl.string('load', 255) 
           .notNullable() //required
        tbl.string('exercise', 255) 
           .notNullable() //required
        tbl.string('duration', 255) 
           .notNullable() //required
        tbl.string('effort', 255) 
           .notNullable() //required
        tbl.string('impression', 255) 
           .notNullable() //required
        tbl.string('problem', 255) 
           .notNullable() //required
        tbl.bool('grade', 255) 
           .notNullable() //required

        tbl.integer('user_id').notNullable()
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE') //required
    })
  };
  
  exports.down = function(knex, Promise) {
        return knex.schema
            .dropTableIfExists('user')
            .dropTableIfExists('workout')

  };
