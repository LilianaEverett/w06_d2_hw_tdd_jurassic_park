const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dinosaur1;
  let dinosaur2;

  beforeEach(function () {
    park = new Park('Jurassic Park', 20, ['t-rex', 'Triceratops', 'Velociraptor']);
    dinosaur1 = new Dinosaur('Stegosaurus', 'carnivore', 50);
  });

  it('should have a name', function(){
    assert.strictEqual(park.name, 'Jurassic Park')
  });

  it('should have a ticket price', function(){
    assert.strictEqual(park.ticketPrice, 20)
  });

  it('should have a collection of dinosaurs', function(){
    assert.deepStrictEqual(park.collectionOfDinausaurs, ['t-rex', 'Triceratops', 'Velociraptor'])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinaussaur(dinosaur1)
    actual = park.collectionOfDinausaurs.length
    assert.strictEqual(actual, 4)
  });

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
