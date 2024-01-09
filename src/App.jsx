import DynamicListContainer from "./Components/DynamicListContainer";
function App() {
const data = [1,2,3,4,5,6,7,8,9,10]

  return (
    <div className='App'>
      <DynamicListContainer data={data} type={"ol"}/>
    </div>
  );
}

export default App;
