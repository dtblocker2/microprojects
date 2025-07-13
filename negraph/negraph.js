// assgining some constant and DOM element of webpage
const colorInput = document.getElementById("colorRangeSlider");
const ctx = document.getElementById("myChart");
let z = 0;

// linespaces
let xLinespace = [];
let yLinespace = [];

for (let i = 0; i <= 100; i++) {
  xLinespace.push(i);
  yLinespace.push(i**2/100);
}

const mixedChart = new Chart(ctx, {
  data: {
    datasets: [
      {
        type: "scatter",
        backgroundColor: 'rgba(255, 99, 132, 1)', // point fill color
        borderColor: 'rgba(255, 99, 132, 1)', 
        label: "Line Dataset",
        data: [
          {
            x: z,
            y: z**2/100,
          },
        ],
      },
      {
        type: "line",
        label: "Bar Dataset",
        data: yLinespace,
        pointStyle: false,
    },
],
labels: xLinespace,
},
  options: {
    scales: {
        x: {
            display: false
        },
      y: {
        beginAtZero: true,
        title: {
            display: true, // this line is needed to show the y-axis title
            text: '% People will Tolerate'
        }
      },
    },
    animations: false,
    plugins: {
      legend: {
          display: false
      }
    }
  },
});

colorInput.addEventListener("input", () => {
  z = colorInput.value;
  mixedChart.data.datasets[0].data[0] = {
    x: z,
    y: z**2/100,
  };
  mixedChart.update();
});

/* Notes:
1. create line space array to create axes element to seem tohave element i in x space and we can get y element by applying function f(i) on i ie in thi case x = i and y is i+1 to get y = x+1

2. 
*/
