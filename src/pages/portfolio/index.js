import { RiTodoLine } from "react-icons/ri";
import { useState } from "react";
import {
  addCustomer,
  deleteCustomer,
  editCustomer,
} from "../../slices/coustomerslices";
import { useDispatch, useSelector } from "react-redux";
import { FaGithub,FaLinkedin,FaInstagram,FaYoutube } from "react-icons/fa";

import "../portfolio/style.css"

const Portfolio = () => {
  // const [addinput, setInput] = useState("");
  // const [editedTaskIndex, setEditedTaskIndex] = useState("");
  // const task = useSelector((state) => state.customers);
  // const dispatch = useDispatch();

  // const clickbutton = () => {
  //   if (editedTaskIndex !== "") {
  //     if (addinput.trim() !== "") {
  //       const updatelist = addinput;
  //       console.log("updatelist", updatelist);
  //       dispatch(editCustomer({ index: editedTaskIndex, updatelist }));
  //       setInput("");
  //       setEditedTaskIndex("");
  //     } else {
  //       setEditedTaskIndex("");
  //     }
  //   } else if (addinput.trim() !== "") {
  //     dispatch(addCustomer(addinput));
  //     setInput("");
  //   }
  // };

  // const handleEdit = (index) => {
  //   setEditedTaskIndex(index);
  //   setInput(task[index]);
  // };

  // const handleDelete = (deleteIndex) => {
  //   dispatch(deleteCustomer({ deleteIndex, task }));
  // };

  const handleClick = () => {  
    window.open("https://drive.google.com/file/d/1NJsWQJtFm-y7DQdgmTDuRMhez7a_ZFhP/view?usp=drive_link", "_blank");
  }

  return (
    // <div>
    //    <div style={{ display: "flex", justifyContent: "center", margin: 15 }}>
    //     <h1>TodoInput</h1>
    //     <div></div>
    //   </div>
    //   <div
    //     style={{
    //       border: "1px solid #000",
    //       margin: "42px",
    //       padding: "2px",
    //       boxSizing: "border-box",
    //     }}
    //   >
    //     <div style={{ padding: 15, position: "relative", marginLeft: 50 }}>
    //       <div
    //         style={{
    //           width: 40,
    //           height: 44,
    //           backgroundColor: "#16a3b7",
    //           border: "none",
    //           position: "absolute",
    //           top: "20%",
    //           left: 15,
    //         }}
    //       >
    //         <div style={{ position: "absolute", top: "30%", left: 10 }}>
    //           <RiTodoLine size={20} color="black" />
    //         </div>
    //       </div>
    //       <input
    //         type="text"
    //         style={{
    //           width: "80%",
    //           padding: 10,
    //           paddingLeft: 60,
    //           fontSize: "16px",
    //         }}
    //         value={addinput}
    //         onChange={(e) => setInput(e.target.value)}
    //         placeholder="New Todo"
    //       />
    //     </div>
    //     <button
    //       style={{
    //         backgroundColor: "#16a3b7",
    //         border: "none",
    //         borderRadius: 5,
    //         width: "76%",
    //         margin: 13,
    //         padding: 12,
    //         color: "white",
    //         marginLeft: 62,
    //       }}
    //       onClick={clickbutton}
    //     >
    //       {editedTaskIndex !== "" ? "Update data" : "Add new task"}
    //     </button>
    //   </div>
    //   <div>
    //     <div style={{ textAlign: "center", marginBottom: 10 }}>Todo list</div>
    //     <div
    //       style={{
    //         display: "flex",
    //         justifyContent: "space-around",
    //         alignItems: "center",
    //       }}
    //     >
    //       <button
    //         style={{
    //           width: "15%",
    //           height: "15%",
    //           display: "flex",
    //           justifyContent: "center",
    //           padding: 10,
    //           backgroundColor: "#16a3b7",
    //           border: "none",
    //           borderRadius: 5,
    //         }}
    //       >
    //         All
    //       </button>
    //       <button
    //         style={{
    //           width: "15%",
    //           height: "15%",
    //           display: "flex",
    //           justifyContent: "center",
    //           padding: 10,
    //           backgroundColor: "#16a3b7",
    //           border: "none",
    //           borderRadius: 5,
    //         }}
    //       >
    //         Done
    //       </button>
    //       <button
    //         style={{
    //           width: "15%",
    //           height: "15%",
    //           display: "flex",
    //           justifyContent: "center",
    //           padding: 10,
    //           backgroundColor: "#16a3b7",
    //           border: "none",
    //           borderRadius: 5,
    //         }}
    //       >
    //         Todo
    //       </button>
    //     </div>
    //     <div>
    //       <ul
    //         style={{
    //           listStyleType: "none",
    //         }}
    //       >
    //         {task.map((task, index) => (
    //           <li
    //             key={index}
    //             style={{
    //               marginTop: "15px",
    //               border: "1px solid #000",
    //               margin: "10px",
    //               padding: "10px",
    //             }}
    //           >
    //             {task}
    //             <button
    //               style={{ marginLeft: "10px" }}
    //               onClick={() => handleEdit(index)}
    //             >
    //               Edit
    //             </button>
    //             <button
    //               style={{ marginLeft: "10px" }}
    //               onClick={() => handleDelete(index)}
    //             >
    //               Delete
    //             </button>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    //  </div>

    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "4%",
        }}
      >
        <div style={{ width: "42%" }}>
          <div class="card">
            <div class="img"></div>
            <span>Abubacker Siddiq</span>
            <p class="info">
              I am a passionate and results-driven React.js and React Native
              developer with 1.3 years of hands-on experience in crafting
              efficient and scalable applications. My journey in the world of
              web and mobile development has been marked by a commitment to
              delivering high-quality solutions that meet both user requirements
              and business objectives.
            </p>
            <div class="share">
              <a href="https://github.com/abu865" target="_blank">
                <FaGithub size={40} />
              </a>
              <a
                href="https://www.linkedin.com/in/abubacker-siddiq-020124220/"
                target="_blank"
              >
                <FaLinkedin size={40} />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <FaInstagram size={40} />
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <FaYoutube size={40} />
              </a>
            </div>
            <button onClick={handleClick}>Resume</button>
          </div>
        </div>
        <div style={{ width: "60%" }}>
          <div class="cards">
            <div class="header">My Skills</div>
            <div class="body">
              <div class="skill">
                <div class="skill-name">HTML</div>
                <div class="skill-level">
                  <div class="skill-percent" style={{ width: "90%" }}></div>
                </div>
                <div class="skill-percent-number">90%</div>
              </div>
              <div class="skill">
                <div class="skill-name">CSS</div>
                <div class="skill-level">
                  <div class="skill-percent" style={{ width: "80%" }}></div>
                </div>
                <div class="skill-percent-number">80%</div>
              </div>
              <div class="skill">
                <div class="skill-name">JavaScript</div>
                <div class="skill-level">
                  <div class="skill-percent" style={{ width: "75%" }}></div>
                </div>
                <div class="skill-percent-number">75%</div>
              </div>
              <div class="skill">
                <div class="skill-name">ReactNative</div>
                <div class="skill-level">
                  <div class="skill-percent" style={{ width: "75%" }}></div>
                </div>
                <div class="skill-percent-number">75%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio; 
