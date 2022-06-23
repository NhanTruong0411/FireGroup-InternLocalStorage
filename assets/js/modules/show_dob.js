export var namsinh = [];

export function showDataDob() {
   let namsinh = [];

   let dob = document.getElementById('dob');
   
   for(let i = 1990; i <= 2022; i++) {
      namsinh.push(i);
   }

   namsinh.forEach(year => {
      dob.innerHTML += `<option value=${year}>${year}</option>`;
   })

   // dob.innerHTML += datas;
}


