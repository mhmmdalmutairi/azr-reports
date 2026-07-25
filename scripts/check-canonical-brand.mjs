import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const manifest = JSON.parse(readFileSync('canonical-brand-source.json', 'utf8'));
if (manifest.canonical_repository !== 'mhmmdalmutairi/azr-design-system') throw new Error('canonical repository mismatch');
const forbiddenPaths = ['out', 'workflow-examples', '.claude/skills', 'public/css/variables.css', 'AZR_Workflow_System_v1.md', 'AZR_Workflow_Options_Comparison.md', 'AZR_Master_Guide.md'];
for (const path of forbiddenPaths) if (existsSync(path)) throw new Error(`parallel output source exists: ${path}`);
const brand = readFileSync('app/brand.generated.css', 'utf8');
for (const marker of [manifest.canonical_repository, manifest.source_commit, manifest.source_version]) {
  if (!brand.includes(marker)) throw new Error(`generated brand provenance missing: ${marker}`);
}
const legacy = /#(?:001F3F|001229|FF8C00|E67E00|81286e)\b|IBM_Plex_Sans_Arabic|font-ibm-plex-arabic/i;
const roots = ['app', 'components'];
function walk(path) {
  for (const name of readdirSync(path)) {
    const child = join(path, name);
    if (statSync(child).isDirectory()) walk(child);
    else if (/\.(?:css|tsx?|jsx?)$/.test(child) && legacy.test(readFileSync(child, 'utf8'))) throw new Error(`legacy brand value: ${child}`);
  }
}
for (const root of roots) walk(root);
if (legacy.test(readFileSync('tailwind.config.ts', 'utf8'))) throw new Error('legacy brand value: tailwind.config.ts');
console.log(`canonical-brand: OK ${manifest.source_version} @ ${manifest.source_commit.slice(0, 12)}`);
