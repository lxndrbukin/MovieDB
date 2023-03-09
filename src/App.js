import Header from './components/Header';
import Container from './components/Container';

export default function App() {
  return /*html*/ `
    <div class='app'>
      ${Header()}
      ${Container()}
    </div>
  `;
}
