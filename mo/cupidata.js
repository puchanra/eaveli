if (entry && entry.mtime instanceof Date) {
  headers['Last-Modified'] = new Date(entry.mtime).toUTCString();
} else {
  // Handle error: entry.mtime is not a valid date
}
