import { allData, showAllDataInLocal } from "./local_storage.js";


// Lọc Năm Sinh
export function filter() {
   let dobFilter = document.querySelector("#filter-by-dob");
   dobFilter.addEventListener('change', (event) => {
      let dobFilterValue = event.target.value;
      showDataFilter(dobFilterValue);
   })

   let genderFilter = document.querySelector("#filter-by-gender");
   genderFilter.addEventListener('change', (event) => {
      let genderFilterValue = event.target.value;
      showDataFilter(genderFilterValue);
   })
}

// Hiển thị danh sách đã lọc
function showDataFilter(data) {
   let tableContent = document.querySelector("#form-body");
   if(data == "Năm sinh") {
      tableContent.innerHTML = "";
      showAllDataInLocal();
   }
   else if (data == "Giới tính") {
      tableContent.innerHTML = "";
      showAllDataInLocal();
   }
   else {
      tableContent.innerHTML = "";
      allData.forEach((el,index) => {
         if(el.dob == data || el.gender == data) {
            tableContent.innerHTML += 
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
         } 
      })
   }
   
}