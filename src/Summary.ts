import { match } from 'assert';
import { MatchData } from './MatchData';
import { winAnalysis } from './analyzers/winsAnalysis';
import { HtmlReport } from './reportsTarget/ConsoleReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface outputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new winAnalysis(team), new HtmlReport('finalReport'));
  }

  constructor(public analyzer: Analyzer, public outputTarget: outputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
