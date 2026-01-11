export function parseCSV(data: string) {
  const lines = data.trim().split('\n');
  const rows = lines.slice(1);

  const valid: any[] = [];
  const errors: any[] = [];

  rows.forEach((line, index) => {
    const [title, author, year] = line.split(',');
    const publishedYear = Number(year);

    if (!title || !author || isNaN(publishedYear)) {
      errors.push({
        row: index + 2,
        message: 'Invalid data'
      });
    } else {
      valid.push({ title, author, publishedYear });
    }
  });

  return { valid, errors };
}
