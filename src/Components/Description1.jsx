import React from "react";
// import AceEditor from "react-ace";
import { Link } from "react-router-dom";
// import "ace-build/src-noconflict/theme-dracula";

function Description1() {
  return (
    <div className="afopen">
      <div className="back-ln">
        <h3>
          HospitalManagement
          <Link to="/MainPage" style={{ textDecoration: "none" }}>
            <button className="btt-back">Back</button>
          </Link>
        </h3>
      </div>
      <br />
      <p className="description-text">
        Hospital management involves overseeing the efficient functioning of
        medical facilities by coordinating various aspects like staffing,
        finances, operations, and patient care. It encompasses strategic
        planning, resource allocation, and ensuring adherence to regulatory
        standards to optimize healthcare delivery. Effective management involves
        supervising staff, maintaining quality care, managing budgets,
        implementing technological advancements, and fostering a patient-centric
        environment. It aims to streamline administrative processes, enhance
        patient experiences, and improve overall healthcare outcomes through
        systematic organization and coordination within the hospital setting.
      </p>
      <div className="how2use">
        <h3>Planning and Design:</h3>
        <p>
          <ol>
            <img src="../images/layout.png" alt="#" />
            <li>The website layout should be like above image</li>
            <li>Define the requirements and functionalities of your HMS.</li>
            <li>
              Design the system architecture, including databases, user
              interfaces, and backend logic.
            </li>
          </ol>
          <h3>Setting up the Environment:</h3>
          <p>
            <ol>
              <li>
                Install necessary software like Python, Node.js, or any other
                language and framework you prefer.
              </li>
              <li>
                Set up a database management system (like MySQL, PostgreSQL, or
                MongoDB) if your system requires a database.
              </li>
              <li>
                To setup the environment you need to install VScode application
                it helps user to write and run their code he/she can also
                install some extensions init that was very helpful..
                <a href="https://code.visualstudio.com/download">
                  From here you can download it
                </a>
              </li>
            </ol>
          </p>
          <h3>Backend Development:</h3>
          <p>
            <ol>
              <li>
                Create backend logic for handling functionalities like patient
                management, appointments, billing, etc.
              </li>
              <li>
                Use frameworks like Flask (Python), Express (Node.js), Django
                (Python), Spring (Java), etc., to facilitate backend
                development.
              </li>
              <li>
                Implement data models, APIs, and authentication mechanisms.
              </li>
            </ol>
          </p>
          <h3>Frontend Development:</h3>
          <ol>
            <li>
              Use HTML, CSS, JavaScript, and frontend frameworks like React,
              Angular, or Vue.js to build the UI components.
            </li>
            <li>
              <a href="https://www.learnvern.com/" target="_blank">
                If you want to learn the Frontend Development visite this
                website
              </a>
            </li>
          </ol>
          <h3>Database Management:</h3>
          <p>
            <ol>
              <li>
                Design and create a database schema that supports your
                application's data needs.
              </li>
              <li>
                Implement CRUD (Create, Read, Update, Delete) operations for
                managing patient records, appointments, etc.
              </li>
            </ol>
          </p>
          <h3>Integration and Testing:</h3>
          <p>
            <ol>
              <li>Integrate frontend and backend components.</li>
            </ol>
          </p>
          <div className="mimg">
            <h3>Home Page</h3>
            <p className="mimage">
              <img src="../images/HMSHome.png" alt="" className="code-img" />
              <p className="hsc">Homepage source code</p>
              <img
                src="../images/HMSsourcecode.png"
                alt=""
                className="code-img"
              />
            </p>
          </div>
          <div className="mimg">
            <h3>About Page</h3>
            <p className="mimage">
              <img src="../images/HMSabout.png" alt="" className="code-img" />
              <p className="hsc">Aboutpage source code</p>
              <img src="../images/about.png" alt="" className="code-img" />
            </p>
          </div>
          <div className="mimg">
            <h3>Form Page</h3>
            <p className="mimage">
              <img src="../images/HMSForm.png" alt="" className="code-img" />
              <p className="hsc">signup page source code</p>
              <img src="../images/form.png" alt="" className="code-img" />
            </p>
          </div>
          <h2>Most used basic HTML TAGS to make website</h2>
          <h3>HTML Buttons</h3>
          <p>
            <ol>
              <li>
                <a href="https://www.w3schools.com/tags/tag_button.asp">
                  Source code for HTML buttons.
                </a>
              </li>
            </ol>
          </p>
          <h3>HTML Forms</h3>
          <p>
            <ol>
              <li>
                <a href="https://www.w3schools.com/html/html_forms.asp">
                  Source code for HTML forms.
                </a>
              </li>
            </ol>
          </p>
          <h3>HTML navbar</h3>
          <p>
            <ol>
              <li>
                <a href="https://www.w3schools.com/howto/howto_js_topnav.asp">
                  Source code for nav bar.
                </a>
              </li>
            </ol>
          </p>
          <h3>HTML input types</h3>
          <p>
            <ol>
              <li>
                <a href="https://www.w3schools.com/html/html_form_input_types.asp">
                  Source code for html input types.
                </a>
              </li>
            </ol>
          </p>
          <h3>HTML image types</h3>
          <p>
            <ol>
              <li>
                <a href="https://www.w3schools.com/html/html_images.asp">
                  Source code for images.
                </a>
              </li>
            </ol>
          </p>
          <h3>HTML link tags</h3>
          <p>
            <ol>
              <li>
                <a href="https://www.w3schools.com/html/html_links.asp">
                  Source to link a url
                </a>
              </li>
            </ol>
          </p>
          <h3>HTML paragraph</h3>
          <p>
            <ol>
              <li>
                <a href="https://www.w3schools.com/html/html_paragraphs.asp">
                  Source code to write paragraph in html.
                </a>
              </li>
            </ol>
          </p>
          <h3>HTML headings</h3>
          <p>
            <ol>
              <li>
                <a href="https://www.w3schools.com/html/html_headings.asp">
                  Source code to write headinds in html
                </a>
              </li>
            </ol>
          </p>
          <h3>HTML list tag</h3>
          <ol>
            <li>
              <a href="https://www.w3schools.com/html/html_lists.asp">
                Source code to write list tag
              </a>
            </li>
          </ol>
          <h2>Most used basic CSS TAGS to make style the website</h2>
          <h3>CSS buttons</h3>
          <p>
            <ol>
              <li>
                <a href="https://www.w3schools.com/css/css3_buttons.asp">
                  Source code to style the buttons.
                </a>
              </li>
            </ol>
          </p>
          <h3>CSS form</h3>
          <p>
            <ol>
              <li>
                <a href="https://www.w3schools.com/css/css_form.asp">
                  {" "}
                  Source code to style the form.
                </a>
              </li>
            </ol>
          </p>
          <h3>CSS navbar</h3>
          <ol>
            <li>
              <a href="https://www.w3schools.com/css/css_navbar.asp">
                Source code to style the navbar.
              </a>
            </li>
          </ol>
          <h3>CSS input</h3>
          <ol>
            <li>
              <a href="https://www.w3schools.com/w3css/w3css_input.asp">
                Source code to style the inputs.
              </a>
            </li>
          </ol>
          <h3>CSS images</h3>
          <ol>
            <li>
              <a href="https://www.w3schools.com/css/css3_images.asp">
                {" "}
                Source code to style the images.
              </a>
            </li>
          </ol>
          <h3>CSS selectors</h3>
          <ol>
            <li>
              <a href="https://www.w3schools.com/css/css_selectors.asp">
                Selectors :
              </a>
              select the following html tags
              like(ptage,headingtage,.classtage,#idtage etc..) to write your own
              css
            </li>
          </ol>
          <h3>By using above html and css basics you can make any website.</h3>
        </p>
      </div>
      <p className="futher-details">
        For Futher information{" "}
        <a href="https://medstarhis.com/" target="_blank">
          check this website.
        </a>
        <p className="source-web">
          Provided
          <a
            href="https://github.com/search?q=Hospital%20management&type=repositories"
            target="_blank"
          >
            SourceCode
          </a>
        </p>
      </p>
    </div>
  );
}

export default Description1;
