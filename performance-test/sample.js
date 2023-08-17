"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var test_1 = require("@playwright/test");
var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, test_1.chromium.launch()];
                    case 1:
                        _a.browser = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.browser.newPage()];
                    case 2:
                        _b.page = _c.sent();
                        return [4 /*yield*/, this.page.goto('https://cesltd.com/')];
                    case 3:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.close = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.browser.close()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.testCapacity = function () {
        return __awaiter(this, void 0, void 0, function () {
            var startTime, endTime, responseTime, performanceEntries, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        startTime = Date.now();
                        return [4 /*yield*/, this.page.waitForTimeout(1000)];
                    case 1:
                        _c.sent(); // Simulate a time-consuming operation
                        endTime = Date.now();
                        responseTime = endTime - startTime;
                        console.log('Capacity Test - Response time:', responseTime, 'ms');
                        _b = (_a = JSON).parse;
                        return [4 /*yield*/, this.page.evaluate(function () { return JSON.stringify(window.performance.getEntries()); })];
                    case 2:
                        performanceEntries = _b.apply(_a, [_c.sent()]);
                        console.log('Capacity Test - Server resource usage:', performanceEntries);
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.testLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var numUsers, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        numUsers = 10;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < numUsers)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.page.waitForTimeout(1000)];
                    case 2:
                        _a.sent(); // Simulate user action delay
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        console.log('Load Test - Users:', numUsers);
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.testVolume = function () {
        return __awaiter(this, void 0, void 0, function () {
            var numRequests, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        numRequests = 100;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < numRequests)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.page.goto('https://cesltd.com/')];
                    case 2:
                        _a.sent(); // Replace 'some-url' with the desired endpoint
                        return [4 /*yield*/, this.page.waitForTimeout(100)];
                    case 3:
                        _a.sent(); // Simulate request delay
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 1];
                    case 5:
                        console.log('Volume Test - Requests:', numRequests);
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.testStress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var startTime, numRequests, i, endTime, executionTime;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        startTime = Date.now();
                        numRequests = 1000;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < numRequests)) return [3 /*break*/, 5];
                        // Make an API call or perform an action repeatedly to generate load
                        return [4 /*yield*/, this.page.goto('https://cesltd.com/')];
                    case 2:
                        // Make an API call or perform an action repeatedly to generate load
                        _a.sent(); // Navigate to the homepage
                        return [4 /*yield*/, this.page.waitForTimeout(100)];
                    case 3:
                        _a.sent(); // Simulate request delay
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 1];
                    case 5:
                        endTime = Date.now();
                        executionTime = endTime - startTime;
                        console.log('Stress Test - Execution time:', executionTime, 'ms');
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.testSoak = function () {
        return __awaiter(this, void 0, void 0, function () {
            var startTime, duration, endTime, executionTime;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        startTime = Date.now();
                        duration = 10 * 60 * 1000;
                        endTime = startTime + duration;
                        _a.label = 1;
                    case 1:
                        if (!(Date.now() < endTime)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.page.goto('https://cesltd.com/')];
                    case 2:
                        _a.sent(); // Navigate to the homepage periodically for monitoring
                        return [4 /*yield*/, this.page.waitForTimeout(1000)];
                    case 3:
                        _a.sent(); // Simulate testing interval
                        return [3 /*break*/, 1];
                    case 4:
                        executionTime = Date.now() - startTime;
                        console.log('Soak Test - Execution time:', executionTime, 'ms');
                        return [2 /*return*/];
                }
            });
        });
    };
    return HomePage;
}());
// Example usage
function runPerformanceTests() {
    return __awaiter(this, void 0, void 0, function () {
        var homePage, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    homePage = new HomePage();
                    return [4 /*yield*/, homePage.open()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 8, 9, 11]);
                    // Capacity Testing
                    console.log('--- Capacity Testing ---');
                    return [4 /*yield*/, homePage.testCapacity()];
                case 3:
                    _a.sent();
                    // Load Testing
                    console.log('--- Load Testing ---');
                    return [4 /*yield*/, homePage.testLoad()];
                case 4:
                    _a.sent();
                    // Volume Testing
                    console.log('--- Volume Testing ---');
                    return [4 /*yield*/, homePage.testVolume()];
                case 5:
                    _a.sent();
                    // Stress Testing
                    console.log('--- Stress Testing ---');
                    return [4 /*yield*/, homePage.testStress()];
                case 6:
                    _a.sent();
                    // Soak Testing
                    console.log('--- Soak Testing ---');
                    return [4 /*yield*/, homePage.testSoak()];
                case 7:
                    _a.sent();
                    return [3 /*break*/, 11];
                case 8:
                    error_1 = _a.sent();
                    console.error('An error occurred during performance testing:', error_1);
                    return [3 /*break*/, 11];
                case 9: return [4 /*yield*/, homePage.close()];
                case 10:
                    _a.sent();
                    return [7 /*endfinally*/];
                case 11: return [2 /*return*/];
            }
        });
    });
}
runPerformanceTests();
