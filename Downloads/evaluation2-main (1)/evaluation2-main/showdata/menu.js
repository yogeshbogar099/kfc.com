async function getData(url) {

    let res = await fetch(url)
    let categories = await res.json();
    
    return categories
    
    
    }
    
    
    function append(categories, container) {
    
        categories.categories.forEach(({strCategory, strCategoryThumb,}) => {
    
            let div = document.createElement("div");
            let h3 = document.createElement("h3");
    
            h3.innerHTML = strCategory;
    
            let img = document.createElement("img");
    
            img.src =strCategoryThumb;
    
           
            div.append(img, h3);
    
            container.append(div)
    
        })
    }
    
    export {getData, append}