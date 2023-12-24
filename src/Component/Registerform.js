import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";

export const Registerform = () => {
  const places = [
    {
      id: "1",
      name: "Thailand",
    },
    {
      id: "2",
      name: "Goa",
    },
    {
      id: "3",
      name: "Singapore",
    },
    {
      id: "4",
      name: "Malaysia",
    },
    {
      id: "5",
      name: "Paris",
    },
    {
      id: "6",
      name: "Tokyo",
    },
    {
      id: "7",
      name: "New York",
    },
    {
      id: "8",
      name: "Paris",
    },
    {
      id: "9",
      name: "Tokyo",
    },
    {
      id: "10",
      name: "New York",
    },
  ];
  const styled = [
    {
      font: "12px",
    },
  ];
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(startDate);
  const [SelectPlace, setSelectPlace] = useState();
  const [Persone, setPersone] = useState();
  const [Description, setDescription] = useState();
  const onsubmit = () => {
    // console.log(startDate)
    // console.log(endDate)
    // console.log(SelectPlace)
    // console.log(Persone)
    // console.log(Description)
    if (
      startDate != undefined &&
      endDate != undefined &&
      SelectPlace != undefined &&
      Persone != undefined &&
      Description != undefined
    ) {
      Swal.fire({
        title: "Good job!",
        text: "Booking Sucessful",
        icon: "success",
      }).then(() => {
        window.location.reload();
      });
    } else {
      Swal.fire({
        // title: "Good job!",
        text: "Complete All Fileds",
        icon: "error",
      });
    }
  };
  const onPlace = (e) => {
    setPersone(e.target.value);
  };

  return (
    <div>
      <div
        style={{
          border: "0px solid black",
          padding:'10px',
          borderRadius: "5px",
          backgroundColor: "rgb(243 243 242 / 50%)",
        }}
      >
        <h2 >Registration Form</h2>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <label
              style={{
                fontSize: "1.2rem",
                marginBottom: "8px",
                fontWeight: "bold",
              }}
            >
              Where to
            </label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setSelectPlace(e.target.value)}
              style={{
                padding: "8px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "1rem",
                marginBottom: "16px",
                width: "90%",
                margin: "auto",
              }}
            >
              <option>Select places</option>
              {places.map((data) => {
                return <option value={data.name}>{data.name}</option>;
              })}
            </Form.Select>

            <label
              style={{
                fontSize: "1.2rem",
                marginBottom: "3px",
                fontWeight: "bold",
              }}
            >
              How many person
            </label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => onPlace(e)}
              style={{
                padding: "8px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "1rem",
                marginBottom: "16px",
                width: "90%",
                margin: "auto",
              }}
            >
              <option value="undefine">select</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="4">Four</option>
              <option value="5">Five</option>
              <option value="6">Six</option>
            </Form.Select>

            <label
              style={{
                fontSize: "1.2rem",
                marginBottom: "4px",
                fontWeight: "bold",
              }}
            >
              Start Date
            </label>
            <input
              type="date"
              style={{
                padding: "8px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "1rem",
                marginBottom: "16px",
                width: "90%",
                margin: "auto",
              }}
              placeholderText="Select a date between today and the future"
            ></input>
            {/* <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              minDate={new Date()}
              placeholderText="Select a date between today and the future"
              style={{
                padding: "2px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "1rem",
                marginBottom: "16px",
              }}
            /> */}
            
              <textarea
                style={{
                  padding: "8px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  fontSize: "1rem",
                  marginBottom: "16px",
                  width: "90%",
                  margin: "auto",
                  marginTop: "40px",
                  height: "100px"
                }}
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <br></br>
              {/* <button  >Book now</button> */}
              <div> <button
                style={{
                  padding: "10px 20px",
                  background: "black",
                  color: "white",
                  borderRadius: "20px",
                  marginTop: "30px",
                  fontSize: "1.2rem",
                  cursor: "pointer",
                }}
                onClick={() => {
                  onsubmit();
                }}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
