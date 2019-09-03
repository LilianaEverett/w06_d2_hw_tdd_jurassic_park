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

Park.prototype.removeDinausaur = function (dinosaur) {
  for (var i = 0; i < this.collectionOfDinausaurs.length; i++) {
    if (
          (dinosaur.species === this.collectionOfDinausaurs[i].species) &&
          (dinosaur.diet === this.collectionOfDinausaurs[i].diet) &&
          (dinosaur.guestsAttractedPerDay === this.collectionOfDinausaurs[i].guestsAttractedPerDay)
        ) {
      this.collectionOfDinausaurs.splice(i, 1);
     i--;
    }
  }
};

Park.prototype.dinosaurWithMostVisitors = function () {
  let max = 0
  let dinosaur = {}
  for (var i = 0; i < this.collectionOfDinausaurs.length; i++) {
    if (this.collectionOfDinausaurs[i].guestsAttractedPerDay > max) {
      max = this.collectionOfDinausaurs[i].guestsAttractedPerDay;
      dinosaur = this.collectionOfDinausaurs[i]
    }
  }
  return dinosaur
};

Park.prototype.findAllDinausaursSameSpecies = function (species) {
  const arrayDinasaurs = []
  for (var i = 0; i < this.collectionOfDinausaurs.length; i++) {
    if (this.collectionOfDinausaurs[i].species === species) {
      arrayDinasaurs.push(this.collectionOfDinausaurs[i])
    }
  }
  return arrayDinasaurs
};

// Park.prototype.totalVisitorsPerDay = function () {
//   const total =  this.collectionOfDinausaurs.map(function(this.collectionOfDinausaurs) {
//     return this.collectionOfDinausaurs.guestsAttractedPerDay
//   })
//   return total
// };

Park.prototype.totalVisitorsPerDay = function () {
  const total = this.collectionOfDinausaurs.reduce(function (accumulator, dinosaur) {
    return accumulator + dinosaur.guestsAttractedPerDay;
  }, 0);
  return total
};

// const total = this.collectionOfDinausaurs.reduce(function (accumulator, dinosaur) {
//   return accumulator + dinosaur.guestsAttractedPerDay;
// }, 0);
//
// var totalYears = pilots.reduce(function (accumulator, pilot) {
//   return accumulator + pilot.years;
// }, 0);

// var officersIds = [];
// officers.forEach(function (officer) {
//   officersIds.push(officer.id);
// });

// var officersIds = officers.map(function (officer) {
//   return officer.id
// });

Park.prototype.totalVisitorsPerYear = function () {
  const total = this.collectionOfDinausaurs.reduce(function (accumulator, dinosaur) {
    return accumulator + dinosaur.guestsAttractedPerDay;
  }, 0);
  return total * 365
};

Park.prototype.totalRevenuePerYear = function () {
  const total = this.collectionOfDinausaurs.reduce(function (accumulator, dinosaur) {
    return accumulator + dinosaur.guestsAttractedPerDay;
  }, 0);
  return total * 365 * this.ticketPrice
};


module.exports = Park;
