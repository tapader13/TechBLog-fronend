export function getFirstImage(markdownContent) {
  const imgTag = markdownContent.match(/!\[.*?\]\((.*?)\)/);
  return imgTag ? imgTag[1] : null;
}
export function getDate(date) {
  const dateObj = new Date(date);
  const formattedDate = dateObj.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  return formattedDate;
}
export function getRemainingContent(markdownContent) {
  return markdownContent.replace(/!\[.*?\]\(.*?\)\s*/, '');
}
export function getFirstWords(markdownContent, wordLimit = 30) {
  const plainText = markdownContent
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/\[.*?\]\(.*?\)/g, '')
    .replace(/[#_*`~>-]/g, '')
    .replace(/\s{2,}/g, ' ');
  const words = plainText.split(/\s+/).slice(0, wordLimit).join(' ');

  return words.trim();
}
