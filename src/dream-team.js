const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) === false) return false;

  let teamname = members.filter(i => typeof i === 'string').map(i => {return i.trim().slice(0,1).toUpperCase();});
  return (teamname.sort().join(''));
};
