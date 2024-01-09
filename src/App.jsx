import DynamicListContainer from "./Components/DynamicListContainer";
import Search from "./Components/Search";
function App() {
const data = [1,2,3,4,5,6,7,8,9,10]

  return (
    <div className='App'>
      <Search/>
      <DynamicListContainer data={data} type={"ol"}/>
    </div>
  );
}

export default App;
