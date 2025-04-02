exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user_account').del()
  await knex('user_account').insert([
    { first_name: 'Mario', last_name: 'Mario', username: 'itsame', password: '$2b$12$GD7X2Dq.FKXHyJlEmVLgVOvP/khI5QRUxbb4o3y2kzIxHuP6b7XFq'},
    { first_name: 'Minecraft', last_name: 'Steve', username: 'mc_master', password: '$2b$12$Uto.lQg6OQlunLwDG9VSb.c6/2DPBOyP.v5IsbypWPg0kKpZdpMjm' },
    { first_name: 'Simon', last_name: 'Belmont', username: 'vampire_killer', password: '$2b$12$zxEEjSqqEEply00RHHgHUe5rIVXrc4NSuWeWsjYMhvAMpdfkSh9EO' },
  ]);
};
