var svgWidth=350;
var svgHeight=300;
var offsetX=30;
var offsetY=20;
var barElements;
var dataSet=[120,170,220,90];
var dataMax=300;
var barWidth=50;
var barMargin=20;

barElements=d3.select("#irGraph02")
    .selectAll("rect")
    .data(dataSet)

barElements.enter()
    .append("rect")
    .attr("class","bar")
    .attr("height",0)
    .attr("width",barWidth)
    .attr("x",function(d,i){
        return i * (barWidth+barMargin)+offsetX;
    })
    .attr("y",svgHeight-offsetY)
    .transition()
    .duration(1000)
    .delay(function(d,i){
        return i*100;
    })
    .attr("y",function(d,i){
        return svgHeight-d-offsetY;
    })
    .attr("height",function(d,i){
        return d;
    })

barElements.enter()
    .append("text")
    .attr("class","barNum")
    .attr("x",function(d,i){
        return i *(barWidth+barMargin)+30+offsetX;
    })
    .attr("y",svgHeight- 25 -offsetY)
    .text(function(d,i){
        return d;
    })

var yScale = d3.scaleLinear()
    .domain([0,dataMax])
    .range([dataMax,0])

//세로 눈금
d3.select("#irGraph02")
    .append("g")
    .attr("class","axis")
    .attr("transform","translate("+offsetX+","+((svgHeight-300)-offsetY)+")")
    .call(
        d3.axisLeft()
            .scale(yScale)
            .ticks(5)
            .tickValues([50,100,150,200,250])
    )

//가로 선
d3.select("#irGraph02")
    .append("rect")
    .attr("class","axis_x")
    .attr("width",svgWidth)
    .attr("height",1)
    .attr("transform","translate("+offsetX+","+(svgHeight-offsetY)+")")
//막대의레이블을표시
barElements.enter()
    .append("text")
    .attr("class","barName")
    .attr("x",function(d,i){
        return i*(barWidth+barMargin)+12+offsetX;
    })
    .attr("y",svgHeight-offsetY+15)
    .text(function(d,i){
        return["1분기","2분기","3분기","4분기"][i];
    })