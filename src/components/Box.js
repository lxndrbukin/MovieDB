export default function Box(children) {
  return /*html*/ `
    <div class='box'>
      ${children}
    </div>
  `;
}
