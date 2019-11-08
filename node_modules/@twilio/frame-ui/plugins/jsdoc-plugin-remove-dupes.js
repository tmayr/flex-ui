/**
 * Plugin to remove duplicate doclets.
 * See {@link http://usejsdoc.org/about-plugins.html} for more info
 */

function compare(a, b) {
    return (
        (a.longname || "").localeCompare(b.longname) ||
        (a.kind || "").localeCompare(b.kind) ||
        (a.comment || "").localeCompare(b.comment)
    );
}

exports.handlers = {
    processingComplete(e) {
        console.log("jsdoc plugin remove dupes starting");
        const { doclets } = e;
        doclets.sort(compare);

        const count = doclets.length;
        let last = doclets[0];
        let i = 1;
        while (i < doclets.length) {
            const doclet = doclets[i];
            if (compare(doclet, last) === 0) {
                doclets.splice(i, 1);
            } else {
                last = doclet;
                i++;
            }
        }

        console.log("processed doclets, before:", count, "after:", doclets.length);
    }
};
