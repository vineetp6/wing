# [statements_if.test.w](../../../../../examples/tests/valid/statements_if.test.w) | compile | tf-aws

## inflight.$Closure1-1.js
```js
module.exports = function({  }) {
  class $Closure1 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle() {
      if (true) {
        const x = 2;
        if ((true && (((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((x + 2),4)))) {
          if ((true && (((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((x + 3),4)))) {
            {((cond) => {if (!cond) throw new Error("assertion failed: false")})(false)};
          }
          else if ((true && (((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((x + 3),6)))) {
            {((cond) => {if (!cond) throw new Error("assertion failed: false")})(false)};
          }
          else if ((false || (((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((x + 3),5)))) {
            {((cond) => {if (!cond) throw new Error("assertion failed: true")})(true)};
          }
          else {
            {((cond) => {if (!cond) throw new Error("assertion failed: false")})(false)};
          }
        }
        else {
          {((cond) => {if (!cond) throw new Error("assertion failed: false")})(false)};
        }
      }
    }
  }
  return $Closure1;
}

```

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
const cloud = $stdlib.cloud;
class $Root extends $stdlib.std.Resource {
  constructor(scope, id) {
    super(scope, id);
    class $Closure1 extends $stdlib.std.Resource {
      constructor(scope, id, ) {
        super(scope, id);
        (std.Node.of(this)).hidden = true;
      }
      static _toInflightType(context) {
        return `
          require("./inflight.$Closure1-1.js")({
          })
        `;
      }
      _toInflight() {
        return `
          (await (async () => {
            const $Closure1Client = ${$Closure1._toInflightType(this)};
            const client = new $Closure1Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        `;
      }
      _getInflightOps() {
        return ["handle", "$inflight_init"];
      }
    }
    if (true) {
      const x = 2;
      const f = false;
      if ((true && (((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((x + 2),4)))) {
        if ((true && (((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((x + 3),4)))) {
          {((cond) => {if (!cond) throw new Error("assertion failed: false")})(false)};
        }
        else if ((true && (((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((x + 3),6)))) {
          {((cond) => {if (!cond) throw new Error("assertion failed: false")})(false)};
        }
        else if ((false || (((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })((x + 3),5)))) {
          {((cond) => {if (!cond) throw new Error("assertion failed: true")})(true)};
        }
        else if ((!f)) {
          {((cond) => {if (!cond) throw new Error("assertion failed: !!!f")})((!(!(!f))))};
        }
        else {
          {((cond) => {if (!cond) throw new Error("assertion failed: false")})(false)};
        }
      }
      else {
        {((cond) => {if (!cond) throw new Error("assertion failed: false")})(false)};
      }
    }
    this.node.root.new("@winglang/sdk.std.Test",std.Test,this,"test:test",new $Closure1(this,"$Closure1"));
  }
}
const $App = $stdlib.core.App.for(process.env.WING_TARGET);
new $App({ outdir: $outdir, name: "statements_if.test", rootConstruct: $Root, plugins: $plugins, isTestEnvironment: $wing_is_test, entrypointDir: process.env['WING_SOURCE_DIR'], rootId: process.env['WING_ROOT_ID'] }).synth();

```
