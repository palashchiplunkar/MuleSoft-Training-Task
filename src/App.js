import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [data, setdata] = useState({
    moviename: "",
    actor: "",
    actress: "",
    year: "",
    dir: "",
  });
  const [movList, setMovList] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:4000/api/get").then((resp) => {
      setMovList(resp.data);
    });
  }, []);

  const getData = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  console.log(data);
  const submitData = () => {
    Axios.post("http://localhost:4000/api/insert", data).then(() => {
      alert("Success");
    });
    setMovList([
      ...movList,
      {
        mov_name: data.moviename,
        actor: data.actor,
        actress: data.actress,
        year: data.year,
        dir_name: data.dir,
      },
    ]);
  };
  return (
    <>
      <div className='container'>
        <h1>MOVIE DATABASE</h1>
        <Form>
          <Form.Group className='mb-3' controlId='formGroupEmail'>
            <Form.Label>Enter Movie Name</Form.Label>
            <Form.Control
              type='text'
              name='moviename'
              placeholder='Movie Name'
              value={data.moviename}
              onChange={getData}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formGroupPassword'>
            <Form.Label>Enter Lead Actor Name</Form.Label>
            <Form.Control
              type='text'
              name='actor'
              placeholder='Lead Actor'
              value={data.actor}
              onChange={getData}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formGroupPassword'>
            <Form.Label>Enter Lead Actress Name</Form.Label>
            <Form.Control
              type='text'
              name='actress'
              placeholder='Lead Actress'
              value={data.actress}
              onChange={getData}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formGroupPassword'>
            <Form.Label>Enter year of release</Form.Label>
            <Form.Control
              type='text'
              name='year'
              placeholder='Year of release'
              value={data.year}
              onChange={getData}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formGroupPassword'>
            <Form.Label>Enter Director Name</Form.Label>
            <Form.Control
              type='text'
              name='dir'
              placeholder='Director name'
              value={data.dir}
              onChange={getData}
            />
          </Form.Group>
          <div className='button'>
            <Button variant='dark' onClick={submitData}>
              Submit
            </Button>
          </div>
        </Form>
      </div>
      <div className='table'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Movie name</th>
              <th>Lead Actor</th>
              <th>Lead Actress</th>
              <th>Year</th>
              <th>Director Name</th>
            </tr>
          </thead>
          <tbody>
            {movList.map((val) => {
              return (
                <tr>
                  <td>{val.mov_name}</td>
                  <td>{val.actor}</td>
                  <td>{val.actress}</td>
                  <td>{val.year}</td>
                  <td>{val.dir_name}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default App;
