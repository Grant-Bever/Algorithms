import * as fs from 'fs';

// Takes the magic items txt, cleans it up, and sends it on through. Nothing fancy

export function readFileToArray(filePath: string): string[] {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    const lines = data.split('\n').map(line => line.trim()).filter(line => line.length > 0).map(line => line.replace(/\s+/g, '').toLowerCase());

    return lines;
  } catch (err) {
    console.error('Error reading file:', err);
    return [];
  }
}

