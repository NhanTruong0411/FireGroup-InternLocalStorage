import {getFormValue} from "./get_form_value.js";
import {resetForm} from "./reset_form.js";

export var allData = JSON.parse(localStorage.getItem("data") || '[]');
var dobDataInsideLS =  JSON.parse(localStorage.getItem("dataDob") || '[]');

// save giá trị vừa nhập vào localStorage sau khi click btn Nhập
export function saveDataIntoLS() {
   const result = getFormValue();
   addSingleDataToLS(result);
   addSingleDataDobInsideLS(result);
   resetForm();
}

// Add data vừa được nhập vào table bên phải màn hình
function addSingleDataToLS(data) {
   let formBody = document.getElementById('form-body');
   
   allData.push(data);
   localStorage.setItem("data", JSON.stringify(allData));

   let content = "";
   content += 
   `
      <tr>
         <td>${allData.indexOf(data) + 1}</td>
         <td>${data.fullname}</td>
         <td>${data.dob}</td>
         <td>${data.gender}</td>
         <td>${data.time}</td>
         <td class="icon-trash"><a><img src="./assets/images/icons8-trash-64.png" alt="icon trash" /></a></td>
      </tr>
   `
   formBody.innerHTML += content;

}

// Hiển thị tất cả data trong localStorage lên màn hình lần đầu load trang. 
export function showAllDataInLocal() {
   let formBody = document.getElementById('form-body');
   formBody.innerHTML = "";
   allData.forEach((el,index) => {
      formBody.innerHTML += 
      `
         <tr>
            <td>${index + 1}</td>
            <td>${el.fullname}</td>
            <td>${el.dob}</td>
            <td>${el.gender}</td>
            <td>${el.time}</td>
            <td class="icon-trash"><a><img src="./assets/images/icons8-trash-64.png" alt="icon trash" /></a></td>
         </tr>
      `
   })

}

// Add năm sinh vào trong localStorage sau khi click Nhập
export function addSingleDataDobInsideLS(data) {
   let dobInsert = data.dob;
   let dobOption = document.getElementById('filter-by-dob');
   
   if(dobDataInsideLS.length == 0) {
      dobDataInsideLS.push(dobInsert);
      localStorage.setItem("dataDob", JSON.stringify(dobDataInsideLS));
      dobOption.innerHTML += `<option value="${dobInsert}">${dobInsert}</option>`
   }
   else if (!dobDataInsideLS.includes(dobInsert)) {
      dobDataInsideLS.push(dobInsert);
      localStorage.setItem("dataDob", JSON.stringify(dobDataInsideLS));
      dobOption.innerHTML += `<option value="${dobInsert}">${dobInsert}</option>`
   }
}

// Hiển thị tất cả năm sinh có trong danh sách lần đầu load trang
export function showAllDataDobInsideLS() {
   let dobOptionHTML = document.getElementById('filter-by-dob');
   dobDataInsideLS.forEach((el) => {
      dobOptionHTML.innerHTML += 
      `
         <tr>
            <option value="${el}">${el}</option>
         </tr>
      `
   });
}

// Xoá dữ liệu trong local storage
export function local_clear() {
   document.querySelector('#local_clear').addEventListener('click', () => {
      localStorage.clear();
   })
}
