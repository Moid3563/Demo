import React, {useRef, useState } from 'react'
import './CRUD.css'

function App() {
    const list = [
      {
        id: 1,
        name: "HP",
        price: "2222"
      },
      {
        id: 2,
        name: "Dell",
        price: "2445"
      }
    ];
    const [lists, setList] = useState(list);
    const [updateState, setUpdateState] = useState(-1);
    console.log("list", lists);
    return (
      <div className="crud">
        <div>
          <AddList setList={setList} lists={lists} />
          <form onSubmit={handleSubmit}>
            <table>
              {lists.map((current) =>
                updateState === current.id ? (
                  <EditList current={current} lists={lists} setList={setList} />
                ) : (
                  <tr>
                    <td>{current.name}</td>
                    <td>{current.price}</td>
                    <td>
                      <button
                        className="edit"
                        onClick={() => handleEdit(current.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete"
                        type="button"
                        onClick={() => handleDelete(current.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              )}
            </table>
          </form>
        </div>
      </div>
    );
    function handleEdit(id)
   {
      setUpdateState(id)
  ;
    }
  
    function handleDelete(id)
   {
      const newlist = lists.filter((li) => li.id !== id);
      setList(newlist);
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      const name = event.target.elements.name.value;
      const price = event.target.elements.price.value;
      const newlist = lists.map((li) =>
        li.id === updateState ? { ...li, name: name, price: price } : li
      );
  
      setList(newlist);
      setUpdateState(-1);
    }
  }
  
  function EditList({ current, lists, setList }) {
    function handleInputname(event) {
      const value = event.target.value;
      const newlist = lists.map((li) =>
        li.id === current.id ? { ...li, name: value } : li
      );
  
      setList(newlist);
    }
    function handleInputprice(event) {
      const value = event.target.value;
      const newlist = lists.map((li) =>
        li.id === current.id ? { ...li, price: value } : li
      );
  
      setList(newlist);
    }
    return (
      <tr>
        <td>
          <input
            type="text"
            onChange={handleInputname}
            name="name"
            value={current.name}
          />
        </td>
        <td>
          <input
            type="text"
            onChange={handleInputprice}
            name="price"
            value={current.price}
          />
        </td>
        <td>
          <button type="submit">Update</button>
        </td>
      </tr>
    );
  }
  
  function AddList({ setList, lists }) {
    const nameRef = useRef();
    const priceRef = useRef();
  
    function handSubmit(event) {
      console.log("idnew", lists.length + 1);
      event.preventDefault();
      const name = event.target.elements.name.value;
      const price = event.target.elements.price.value;
      const newlist = {
        id: lists.length + 1,
        name,
        price
      };
  
      console.log(newlist);
  
      setList((prevList) => {
        return prevList.concat(newlist);
      });
  
      nameRef.current.value = "";
      priceRef.current.value = "";
    }
  
    return (
      <form className="addForm" onSubmit={handSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          autoComplete="off"
          ref={nameRef}
        />
        <input
          type="text"
          name="price"
          placeholder="Enter Price"
          autoComplete="off"
          ref={priceRef}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
  
  export default App;