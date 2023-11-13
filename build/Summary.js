"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const winsAnalysis_1 = require("./analyzers/winsAnalysis");
const ConsoleReport_1 = require("./reportsTarget/ConsoleReport");
class Summary {
    static winsAnalysisWithHtmlReport(team) {
        return new Summary(new winsAnalysis_1.winAnalysis(team), new ConsoleReport_1.HtmlReport('finalReport'));
    }
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    buildAndPrintReport(matches) {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}
exports.Summary = Summary;
