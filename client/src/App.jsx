import toast, { Toaster } from "react-hot-toast"
import Test from "./components/Test"
function App() {

  const notify = () => toast.success("Hello", {
    position: "top-right",
    duration: 1000
  })
  return (
    <>

      <h1 className="text-3xl text-center">Hello world</h1>
      <button onClick={notify}>Toast</button>
      {/* <Test /> */}
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </>
  )
}

export default App
