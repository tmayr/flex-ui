/**
 * Plugin to write docs as json file
 * See {@link http://usejsdoc.org/about-plugins.html} for more info
 */

const fs = require("fs");

const docsDir = "./";
const fileName = `${docsDir}/js-docs.generated.json`;

exports.handlers = {
    processingComplete(e) {
        console.log("jsdoc plugin write to json");
        const { doclets } = e;

        if (!fs.existsSync(docsDir)) {
            fs.mkdirSync(docsDir);
        }

        fs.writeFileSync(fileName, JSON.stringify(doclets));
        console.log("js plugin write to json done");
    }
};
