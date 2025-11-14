import { useRef } from "react";
import TailButton from "../components/TailButton";

export default function TodoInput({ todos, setTodos }) {
  const todoRef = useRef("");

  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

  const handleAdd = async () => {
    if (todoRef.current.value == "") {
      alert("할 일을 입력해주세요.");
      return;
    }

    const response = await fetch(`${supabaseUrl}/rest/v1/todos`,
      {
        method : 'POST',
        headers : {
          'apikey' : supabaseKey,
          'Authorization' : `Bearer ${supabaseKey}`,
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({ text: inRef.current.value, completed: false })
    });

    if(response.ok) {
      
    }
    // const newItem = {
    //   id: Date.now(),
    //   text: todoRef.current.value,
    //   completed: false
    // }

    // setTodos([newItem, ...todos]);
    // todoRef.current.value = "";
  }
  return (
    <div className="w-full max-w-3xl flex justify-center items-center my-4">
      <input type="text" ref={todoRef} className="flex-1 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs mr-3" />
      <TailButton color="gray" caption="추가" onHandle={handleAdd} />
    </div>
  )
}
