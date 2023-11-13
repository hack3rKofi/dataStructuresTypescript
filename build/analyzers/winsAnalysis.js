"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.winAnalysis = void 0;
const MatchResults_1 = require("../MatchResults");
class winAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let wins = 0;
        for (let match of matches) {
            if (match[1] === this.team && match[5] === MatchResults_1.matchResults.HomeWin) {
                wins++;
            }
            else if (match[2] === this.team && match[5] === MatchResults_1.matchResults.AwayWin) {
                wins++;
            }
        }
        return `Team ${this.team} won ${wins} games`;
    }
}
exports.winAnalysis = winAnalysis;
