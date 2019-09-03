// A name
// A ticket price
// A collection of dinosaurs

const Park = function(name, ticketPrice, collectionOfDinausaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinausaurs = collectionOfDinausaurs;
}

Park.prototype.addDinaussaur = function (dinosaur) {
  this.collectionOfDinausaurs.push(dinosaur)
};

module.exports = Park;
