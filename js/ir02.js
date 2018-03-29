var svgWidth = 320;
var svgHeight = 280;
var offsetX = 35;
var offsetY = 20;
var barElements;
var dataSet = [80, 150, 125, 95];
var dataMax = 300;
var barWidth = 35;
var barMargin = 25;

barElements = d3.select("#irGraph02")
    .selectAll("rect")
    .data(dataSet)

// 데이터
barElements.enter()
    .append("rect")
    .attr("class", "bar")
    .attr("height", 0)
    .attr("width", barWidth)
    .attr("x", function(d, i){
        return i * (barWidth+barMargin)+offsetX;
    })
    .attr("y", svgHeight - offsetY)

    // 애니메이션
    .transition()
    .duration(1000)
    .delay(function(d, i){
        return i * 100;
    })
    .attr("y", function(d, i){
        return svgHeight - d - offsetY;
    })
    .attr("height", function(d,i){
        return d;
    })
barElements.enter()
    .append("text")
    .attr("class", "barNum")
    .attr("x", function(d, i){
        return i * (barWidth+barMargin) + 17+offsetX;
    })
    .attr("y", svgHeight - 10-offsetY)
    .text(function(d, i){
        return d;
    })
// 눈금을 표시하기 위한 스케일 설정
var yScale = d3.scale.linear()  // 스케일 설정
    .domain([0, dataMax])   // 원래 크기
    .range([dataMax, 0]) // 실체 출력 크기
// 세로 방향의 눈금을 설정하고 표시
d3.select("#irGraph02")
    .append("g")
    .attr("class", "axis")
    .attr("transform", "translate("+offsetX+", "+((svgHeight-300)-offsetY)+")")
    .call(
        d3.svg.axis()
            .scale(yScale)
            .orient("left")
    )

d3.select("#irGraph02")
    .append("rect")
    .attr("class", "axis_x")
    .attr("width", svgWidth)
    .attr("height", 1)
    .attr("transform", "translate("+offsetX+", "+(svgHeight-offsetY)+")")

barElements.enter()
    .append("text")
    .attr("class", "barName")
    .attr("x", function(d, i){
        return i * (barWidth+barMargin) + 5+offsetX;
    })
    .attr("y", svgHeight-offsetY+15)
    .text(function(d, i){
        return ["1분기", "2분기", "3분기", "4분기"][i];
    })