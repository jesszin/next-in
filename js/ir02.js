var svgWidth=380;
var svgHeight=340;
var offsetX=30;
var offsetY=20;
var barElements;
var dataSet=[110,80,210,160];
var dataMax=300;
var barWidth=60;
var barMargin=30;
//그래프그리기
barElements=d3.select("#irGraph02")
    .selectAll("rect")
    .data(dataSet)
//데이터추가
barElements.enter()
    .append("rect")
    .attr("class","bar")
    .attr("height",0)
    .attr("width",barWidth)
    .attr("x",function(d,i){
        return i*(barWidth+barMargin)+offsetX;
    })
    .attr("y",svgHeight-offsetY)
    .transition()
    .duration(1000)
    .delay(function(d,i){
        return i*150;
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
        return i*(barWidth+barMargin)+30+offsetX;
    })
    .attr("y",svgHeight-5-offsetY)
    .text(function(d,i){
        return d;
    })
var yScale=d3.scale.linear()
    .domain([0,dataMax])
    .range([dataMax,0])
d3.select("#irGraph02")
    .append("g")
    .attr("class","axis")
    .attr("transform","translate("+offsetX+","+((svgHeight-300)-offsetY)+")")
    .call(
        d3.svg.axis()
            .scale(yScale)
            .orient("left")
            .ticks(5)
            .tickValues([50,100,150,200,250])
    )
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
        return i*(barWidth+barMargin)+30+offsetX;
    })
    .attr("y",svgHeight-offsetY+20)
    .text(function(d,i){
        return["1분기","2분기","3분기","4분기"][i];
    })