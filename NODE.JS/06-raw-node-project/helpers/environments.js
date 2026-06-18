/*
 * Title: Environment
 * Description: Handle all environment related things
 * Author: Arif Ariyan
 * Date: 11/01/2026
 */

// module scaffolding
const environment = {};

environment.staging = {
  port: 9000,
  envName: "staging",
};

environment.production = {
  port: 5000,
  envName: "production",
};

// determine which environment was passed

const currentEnvironment =
  typeof process.env.NODE_ENV === "string" ? process.env.NODE_ENV : "staging";

// exports corresponding enbironment object
const enbironmentToExport =
  typeof environment[currentEnvironment] === "object"
    ? environment[currentEnvironment]
    : environment.staging;

//exports module
module.exports = enbironmentToExport;
