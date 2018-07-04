var dataCenter = [
        data1 = ["Data","Valstybinis numeris","Nuvažiuotas atstumas","Atstumo įveikimo laikas", "Greitis"],
        data2 = ["2017-07-06 19:59:45","LRS123","5000m","118s"]
    ];

    function calculateSpeed(distance, time){
        var speed = parseInt((distance / time) * 3.6);
        return speed;
    }

var greitis = calculateSpeed(dataCenter[1][2].replace(/[^0-9.]/g,""), dataCenter[1][3].replace(/[^0-9.]/g,""));

    dataCenter[1][4] = greitis + " km/h";

function generateList(data) {
    var ul = document.createElement("ul");

    for(var i = 0; i < data.length; i++) {
        var item = document.createElement("li");
        item.appendChild(document.createTextNode(data[i]));
        ul.appendChild(item);
    }
    return ul;
}
document.getElementById("labels").appendChild(generateList(dataCenter[0]));
document.getElementById("data").appendChild(generateList(dataCenter[1]));
