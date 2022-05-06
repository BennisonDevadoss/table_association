const dotenv = require('dotenv');
const application = require('./application')

dotenv.config({ path: `${__dirname}/../.env` });

const PORT = process.env.PORT || 5000;
const fastify = application(); // ??

const start = async () => {
    try {
        await fastify.listen(PORT);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
