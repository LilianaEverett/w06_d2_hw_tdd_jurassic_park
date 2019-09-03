const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function () {
    park = new Park('Jurassic Park', 20, [dinosaur1, dinosaur2, dinosaur3]);
    dinosaur1 = new Dinosaur('Stegosaurus', 'carnivore', 100);
    dinosaur2 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur3 = new Dinosaur('t-rex', 'carnivore', 30);
    dinosaur4 = new Dinosaur('Velociraptor', 'carnivore', 50);
  });

  it('should have a name', function(){
    assert.strictEqual(park.name, 'Jurassic Park')
  });

  it('should have a ticket price', function(){
    assert.strictEqual(park.ticketPrice, 20)
  });

  it('should have a collection of dinosaurs', function(){
    assert.deepStrictEqual(park.collectionOfDinausaurs, [dinosaur1, dinosaur2, dinosaur3])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinaussaur(dinosaur4)
    actual = park.collectionOfDinausaurs.length
    assert.strictEqual(actual, 4)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinausaur(dinosaur2)
    actual = park.collectionOfDinausaurs.length
    assert.strictEqual(actual, 2)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    actual = park.dinosaurWithMostVisitors()
    assert.deepStrictEqual(actual, dinosaur1)
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    actual = park.findAllDinausaursSameSpecies('t-rex')
    expected = [dinosaur2, dinosaur3]
    assert.deepStrictEqual(actual, expected)
  });

  it('should be able to calculate the total number of visitors per day', function() {
    actual = park.totalVisitorsPerDay()
    assert.strictEqual(actual, 180)
  });

  it('should be able to calculate the total number of visitors per year', function(){
    actual = park.totalVisitorsPerYear()
    assert.strictEqual(actual, 65700)
  });

  it('should be able to calculate total revenue for one year', function() {
    actual = park.totalRevenuePerYear()
    assert.strictEqual(actual, 1314000)
  });

});
