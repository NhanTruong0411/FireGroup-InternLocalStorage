import { allData, showAllDataInLocal } from "./local_storage.js";


// Main
export function sort() {
   let value = document.querySelector('#sort-by-value');
   let order = document.querySelector('#sort-by-order');

   // Add event listener cho phần sắp xếp : Trường
   value.addEventListener('change', (e) => {
      let valueSort = e.target.value;
      if(valueSort == "Trường") {
         showAllDataInLocal();
      } else {
         let sortArr = sortByValue(allData, valueSort);
         updateTableAfterSort(sortArr);
      }
   });

   // Add event listener cho phần sắp xếp : Hướng
   order.addEventListener('change', (e) => {
      let orderSort = e.target.value;
      if(orderSort == "Hướng") {
         showAllDataInLocal();
      } else {
         let sortArr = sortByOrder(orderSort);
         updateTableAfterSort(sortArr);
      }
   });
}

// Sort theo trường
function sortByValue(data, attr) {
   var arr = [];
   for (var prop in data) {
      if (data.hasOwnProperty(prop)) {
         var obj = {};
         obj[prop] = data[prop];
         obj.tempSortName = data[prop][attr];
         arr.push(obj);
      }
   }

   arr.sort(function (a, b) {
      var at = a.tempSortName,
         bt = b.tempSortName;
      return at > bt ? -1 : (at < bt ? 1 : 0);
   });

   var result = [];
   for (var i = 0, l = arr.length; i < l; i++) {
      var obj = arr[i];
      delete obj.tempSortName;
      for (var prop in obj) {
         if (obj.hasOwnProperty(prop)) {
            var id = prop;
         }
      }
      var item = obj[id];
      result.push(item);
   }
   return result;
}

// Sort theo hướng
function sortByOrder(attr) {
   let orderArr = [];
   allData.forEach(el => {
      orderArr.push(el);
   })
   switch(attr) {
      case "increase":
         orderArr.sort();
         return orderArr;
         break;
      case "decrease":
         orderArr.sort();
         orderArr.reverse();
         return orderArr;
         break;
   }
}

// Cập nhật table sau khi sort
function updateTableAfterSort(arr) {
   let tableContent = document.querySelector("#form-body");
   tableContent.innerHTML = "";
   arr.forEach((el,index) => {
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
      `;
   })
}