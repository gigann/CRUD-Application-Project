exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user_account').del()
  await knex('user_account').insert([
    { first_name: 'Mario', last_name: 'Mario', username: 'itsame', password: 'this_should_not_be_plaintext'},
    { first_name: 'Minecraft', last_name: 'Steve', username: 'mc_master', password: 'this_should_not_be_plaintext' },
    { first_name: 'Simon', last_name: 'Belmont', username: 'vampire_killer', password: 'this_should_not_be_plaintext' },
  ]);
};
