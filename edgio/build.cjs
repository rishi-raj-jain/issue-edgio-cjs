const { join } = require("path");
const { DeploymentBuilder } = require("@edgio/core/deploy");

const appDir = process.cwd();
const builder = new DeploymentBuilder(appDir);

module.exports = async function build() {
  builder.clearPreviousBuildOutput();
  await builder.build();
  // builder.writeFileSync(
  //   join(builder.jsDir, "__backends__", "package.json"),
  //   JSON.stringify({ type: "commonjs" })
  // );
};
