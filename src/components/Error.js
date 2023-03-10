export default function Error(text) {
  return /*html*/ `
    <div class='box'>
      <span>${text}</span>
    </div>
  `;
}
