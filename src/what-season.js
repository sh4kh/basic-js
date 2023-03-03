const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

function getSeason(date) {

  let months = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn (fall)', 'autumn (fall)', 'autumn (fall)', 'winter'];

  if (date === undefined) return 'Unable to determine the time of year!';
  if (!(date instanceof Date)) throw new Error("Invalid date!");
  try {
    date.getDay();
    
  } catch {
    throw new Error("Invalid date!");
  }

  if (date.hasOwnProperty('getDate')) throw new Error("Invalid date!");

  return months[date.getMonth()];


}


module.exports = {
  getSeason
};
