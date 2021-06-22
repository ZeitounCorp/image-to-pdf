const PDFDocument = require('pdfkit');
const sizes = require("./sizes.json")

module.exports = (buff, size) => {
	const doc = new PDFDocument({ margin: 0, size });
	doc.image(buff, 0, 0, { fit: sizes[size], align: 'center', valign: 'center' });

	doc.end();

	return doc
};
