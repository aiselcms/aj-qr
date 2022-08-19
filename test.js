const qr = require('./index.js');
const sharp = require("sharp");

const newQr = qr(null, 'H');
newQr.addData('EQCM7O6e29zNnpbuLED8w88cL6yvNH3W2Ldx5DLM5w9dwkSd', 'Byte');
newQr.make();

sharp(Buffer.from(newQr.createSvgTag({ mainColor: '#FFFFFF', backGradientFirstColor: '#002c7b', backGradientSecondColor: '#3687d2', marginX: 60, marginY: 10 })), { density: 1000 })
    .png()
    .toFile("cap.png");