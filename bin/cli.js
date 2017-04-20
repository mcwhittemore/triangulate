var path = require('path');
var save = require('../lib/save');
var open = require('../lib/open');
var tool = require('..');

var input = path.resolve(process.argv[2]);
var output = path.resolve(process.argv[3]);
var size = parseInt(process.argv[4]);

runner().catch(err => { console.log(err); });

async function runner() {
  var img = await open(input);
  var out = tool(img, size);
  await save(out, output);
}
