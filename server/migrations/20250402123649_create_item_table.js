exports.up = function (knex) {
    return knex.schema.createTable('item', table => {
        table.increments('id'); // Pk
        table.integer('user_id');
        table.foreign('user_id').references('user_account.id');
        table.string('item_name').notNullable();
        table.string('description').notNullable();
        table.integer('quantity');
    });
};

exports.down = function (knex) {
    return knex.schema
        .alterTable('item', table => {
            table.dropForeign('user_id');
        })
        .then((function () {
            return knex.schema.dropTableIfExists('item');
        }))
};
