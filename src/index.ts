import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { consoleReport, HtmlReport } from './reportsTarget/ConsoleReport';
import { Summary } from './Summary';
import { winAnalysis } from './analyzers/winsAnalysis';

//Create an object that satisfies the 'DataReader'interface
const csvFileReader = new CsvFileReader('football.csv');

//Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface.
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
  new winAnalysis('Man City'),
  new HtmlReport('output')
);

summary.buildAndPrintReport(matchReader.matches);
