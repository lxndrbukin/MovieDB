import Box from './Box';

export default function Container() {
  const text = /*html*/ `
    <i class='fas fa-film'></i>
    <span>Welcome to MovieDB</span>
  `;

  return /*html*/ `
    <div class='container'>
      ${Box(text)}
    </div>
  `;
}
