import "./App.css";

function App() {
  return (
    <>
      <div className="container pb-5 ">
        <div className="row pb-3 pt-3">
          <div className="col-md-7 rounded  m-auto p-0">
            <div className="top-purple"></div>
            <div className="content bg-white">
              <div className="headings">Assignment Task</div>
              <hr />
              <p className="bold-email pt-4 text-muted">
                kasifsaif784@gmail.com{" "}
                <a href="/" className="text-decoration-none">
                  Switch Account
                </a>
              </p>
              <p className="para text-muted">
                The name and photo associated with your Google account will be
                recorded when you upload files and submit this form. Your email
                is not part of your response.
              </p>
              <hr />
              <p className="indecator">* Indicates required question</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7 border rounded m-auto  bg-white p-0 pt-3">
            <div className="content">
              <div className="title">MCQ*</div>
              <div className="input-container pt-3 pb-3">
                {" "}
                <input
                  type="radio"
                  id="option1"
                  name="option"
                  value="option1"
                />
                <label htmlFor="option1">Option1</label>
              </div>
              <div className="input-container  pb-3">
                <input
                  type="radio"
                  id="option2"
                  name="option"
                  value="option2"
                />
                <label htmlFor="option2">Option2</label>
              </div>
              <div className="input-container">
                {" "}
                <input
                  type="radio"
                  id="option3"
                  name="option"
                  value="option3"
                />
                <label htmlFor="option3">Option3</label>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-3  ">
          <div className="col-md-7 border rounded m-auto  bg-white p-0 pt-3">
            <div className="content">
              <div className="title">Checkbox*</div>
              <div className="input-container pt-3 pb-3">
                <input
                  type="checkbox"
                  id="option1"
                  name="option"
                  value="option1"
                />
                <label htmlFor="option1">Option1</label>
              </div>
              <div className="input-container  pb-3">
                <input
                  type="checkbox"
                  id="option2"
                  name="option"
                  value="option2"
                />
                <label htmlFor="option2">Option2</label>
              </div>
              <div className="input-container">
                {" "}
                <input
                  type="checkbox"
                  id="option3"
                  name="option"
                  value="option3"
                />
                <label htmlFor="option3">Option3</label>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-md-7 border rounded m-auto  bg-white p-0 pt-3">
            <div className="content">
              <div className="title">Short Answer*</div>

              <input
                type="text"
                id="short_answer"
                name="short_answer"
                placeholder="Your answer"
                className="input-style"
              />
            </div>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-md-7 border rounded m-auto  bg-white p-0 pt-3">
            <div className="content">
              <div className="title">ParaGraph*</div>
              <textarea
                id="paragraph"
                name="paragraph"
                placeholder="Your answer"
                className="input-style w-100"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-md-7 border rounded m-auto  bg-white p-0 pt-3">
            <div className="content">
              <div className="title">Drop Down*</div>
              <div className="pt-3 pb-3">
                <select className="drop_down">
                  <option value="option1">Option1</option>
                  <option value="option2">Option2</option>
                  <option value="option3">Option3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-md-7 border rounded m-auto  bg-white p-0 pt-3">
            <div className="content">
              <div className="title">File Upload*</div>
              <div className="pt-3 pb-3">
                <input
                  type="file"
                  id="file"
                  name="file"
                  className="input-file"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-md-7 border rounded m-auto  bg-white p-0 pt-3">
            <div className="content">
              <div className="title">File Upload*</div>
              <div className="pt-3 pb-3">
                <div className="row">
                  <div className="col-md-1 d-flex justify-content-center pt-2 pb-2"></div>
                  <div className="col-md-2 d-flex justify-content-center pt-3 pb-3">
                    1
                  </div>
                  <div className="col-md-2 d-flex justify-content-center pt-3 pb-3">
                    2
                  </div>
                  <div className="col-md-2 d-flex justify-content-center pt-3 pb-3">
                    3
                  </div>
                  <div className="col-md-2 d-flex justify-content-center  pt-3 pb-3">
                    4
                  </div>
                  <div className="col-md-2 d-flex justify-content-center  pt-3 pb-3">
                    5
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1 d-flex justify-content-center pt-2 pb-2">
                    Worst
                  </div>
                  <div className="col-md-2 d-flex justify-content-center pt-3 pb-3">
                    <input type="radio" id="option1" name="row1" value="1" />
                  </div>
                  <div className="col-md-2 d-flex justify-content-center pt-3 pb-3">
                    <input type="radio" id="option1" name="row1" value="2" />
                  </div>
                  <div className="col-md-2 d-flex justify-content-center pt-3 pb-3">
                    <input type="radio" id="option1" name="row1" value="3" />
                  </div>
                  <div className="col-md-2 d-flex justify-content-center  pt-3 pb-3">
                    <input type="radio" id="option1" name="row1" value="4" />
                  </div>
                  <div className="col-md-2 d-flex justify-content-center  pt-3 pb-3">
                    <input type="radio" id="option1" name="row1" value="5" />
                  </div>
                  <div className="col-md-1 d-flex justify-content-center  pt-3 pb-3">
                    Best
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-md-7 border rounded m-auto  bg-white p-0 pt-3">
            <div className="content">
              <div className="title">Multi choice Grid*</div>
              <div className="pt-3 pb-3">
                <div className="row pt-2">
                  <div className="col-md-3 d-flex justify-content-center"></div>
                  <div className="col-md-3 d-flex justify-content-center">
                    Column1
                  </div>
                  <div className="col-md-3 d-flex justify-content-center">
                    Column2
                  </div>
                  <div className="col-md-3 d-flex justify-content-center">
                    Column3
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-3  bg-light pt-3 pb-3">Row 1</div>
                  <div className="col-md-3 d-flex justify-content-center bg-light pt-2 pb-2">
                    <input type="radio" id="option1" name="row1" value="row1" />
                    <label htmlFor="row1"></label>
                  </div>
                  <div className="col-md-3 d-flex justify-content-center bg-light pt-3 pb-3">
                    <input type="radio" id="option1" name="row1" value="row1" />
                    <label htmlFor="row1"></label>
                  </div>
                  <div className="col-md-3 d-flex justify-content-center bg-light pt-3 pb-3">
                    <input type="radio" id="option1" name="row1" value="row1" />
                    <label htmlFor="row1"></label>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-3  bg-light pt-3 pb-3">Row 2</div>
                  <div className="col-md-3 d-flex justify-content-center bg-light pt-3 pb-3">
                    <input type="radio" id="option1" name="row2" value="row2" />
                    <label htmlFor="row2"></label>
                  </div>
                  <div className="col-md-3 d-flex justify-content-center bg-light pt-3 pb-3">
                    <input type="radio" id="option1" name="row2" value="row1" />
                    <label htmlFor="row2"></label>
                  </div>
                  <div className="col-md-3 d-flex justify-content-center bg-light pt-3 pb-3">
                    <input type="radio" id="option1" name="row2" value="row1" />
                    <label htmlFor="row1"></label>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-3  bg-light pt-3 pb-3">Row 3</div>
                  <div className="col-md-3 d-flex justify-content-center bg-light pt-3 pb-3">
                    <input type="radio" id="option1" name="row3" value="row3" />
                    <label htmlFor="row1"></label>
                  </div>
                  <div className="col-md-3 d-flex justify-content-center bg-light pt-3 pb-3">
                    <input type="radio" id="option1" name="row3" value="row3" />
                    <label htmlFor="row1"></label>
                  </div>
                  <div className="col-md-3 d-flex justify-content-center bg-light pt-3 pb-3">
                    <input type="radio" id="option1" name="row3" value="row3" />
                    <label htmlFor="row3"></label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-md-7 border rounded m-auto  bg-white p-0 pt-3">
            <div className="content">
              <div className="title">Tick Box Grid*</div>
              <div className="pt-3 pb-3">
                <div className="row pt-2">
                  <div className="col-md-3 d-flex justify-content-center"></div>
                  <div className="col-md-3 d-flex justify-content-center">
                    Column1
                  </div>
                  <div className="col-md-3 d-flex justify-content-center">
                    Column2
                  </div>
                  <div className="col-md-3 d-flex justify-content-center">
                    Column3
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-3  bg-light pt-3 pb-3">Row 1</div>
                  <div className="col-md-3 d-flex justify-content-center bg-light pt-3 pb-3">
                    <input
                      type="checkbox"
                      id="option1"
                      name="row1"
                      value="row1"
                    />
                    <label htmlFor="row1"></label>
                  </div>
                  <div className="col-md-3 d-flex justify-content-center bg-light pt-3 pb-3">
                    <input
                      type="checkbox"
                      id="option1"
                      name="row1"
                      value="row1"
                    />
                    <label htmlFor="row1"></label>
                  </div>
                  <div className="col-md-3 d-flex justify-content-center bg-light pt-3 pb-3">
                    <input
                      type="checkbox"
                      id="option1"
                      name="row1"
                      value="row1"
                    />
                    <label htmlFor="row1"></label>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-3  bg-light pt-3 pb-3">Row 2</div>
                  <div className="col-md-3 d-flex justify-content-center bg-light pt-3 pb-3">
                    <input
                      type="checkbox"
                      id="option1"
                      name="row2"
                      value="row2"
                    />
                    <label htmlFor="row2"></label>
                  </div>
                  <div className="col-md-3 d-flex justify-content-center bg-light pt-3 pb-3">
                    <input
                      type="checkbox"
                      id="option1"
                      name="row2"
                      value="row1"
                    />
                    <label htmlFor="row2"></label>
                  </div>
                  <div className="col-md-3 d-flex justify-content-center bg-light pt-3 pb-3">
                    <input
                      type="checkbox"
                      id="option1"
                      name="row2"
                      value="row1"
                    />
                    <label htmlFor="row1"></label>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-3  bg-light pt-3 pb-3">Row 3</div>
                  <div className="col-md-3 d-flex justify-content-center bg-light pt-3 pb-3">
                    <input
                      type="checkbox"
                      id="option1"
                      name="row3"
                      value="row3"
                    />
                    <label htmlFor="row1"></label>
                  </div>
                  <div className="col-md-3 d-flex justify-content-center bg-light pt-3 pb-3">
                    <input
                      type="checkbox"
                      id="option1"
                      name="row3"
                      value="row3"
                    />
                    <label htmlFor="row1"></label>
                  </div>
                  <div className="col-md-3 d-flex justify-content-center bg-light pt-3 pb-3">
                    <input
                      type="checkbox"
                      id="option1"
                      name="row3"
                      value="row3"
                    />
                    <label htmlFor="row3"></label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-7 m-auto p-0 pt-3">
            <div className="row">
              <div className="col-md-3 d-flex align-items-center ">
                <button className="btn bg-purple">Submit</button>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-8 d-flex justify-content-center align-items-center">
                    <div className="progress" style={{ width: "100%" }}>
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "100%" }}
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="col-md-4">Page 1 of 1</div>
                </div>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-end">
                <button className="btn btn-purple">Clear form</button>
              </div>
            </div>
            <p className="text-muted footer-p">Never submit passwords through Google Forms.</p>
            <p className="text-muted footer-p text-center">This content is neither created nor endorsed by Google. Report Abuse - Terms of Service - Privacy Policy.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
