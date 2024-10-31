const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let headerLines = [
    'Схема грузопотоков по железнодорожной линии Лоухи - Мурманск',
    'за отчетный 2006 год и расчетные 2010, 2015 и 2020 годы,',
    'млн ткм/км'
];
draw(headerLines, 4);
let year;
let choice;
const menuItems = ['2006', '2010', '2015', '2020', 'ВCE'];
const menuX = 20;
const menuY = 50;
const menuWidth = 150;
const menuItemHeight = 30;
let isMenuVisible = false;

const menuButton = window.getComputedStyle(document.querySelector('.menu-button'));

const menuItem = window.getComputedStyle(document.querySelector('.menu-item'));



function drawMenuButton() {
    ctx.fillStyle = menuButton. backgroundColor;
    ctx.fillRect(menuX, menuY - 40, menuWidth, 30);
    ctx.fillStyle = menuButton.color;
    ctx.font = menuButton.font;
    ctx.fillText('Года', menuX + 10, menuY - 20);
}

function drawMenu() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawMenuButton();

    if (isMenuVisible) {
        ctx.fillStyle = menuItem.backgroundColor;
        ctx.fillRect(menuX, menuY, menuWidth, menuItems.length * menuItemHeight);

        ctx.strokeStyle = '#ddd';
        ctx.strokeRect(menuX, menuY, menuWidth, menuItems.length * menuItemHeight);

        ctx.fillStyle = menuItem.color;
        ctx.font = menuItem.font;
        menuItems.forEach((item, index) => {
            ctx.fillText(item, menuX + 10, menuY + (index + 1) * menuItemHeight - 10);
        });
    }
}


canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (x >= menuX && x <= menuX + menuWidth && y >= menuY - 40 && y <= menuY - 10) {
        // Клик по кнопке "Меню"
        isMenuVisible = !isMenuVisible;
        drawMenu();
    } else if (isMenuVisible && y >= menuY && y <= menuY + menuItems.length * menuItemHeight) {
        // Клик по элементу меню
        const index = Math.floor((y - menuY) / menuItemHeight);
        isMenuVisible = false;
        drawMenu();
        switch (index) {
            case 0:
                headerLines = [
                    'Схема грузопотоков по железнодорожной линии Лоухи - Мурманск',
                    'за отчетный 2006 год, млн ткм/км'
                ];
                draw(headerLines, index);
                break;
            case 1:
                headerLines = [
                    'Схема грузопотоков по железнодорожной линии Лоухи - Мурманск',
                    'за отчетный 2010 год, млн ткм/км'
                ];
                draw(headerLines, index);
                break;
            case 2:
                headerLines = [
                    'Схема грузопотоков по железнодорожной линии Лоухи - Мурманск',
                    'за отчетный 2015 год, млн ткм/км'
                ];
                draw(headerLines, index);
                break;
            case 3:
                headerLines = [
                    'Схема грузопотоков по железнодорожной линии Лоухи - Мурманск',
                    'за отчетный 2020 год, млн ткм/км'
                ];
                draw(headerLines, index);
                break;
            case 4:
                headerLines = [
                    'Схема грузопотоков по железнодорожной линии Лоухи - Мурманск',
                    'за отчетный 2006 год и расчетные 2010, 2015 и 2020 годы,',
                    'млн ткм/км'
                ];
                draw(headerLines, index);
                break;
        }
    } else {
        // Клик вне меню
        isMenuVisible = false;
        drawMenu();
    }
});

drawMenuButton();


