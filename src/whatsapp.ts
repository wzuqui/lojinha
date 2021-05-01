export function whatsapp(texto: string): void {
  const deeplink = 'whatsapp://send?phone=&text=' + encodeURIComponent(texto);
  const win = window.open(deeplink, '_top');

  if (win) {
    return win.focus();
  }
}
