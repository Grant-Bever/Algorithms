import * as fs from 'fs';

export function readFileToArray(filePath: string): string[] {
    try {
      const data = fs.readFileSync(filePath, 'utf-8');
      const lines = data.split('\n').map(line => line.trim()).filter(line => line.length > 0)
  
      return lines;
    } catch (err) {
      console.error('Error reading file:', err);
      return [];
    }
  }