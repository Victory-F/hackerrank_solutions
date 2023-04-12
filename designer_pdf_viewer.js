// https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

function designerPdfViewer(h, word) {
  const maxHeight = Math.max(
    ...word.split("").map((l) => h[l.charCodeAt(0) - 97])
  );
  return maxHeight * word.length;
}
