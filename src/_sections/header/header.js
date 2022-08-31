import { CountUp } from 'countup.js';

const countUpController = (() => {
    window.onload = function () {
        displayController.resize()
        const firstChart = new CountUp('chart__number--first', 89.74, {startVal: 50, decimalPlaces: 2, duration: 1, suffix: '%'});
        const secondChart = new CountUp('chart__number--second', 1.5, {decimalPlaces: 1, prefix: '+', duration: 2, suffix: '%'});
        const thirdChart = new CountUp('chart__number--third', 88.24, {startVal: 50, decimalPlaces: 2, duration: 1, suffix: '%'});
        firstChart.start();
        secondChart.start();
        thirdChart.start();
    }
})()

const displayController = (() => {
    window.onresize = function () {
        resize();
    }
    
    const resize = () => {
        const chart = document.querySelector('.chart__item');
        const firstChart = document.querySelector('#chart__number--first')
        const secondChart = document.querySelector('#chart__number--second')
        const thirdChart = document.querySelector('#chart__number--third')
        let width = chart.clientWidth;
        firstChart.setAttribute('style',`font-size: ${width / 6}px; padding: ${width / 13}px;`)
        secondChart.setAttribute('style',`font-size: ${width / 11}px; padding: ${width / 18}px;`)
        thirdChart.setAttribute('style',`font-size: ${width / 11}px; padding: ${width / 18}px;`)
    }

    return {resize}
})()