import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { matchResults } from './MatchResults';

//Create an object that satisfies the 'DataReader'interface
const csvFileReader = new CsvFileReader('football.csv');

//Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface.
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === matchResults.HomeWin) {
    manUWins++;
  } else if (match[2] === 'Man United' && match[5] === matchResults.AwayWin) {
    manUWins++;
  }
}

console.log(`Man United won a total of ${manUWins} matches.`);
