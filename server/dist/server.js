//import * as express from "express";
import express from "express";
const app = express();
app.get("/api", (req, res) => {
    res.json({ "fruits": ["apple", "orange", "banana"] });
});
app.listen(8080, () => {
    console.log("Server started on port 8080");
});
//# sourceMappingURL=server.js.map