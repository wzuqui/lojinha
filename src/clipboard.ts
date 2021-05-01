export function clipboard(valor: string): void {
  const textarea = document.createElement('textarea');
  textarea.value = valor;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}
