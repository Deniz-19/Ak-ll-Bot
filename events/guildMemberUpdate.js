const ddiff = require('return-deep-diff');
module.exports = (othMember, nMember) => {
  console.log(ddiff(othMember, nMember));
};
