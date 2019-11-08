/**
 * Plugin to append docs from json file
 * See {@link http://usejsdoc.org/about-plugins.html} for more info
 */

const fs = require("fs");

const fileName = "./node_modules/@twilio/frame-ui/js-docs.generated.json";

exports.handlers = {
    processingComplete(e) {
        console.log("jsdoc plugin append from json");
        const { doclets } = e;

        const docs = fs.readFileSync(fileName);
        const docJson = JSON.parse(docs);

        doclets.push(...docJson);
        console.log("jsdoc plugin append from json done");
    }
};
