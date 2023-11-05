import { MatchReader } from './MatchReader';
import { matchResults } from './MatchResults';

const reader = new MatchReader('football.csv');
reader.read();
let manUWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === matchResults.HomeWin) {
    manUWins++;
  } else if (match[2] === 'Man United' && match[5] === matchResults.AwayWin) {
    manUWins++;
  }
}

console.log(`Man United won a total of ${manUWins} matches.`);
