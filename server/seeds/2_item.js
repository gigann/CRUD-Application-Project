exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('item').del();
  await knex('item').insert([
    {
      user_id: 1, item_name: 'Super Mushroom', description: 'Turns Mario into Super Mario.', quantity: 3
    },
    { user_id: 1, item_name: 'Fire Flower', description: 'This exotic flower is common throughout the Mushroom Kingdom. Grab it, and you can toss scorching hot fireballs at your foes.', quantity: 2 },
    { user_id: 1, item_name: 'Tanooki Suit', description: 'Turns Mario into Tanooki Mario.', quantity: 1 },
    { user_id: 2, item_name: 'Crafting Table', description: 'A crafting table is a utility block that gives access to all crafting recipes, including many not available from the inventory\'s crafting grid.', quantity: 1 },
    { user_id: 2, item_name: 'Diamond Sword', description: 'The diamond sword is a melee weapon that is mainly used to deal damage to entities or for breaking certain blocks faster than by hand. A diamond sword is made from one stick and two diamonds.', quantity: 1 },
    { user_id: 2, item_name: 'Dirt', description: 'Dirt is a block found abundantly in most biomes under a layer of grass blocks at the top of the Overworld.', quantity: 64 },
    { user_id: 3, item_name: 'Axe', description: 'A slow but powerful weapon.', quantity: 1 },
    { user_id: 3, item_name: 'Cross', description: 'A powerful weapon that comes back to your hand.', quantity: 1 },
    { user_id: 3, item_name: 'Holy Water', description: 'Splits the earth under the target creature and incinerates everything in its path.', quantity: 1 },
  ]);
};
