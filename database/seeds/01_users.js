
exports.seed = function(knex) {
      return knex('users').insert([
        { username: 'Travis', password: 'travis', profilePic: 'https://ca.slack-edge.com/T4JUEB3ME-ULJ19ND6W-038da0bbee67-512', location: 'Minnesota' },
        { username: 'Sam', password: 'sam', profilePic: 'https://ca.slack-edge.com/T4JUEB3ME-UMR11M614-ge81e6370cdf-512', location: 'Oregon' },
        { username: 'Aaron', password: 'aaron', profilePic: 'https://ca.slack-edge.com/T4JUEB3ME-UNM5RMANA-66bf56b082dd-512', location: 'New York' },
        { username: 'Kai', password: 'kai', profilePic: 'https://ca.slack-edge.com/T4JUEB3ME-UNDNBKS3T-109628033192-512', location: 'South Carolina' },
        { username: 'Robert', password: 'robert', profilePic: 'https://ca.slack-edge.com/T4JUEB3ME-UP69BNMPU-2163e59d1d02-512', location: 'somewhere' }
      ]);
};
