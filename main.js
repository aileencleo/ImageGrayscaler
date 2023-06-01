const IOhandler = require("./IOhandler");
const path = require("path");

const zipFilePath = path.join(__dirname, "myfile.zip");
const pathUnzipped = path.join(__dirname, "unzipped");
const pathProcessed = path.join(__dirname, "grayscaled");

IOhandler.unzip(zipFilePath, pathUnzipped)
    .then((dir) => IOhandler.readDir(dir) )
    .then((photoList) => {
        const promises = photoList.map((photoPath) =>
        IOhandler.grayScale(photoPath, pathProcessed)
        );
        return Promise.all(promises);
    })
    .catch(err => console.log(err));