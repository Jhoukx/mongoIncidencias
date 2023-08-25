import rateLimit from 'express-rate-limit'

export let limitReq = () => {
    return rateLimit({
        windowMs: 30 * 1000,
        max: 10,
        standardHeaders: true,
        legacyHeaders: false,
        skip: (req, res) => {
            if (req.headers["content-length"] > 250) {
                res.status(413).send({
                    status: 413,
                    message: "the size of the request exceeds the limit"
                });
                return true;
            }
        },
        message: { status: 429, message: "Too many request :c" }
    })
}