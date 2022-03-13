(function() {
  getUserAsync();
})(window);

async function getUserAsync() {
  let response = await fetch(`./json/data.json`);
  let data = await response.json();
  for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
          var element = data[key].yearly;
          if (Array.isArray(element))
              // console.log(element[0]);
              element.forEach((elem) => {
                  const list = document.getElementById("list");
                  if (elem.grade == 'Grade 6') {
                      list.innerHTML += `<option id="` + elem.grade + `" selected> ` + elem.grade + `</option>`;
                      if (Object.hasOwnProperty.call(data, key)) {
                          var element = data[key].yearly;
                          if (Array.isArray(element))
                              element.find(match => {
                                  var matchValue = elem.grade;
                                  if (match.grade == matchValue) {
                                      for (const board in match.boards) {

                                          boardsCol.innerHTML += `<p id="` + board + `" class="boardColumn"> ` + board + `</p>`;
                                          if (board == 'CBSE') {
                                              boardData.innerHTML = "";
                                              document.querySelector('#CBSE').classList.add("active")
                                              var el = 'CBSE';
                                              if (Object.hasOwnProperty.call(element, key)) {

                                                  var element1 = element[0];
                                                  boardData.innerHTML += `<p class="boardInfo"> Total <br> Sessions <br><span>` + element1.boards[el].total_sessions + `</span></p> <p class="boardInfo">Online Pre <br> Assessments <br><span>` + element1.boards[el].online_pre_assignments + `</span></p> <p class="boardInfo">Online Post <br> Assessments <br><span>` + element1.boards[el].online_post_assignments + `</span></p><p class="boardInfo"> Online <br> Practice <br><span>` + element1.boards[el].online_assignments + `</span></p><p class="boardInfo"> Online <br> Tests <br> <span>` + element1.boards[el].online_tests + `</span></p><p class="boardInfo">Career Counselling <br> Sessions with Edu Coach <br><span>` + element1.boards[el].career_counselling_sessions + `</span></p> `;
                                              }
                                          } else {
                                              boardsCol.addEventListener('click', (e) => {
                                                  boardData.innerHTML = "";

                                                  for (var i = 0; i < boardsCol.childNodes.length; i++) {
                                                      if (boardsCol.childNodes[i].className == 'boardColumn active') {
                                                          boardsCol.childNodes[i].classList.remove("active");
                                                      }
                                                  }

                                                  e.target.classList.add("active")
                                                  var el = e.target.id;

                                                  if (Object.hasOwnProperty.call(element, key)) {
                                                      var element1 = element[key];
                                                      boardData.innerHTML += `<p class="boardInfo"> Total <br> Sessions <br><span>` + element1.boards[el].total_sessions + `</span></p> <p class="boardInfo">Online Pre <br> Assessments <br><span>` + element1.boards[el].online_pre_assignments + `</span></p> <p class="boardInfo">Online Post <br> Assessments <br><span>` + element1.boards[el].online_post_assignments + `</span></p><p class="boardInfo"> Online <br> Practice <br><span>` + element1.boards[el].online_assignments + `</span></p><p class="boardInfo"> Online <br> Tests <br> <span>` + element1.boards[el].online_tests + `</span></p><p class="boardInfo">Career Counselling <br> Sessions with Edu Coach <br><span>` + element1.boards[el].career_counselling_sessions + `</span></p> `;
                                                  }
                                              })
                                          }
                                      }

                                  }
                              })
                      }
                  } else {
                      list.innerHTML += `<option id="` + elem.grade + `"> ` + elem.grade + `</option>`;
                  }
              });
      }
  }
  var list_Select = document.querySelector('#list');
  list_Select.addEventListener('change', (e) => {
      for (const key in data) {
          const boardsCol = document.getElementById("boardsCol");
          const boardData = document.querySelector('#boardData');
          boardsCol.innerHTML = "";
          boardData.innerHTML = "";
          if (Object.hasOwnProperty.call(data, key)) {
              var element = data[key].yearly;
              if (Array.isArray(element))
                  element.find(match => {
                      var matchValue = e.target.value;
                      if (match.grade == matchValue) {
                          for (const board in match.boards) {
                              boardsCol.innerHTML += `<p id="` + board + `" class="boardColumn"> ` + board + `</p>`;
                          }
                          boardsCol.addEventListener('click', (e) => {
                              boardData.innerHTML = "";
                              e.target.classList.add("active")
                              var el = e.target.id;
                              for (let [index] in element) {
                                  if (element[index].grade == matchValue) {
                                      if (Object.hasOwnProperty.call(element, index)) {
                                          var element1 = element[index];
                                          boardData.innerHTML += `<p class="boardInfo"> Total <br> Sessions <br><span>` + element1.boards[el].total_sessions + `</span></p> <p class="boardInfo">Online Pre <br> Assessments <br><span>` + element1.boards[el].online_pre_assignments + `</span></p> <p class="boardInfo">Online Post <br> Assessments <br><span>` + element1.boards[el].online_post_assignments + `</span></p><p class="boardInfo"> Online <br> Practice <br><span>` + element1.boards[el].online_assignments + `</span></p><p class="boardInfo"> Online <br> Tests <br> <span>` + element1.boards[el].online_tests + `</span></p><p class="boardInfo">Career Counselling <br> Sessions with Edu Coach <br><span>` + element1.boards[el].career_counselling_sessions + `</span></p> `;
                                      }
                                  }
                              }
                          })
                      }
                  })
          }
      }
  })
  //   Monthly
  for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
          var element = data[key].monthly;
          if (Array.isArray(element))
              element.forEach(elem => {
                  const list2 = document.getElementById("list2");
                  if (elem.grade == 'Grade 6') {
                      list2.innerHTML += `<option id="` + elem.grade + `" selected> ` + elem.grade + `</option>`;
                      if (Object.hasOwnProperty.call(data, key)) {
                          var element = data[key].monthly;
                          if (Array.isArray(element))
                              element.find(match => {
                                  var matchValue = 'Grade 6';
                                  if (match.grade == matchValue) {
                                      var idMatch = match.boards;
                                      for (var property in idMatch) {
                                          var cat = match.boards[property];
                                          for (const key in cat) {
                                              if (Object.hasOwnProperty.call(cat, key)) {
                                                  if (monthData) {
                                                      var discount = (cat[key].discount) / 100;
                                                      var disVal = discount * cat[key].price;
                                                      var discountedValue = cat[key].price - disVal;
                                                      monthData.innerHTML += `<div class="row" style="font-weight:700;background:#a09ad9;margin: 0 0 12px 0;padding: 0;border-radius: 10px;" ><div class="col-md-2 col-sm-12 col-lg-2 monthdatastyle" style="display: flex;justify-content: center;align-items: center"><input type="radio"></div><div class="col-md-3 col-sm-12 col-lg-3 monthdatastyle" style="margin-top: 10px">` + cat[key].valid + `</span><br><span style="font-size: 13px">` + cat[key].refund + `</span></div><div class="col-md-3 col-sm-12 col-lg-3 monthdatastyle"><span style="color:#F3AC11;font-weight:500; font-size : 25px">Rs.` + discountedValue + `</span><span style="text-decoration:line-through;color:#F3AC11"> Rs.` + cat[key].price + `</span><br><span style="font-size:13px;background: #0b2f90;padding: 0 8px;border-radius: 6px;">` + cat[key].discount + `% OFF</span> </div><div class="col-md-2 col-sm-12 col-lg-2 monthdatastyle"  style="margin-top: 10px">Rs.` + cat[key].per_class_price + ` per session<br><span style="font-size:13px">5 Sessions</span></div></div><br>`;
                                                  }
                                              }
                                          }
                                      }
                                  }
                              })
                      }

                  } else {
                      list2.innerHTML += `<option id="` + elem.grade + `"> ` + elem.grade + `</option>`;
                  }
              });
      }
  }

  //
  var list_Select2 = document.querySelector('#list2');
  list_Select2.addEventListener('change', (e) => {
      var monthData = document.querySelector('#monthData');
      monthData.innerHTML = " ";
      for (const key in data) {
          if (Object.hasOwnProperty.call(data, key)) {
              var element = data[key].monthly;
              if (Array.isArray(element))
                  element.find(match => {
                      var matchValue = e.target.value;
                      if (match.grade == matchValue) {
                          var idMatch = match.boards;
                          for (var property in idMatch) {
                              var cat = match.boards[property];
                              for (const key in cat) {
                                  if (Object.hasOwnProperty.call(cat, key)) {
                                      // console.log(cat[key]);
                                      if (monthData) {
                                          var discount = (cat[key].discount) / 100;
                                          var disVal = discount * cat[key].price;
                                          var discountedValue = cat[key].price - disVal;
                                          monthData.innerHTML += `<div class="row" style="font-weight:700;background:#a09ad9;margin: 0 0 12px 0;padding: 0;border-radius: 10px;" ><div class="col-md-2 col-sm-12 col-lg-2 monthdatastyle" style="display: flex;justify-content: center;align-items: center"><input type="radio"></div><div class="col-md-3 col-sm-12 col-lg-3 monthdatastyle" style="margin-top: 10px">` + cat[key].valid + `</span><br><span style="font-size: 13px">` + cat[key].refund + `</span></div><div class="col-md-3 col-sm-12 col-lg-3 monthdatastyle"><span style="color:#F3AC11;font-weight:500; font-size : 25px">Rs.` + discountedValue + `</span><span style="text-decoration:line-through;color:#F3AC11"> Rs.` + cat[key].price + `</span><br><span style="font-size:13px;background: #0b2f90;padding: 0 8px;border-radius: 6px;">` + cat[key].discount + `% OFF</span> </div><div class="col-md-2 col-sm-12 col-lg-2 monthdatastyle"  style="margin-top: 10px">Rs.` + cat[key].per_class_price + ` per session<br><span style="font-size:13px">5 Sessions</span></div>
                            </div><br>`;
                                      }
                                  }
                              }
                          }
                      }
                  })
          }
      }
  })
}

function yearHide() {
  document.getElementById('FooterYearly1').style.display = 'none';
  document.getElementById('FooterYearly2').style.display = 'none';
  document.getElementById('FooterYearly3').style.display = 'flex';
  document.getElementById('FooterYearly4').style.display = 'flex';
}

function monthHide() {
  document.getElementById('FooterYearly1').style.display = 'flex';
  document.getElementById('FooterYearly2').style.display = 'flex';
  document.getElementById('FooterYearly3').style.display = 'none';
  document.getElementById('FooterYearly4').style.display = 'none';
}