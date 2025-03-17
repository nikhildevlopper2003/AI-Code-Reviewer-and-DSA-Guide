const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
    try {
        const { code, language } = req.body;

        if (!code || !language) {
            return res.status(400).json({ error: "Code and language are required" });
        }

        console.log("Received request:", { code, language });

        const response = await aiService(code, language);
        res.json(response);
    } catch (error) {
        console.error("Error processing request:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
