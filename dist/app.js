"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const graphql_1 = __importDefault(require("./servers/graphql"));
async function main() {
    const app = (0, express_1.default)();
    const port = 3000;
    app.use(body_parser_1.default.json());
    app.use((0, cors_1.default)());
    app.get("/", (req, res) => {
        res.send("Hello NOD Readers!");
    });
    await (0, graphql_1.default)(app);
    app.listen(port, () => {
        return console.log(`Express server is listening at http://localhost:${port} 🚀`);
    });
}
void main();
//# sourceMappingURL=app.js.map