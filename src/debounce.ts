let $debounce: any = null;
export function debounce(action: () => void): void {
  if ($debounce === null) {
    $debounce = action();
    setTimeout(() => {
      $debounce = null;
    }, 400);
  }
}