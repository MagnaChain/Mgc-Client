/**
 * The official client library for bitcore-wallet-service.
 * @module Client
 */

/**
 * Client API.
 * @alias module:Client.API
 */
var client = module.exports = require('./api');

/**
 * Verifier module.
 * @alias module:Client.Verifier
 */
client.Verifier = require('./verifier');
client.Utils = require('./common/utils');
client.sjcl = require('sjcl');

// Expose bitcore
client.Bitcore = require('mgc-corelib');
//client.BitcoreCash = require('bitcore-lib-cash');
client.BitcoreCash = require('mgc-corelib');