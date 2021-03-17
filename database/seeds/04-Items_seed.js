exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("Items")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("Items").insert([
        { name: "Pelt" },
        { name: "Good Pelt", type: "crafteditem" },
        { name: "Great Pelt", type: "crafteditem" },
        { name: "Perfect Pelt", type: "crafteditem" },
        { name: "Marvellous Pelt", type: "crafteditem" },
        { name: "Sharp Tooth" },
        { name: "Vial of Wolf Blood" },
        { name: "Bear Paw" },
        { name: "Copper Ore" },
        { name: "Iron Ore" },
        { name: "Lava Ore" },
        { name: "Obsidian" },
        { name: "Basic Key" },
        { name: "Meat" },
        { name: "Honey" },
        { name: "Fur Armor", type: "crafteditem" },
        { name: "Metal Armor", type: "crafteditem" },
        { name: "Copper Bar", type: "crafteditem" },
        { name: "Iron Bar", type: "crafteditem" },
      ]);
    });
};
