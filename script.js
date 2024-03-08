function readCSVFile(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
  
    reader.onload = function(event) {
      const csvData = event.target.result;
      const jsonData = parseCSVToJSON(csvData);
      console.log(jsonData); // Array of JSON objects representing each row
    };
  
    reader.readAsText(file);
  }
  const studentName = document.querySelector('#student')
  const listen = document.querySelector('#listen');
  const read = document.querySelector('#read');
  const write = document.querySelector('#write');
  const speak = document.querySelector('#speak');
  const test = document.querySelector('#test');
  const feedback = document.querySelector('#feedback')
  const insert = (csv) => {
  d3.csv(csv, function(data){
        console.log(data)
        student = data[3]

 
});
  }

const form = document.getElementById('upload-form');
const fileInput = document.getElementById('file-upload');

var reader = new FileReader();  
    
function loadFile() {      
    studentSelected.innerHTML = ''
    var file = document.querySelector('input[type=file]').files[0];      
    reader.addEventListener("load", parseFile, false);
    
    if (file) {
    reader.readAsText(file);
    
    }      
}
const studentSelected = document.querySelector('#student-selected')
let lmao;
function parseFile(){
    console.log(reader.result.indexOf('STT'))
    lmao = reader.result.substring(reader.result.indexOf('STT'));

    d3.csv.parse(lmao, function(student){
            console.log(student)
            for(const prop in student) {
                if(prop=='Họ và tên') {
                    const option = document.createElement('option');
                    option.textContent = student[prop];
                    studentSelected.appendChild(option)
                }
            }
        
    });
}

studentSelected.addEventListener('change',(event)=>{
       
        console.log(studentSelected.value)
        d3.csv.parse(lmao, function(student){
            console.log(student)
            if(student['Họ và tên']==studentSelected.value)
            for(const prop in student) {
                console.log('aha')
                if(student[prop]==undefined) student[prop] = ''
                switch(prop) {
                    case 'Họ và tên':
                        studentName.textContent=student[prop].toString();
                        break;
                    case 'NHẬN XÉT CHUNG VỀ BÀI KIỂM TRA':
                        test.textContent=student[prop].toString()
                        break;
                    case 'KỸ NĂNG NGHE':
                        listen.textContent=student[prop].toString()
                        break;
                    case 'KỸ NĂNG NÓI':
                       
                        speak.textContent=student[prop].toString()
                        break;
                    case 'KỸ NĂNG ĐỌC':
                        read.textContent=student[prop].toString()
                        break;
                    case 'KỸ NĂNG VIẾT':
                        write.textContent=student[prop].toString()
                        break;
                    case 'GÓP Ý':
                        feedback.textContent=student[prop].toString()
                        break;
                }
            }
        
    });
})


const adjustMonth = () => {
    const month = document.querySelector('#month').value
    const monthDisplayed = document.querySelector('#month-displayed')
    monthDisplayed.textContent = month;
}
