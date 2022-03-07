import React,{useState} from "react";
import "./form.css";
export const InputText = () => {

  const arrayInput = [
    {
      type: "text",
      label: "Gig Title",
      name: "GigTitle",
      placeholder: "Gig Title",
    },
    {
      type: "text",
      label: "Gig Price",
      name: "GigPrice",
      placeholder: "Gig Price",
    },

    {
      type: "textArea",
      label: "Short Description",
      name: "ShortDescription",
      placeholder: "Write a Short Description",
    },

    {
      type: "textArea",
      label: "Deliverables",
      name: "Deliverables",
      placeholder: "Write Deliverables",
    },

    {
      type: "file",
      label: "Gigs Images",
      name: "GigsImages",
    },

    {
      type: "select",
      label: "Time Taken For Delivery",
      name: "TimeTakenForDelivery",
      options: ["Select the number of days", "One", "Two", "Three"],
    },
    {
      type: "select",
      label: "Revisions Provided",
      name: "RevisionsProvided",
      options: ["Select the number of revisions", "One", "Two", "Three"],
    }
    
  ];
 
const [userInput, setUserInput] = useState({});


const handleInput = (e)=>{
  const name = e.target.name;
  const value = e.target.value;

  setUserInput({ ...userInput, [name]: value});
  // console.log(name, value);
}

//for submit form

const handleSubmit = (e) =>{
  e.preventDefault();

  console.log(userInput);
}


  return (
    <>

      <form className="mt-5"  >
        {arrayInput.map((data, i) => {
          return (
            <div className="mb-4">
              <label  class="form-label mb-3">
                {data.label}
              </label>

              {data.type == "textArea" && (
                <textarea
                  className="form-control rounded txtarea"
                  placeholder={data.placeholder}
                  rows="4"
                  cols="50"
                  id="Description"
                  name={data.name}
                   value={userInput.Description}
                   onChange={handleInput}

                />
              )}

              {(data.type == "text" || data.type == "file") && (
                <input
                  type={data.type}
                  className="form-control rounded-pill"
                  placeholder={data.placeholder}
                  id="username"
                  name={data.name}
                   value={userInput.Description}
                   onChange={handleInput}
                />
              )}

              {(data.type == "select" )&& (
                <select className="form-select border-none rounded-pill"
                 id="select"
                  name={data.name}
                   value={userInput.select}
                   onChange={handleInput}
                   >
                  {data.options.map((option, i) => {
                    if ((i = 0)) {
                      return <option selected>{option}</option>;
                    } else {
                      return <option>{option}
                      </option>;
                    }
                  })}
                 
                </select>
              )}
            </div>
          );
        })}

        <div className="mb-5 w-100 ">
          <button
            type="button"
            className="btn btn-light  w-25 rounded-pill float-start mb-5"
          >
            Back
          </button>

          <button
            type="submit"
            className="btn btn-dark w-25 rounded-pill float-end  mb-5"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};
