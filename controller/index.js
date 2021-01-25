import { Glasses } from '../models/Glasses.js';
import {Model} from '../models/Model.js'
let arrGlasses = []

let getData = async function () {
  // const objectAjax = {
  //     url:'/data/data.json',//url backend qui định
  //     method:'GET',//Phương thức backend qui dịnh
  // }

  // const promise = axios (objectAjax);

  // //Thành công
  // promise.them(result => {
  //     console.log('result', result.data);
  // })

  // //Thất bại
  // promise.catch(err => {
  //     console.log(err);
  // });

  try {
    let result = await axios({
      url: "/data/data.json",
      method: "GET",
      responseType: "json",
    });
    //Sau khi gọi api có dữ liệu gửi về => tạo lớp đối tượng chứa thông tin kính
    arrGlasses = result.data;
    //Render dữ liệu ra giao diện
    renderGlasses(arrGlasses);
  } catch (err) {
    console.log(err);
  }
  
}



const renderGlasses = (arrResult) => {
  console.log(arrResult);
  //Từ mảng dử liệu => tạo giao diện kính cho người dùng chọn
  const contentGlasses = arrResult.reduce((content,item,index) => {
    return content += `
      <div class="col-4">
        <img style="width:100%; height:100%; cursor:pointer " 
        src="${item.src}" 
        alt="${item.src}"  
        onclick="renderGlassesModel('${item.id}')" />
      </div>
    `
  },'');

  //Dom giao diện => in ra màn hình
  document.querySelector('#vglassesList').innerHTML = contentGlasses;

}
getData();

window.renderGlassesModel = (id = 0) => {
  
  //Từ id kính => lấy ra kính trong mảng
  let newGlasses = arrGlasses.find(gl => gl.id === id)
  if(newGlasses) {
  //Gọi phương thức thay đổi giá trị thuộc tính Glasses
  model.changGlasses(newGlasses);
  //Gọi phương thức tạo giao diện
  document.getElementById('glassesDetail').src = model.glassesDetail.virtualImg;
  }
}

//Dữ liệu model sẽ đại diện cho thành phần giao diện người mẫu
let model = new Model();


renderGlassesModel();


