import { execFileSync } from 'node:child_process';
import { copyFileSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

if (!process.env.AZR_DESIGN_SYSTEM_DIR) throw new Error('set AZR_DESIGN_SYSTEM_DIR to the canonical repository clone');
const root = resolve(process.env.AZR_DESIGN_SYSTEM_DIR);
const remote = execFileSync('git', ['-C', root, 'remote', 'get-url', 'origin'], { encoding: 'utf8' }).trim();
if (!remote.includes('mhmmdalmutairi/azr-design-system')) throw new Error('wrong canonical repository');
const commit = execFileSync('git', ['-C', root, 'rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
const ref = execFileSync('git', ['-C', root, 'branch', '--show-current'], { encoding: 'utf8' }).trim() || commit;
const version = readFileSync(join(root, 'VERSION'), 'utf8').trim();
const tokens = readFileSync(join(root, 'tokens.css'), 'utf8');
writeFileSync('app/brand.generated.css', `/* @generated — DO NOT EDIT
source: mhmmdalmutairi/azr-design-system/tokens.css
source-ref: ${ref}
source-commit: ${commit}
source-version: ${version}
*/
${tokens}`);
copyFileSync(join(root, 'assets', 'azr-wordmark-cream.png'), 'public/assets/azr-wordmark-cream.png');
const manifest = JSON.parse(readFileSync('canonical-brand-source.json', 'utf8'));
Object.assign(manifest, { source_ref: ref, source_commit: commit, source_version: version });
writeFileSync('canonical-brand-source.json', JSON.stringify(manifest, null, 2) + '\n');
console.log(`synced canonical brand ${version} @ ${commit.slice(0, 12)}`);
