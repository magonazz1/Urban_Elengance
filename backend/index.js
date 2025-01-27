const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.json());

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            {username: username, secret: username, first_name: username},
            {headers: {"private-key": "062ec5ce-9d7d-4bd3-8103-735ab64c3244"}}
        )
        return res.status(r.status).json(r.data)
    }   catch (e) {
        return res.status(e.response.status).json(e.response.data)
    }

    return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);

