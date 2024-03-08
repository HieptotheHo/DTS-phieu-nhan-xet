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
  console.log(studentName)
  console.log(speak.textContent)
  d3.csv("NXHL-FEB.csv", function(data){
        student = data[3]
        for(const prop in student) {
            // console.log(prop)
            
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