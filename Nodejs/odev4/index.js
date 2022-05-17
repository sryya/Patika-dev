const fs=require('fs');
fs.writeFile('employees.json','{"name":"employee 1 name","salary":2000}',(err)=>{
    if(err) console.log(err);
    console.log('Json dosyası oluturuldu ve ilk eleman eklendi');

});
fs.readFile('employees.json','utf8',(err,data)=>{
    if(err) console.log(err);
    console.log(data);


})



fs.appendFile('employees.json','{"name":"employee 2 name","salary":2500}','utf8',(err)=>{
    if(err) console.log('Veri eklenemedi');
    console.log('The "data to append" was appended to file!');
    
})
fs.unlink('employees.json',(err)=>{
    if(err) console.log(err);
    console.log('Dosya Silindi');
})