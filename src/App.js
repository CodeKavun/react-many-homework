import './App.css';
import SheckspearBio from './SheckspearBio';
import BookInfo from './BookInfo';

function App() {
  return (
    <div className="App">
      <h1>William Sheckspear</h1>
      <SheckspearBio period="Childhood" description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."></SheckspearBio>
      <SheckspearBio period="Text writting" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at lectus enim. Sed hendrerit, elit."></SheckspearBio>
      <hr/>
      <BookInfo name="Romeo & Julieta" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis rhoncus auctor. Curabitur gravida tortor sit amet sem viverra tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed fringilla."></BookInfo>
    </div>
  );
}

export default App;
