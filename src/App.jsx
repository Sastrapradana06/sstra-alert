import "./App.css";
import Alert from "./components/alert";
import useHandleAlert from "./hooks/useHandleAlert";

function App() {
  const { status, data, handleAlert } = useHandleAlert();

  return (
    <div className="w-full h-[100vh] border ">
      <h1>Hello</h1>
      <Alert
        status={status}
        type={data.type}
        message={data.message}
        background={"bg-gray-600"}
      />
      <button
        onClick={() =>
          handleAlert("success", "Berhasil menambahkan data buku yang baru")
        }
      >
        click
      </button>
    </div>
  );
}

export default App;
