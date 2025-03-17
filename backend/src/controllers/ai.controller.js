const aiService = require("../services/ai.service")

module.exports.getReview = async (req, res) => {
    const { code, language } = req.body;

    if (!code || !language) {
        return res.status(400).send("Code and language are required");
    }

    const response = await aiService(code, language);
    res.send(response);
}
