function entername() {
    let text=document.getElementById("fullname").value;
    let text1 = text.trim(); //убирает лишние пробелы
    let array = text1.split(" ");
    let firstname = array[0];
    let firstname1 = firstname.toLowerCase();
    let firstname2 = firstname1[0].toUpperCase() + firstname1.substring(1);
    let name = array[1];
    let name1 = name.toLowerCase();
    let name2 = name1[0].toUpperCase() + name1.substring(1);
    let patronymic = array[2];
    let patronymic1 = patronymic.toLowerCase();
    let patronymic2 = patronymic1[0].toUpperCase() + patronymic1.substring(1);
    document.getElementById("patronymic").innerHTML=firstname2+" "+name2+" "+patronymic2;
}