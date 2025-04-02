exports.up = function(knex) {
    return knex.schema.createTable('user_account', table => {
        table.increments('id'); // Pk
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('username').notNullable();
        table.string('password').notNullable(); // encrypted
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user_account');
};