function draw(headerLines, indexYear){
  
  const stations = window.getComputedStyle(document.querySelector('.stations'));

const streamData = window.getComputedStyle(document.querySelector('.streamData'));

const symbols = window.getComputedStyle(document.querySelector('.symbols'));

const stationsRect = window.getComputedStyle(document.querySelector('.stationsRect'));
  
  const stationsRectText = window.getComputedStyle(document.querySelector('.stationsRectText'));

const symbolsUsl = window.getComputedStyle(document.querySelector('.symbolsUsl'));
  
  const streamDataAll = window.getComputedStyle(document.querySelector('.streamDataAll'));

    const orange = '#E97E0C';
    const blue = '#2410A2';
    const green = '#028809';
    const lightBlue = '#16AFF3';
    const red = '#D01006';
    const yellow = '#F2C90D';
    const grey = '#BABABA';
    const pink = '#F674DC';

    let pinOzeroOreFromX;
    let pinOzeroXimFromX;
    let pinOzeroXimToX;

    let pinOzeroOilToX;
    let pinOzeroCoalToX;
    let pinOzeroOtherToX;


    let OlenegorskMatFromX;
    let OlenegorskOtherToX;
    let OlenegorskOtherFromX;

    let OlenegorskCoalToX;
    let OlenegorskOilToX;
    let OlenegorskOtherToX2;
    let OlenegorskOreToX;

    let MurOreFromX;
    let MurOtherFromX;

    let MurCoalToX;
    let MurOilToX;
    let MurOtherToX;


    const rectHeight = 190;
    let coordinatesStations = [];

    for(let i = 0; i <= 7; i++){
        coordinatesStations[i] = canvas.height -100 - (i + 1) * (rectHeight);
    }

    let stripeWidth = 7;
    let stripeLength = 35;
    let x1 = canvas.width / 2-20, y1 =  coordinatesStations[7]+60;
    for (let i = 0; i < 43; i++) {
        ctx.fillStyle = (i % 2 === 0) ? 'black' : 'white'; // Чередование цветов
        ctx.fillRect(x1, y1, stripeWidth, stripeLength);
        y1+=stripeLength;
    }



    x1 = 140, y1 =  coordinatesStations[3]-15;

    for (let i = 0; i < 16; i++) {
        ctx.fillStyle = (i % 2 === 0) ? 'black' : 'white'; // Чередование цветов
        ctx.fillRect(x1, y1, stripeLength, stripeWidth);
        x1+=stripeLength;
    }


    x1 = 140, y1 =coordinatesStations[5]-15;

    for (let i = 0; i < 16; i++) {
        ctx.fillStyle = (i% 2 === 0) ? 'black' : 'white'; // Чередование цветов
        ctx.fillRect(x1, y1, stripeLength, stripeWidth);
        x1+=stripeLength;

    }


    x1 = 140, y1 =coordinatesStations[6]-15;

    for (let i = 0; i < 16; i++) {
        ctx.fillStyle = (i% 2 === 0) ? 'black' : 'white'; // Чередование цветов
        ctx.fillRect(x1, y1, stripeLength, stripeWidth);
        x1+=stripeLength;

    }


    ctx.fillStyle = stations.color;

    ctx.font = stations.font; // Жирный шрифт
    ctx.textAlign = stations.alignItems;
    headerLines.forEach((line, index) => {
        ctx.fillText(line, canvas.width / 2, 50 + (index * 30)); // Каждая строка смещается по вертикали
    });

    ctx.fillText('Беломорск', canvas.width / 2, canvas.height - 20);

    ctx.save();

    ctx.translate(100, coordinatesStations[3]);
    ctx.rotate(-90 * Math.PI / 180);
    ctx.fillText('Ковдор', 0, 0);

    ctx.restore();
    ctx.save();

    ctx.translate(100, coordinatesStations[5]);
    ctx.rotate(-90 * Math.PI / 180);
    ctx.fillText('Мончегорск', 0, 0);
    ctx.restore();

    ctx.save();
    ctx.translate(100, coordinatesStations[6]);
    ctx.rotate(-90 * Math.PI / 180);
    ctx.fillText('Луостари', 0, 0);
    ctx.restore();
    ctx.save();


    ctx.save();
    ctx.fillText('Ваенга', canvas.width / 2, coordinatesStations[7]+50);
    ctx.save();

    const coalTo = [
        [12.0, 15.7, 29.0, 39.9],
        [12.0, 15.7, 29.0, 39.9],
        [12.1, 15.8, 29.1, 39.9],
        [11.8, 13.2, 26.0, 36.4],
        [11.8, 12.9, 25.7, 36.1],
        [11.4, 12.2, 24.8, 35.2],
        [11.2, 11.8, 24.4, 34.8]
    ];

    const oilTo = [
        [8.6, 10.5, 15.4, 20.5],
        [8.6, 10.5, 15.4, 20.5],
        [4.8, 4.5, 9.4, 14.5],
        [4.7, 4.4, 9.3, 14.4],
        [4.5, 4.4, 9.3, 14.4],
        [4.1, 4.0, 8.8, 13.9],
        [3.8, 3.9, 8.7, 13.8],
        [0.3, 0.3, 0.3, 0.4]
    ];

    const oreTo = [
        [0.2, 0.4, 0.7, 0.7],
        [0.2, 0.4, 0.7, 0.7],
        [0.2, 0.4, 0.7, 0.7],
        [0, 0.1, 0.1, 0.1],
        [0, 0.1, 0.1, 0.1],
        [0, 0.1, 0.1, 0.1],
        [0, 0.1, 0.1, 0.1]
    ];

    const metalTo = [
        [0.3, 0.3, 1.0, 1.7],
        [0.3, 0.3, 1.0, 1.7],
        [0.3, 0.3, 1.0, 1.7],
        [0.3, 0.3, 1.0, 1.7],
        [0.3, 0.3, 1.0, 1.7],
        [0.2, 0.2, 0.9, 1.6],
        [0, 0.1, 0.1, 0.1]
    ];

    const chemicalFertilizersTo = [
        [1.2, 1.5, 1.6, 1.6],
        [1.2, 1.5, 1.6, 1.6],
        [1.2, 1.5, 1.6, 1.6],
        [1.2, 1.5, 1.6, 1.6],
        [1.6, 2.1, 2.3, 2.3],
        [3.2, 3.6, 3.8, 4.1],
        [3.2, 3.6, 3.8, 4.1]
    ];

    const containersTo = [
        [0.1, 0.1, 1.5, 4.9],
        [0.1, 0.1, 1.5, 4.9],
        [0.1, 0.1, 1.5, 4.9],
        [0.1, 0.1, 1.5, 4.9],
        [0.1, 0.1, 1.5, 4.9],
        [0.1, 0.1, 1.5, 4.9],
        [0.1, 0.1, 1.5, 4.9]
    ];

    const otherTo = [
        [0.9, 1.4, 1.6, 2.0],
        [0.9, 1.4, 1.6, 2.0],
        [0.9, 1.3, 1.5, 1.9],
        [0.9, 1.1, 1.4, 1.7],
        [0.9, 1.1, 1.4, 1.7],
        [0.8, 1.0, 1.3, 1.6],
        [0.9, 1.2, 1.5, 1.8]
    ];


    const oreFrom = [
        [11.2, 11.7, 12.8, 12.7],
        [11.2, 11.7, 12.8, 12.7],
        [11.2, 11.7, 12.8, 12.7],
        [11.2, 12.7, 14.3, 15.2],
        [6.3, 6.7, 7.9, 8.8],
        [0.8, 1.0, 1.3, 1.6],
        [0.9, 1.2, 1.5, 1.8]
    ];

    const materialsFrom = [
        [2.6, 2.5, 2.5, 2.6],
        [2.6, 2.5, 2.5, 2.6],
        [2.6, 2.5, 2.5, 2.6],
        [2.7, 2.7, 2.7, 2.8],
        [2.7, 2.7, 2.7, 2.8],
        [2.7, 2.8, 2.8, 2.8]
    ];

    const chemicalFertilizersFrom = [
        [8.5, 9.5, 11.4, 12.0],
        [8.5, 9.5, 11.4, 12.0],
        [8.5, 9.5, 11.4, 12.0],
        [8.5, 9.5, 11.4, 12.0],
        [6.9, 7.3, 8.3, 8.9]
    ];

    const containersFrom = [
        [0, 0, 2.1, 6.2],
        [0, 0, 2.1, 6.2],
        [0, 0, 2.1, 6.2],
        [0, 0, 2.1, 6.2],
        [0, 0, 2.1, 6.2],
        [0, 0, 2.1, 6.2],
        [0, 0, 2.1, 6.2]
    ];

    const otherFrom = [
        [0.4, 0.5, 0.7, 0.7],
        [0.4, 0.5, 0.7, 0.7],
        [0.4, 0.5, 0.6, 0.7],
        [0.4, 0.4, 0.5, 0.5],
        [0.4, 0.4, 0.5, 0.5],
        [0.4, 0.4, 0.5, 0.5],
        [0.2, 0.2, 0.3, 0.3]
    ];

    const fromKovdorOreFrom = [
        [4.9, 6.0, 6.4, 6.4]
    ];

    const fromKovdorXimTo = [
        [0.4, 0.6, 0.7, 0.7]
    ];

    const fromKovdorXimFrom = [
        [2.0, 2.8, 3.8, 3.8]
    ];

  
    const fromKovdorСoalTo = [
        [0, 0.3, 0.3, 0.3]
    ];

    const fromKovdorOilTo = [
        [0.2, 0, 0, 0]
    ];

    const fromKovdorOtherTo = [
        [0.1, 0.1, 0.1, 0.1]
    ];




    const fromMonchMaterialFrom = [
        [0.1, 0.1, 0.1, 0.1]
    ];

    const fromMonchOtherTo = [
        [0.4, 0.4, 0.4, 0.4]
    ];

    const fromMonchOtherFrom = [
        [0.4, 0.4, 0.4, 0.4]
    ];




    const fromMonchCoalTo = [
        [0, 0.2, 0.2, 0.2]
    ];

    const fromMonchOilTo = [
        [0.2, 0, 0, 0]
    ];

    const fromMonchOtherTo2 = [
        [0.2, 0.2, 0.2, 0.2]
    ];

    const fromMonchOreFrom = [
        [0.3, 0.3, 0.3, 0.3]
    ];



    const fromLuosOreFrom = [
        [0.1, 0.1, 0.1, 0.1]
    ];

    const fromLuosOtherFrom = [
        [0.1, 0.1, 0.1, 0.1]
    ];


    const fromLuosCoalTo = [
        [0.2, 0.3, 0.3, 0.3]
    ];

    const fromLuosOilTo = [
        [0.2, 0, 0, 0]
    ];

    const fromLuosOtherTo = [
        [0.2, 0.3, 0.3, 0.3]
    ];



    const bottomPadding = 100;



    function sumArray(arr) {
        let sum = arr.reduce((a, b) => a + b, 0);
        return sum*1.8;
    }

    function checkWidth(width){
        if(width == 0) return 0;
        else if (width < 9) return 9;
        else return width;
    }

    function getMaxRowSum(matrix) {
        let maxSum = -Infinity;
        if(indexYear === 4){
        for (let row of matrix) {
            let sum = row.reduce((a, b) => a + b, 0);
            if (sum > maxSum) {
                maxSum = sum;
            }
         }
        } else{
          for (let i = 0; i < matrix.length; i++) {
            if (matrix[i][indexYear] > maxSum) {
                maxSum = matrix[i][indexYear]; 
            }
          }
        }
        return maxSum*1.8;
    }

    function drawTriangle(startX, posY, rectWidth, color){
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(startX, posY);                         // левая вершина прямоугольника
        ctx.lineTo(startX + rectWidth, posY);             // правая вершина прямоугольника
        ctx.lineTo(startX + rectWidth / 2, posY - 10);    // верхняя точка треугольника
        ctx.closePath();
        ctx.fill();
    }

    function drawRow(matrix, color, startX, znak) {
      
        ctx.fillStyle = color;
        if(indexYear === 4){
            matrix.forEach((row, index) => {
                let rectWidth = checkWidth(sumArray(row));

                const posY = canvas.height - bottomPadding - (index + 1) * (rectHeight);
                let height =rectHeight;

                ctx.fillRect(startX, posY, znak*rectWidth, rectHeight);


                if (index === matrix.length - 1 && znak === 1) {
                    ctx.fillRect(startX, posY-50, znak*rectWidth, rectHeight+100);
                    drawTriangle(startX, posY-50, rectWidth, rectHeight, color);
                }

                if  (znak === -1 && index === 0) {
                    ctx.save();
                    ctx.translate(startX, posY+rectHeight);
                    ctx.rotate(Math.PI);
                    drawTriangle(0, 0, rectWidth, rectHeight, color);
                    ctx.restore();
                }

                let add = 0;
                if(index===4){
                  add = 35;
                }
                if(index===3){
                  add = -15;
                }
                 if(index===6){
                  add = 30;
                }
                  ctx.save();
                  ctx.fillStyle = streamData.color;
                  ctx.font = streamData.font;
                  if(znak === -1){
                  ctx.translate(startX-3, posY + rectHeight - 85-add);
                  } else{
                  ctx.translate(startX+rectWidth-3, posY + rectHeight - 85-add);
                  }
                  ctx.rotate(-Math.PI / 2);
                  ctx.fillText(row.join('/'), 0, 0);
                  ctx.restore();
            });
        } else{

          for (let i = 0; i < matrix.length; i++) {
            let rectWidth = checkWidth(matrix[i][indexYear]*1.8);
            let posY = canvas.height - bottomPadding - (i + 1) * rectHeight; 
            
            ctx.fillRect(startX, posY, znak * rectWidth, rectHeight); 

            if (i === matrix.length - 1 && znak === 1) {
                ctx.fillRect(startX, posY - 50, znak * rectWidth, rectHeight + 100);
                drawTriangle(startX, posY - 50, rectWidth, color);
            }

            if (znak === -1 && i === 0) {
                ctx.save();
                ctx.translate(startX-2, posY + rectHeight);
                ctx.rotate(Math.PI);
                drawTriangle(0, 0, rectWidth, color);
                ctx.restore();
            }

                 let add = 0;
                if(i===4) add = 35;
        
                if(i===3) add = -15;
        
                if(i==6) add = 30;
            
                ctx.save();
                ctx.fillStyle = streamData.color;
                ctx.font = streamData.font;
                if(znak === -1){
                    ctx.translate(startX-3, posY + rectHeight - 85-add);
                } else{
                    ctx.translate(startX+rectWidth-3, posY + rectHeight - 85-add);
                }
                ctx.rotate(-Math.PI / 2);
                ctx.fillText(matrix[i][indexYear], 0,0);
                ctx.restore();
            }
        }
    
}

function drawRowHor(matrix, color, startY, znak, length, check, luos) {
    ctx.fillStyle = color;
    const rectWidth = checkWidth(getMaxRowSum(matrix));



    const posX = 150;
    if  (znak === -1) {
        ctx.save();
        ctx.translate(posX, startY);
        ctx.rotate(-90*Math.PI / 180);
        drawTriangle(0, 0, rectWidth, rectHeight, color);
        ctx.restore();
    }

    ctx.fillRect(posX, startY, length-posX+1, znak * rectWidth);

    ctx.save();
    ctx.fillStyle = streamData.color;
    ctx.font = streamData.font;
   if(indexYear == 4){
      if(znak === -1){

        ctx.fillText(matrix[0].join('/'), posX+100, startY-2);
    } else{

        ctx.fillText(matrix[0].join('/'), posX + 100, startY+rectWidth-2);
    }
   } else{
      if(znak === -1){

        ctx.fillText(matrix[0][indexYear], posX+100, startY-2);
    } else{

        ctx.fillText(matrix[0][indexYear], posX + 100, startY+rectWidth-2);
    }
   }
   
    ctx.restore();

}

function drawLegend() {
    const legends = [
        { color: orange, text: 'уголь' },
        { color: blue, text: 'нефть' },
        { color: green, text: 'руда' },
        { color: lightBlue, text: 'металл' },
        {color: pink, text: 'минстройматериалы'},
        { color: red, text: 'химминудобрения' },
        { color: yellow, text: 'контейнеры' },
        { color: grey, text: 'прочие' }
    ];

    const rectSize = 15; 
    const gapSize = 20; 
    const startX = canvas.width - 230;
    let startY = canvas.height - 200; 


    ctx.fillStyle = symbolsUsl.color;
    ctx.font = symbolsUsl.font;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText('Условные обозначения:', startX + rectSize, startY + rectSize / 2);
    startY += gapSize;
    legends.forEach(legend => {
        ctx.fillStyle = legend.color;
        ctx.fillRect(startX, startY, rectSize, rectSize);

        ctx.fillStyle = symbols.color;

        ctx.fillText(legend.text, startX + rectSize + 10, startY + rectSize / 2);

        startY += gapSize;
    });
}


function getOverallResult(matrix, posX){
    if(indexYear == 4){
    matrix.forEach((row, index) => {
        const posY = canvas.height - bottomPadding - (index + 1) * (rectHeight);


        let add = 0;
        if(index===4) add = 35;
        
        if(index===3) add = -15;
        
        if(index===6) add = 30;
        
        ctx.save();
        ctx.fillStyle = streamDataAll.color;
        ctx.font = streamDataAll.font;

        ctx.translate(posX, posY + rectHeight - 85-add);

        ctx.rotate(-Math.PI / 2);
        ctx.fillText(row.join('/'), 0, 0);
        ctx.restore();
    });
    } else{
     for(let i = 0; i <matrix.length; i++){
      const posY = canvas.height - bottomPadding - (i + 1) * (rectHeight);
        let add = 0;
        if(i===4) add = 35;
        
        if(i===3) add = -15;
        
        if(i===6) add = 30;
        
        ctx.save();
        ctx.fillStyle = streamDataAll.color;
        ctx.font = streamDataAll.font;
       ctx.translate(posX, posY + rectHeight - 85-add);

        ctx.rotate(-Math.PI / 2);
        ctx.fillText(matrix[i][indexYear], 0, 0);
        ctx.restore();
        
      }
    }

}


function getOverallResultHor(matrix, posX, posY){
    ctx.save();
    ctx.fillStyle = streamDataAll.color;
    ctx.font = streamDataAll.font;
    if(indexYear == 4){
    ctx.fillText(matrix[0].join('/'), posX, posY);
    } else{
      ctx.fillText(matrix[0][indexYear], posX, posY);
    }
    ctx.restore();
}



function getSumStream(matrix, index){
    const row = matrix[index];
    let sum = 0;
    for (let i = 0; i < row.length; i++) {
        sum += firstRow[i];
    }
}



let startXTo = canvas.width / 2;
drawRow(coalTo, orange, startXTo, 1);
pinOzeroCoalToX = startXTo;
OlenegorskCoalToX=startXTo;
MurCoalToX = startXTo;

 startXTo += checkWidth(getMaxRowSum(coalTo));

drawRow(oilTo, blue, startXTo, 1);
pinOzeroOilToX = startXTo;
OlenegorskOilToX=startXTo;
MurOilToX = startXTo;
startXTo += checkWidth(getMaxRowSum(oilTo));

drawRow(oreTo, green , startXTo, 1);
OlenegorskOreToX=startXTo;
startXTo += checkWidth(getMaxRowSum(oreTo));

drawRow(metalTo, lightBlue, startXTo, 1);
startXTo += checkWidth(getMaxRowSum(metalTo));

drawRow(chemicalFertilizersTo, red, startXTo, 1);
pinOzeroXimToX = startXTo;
startXTo += checkWidth(getMaxRowSum(chemicalFertilizersTo));


drawRow(containersTo, yellow, startXTo, 1);
startXTo += checkWidth(getMaxRowSum(containersTo));

drawRow(otherTo, grey, startXTo, 1);
pinOzeroOtherToX =startXTo;
OlenegorskOtherToX=startXTo;
MurOtherToX = startXTo;
startXTo += checkWidth(getMaxRowSum(otherTo));


let rows = 7;
let cols = 4;


let sumStreamTo = [];
for (let i = 0; i < rows; i++) {
    sumStreamTo[i] = [];
    for (let j = 0; j < cols; j++) {
        let sum = coalTo[i][j] + oilTo[i][j] + oreTo[i][j] + metalTo[i][j] + chemicalFertilizersTo[i][j] + containersTo[i][j] + otherTo[i][j];
        sumStreamTo[i][j] = parseFloat(sum.toFixed(1));
    }
}




let posX = canvas.width-260;
getOverallResult(sumStreamTo, posX);

let startXFrom = canvas.width / 2-30;
drawRow(oreFrom, green, startXFrom, -1);
pinOzeroOreFromX = startXFrom
MurOreFromX = startXFrom;
startXFrom -= checkWidth(getMaxRowSum(oreFrom));

drawRow(materialsFrom, pink, startXFrom, -1);
OlenegorskMatFromX=startXFrom;
startXFrom -= checkWidth(getMaxRowSum(materialsFrom));

drawRow(chemicalFertilizersFrom, red, startXFrom, -1);
pinOzeroXimFromX = startXFrom;
startXFrom -= checkWidth(getMaxRowSum(chemicalFertilizersFrom));

drawRow(containersFrom, yellow, startXFrom, -1);
startXFrom -= checkWidth(getMaxRowSum(containersFrom));

drawRow(otherFrom, grey, startXFrom, -1);
startXFrom -= checkWidth(getMaxRowSum(otherFrom));
OlenegorskOtherFromX=startXFrom;
MurOtherFromX = startXFrom;

posX = 265;

let sumStreamFrom = [];
for (let i = 0; i < rows; i++) {
    sumStreamFrom[i] = [];
    for (let j = 0; j < cols; j++) {
        let sum;
        if(i === 5){
            sum = oreFrom[i][j] + materialsFrom[i][j] + oreFrom[i][j]  + containersFrom[i][j] + otherFrom[i][j];
        }
        else if(i ===6){
            sum = oreFrom[i][j] + oreFrom[i][j] + containersFrom[i][j] + otherFrom[i][j];
        } else{
            sum = oreFrom[i][j] + materialsFrom[i][j] + oreFrom[i][j] + chemicalFertilizersFrom[i][j] + containersFrom[i][j] + otherFrom[i][j];
        }
        sumStreamFrom[i][j] = parseFloat(sum.toFixed(1));
    }
}
getOverallResult(sumStreamFrom, posX);

const gap = 2;
let startYKovdorTo = coordinatesStations[3];
drawRowHor(fromKovdorOreFrom, green, startYKovdorTo, 1, pinOzeroOreFromX, true, false);
startYKovdorTo += checkWidth(getMaxRowSum(fromKovdorOreFrom))+gap;

drawRowHor(fromKovdorXimTo, red, startYKovdorTo, 1, pinOzeroXimToX, false, false);
startYKovdorTo += checkWidth(getMaxRowSum(fromKovdorXimTo))+gap;

drawRowHor(fromKovdorXimFrom, red, startYKovdorTo, 1, pinOzeroXimFromX, true, false);
startYKovdorTo += checkWidth(getMaxRowSum(fromKovdorXimFrom))+gap;

posX = 180;
let posY = startYKovdorTo+20;
let sumStreamTo2 = [];
rows = 1;
for (let i = 0; i < rows; i++) {
    sumStreamTo2[i] = [];
    for (let j = 0; j < cols; j++) {
        let sum = fromKovdorOreFrom[i][j] + fromKovdorXimTo[i][j] + fromKovdorXimFrom[i][j];

        sumStreamTo2[i][j] = parseFloat(sum.toFixed(1));
    }
}
getOverallResultHor(sumStreamTo2, posX, posY);




let startYKovdorFrom = coordinatesStations[3]-20;
drawRowHor(fromKovdorСoalTo, orange, startYKovdorFrom, -1, pinOzeroCoalToX, true, false);
startYKovdorFrom -= checkWidth(getMaxRowSum(fromKovdorСoalTo))+gap;

drawRowHor(fromKovdorOilTo, blue, startYKovdorFrom, -1, pinOzeroOilToX, false, false);
startYKovdorFrom -= checkWidth(getMaxRowSum(fromKovdorOilTo))+gap;

drawRowHor(fromKovdorOtherTo, grey, startYKovdorFrom, -1, pinOzeroOtherToX, true, false);
startYKovdorFrom -= checkWidth(getMaxRowSum(fromKovdorOtherTo))+gap;

posY = startYKovdorFrom-20;
let sumStreamTo3 = [];
for (let i = 0; i < rows; i++) {
    sumStreamTo3[i] = [];
    for (let j = 0; j < cols; j++) {
        let sum = fromKovdorСoalTo[i][j] + fromKovdorOilTo[i][j] + fromKovdorOtherTo[i][j];

        sumStreamTo3[i][j] = parseFloat(sum.toFixed(1));
    }
}
getOverallResultHor(sumStreamTo3, posX, posY);


let startYMonchTo = coordinatesStations[5];
drawRowHor(fromMonchMaterialFrom, pink, startYMonchTo, 1, OlenegorskMatFromX, true, false);
startYMonchTo += checkWidth(getMaxRowSum(fromMonchMaterialFrom))+gap;

drawRowHor(fromMonchOtherTo, grey, startYMonchTo, 1, OlenegorskOtherToX, false, false);
startYMonchTo += checkWidth(getMaxRowSum(fromMonchOtherTo))+gap;

drawRowHor(fromMonchOtherFrom, grey, startYMonchTo, 1, OlenegorskOtherFromX, true, false);
startYMonchTo += checkWidth(getMaxRowSum(fromMonchOtherFrom))+gap;


posY = startYMonchTo+20;
let sumStreamTo4 = [];
for (let i = 0; i < rows; i++) {
    sumStreamTo4[i] = [];
    for (let j = 0; j < cols; j++) {
        let sum = fromMonchMaterialFrom[i][j] + fromMonchOtherTo[i][j] + fromMonchOtherFrom[i][j];

        sumStreamTo4[i][j] = parseFloat(sum.toFixed(1));
    }
}
getOverallResultHor(sumStreamTo4, posX, posY);

let startYMonchFrom = coordinatesStations[5]-20;
drawRowHor(fromMonchOtherFrom, orange, startYMonchFrom, -1, OlenegorskCoalToX, true, false);
startYMonchFrom -= checkWidth(getMaxRowSum(fromMonchOtherFrom))+gap;

drawRowHor(fromMonchOilTo, blue, startYMonchFrom, -1, OlenegorskOilToX, false, false);
startYMonchFrom -= checkWidth(getMaxRowSum(fromMonchOilTo))+gap;

drawRowHor(fromMonchOtherTo2, grey, startYMonchFrom, -1, OlenegorskOtherToX, true, false);
startYMonchFrom -= checkWidth(getMaxRowSum(fromMonchOtherTo2))+gap;

drawRowHor(fromMonchOreFrom, green, startYMonchFrom, -1, OlenegorskOreToX, true, false);
startYMonchFrom -= checkWidth(getMaxRowSum(fromMonchOreFrom))+gap;

posY = startYMonchFrom-20;
let sumStreamTo5 = [];
for (let i = 0; i < rows; i++) {
    sumStreamTo5[i] = [];
    for (let j = 0; j < cols; j++) {
        let sum = fromMonchOtherFrom[i][j] + fromMonchOilTo[i][j] + fromMonchOtherTo2[i][j] + fromMonchOreFrom[i][j];

        sumStreamTo5[i][j] = parseFloat(sum.toFixed(1));
    }
}
getOverallResultHor(sumStreamTo5, posX, posY);

let startYLuosTo = coordinatesStations[6];
drawRowHor(fromLuosOreFrom, green, startYLuosTo, 1, MurOreFromX, true, true);
startYLuosTo += checkWidth(getMaxRowSum(fromLuosOreFrom))+gap;

drawRowHor(fromLuosOtherFrom, grey, startYLuosTo, 1, MurOtherFromX, false, true);
startYLuosTo += checkWidth(getMaxRowSum(fromLuosOtherFrom))+gap;

posY = startYLuosTo+20;
let sumStreamTo6 = [];
for (let i = 0; i < rows; i++) {
    sumStreamTo6[i] = [];
    for (let j = 0; j < cols; j++) {
        let sum = fromLuosOreFrom[i][j] + fromLuosOtherFrom[i][j];

        sumStreamTo6[i][j] = parseFloat(sum.toFixed(1));
    }
}
getOverallResultHor(sumStreamTo6, posX, posY);

let startYLuosFrom = coordinatesStations[6]-20;
drawRowHor(fromLuosCoalTo, orange, startYLuosFrom, -1, MurCoalToX, true, true);
startYLuosFrom -= checkWidth(getMaxRowSum(fromLuosCoalTo))+gap;

drawRowHor(fromLuosOilTo, blue, startYLuosFrom, -1, MurOilToX, false, true);
startYLuosFrom -= checkWidth(getMaxRowSum(fromLuosOilTo))+gap;

drawRowHor(fromLuosOtherTo, grey, startYLuosFrom, -1, MurOtherToX, true, true);
startYLuosFrom -= checkWidth(getMaxRowSum(fromLuosOtherTo))+gap;

posY = startYLuosFrom-20;
let sumStreamTo7 = [];
for (let i = 0; i < rows; i++) {
    sumStreamTo7[i] = [];
    for (let j = 0; j < cols; j++) {
        let sum = fromLuosCoalTo[i][j] + fromLuosOilTo[i][j] + fromLuosOtherTo[i][j];

        sumStreamTo7[i][j] = parseFloat(sum.toFixed(1));
    }
}
getOverallResultHor(sumStreamTo7, posX, posY);


function drawHorizontalRectangle(color, x, y, width, height) {
    ctx.beginPath(); // Начинаем новый путь
    ctx.lineWidth = 5; // Толщина линии
    ctx.fillStyle = color; // Цвет заливки

    ctx.rect(x, y, width, height);
    ctx.fill();
    ctx.closePath();
}


const texts = [
    "Лоухи",
    "Белое море",
    "Кандалакша",
    "Пинозеро",
    "Узел Апатиты",
    "Оленегорск",
    "Мурманский железнодорожный узел"
];


// Параметры прямоугольников с текстом
const rectWidthText = 700;
const rectHeightText = 70;
const gapText = 100;

ctx.strokeStyle = stationsRectText.color;
ctx.lineWidth = 1;
ctx.fillStyle = stationsRect.color;
ctx.font = stationsRectText.font;
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';



texts.forEach((text, i) => {


    if(i === 3 || i === 5 )
    {
        const startX = (canvas.width + rectWidthText) / 2 - rectWidthText;
        const startY = canvas.height -100 - (i + 1) * (rectHeight);
        // Рисуем прямоугольник с текстом
        ctx.fillRect(startX, startY - (rectHeightText+80) / 2, rectWidthText, rectHeightText+80);
        ctx.strokeRect(startX, startY - (rectHeightText+80) / 2, rectWidthText, rectHeightText+80);

        
        ctx.fillStyle = stationsRectText.color;
        ctx.fillText(text, startX + rectWidthText / 2, startY - (rectHeightText) / 2 + (rectHeightText) / 2);
        ctx.fillStyle =stationsRect.color ;
    } else if(i === 6){
        const startX = (canvas.width + rectWidthText) / 2 - rectWidthText;

        const startY = canvas.height -100 - (i + 1) * (rectHeight);
        // Рисуем прямоугольник с текстом
        ctx.fillRect(startX, startY - (rectHeightText+50) / 2, rectWidthText, rectHeightText+50);
        ctx.strokeRect(startX, startY - (rectHeightText+50) / 2, rectWidthText, rectHeightText+50);

        ctx.fillStyle = stationsRectText.color;
        ctx.fillText(text, startX + rectWidthText / 2, startY - (rectHeightText) / 2 + (rectHeightText) / 2);
        ctx.fillStyle = stationsRect.color;
    }else{
        const startX = (canvas.width + rectWidthText) / 2 - rectWidthText;

        const startY = canvas.height -100 - (i + 1) * (rectHeight);
        // Рисуем прямоугольник с текстом
        ctx.fillRect(startX, startY - rectHeightText / 2, rectWidthText, rectHeightText);
        ctx.strokeRect(startX, startY - rectHeightText / 2, rectWidthText, rectHeightText);
        // Рисуем текст в центре прямоугольника с текстом
        ctx.fillStyle = stationsRectText.color;
        ctx.fillText(text, startX + rectWidthText / 2, startY - rectHeightText / 2 + rectHeightText / 2);
        ctx.fillStyle = stationsRect.color;

    }

});


drawLegend();
}