
exports.seed = function(knex) {
      return knex('tools').insert([
        { name: 'Saw', toolImg: '', price: 20, ownerId: 1 },
        { name: 'Jackhammer', toolImg: '', price: 20, ownerId: 1 },
        { name: 'Torque Wrench', toolImg: '', price: 20, ownerId: 2 },
        { name: '1/4 10mm', toolImg: '', price: 20, ownerId: 2 },
        { name: 'Drill', toolImg: '', price: 20, ownerId: 3 },
        { name: 'Table Saw', toolImg: '', price: 20, ownerId: 3 },
        { name: 'Air Compressor', toolImg: '', price: 20, ownerId: 4 },
        { name: 'TIG Welder', toolImg: '', price: 20, ownerId: 4 },
        { name: 'Breaker Bar', toolImg: '', price: 20, ownerId: 5 },
        { name: 'Nail Gun', toolImg: '', price: 20, ownerId: 5 }
      ]);
};
