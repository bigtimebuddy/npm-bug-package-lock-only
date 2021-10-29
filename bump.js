const { promises: { readFile, writeFile } } = require('fs');

const readJson = async file => JSON.parse(await readFile(file, 'utf8'));
const writeJson = (file, data) => writeFile(file, JSON.stringify(data, null, 2));

async function main() {
    const files = ['packages/tools-a', 'packages/package-a', 'packages/package-b'];
    for (const file of files) {
        const pkg = await readJson(`${file}/package.json`);
        pkg.version = '2.0.0';
        if (pkg.devDependencies) {
            pkg.devDependencies['@tools/a'] = '2.0.0';
        }
        await writeJson(`${file}/package.json`, pkg);
    }
}

main();