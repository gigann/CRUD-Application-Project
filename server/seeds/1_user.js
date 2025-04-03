exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user_account').del();
  await knex('user_account').insert([
    { first_name: 'Mario', last_name: 'Mario', username: 'smbro', password: '$2b$12$kF50VQIIds/fgZtFCgvFSe4XDeN2oR/KoYlN/vyE.s1hYoI43KiUi'},
    { first_name: 'Minecraft', last_name: 'Steve', username: 'mc_master', password: '$2b$12$Rp2svaHhFY/9LMLv83Hz8u7ET40ucOiGcqsUlPpNnl8pp393a7fFS' },
    { first_name: 'Simon', last_name: 'Belmont', username: 'vampire_killer', password: '$2b$12$eebKoW4koXAteo94MDrZa.dtnRIMrJRaoL0qAKgWnA4eZdMREpwrK' },
  ]);
};
