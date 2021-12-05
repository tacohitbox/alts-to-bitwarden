#!/usr/bin/env node

const fs = require("fs");
const args = process.argv;

if (args[0].includes("node")) {
  var q = args.slice(2)[0];
  if (args.slice(2)[1]) {
    if (args.slice(2)[1].startsWith("--")) {
      var o = {};
      for (var c in args.slice(2)) {
        if (!args.slice(2)[c].startsWith("--")) {continue;}
        o[args.slice(2)[c].split("--")[1]] = args.slice(1)[(parseInt(c) + 2)];
      }
    } else {
      var o = null;
    }
  } else {
    var o = null;
  }
} else {
  var q = args.slice(1)[0];
  if (args.slice(1)[1]) {
    if (args.slice(1)[1].startsWith("--")) {
      var o = {};
      for (var c in args.slice(1)) {
        if (!args.slice(1)[c].startsWith("--")) {continue;}
        o[args.slice(2)[c].split("--")[1]] = args.slice(1)[(parseInt(c) + 2)];
      }
    } else {
      var o = null;
    }
  } else {
    var o = null;
  }
}


if (!fs.existsSync(q)) {
  console.log("[WARN] Couldn't find your file.");
  console.log("Usage: alts-bw [FILE LOCATION] [OPTIONS]");
  process.exit(1);
}

var a = fs.readFileSync(q, 'utf8').toString().split('\n');
var j = [];

var date = `(${(new Date().getMonth() + 1)}/${(new Date().getDate())}/${(new Date().getFullYear())} @ ${(new Date().getHours())}:${(new Date().getMinutes())})`
if (parseInt(date.split("@")[1].split(":")[1].split(")")[0]) < 10) {
  var date = `(${(new Date().getMonth() + 1)}/${(new Date().getDate())}/${(new Date().getFullYear())} @ ${(new Date().getHours())}:0${(new Date().getMinutes())})`
}

for (var c in a) {
  var u = a[c].split(":")[0];
  var p = a[c].split(":")[1];
  var n = a[c].split(":").slice(2).join(":");

  if (o && o["uri"]) {
    var uri = o["uri"].split(",");
  } else {
    var uri = [null];
  }

  var uris = [];
  for (var c in uri) {
    if (uri[c] !== null) {
      uris.push({
        match: null,
        uri: uri[c]
      })
    }
  }

  j.push({
    "type": 1,
    "name": `Import from Alts Website ${date}`,
    "note": n,
    "favorite": false,
    "login": {
      "uris": uris,
      "username": u,
      "password": p,
      "totp": null
    }
  });
}

fs.writeFileSync("./export.json", JSON.stringify({
  "folders": [],
  "items": j
}, null, 2));

console.log("Saved to './export.json'");