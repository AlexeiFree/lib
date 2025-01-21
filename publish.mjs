#!/usr/bin/env zx

await $`rimraf dist`;

const flags = ['--configuration=production'];

await Promise.all([$`yarn nx build publishable-common ${flags}`, $`yarn nx build publishable-components ${flags}`]);

await Promise.all([
$`cd dist/libs/publishable/common && npm publish`,
  $`cd dist/libs/publishable/components && npm publish`,
]);
