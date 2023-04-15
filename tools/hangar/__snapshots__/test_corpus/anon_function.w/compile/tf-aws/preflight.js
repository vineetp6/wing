const $stdlib = require('@winglang/sdk');
const $outdir = process.env.WING_SYNTH_DIR ?? ".";
const $wing_is_test = process.env.WING_IS_TEST === "true";
const $AppBase = $stdlib.core.App.for(process.env.WING_TARGET);
class $Root extends $stdlib.core.Resource {
  constructor(scope, id) {
    super(scope, id);
    const myfunc =  (x) =>  {
      {
        {console.log(`${x}`)};
        x = (x + 1);
        if ((x > 3.14)) {
          return;
        }
        (myfunc(x));
      }
    }
    ;
    (myfunc(1));
    (( (x) =>  {
      {
        {((cond) => {if (!cond) throw new Error(`assertion failed: '(x === 1)'`)})((x === 1))};
      }
    }
    )(1));
  }
}
class $App extends $AppBase {
  constructor() {
    super({ outdir: $outdir, name: "anon_function", plugins: $plugins, isTestEnvironment: $wing_is_test });
    if ($wing_is_test) {
      new $Root(this, "env0");
      const $test_runner = this.testRunner;
      const $tests = $test_runner.findTests();
      for (let $i = 1; $i < $tests.length; $i++) {
        new $Root(this, "env" + $i);
      }
    } else {
      new $Root(this, "Default");
    }
  }
}
new $App().synth();