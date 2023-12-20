import { Director } from "./director.js";
import { Genesis } from "./genesis.js";

const director = new Director();
const genesis = new Genesis();

director.setApplicationModeBuilder(genesis);

console.log("Appmode for D2C:");
director.buildD2CApplicationMode();
genesis.getApplicationMode().listParts();

console.log("Appmode for Okteto:");
director.buildOktetoApplicationMode();
genesis.getApplicationMode().listParts();
