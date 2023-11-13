import fs from 'fs';
import { outputTarget } from '../Summary';

export class consoleReport implements outputTarget {
  print(report: string): void {
    console.log(report);
  }
}

export class HtmlReport implements outputTarget {
  constructor(public htmlOutputName: string) {}

  print(report: string): void {
    const html = `
      <div> 
        <h1>Analysis Report</h1>
        <div><h1> ${report} </h1></div>
      </div>
    `;

    fs.writeFileSync(`${this.htmlOutputName}.html`, html);
  }
}
