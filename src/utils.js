import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export default (filename) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const getFixturePath = path.resolve(__dirname, '..', '__fixtures__', filename);
  const fileContent = fs.readFileSync(getFixturePath, 'utf-8');
  return fileContent;
};

// export default (relativeFilePath) => {
//   const filePath = path.resolve(process.cwd(), relativeFilePath);
//   const fileContent = fs.readFileSync(filePath, 'utf-8');
//   return fileContent;
// };
