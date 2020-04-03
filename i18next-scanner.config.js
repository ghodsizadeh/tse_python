const fs = require("fs");
const chalk = require("chalk");

module.exports = {
  input: [
    "src/**/*.{js,jsx}",
    // Use ! to filter out files or directories
    "!src/**/*.spec.{js,jsx}",
    "!src/i18n/**",
    "!**/node_modules/**"
  ],
  output: "./",
  options: {
    debug: true,
    func: {
      list: ["i18next.t", "i18n.t", "t"],
      extensions: [".js", ".jsx"]
    },
    // trans: false,
    lngs: ["en", "fa"],
    ns: ["locale", "resource"],
    defaultLng: "en",
    defaultNs: "resource",
    defaultValue: "__STRING_NOT_TRANSLATED__",
    resource: {
      loadPath: "i18n/{{lng}}/{{ns}}.json",
      savePath: "i18n/{{lng}}/{{ns}}.json",
      jsonIndent: 2,
      lineEnding: "\n"
    },
    nsSeparator: false, // namespace separator
    keySeparator: false, // key separator
    interpolation: {
      prefix: "{{",
      suffix: "}}"
    }
  },
  transform: function customTransform(file, enc, done) {
    "use strict";
    const parser = this.parser;
    const content = fs.readFileSync(file.path, enc);
    let count = 0;

    parser.parseFuncFromString(
      content,
      { list: ["i18next._", "i18next.__"] },
      (key, options) => {
        parser.set(
          key,
          Object.assign({}, options, {
            nsSeparator: false,
            keySeparator: false
          })
        );
        ++count;
      }
    );

    if (count > 0) {
      console.log(
        `i18next-scanner: count=${chalk.cyan(count)}, file=${chalk.yellow(
          JSON.stringify(file.relative)
        )}`
      );
    }

    done();
  }
};
