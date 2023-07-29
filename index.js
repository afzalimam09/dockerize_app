import express from "express";
const PORT = 3000;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send({
        status: 200,
        message: "Success",
        data: {
            specialMessage: "Hello From Docker",
        },
    });
});

app.listen(PORT, () => {
    console.log(`server is 🚀 on port ${PORT}`);
});
