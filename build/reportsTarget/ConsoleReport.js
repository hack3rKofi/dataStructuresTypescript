"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReport = exports.consoleReport = void 0;
const fs_1 = __importDefault(require("fs"));
class consoleReport {
    print(report) {
        console.log(report);
    }
}
exports.consoleReport = consoleReport;
class HtmlReport {
    constructor(htmlOutputName) {
        this.htmlOutputName = htmlOutputName;
    }
    print(report) {
        const html = `
      <div> 
        <h1>Analysis Report</h1>
        <div><h1> ${report} </h1></div>
      </div>
    `;
        fs_1.default.writeFileSync(`${this.htmlOutputName}.html`, html);
    }
}
exports.HtmlReport = HtmlReport;
