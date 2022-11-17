window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    chart = document.querySelector(".chart");
    bar = document.querySelector(".bar");
    // bar.style.height = "1000px";
    data = [[1,1], [2,2], [3,3], [4,4]]

    
    // function barHeight(data){
        
    // }
    
    function updateChart(data) {
        y = ''
        for (let i = 0; i < data.length; i++) {
            x = ("<div class='bar'>" + data[i][0] + "</div>")
            y += x 

        }
        return y
    }
    chart.innerHTML = `${updateChart(data)}`
    
    function getHeight(arr, i){
        // for (let i = 0; i < arr.length; i++){
            return height = arr[i][1] * 100
        //     console.log(height)
        // }
    }
    

    b = (document.querySelectorAll(".bar"))
    //console.log(getHeight(data))
    b.forEach((element, i) => {
        x = getHeight(data, i)
        element.style.height = x
        
    });





});