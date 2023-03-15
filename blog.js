let globalDataRecord = [
    {
      id: 1,
      Title: "Food 1",
      AutherName: "Nishant 1",
      Date: "01/02/2022",
      desc: "xyz",
    },
    {
      id: 2,
      Title: "Food 2",
      AutherName: "Nishant 2",
      Date: "01/02/2022",
      desc: "xyz",
    },
    {
      id: 3,
      Title: "Food 3",
      AutherName: "Nishant 3",
      Date: "01/02/2022",
      desc: "xyz",
    },
    {
      id: 4,
      Title: "Food 4",
      AutherName: "Nishant 4",
      Date: "01/02/2022",
      desc: "xyz",
    },
    {
      id: 5,
      Title: "Food 5",
      AutherName: "Nishant 5",
      Date: "01/02/2022",
      desc: "xyz",
    },
    {
      id: 6,
      Title: "Food 6",
      AutherName: "Nishant 6",
      Date: "01/02/2022",
      desc: "xyz",
    },
    {
      id: 7,
      Title: "Food 5",
      AutherName: "Nishant 5",
      Date: "01/02/2022",
      desc: "xyz",
    },
    {
      id: 8,
      Title: "Food 6",
      AutherName: "Nishant 6",
      Date: "01/02/2022",
      desc: "xyz",
    },
  ];
  let BlogData = "";
  
  const blogFunction = (data) => {
    document.getElementById("blog").style.display = "block";
    BlogData = data;
    let blogContainer = document.getElementById("blog");
    document.getElementById("product").style.display = "none";
    blogContainer.innerHTML = `<div class="header-blog">
    <h2>${globalDataRecord[data-1].Title}</h2>
  </div>
  
  <div class="row">
    <div class="leftcolumn">
        <div class="card">
            <h2>Auther : ${globalDataRecord[data-1].AutherName}</h2>
            <h5>Title description, ${globalDataRecord[data-1].Date}</h5>
            <p>${globalDataRecord[data-1].desc}</p>
            <div class="fakeimg" style="height:200px;">Image</div>
        </div>
    </div>
  </div>`;
  };
  
  let productContainer = document.getElementById("product");
  if (productContainer !== null) {
    globalDataRecord.forEach((item) => {
      let singleProduct = `
            <article>
            <img src="https://picsum.photos/70">
            <h2>${item.Title}</h2>
            <p>${item.AutherName}</p>
            <p>${item.Date}</p>
            <button onclick="blogFunction(${item.id})">Read More</button>
        </article>`;
  
      productContainer.innerHTML += singleProduct;
    });
  }
  
  const home = ()=>{
      document.getElementById("product").style.display = "flex";
      document.getElementById("blog").style.display = "none";
  }
  