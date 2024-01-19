import app from "./app.js";
import morgan from "morgan";

const PORT = process.env.PORT;

app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.json({
        data: "Money Pot"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});