"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
const ConsoleReport_1 = require("./reportsTarget/ConsoleReport");
const Summary_1 = require("./Summary");
const winsAnalysis_1 = require("./analyzers/winsAnalysis");
//Create an object that satisfies the 'DataReader'interface
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
//Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface.
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
const summary = new Summary_1.Summary(new winsAnalysis_1.winAnalysis('Man City'), new ConsoleReport_1.HtmlReport('output'));
summary.buildAndPrintReport(matchReader.matches);
