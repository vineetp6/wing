# [expressions_string_interpolation.main.w](../../../../../examples/tests/valid/expressions_string_interpolation.main.w) | compile | tf-aws

## main.tf.json
```json
{
  "//": {
    "metadata": {
      "backend": "local",
      "stackName": "root",
      "version": "0.17.0"
    },
    "outputs": {
      "root": {
        "Default": {
          "cloud.TestRunner": {
            "TestFunctionArns": "WING_TEST_RUNNER_FUNCTION_ARNS"
          }
        }
      }
    }
  },
  "output": {
    "WING_TEST_RUNNER_FUNCTION_ARNS": {
      "value": "[]"
    }
  },
  "provider": {
    "aws": [
      {}
    ]
  }
}
```

## preflight.js
```js
const $stdlib = require('@winglang/sdk');
const $plugins = ((s) => !s ? [] : s.split(';'))(process.env.WING_PLUGIN_PATHS);
const $outdir = process.env.WING_SYNTH_DIR ?? ".";
const $wing_is_test = process.env.WING_IS_TEST === "true";
const std = $stdlib.std;
class $Root extends $stdlib.std.Resource {
  constructor(scope, id) {
    super(scope, id);
    const regularString = "str\n\"";
    const emptyString = "";
    const number = 1;
    const coolString = String.raw({ raw: ["cool \"\${", "}\" test"] }, regularString);
    const reallyCoolString = String.raw({ raw: ["", "", "\n", "\n\${empty_string}", "!"] }, number, emptyString, coolString, "string-in-string");
    const beginingWithCoolStrings = String.raw({ raw: ["", " ", " <- cool"] }, regularString, number);
    const endingWithCoolStrings = String.raw({ raw: ["cool -> ", " ", ""] }, regularString, number);
  }
}
const $App = $stdlib.core.App.for(process.env.WING_TARGET);
new $App({ outdir: $outdir, name: "expressions_string_interpolation.main", rootConstruct: $Root, plugins: $plugins, isTestEnvironment: $wing_is_test, entrypointDir: process.env['WING_SOURCE_DIR'], rootId: process.env['WING_ROOT_ID'] }).synth();

```
