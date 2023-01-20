import * as Name from 'w3name';
import fs from 'fs';
import Web3Storage from 'web3.storage'

async function createName(): Promise<Name.WritableName> {
  const name = Name.create();
  console.log(name);
  return name;
}

async function saveSigningKey(name: Name.WritableName, outputFilename: string) {
  const bytes = name.key.bytes;
  await fs.promises.writeFile(outputFilename, bytes);
}

async function loadSigningKey(filename: string) {
  const bytes = await fs.promises.readFile(filename);
  const name = await Name.from(bytes);
  return name;
}

/*   const name = await createName();
  await saveSigningKey(name, 'privateKey')
  console.log("test") */

const client = new Web3Storage({ token: '' })
